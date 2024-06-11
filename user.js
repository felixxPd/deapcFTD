
// Preenchimento da label do email
function validateemailLabelContent() {
    var labelemail = document.getElementById('email');
    var contentemail = labelemail.value;
    var emailMessageDiv = document.getElementById('emailMessageDiv');
    var emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailcaratesp = emailtest.test(contentemail);

    if (emailcaratesp) {
        emailMessageDiv.textContent = ""; 
        emailMessageDiv.className = "valid";
    } else {
        emailMessageDiv.className = "invalid";
        if (!/@/.test(contentemail)) {
            emailMessageDiv.textContent = "O email deve conter @ ";
        } else {
            emailMessageDiv.textContent = "Certifique-se que o email está no formato correto";
        }
    }
}

// Preenchimento da Label da Password

function validatepasswordLabelContent() {
    var passwordInput = document.getElementById('password');
    var content = passwordInput.value;
    var passwordmessageDiv = document.getElementById('passwordmessageDiv');

    if (content.length < 8) {
        passwordmessageDiv.textContent = "A password deve conter pelo menos 8 caracteres!";
        passwordmessageDiv.className = "invalid";
    } else {
        passwordmessageDiv.className = "valid";
        passwordmessageDiv.textContent = "";
    }
}


