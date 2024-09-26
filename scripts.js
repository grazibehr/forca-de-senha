document.addEventListener("DOMContentLoaded", function () {
 const passwordInput = document.querySelector("#passwordInput");
 
 if (passwordInput) {
  passwordInput.addEventListener("input", function () {
   const password = this.value;
   
   const strengthIndicator = document.querySelector("#password-strength-indicator");
   const strengthText = document.querySelector("#password-strength-text");
   
   const strengths = {
    0: "Muito Fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito Forte",
   };
   
   let score = 0;
   
   // Requisitos para pontuar a senha
   if (password.length >= 8) score++;
   if (/[a-z]/.test(password)) score++;
   if (/[A-Z]/.test(password)) score++;
   if (/\d/.test(password) || /[!@#$%^&*]/.test(password)) score++;
   
   // Calculo porcentagem
   const width = (score / 4) * 100;
   
   switch (score) {
    case 1:
    strengthIndicator.style.backgroundColor = "#e70b0b";
    break;
    
    case 2:
    strengthIndicator.style.backgroundColor = "#FF8B74D";
    break;
    
    case 3:
    strengthIndicator.style.backgroundColor = "#FFF176";
    break;
    
    case 4:
    strengthIndicator.style.backgroundColor = "#81C784";
    break;
    
    default:
    strengthIndicator.style.backgroundColor = "#transparent";
    break;
    
   }
   
   strengthIndicator.style.width = width + "%";
   strengthText.innerHTML = strengths[score] || "Senha muito fraca";
   
   if (password.length === 0) {
    strengthText.innerHTML = "Senha fraca";
    strengthIndicator.style.width = "0%";
   }
  });
 }
});
