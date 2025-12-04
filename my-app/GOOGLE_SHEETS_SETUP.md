# Google Sheets Setup Instructions

Follow these steps to store all form submissions in Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form Submissions"
4. In the first row (Row 1), add these headers:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
// Handle GET requests (more reliable for web apps)
function doGet(e) {
  return handleRequest(e);
}

// Handle POST requests
function doPost(e) {
  return handleRequest(e);
}

// Main function to handle both GET and POST
function handleRequest(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Safely get parameters - handle both GET and POST, and handle undefined e
    let name = '';
    let email = '';
    let message = '';
    
    if (e && e.parameter) {
      name = e.parameter.name || '';
      email = e.parameter.email || '';
      message = e.parameter.message || '';
    } else if (e && e.postData && e.postData.contents) {
      // Handle POST with JSON body
      try {
        const data = JSON.parse(e.postData.contents);
        name = data.name || '';
        email = data.email || '';
        message = data.message || '';
      } catch (parseError) {
        Logger.log('Parse error: ' + parseError.toString());
      }
    }
    
    // Only save if we have at least a name or email
    if (name || email) {
      const timestamp = new Date();
      // Add row to sheet: Timestamp, Name, Email, Message
      sheet.appendRow([timestamp, name, email, message]);
      
      Logger.log('Data saved: ' + name + ', ' + email);
    } else {
      Logger.log('No data received in request');
    }
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    Logger.log('Error details: ' + JSON.stringify(error));
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) and name your project (e.g., "Portfolio Form Handler")

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment** (or **Manage deployments** if you already have one)
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Set these settings:
   - **Description**: Portfolio Contact Form
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (IMPORTANT: Must be "Anyone", not "Only myself")
4. Click **Deploy**
5. **Copy the Web App URL** - it will look like:
   `https://script.google.com/macros/s/AKfycby.../exec`
6. Click **Authorize access** and allow all permissions
7. Click **Done**

### ⚠️ IMPORTANT: If you get 401 errors, redeploy!

If you're getting 401 errors:
1. Go to **Deploy** → **Manage deployments**
2. Click the **pencil icon** (✏️) to edit
3. Click **Deploy** again (this creates a new version)
4. Make sure "Who has access" is set to **"Anyone"**
5. Copy the NEW URL and update it in your React code

## Step 4: Update Your React Code

1. Open `my-app/src/components/Contact.js`
2. Find the line: `const googleSheetsUrl = 'YOUR_GOOGLE_SCRIPT_URL';`
3. Replace `YOUR_GOOGLE_SCRIPT_URL` with your Web App URL from Step 3

## Step 5: Test It!

1. Submit a test form on your portfolio
2. Check your Google Sheet - you should see a new row with the submission data
3. Check your email - you should receive the email notification

## Benefits

✅ All submissions stored in Google Sheets  
✅ Easy to view, sort, and filter submissions  
✅ Can export to CSV/Excel  
✅ Can set up email notifications in Sheets  
✅ Free and unlimited storage  

## Troubleshooting

- **"Script URL not found"**: Make sure you deployed as Web App and copied the correct URL
- **"Permission denied"**: Make sure "Who has access" is set to "Anyone"
- **No data appearing**: Check the Apps Script execution log (View → Execution log)

