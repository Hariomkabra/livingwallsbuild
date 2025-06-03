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




document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav__list');
  const rightButtons = document.querySelector('.right-buttons');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    rightButtons.classList.toggle('active');
    hamburger.textContent = navList.classList.contains('active') ? '✕' : '☰';
  });

  // Close mobile menu when clicking a nav link or dropdown link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      rightButtons.classList.remove('active');
      hamburger.textContent = '☰';
      // Close dropdown
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    });
  });

  // Dropdown toggle
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const dropdown = dropdownToggle.parentElement;
    dropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });


