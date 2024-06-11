

document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var cpasswordInput = document.getElementById('cpassword');

    passwordInput.addEventListener('input', validatepasswordLabelContent);
    cpasswordInput.addEventListener('input', validatecpasswordLabelContent);
});

// Preenchimento da Label do telefone


function validatetelefoneLabelContent() {
    var label = document.getElementById('telefone');
    var content = label.value;
    var telefonemessageDiv = document.getElementById('telefonemessageDiv');
    var eNumero = /^\d+$/.test(content);
    
    if (eNumero && content.length === 9) {
        telefonemessageDiv.textContent = ""; 
        telefonemessageDiv.className = "valid";
    } else {
        telefonemessageDiv.className = "invalid";
        if (!eNumero) {
            telefonemessageDiv.textContent = "O numero de telefone apenas deve conter digitos";
        } else if (content.length !== 9) {
            telefonemessageDiv.textContent = "O numero de telefone deve ter exatamente 9 digitos!";
        }
    }
}

// Preenchimento da Label do email


function validateemailreLabelContent() {
    var labelemailre = document.getElementById('emailre');
    var contentemailre = labelemailre.value;
    var emailreMessageDiv = document.getElementById('emailreMessageDiv');
    var emailretest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailrecaratesp = emailretest.test(contentemailre);

    if (emailrecaratesp) {
        emailreMessageDiv.textContent = ""; 
        emailreMessageDiv.className = "valid";
    } else {
        emailreMessageDiv.className = "invalid";
        if (!/@/.test(contentemailre)) {
            emailreMessageDiv.textContent = "O email deve conter @ ";
        } else {
            emailreMessageDiv.textContent = "Certifique-se que o email está no formato correto";
        }
    }
}

// Preenchimento da Label da Password

function validatepasswordreLabelContent() {
    var passwordreInput = document.getElementById('passwordre');
    var content = passwordreInput.value;
    var passwordremessageDiv = document.getElementById('passwordremessageDiv');

    if (content.length < 8) {
        passwordremessageDiv.textContent = "A password deve conter pelo menos 8 caracteres!";
        passwordremessageDiv.className = "invalid";
    } else {
        passwordremessageDiv.className = "valid";
        passwordremessageDiv.textContent = "";
    }
}


// Preenchimento da Label da Confirmaçao da Password

function validatecpasswordLabelContent() {
    var passwordreInput = document.getElementById('passwordre');
    var cpasswordInput = document.getElementById('cpassword');
    var cpasswordmessageDiv = document.getElementById('cpasswordmessageDiv');
    var content = passwordreInput.value; 
    var content2 = cpasswordInput.value; 

    if (content != content2){
        cpasswordmessageDiv.textContent = "Certifique-se que as passwords sao identicas!";
        cpasswordmessageDiv.className = "invalid";

    } else {
        cpasswordmessageDiv.textContent = "";
        cpasswordmessageDiv.className = "valid";
    }

}