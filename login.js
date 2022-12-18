



function sigup_checkbox1(){
  var Info = JSON.parse(localStorage.getItem("user_info"));
  let email =   document.getElementById("user_email").value;
  let password = document.getElementById("user_password").value;
 var detail = Info[0];
 
 if(email === detail.email && password === detail.password){
  
 
  swap_Info()

 
 }
 else{
  swap_Info()

  // alert("Invalid Value")
 }

}


document.getElementById("sigup_checkbox1").addEventListener("click",sigup_checkbox1)

function swap_Info(){
  var display_box =  document.getElementById("below");

  var box= document.getElementById("sign_in");
  
  box.style.opacity = 1;
  display_box.innerHTML = null;
 
 var para = document.createElement("p");
 para.setAttribute("id","para")
 para.style.marginTop ="0.8vw";
 
 para.style.paddingLeft = "0.8vw";
 para.style.width = "25vw";
 para.style.fontSize = "0.8vw";

 
 para.innerText = "Not your device? Selecting this checkbox reduces the amount of time you are signed in here."
 display_box.append(para);


 
}

document.getElementById("sign_in").addEventListener("click",showMe);
function showMe(){
  alert("Login Successfully");
  window.location.href = "../index.html"
}


document.getElementById("eye_icon").addEventListener("click",eye_icon)
function eye_icon(){
  var pass = document.getElementById("user_password");

  if(pass.type === "password"){
      pass.type = "text";
      console.log(1)

  }
  else{
      pass.type = "Password"
  }
}

document.getElementById("signup_head_logo").addEventListener("click",Index);

function Index(){
window.location.href = "index.html";

}


document.getElementById("signup_head_left_arrow").addEventListener("click",back_go);

function back_go(){
  window.location.href = "./signup.html"
}




document.getElementById("create").addEventListener("click",JumpBack);

function JumpBack(){
  window.location.href = "./signup.html";

}