// change active class on click
const tabButtons = document.querySelectorAll('.ctrl-btn');
const tabContents = document.querySelectorAll('.tab');

if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', (e) => {
            // Remove the active class from all tab buttons
            tabButtons.forEach((btn) => {
                btn.classList.remove('active');
            });

            // Add the active class to the clicked tab button
            e.currentTarget.classList.add('active');

            const tabId = e.currentTarget.dataset.id;

            // Hide all tab content
            tabContents.forEach((content) => {
                content.classList.add('hidden');
            });

            // Show the corresponding tab content based on the clicked tab button
            const targetTabContent = document.getElementById(tabId);
            if (targetTabContent) {
                targetTabContent.classList.remove('hidden');
            }
        });
    });
}

