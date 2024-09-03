    // Initialize EmailJS with your user ID
    emailjs.init("U_IiOWXZm32bzsQe6"); // Replace with your EmailJS user ID

    document.addEventListener("DOMContentLoaded", function() {
        // Attach the sendEmail function to form submission
        document.getElementById("contactForm").addEventListener("submit", sendEmail);
    });

    function sendEmail(event) {
        event.preventDefault();

        // Retrieve form values
        const userName = document.getElementById("userName").value;
        const userEmail = document.getElementById("userEmail").value;
        const userMessage = document.getElementById("userMessage").value;

        // Set up template parameters including the recipient email
        const templateParams = {
            userName: userName,
            userEmail: userEmail,
            userMessage: userMessage,
            userSubject: "New Message!",
            toEmail: "pyanz.jheo123@gmail.com" // Predefined recipient email
        };

        // Send the email using EmailJS
        emailjs.send("service_jiq819p","template_0kq3p7y", templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out to us!',
                    showConfirmButton: false,
                    timer: 2000
                });
                // Reset form fields
                document.getElementById("contactForm").reset();
            }, function(error) {
                console.log('FAILED...', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong, and we couldn\'t send your message.',
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }
