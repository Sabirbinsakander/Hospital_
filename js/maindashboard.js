document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for sidebar links
    const sidebarLinks = document.querySelectorAll('nav.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Function to fetch and update data dynamically
    const fetchData = async () => {
        try {
            // Simulating an API call
            const response = await fetch('/api/dashboard-data'); // Replace with actual API endpoint
            const data = await response.json();

            // Update the UI with new data
            document.querySelector('#overview .card:nth-child(1) p').textContent = data.totalPatients;
            document.querySelector('#overview .card:nth-child(2) p').textContent = data.upcomingAppointments;
            document.querySelector('#overview .card:nth-child(3) p').textContent = data.recentConsultations;

            // Update tables (replace with actual data structure)
            updateTable('#patients-table', data.patients);
            updateTable('#appointments-table', data.appointments);
            updateTable('#medical-records-table', data.medicalRecords);
            updateTable('#prescriptions-table', data.prescriptions);
            updateTable('#billing-table', data.billing);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to update table with new data
    const updateTable = (tableSelector, data) => {
        const tableBody = document.querySelector(`${tableSelector} tbody`);
        tableBody.innerHTML = ''; // Clear existing rows

        data.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
        });
    };

    // Example of setting up periodic updates (e.g., every 5 minutes)
    const updateInterval = 5 * 60 * 1000; // 5 minutes in milliseconds
    fetchData(); // Initial data fetch
    setInterval(fetchData, updateInterval); // Periodic updates

    // Example of a function to handle form submissions
    const handleFormSubmission = (formSelector, onSuccess) => {
        const form = document.querySelector(formSelector);
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                try {
                    // Simulating form submission
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData
                    });
                    if (response.ok) {
                        const result = await response.json();
                        console.log('Form submitted successfully:', result);
                        if (onSuccess) {
                            onSuccess();
                        }
                    } else {
                        console.error('Form submission failed:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
            });
        }
    };

    // Initialize form handling
    handleFormSubmission('#appointment-form', () => {
        alert('Appointment submitted successfully!');
    });

    // Table row highlighting for better UX
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#f0f4f8';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });
});
