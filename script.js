// Waitlist form handling - connects to Google Sheets via Apps Script
// See google-sheets-setup.md for setup instructions
const SCRIPT_URL = 'PASTE_YOUR_SCRIPT_URL_HERE';

document.getElementById('waitlistForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const button = this.querySelector('button');
  const email = emailInput.value.trim();

  if (!email) return;

  button.textContent = 'Joining...';
  button.disabled = true;

  try {
    if (SCRIPT_URL === 'PASTE_YOUR_SCRIPT_URL_HERE') {
      throw new Error('Please configure your Google Apps Script URL. See google-sheets-setup.md');
    }

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const result = await response.json();

    if (result.success) {
      button.textContent = "You're on the list!";
      button.style.background = '#22c55e';
      button.style.color = '#fff';
      this.reset();
    } else {
      throw new Error(result.error || 'Something went wrong');
    }
  } catch (err) {
    button.textContent = 'Try again';
    button.disabled = false;
    console.error('Waitlist error:', err);
    alert(err.message || 'Could not join waitlist. Please try again.');
  }
});
