/**
 * Halo Waitlist - Google Apps Script
 * Adds email submissions to the linked Google Sheet
 * Column A: Date (ISO format)
 * Column B: Email
 */

var CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createResponse({ success: false, error: 'No data received' });
    }
    
    const data = JSON.parse(e.postData.contents);
    const email = (data.email || '').trim();
    
    if (!email) {
      return createResponse({ success: false, error: 'Email is required' });
    }
    
    const date = new Date().toISOString();
    sheet.appendRow([date, email]);
    
    return createResponse({ success: true });
  } catch (err) {
    return createResponse({ success: false, error: err.toString() });
  }
}

// Handle CORS preflight (OPTIONS) requests from browsers
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(CORS_HEADERS);
}

function doGet() {
  return createResponse({ message: 'Halo Waitlist API is running' });
}

function createResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(CORS_HEADERS);
}
