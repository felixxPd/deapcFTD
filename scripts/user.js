// Preenchimento da label do Telefone
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