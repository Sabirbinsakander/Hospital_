document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Form validation
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const reason = document.getElementById('reason').value;
        const contact = document.getElementById('contact').value;

        if (!doctor || !date || !time || !reason || !contact) {
            alert('Please fill out all fields');
            return;
        }

        // Data to be sent
        const formData = {
            doctor,
            date,
            time,
            reason,
            contact
        };

        // Simulate sending data to the server
        console.log('Scheduling appointment with data:', formData);

        // Clear form after submission
        form.reset();
        alert('Appointment scheduled successfully!');
    });
});
