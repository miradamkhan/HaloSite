# Connect Waitlist Form to Google Sheets

Follow these steps to connect your Halo waitlist form to your [Halo Email List](https://docs.google.com/spreadsheets/d/1z9IrjqZ4zQviKPQsU4dz7vf4oAj2jGOwd5qmGSCZL90/edit?usp=sharing) sheet.

## Step 1: Add the Script to Your Google Sheet

1. Open your [Halo Email List](https://docs.google.com/spreadsheets/d/1z9IrjqZ4zQviKPQsU4dz7vf4oAj2jGOwd5qmGSCZL90/edit?usp=sharing) spreadsheet
2. Go to **Extensions** → **Apps Script**
3. Delete any existing code in the editor
4. Paste the code from `Code.gs` (in this folder) into the editor
5. Click **Save** (disk icon) and name your project (e.g., "Halo Waitlist")

## Step 2: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description:** "Halo Waitlist" (optional)
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone (so your website visitors can submit)
4. Click **Deploy**
5. Authorize the script when prompted (click through the permission flow)
6. **Copy the Web app URL** — it will look like:
   `https://script.google.com/macros/s/AKfycbx.../exec`

## Step 3: Add the URL to Your Website

1. Open `script.js` in your HaloSite folder
2. Find the line: `const SCRIPT_URL = 'PASTE_YOUR_SCRIPT_URL_HERE';`
3. Replace `'PASTE_YOUR_SCRIPT_URL_HERE'` with your copied URL (keep the quotes)
4. Save the file

## Done!

When someone enters their email and clicks "Join Waitlist", it will automatically be added to your Google Sheet with the date in Column A and email in Column B.

---

**Note:** The sheet must have headers in Row 1 (Date, Email). New entries will be appended starting from Row 2.
