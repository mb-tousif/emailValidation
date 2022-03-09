const getValue=(id)=>{
    const emailField=document.getElementById(id).value;
    return emailField;
}
const emailValidator=()=>{
  let email = getValue("getEmail");
  const regExpForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(email);
  if (regExpForEmail.test(email)) {
    const msg = document.getElementById("text");
    msg.innerHTML = `<h3 class="text-green-600">Your email is Valid</h3>`;
  } else {
    const msg = document.getElementById("text");
    msg.innerHTML = `<h3 class="text-red-600">Opps! Please enter a valid email address.</h3>`;
  }
  // if (email.match(regExpForEmail)) {
  //   const msg = document.getElementById("text");
  //   msg.innerHTML = `<h3 class="text-green-600">Your Input is Valid</h3>`;
  // } else {
  //   const msg = document.getElementById("text");
  //   msg.innerHTML = `<h3 class="text-red-600">Input  Valid charecter! </h3>`;
  // };
  document.getElementById("getEmail").value = "";
}
