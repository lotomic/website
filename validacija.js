function checkForm() {
 name = document.getElementById("name").value;
 surname = document.getElementById("surname").value;
 email = document.getElementById("email").value;
 message = document.getElementById("message").value;

 if (name == "")
 {
 document.getElementById("name").select();
 document.getElementById("name").focus();
 alert("Unesite Vaše ime!");
 return false;
 }
else if (surname == "")
 {
 document.getElementById("surname").select();
 document.getElementById("surname").focus();
 alert("Unesite Vaše prezime!");
 return false;
 }
 else if (email == "")
 {
 
 document.getElementById("email").select();
 document.getElementById("email").focus();
 alert("Unesite Vaš e-mail!");
 return false;
 }
 else if (message == "")
 {
 
 document.getElementById("message").select();
 document.getElementById("message").focus();
 alert("Unesite poruku!");
 return false;
 }
 if (!validateEmail(email))
 {
 alert('Email adresa nije važeća');
 return false;
 }
 return true;
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}