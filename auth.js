document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.getElementById('login-link');
  const loginText = document.getElementById('login-text');

  // Check if elements exist
  if (!loginLink || !loginText) {
    console.warn('Login link or text element not found in the DOM.');
    return;
  }

  // Check if user is already logged in
  const storedUser = localStorage.getItem('userName');
  if (storedUser) {
    updateHeader(storedUser);
  }

  // Update header with user name and logout button
  function updateHeader(userName) {
    loginLink.classList.remove('login-link');
    loginLink.classList.add('user-name');
    loginLink.href = '#'; // Could link to user profile
    loginText.textContent = userName;
    const logoutBtn = document.createElement('button');
    logoutBtn.classList.add('logout-btn');
    logoutBtn.textContent = 'Logout';
    loginLink.appendChild(logoutBtn);
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('userName');
      loginLink.classList.remove('user-name');
      loginLink.classList.add('login-link');
      loginLink.href = 'login.html';
      loginText.textContent = 'Login';
      logoutBtn.remove();
    });
  }
});