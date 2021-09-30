function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements ----------------------------------------------------------------------
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");
const thankBtn = document.querySelectorAll(".thank-btn");
const thankBg = document.querySelector(".bground-thank");
const closeModalBtn=document.querySelector("#close-modal")


// validation  ----------------------------------------------------------------
document.querySelector("#inscription").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let prenom = document.querySelector("#first");
  let nom = document.querySelector("#last");
  let email = document.querySelector("#email");
  let date = document.querySelector("#birthdate");
  let question = document.querySelector("#quantity")
  let ville = document.querySelector("#ville")

  //Regex
  const regex=/^[a-zA-ZÀ-ÖØ-öø-ÿ---_]+$/;
  const regexemail = /^\S+@\S+\.\S+$/;
  

  //Ereurs
  const errPrenom=document.querySelector("#erreur_prenom")
  const errNom=document.querySelector("#erreur_nom")
  const erremail=document.querySelector("#erreur_email")
  const errdate=document.querySelector("#erreur_date")
  const errquestion=document.querySelector("#erreur_question")
  const errville=document.querySelector("#erreur_ville")
  
  
    
  if (!prenom.value.match(regex)) {
    errPrenom.textContent = "veuillez renseigner un prenom";
    prenom.classList.add ("form_erreur")
  }else {
    prenom.style.border = 'solid #008000 0.19rem';
    errPrenom.textContent = "";
  }

  if (!nom.value.match(regex)) {
    errNom.textContent = "veuillez renseigner un nom";
    nom.style.border = 'solid #f00020 0.19rem';
  }else {
    nom.style.border = 'solid #008000 0.19rem';
    errNom.textContent = "";
  }

  if (!email.value.match(regexemail)) {
    erremail.textContent = "veuillez renseigner un email";
    email.style.border = 'solid #f00020 0.19rem';
  }else {
    email.style.border = 'solid #008000 0.19rem';
    erremail.textContent = "";
  }

  if (!date.value) {
    errdate.textContent = "veuillez renseigner une date";
    date.style.border = 'solid #f00020 0.19rem';
  }else {
    date.style.border = 'solid #008000 0.19rem';
    errdate.textContent = "";
  }

  if (!question.value) {
    errquestion.textContent = "veuillez répondre à la question ";
    question.style.border = 'solid #f00020 0.19rem';
  }else {
    question.style.border = 'solid #008000 0.19rem';
    errquestion.textContent = "";
  }


  // v ou(||) f : v
  // v et(&&) V : v
  //v et f : f
  


  if (nom.value && prenom.value && email.value && date.value && question.value ) {
    alert("Tres bien");
    nom.value=""
    
    closeModal()
  } 
  
})

// fermer le formulaire ----------------------------------------------------------------

  // launch modal event
  modalBtn.addEventListener("click",launchModal);
  closeModalBtn.addEventListener("click", closeModal)

  // function
  function launchModal() {
  modalbg.style.display = "block";
  }

  function closeModal(){
  modalbg.style.display="none";
  }


