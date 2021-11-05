function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements ----------------------------------------------------------------------
const modalbg = document.querySelector("#bground1");
const modalBtn = document.querySelector("#modal-btn");
const modalBtnphone = document.querySelector("#modal-btnphone");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector("#close-modal")
const cestparti = document.querySelector("#submit")

// check ville  ----------------------------------------------------------------
let lieucoche = false 
modalbg.addEventListener("input", function (e) {
  e.preventDefault();
  if(e.target.name==="location"){
    lieucoche=e.target.checked
  }
})

// check conditions ----------------------------------------------------------------
let conditions = false 
modalbg.addEventListener("input", function (e) {
  e.preventDefault();
  if(e.target.name==="checkbox"){
    conditions=e.target.checked
  }
})

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
  const errconditions=document.querySelector("#erreur_conditions")
  
  
    
  if (!prenom.value.match(regex)) {
    errPrenom.textContent = "veuillez renseigner un prenom";
    prenom.classList.add ("form_erreur")
  }else {
    prenom.classList.add ("form_valid")
    errPrenom.textContent = "";
  }

  if (!nom.value.match(regex)) {
    errNom.textContent = "veuillez renseigner un nom";
    nom.classList.add ("form_erreur")
  }else {
    nom.classList.add ("form_valid")
    errNom.textContent = "";
  }

  if (!email.value.match(regexemail)) {
    erremail.textContent = "veuillez renseigner un email";
    email.classList.add ("form_erreur")
  }else {
    email.classList.add ("form_valid")
    erremail.textContent = "";
  }

  if (!date.value) {
    errdate.textContent = "veuillez renseigner une date";
    date.classList.add ("form_erreur")
  }else {
    date.classList.add ("form_valid")
    errdate.textContent = "";
  }

  if (!question.value) {
    errquestion.textContent = "veuillez répondre à la question ";
    question.classList.add ("form_erreur")
  }else {
    question.classList.add ("form_valid")
    errquestion.textContent = "";
  }

  if (lieucoche===false) {
    errville.textContent = "veuillez choisir une ville ";
  }else {
    errville.textContent = "";
  }

  if (conditions===false) {
    errconditions.textContent = "veuillez lire et accepter les conditions d'utilisation ";
  }else {
    errconditions.textContent = "";
  }

    
  if (nom.value && prenom.value && email.value && date.value && question.value && lieucoche && conditions ) {
    displayModalSubmit() 
        
  } 
  
})


// fermer/ouvrir le formulaire ----------------------------------------------------------------

  // launch modal event
  modalBtn.addEventListener("click",launchModal);
  closeModalBtn.addEventListener("click", closeModal);
  
  //pour version mobile 
  modalBtnphone.addEventListener("click",launchModal);
  

  // function

  function launchModal() {
  modalbg.style.display = "block";
  }

  function closeModal(){
  modalbg.style.display="none";
  }


// ----------------------------------------------------------------------------------------

// confirmation formulaire
  const modalSubmit = document.querySelector('.container-confirmation-submit');

  // confirmation 
  function displayModalSubmit() {
      modalbg.style.display = 'none';
      modalSubmit.style.display = 'block';
  }

  const thankBtn = document.querySelector("#close-btn-confirmation");

  thankBtn.addEventListener("click", closemodalconfirm);

  function closemodalconfirm() {
    modalSubmit.style.display = 'none';
    
}

// ----------------------------------------------------------------------------------------