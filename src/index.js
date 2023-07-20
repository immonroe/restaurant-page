import './style.css';

document.addEventListener('DOMContentLoaded', function () {
    // Get all tab buttons and tab content
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');
  
    // Add click event listener to each tab button
    tabLinks.forEach(tabLink => {
      tabLink.addEventListener('click', (event) => {
        // Get the ID of the clicked tab
        const tabId = event.currentTarget.dataset.tab;
  
        // Hide all tab contents
        tabContents.forEach(tabContent => {
          tabContent.style.display = 'none';
        });
  
        // Show the clicked tab content
        const selectedTab = document.getElementById(tabId);
        selectedTab.style.display = 'block';
  
        // Remove 'active' class from all tab buttons
        tabLinks.forEach(tabLink => {
          tabLink.classList.remove('active');
        });
  
        // Add 'active' class to the clicked tab button
        event.currentTarget.classList.add('active');
      });
    });
});
  