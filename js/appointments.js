        document.addEventListener("DOMContentLoaded", function () {

        // Get the form element
        const appointmentForm = document.querySelector("form");

        // Get the date and time input elements
        const dateInput = document.getElementById("date");
        const timeInput = document.getElementById("time");

        // Disable past dates
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute("min", today);

        // Form submit event listener
        appointmentForm.addEventListener("submit", function (event) {

            // Get form field values
            const doctor = document.getElementById("doctor").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const reason = document.getElementById("reason").value;
            const contact = document.getElementById("contact").value;

            // Validate fields (basic check to ensure no field is empty)
            if (!doctor || !date || !time || !reason || !contact) {
                alert("Please fill out all fields before scheduling the appointment.");
                event.preventDefault(); // Prevent form submission
                return;
            }

            // Validate date (ensure the selected date is not in the past)
            const currentDate = new Date();
            const selectedDate = new Date(date + ' ' + time);
            if (selectedDate < currentDate) {
                alert("Please choose a valid date and time for the appointment.");
                event.preventDefault(); // Prevent form submission
                return;
            }

            // Validate contact (check if it's a valid email or phone number)
            const phoneRegex = /^[0-9]{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!phoneRegex.test(contact) && !emailRegex.test(contact)) {
                alert("Please enter a valid phone number (10 digits) or email address.");
                event.preventDefault(); // Prevent form submission
                return;
            }

            // If all validations pass, submit the form
            alert("Appointment successfully scheduled!");
        });

        // Reset form after submission (for UX improvement)
        appointmentForm.addEventListener("submit", function () {
            appointmentForm.reset();
        });
    });

