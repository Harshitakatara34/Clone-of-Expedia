

document.getElementById("sigup_checkbox2").addEventListener("click",runprogram)

// function runprogram(){
//     if(user_name !==" "){
        
//     }
// }
function runprogram(){
  let user_name = document.getElementById("user_name").value;
  let user_surname = document.getElementById("user_surname").value;
  let user_email = document.getElementById("user_email").value;
  let user_password = document.getElementById("user_password").value;
let user_checkbox1 = document.getElementById("sigup_checkbox1").value;
let user_checkbox2= document.getElementById("sigup_checkbox2").value;



if(user_checkbox1 !==" "  && user_checkbox2 !==" "){

  show_continue()

}


if(user_email !== " " && user_name !== " " && user_password !==" " && user_surname !== " "){

  var arr = JSON.parse(localStorage.getItem("user_info")) || [];
  var obj = {
    name : user_name,
    surname : user_surname,
    email : user_email,
    password: user_password,

  }

  arr.push(obj);
  localStorage.setItem("user_info",JSON.stringify(arr));

}


}

 function show_continue(){
    let append = document.getElementById("sigup_continue")
  append.style.opacity = 1
  append.style.cursor = "pointer";
  append.addEventListener("click" , jump_New_page)

 }


 function jump_New_page(){
  window.location.href = "./login.html"
 }


document.getElementById("sigup_checkbox1").addEventListener("click",InfoDisplay);
function InfoDisplay(){
  var display_box =  document.getElementById("display");

 display_box.innerHTML = null;

var para = document.createElement("p");
para.setAttribute("id","para")
para.style.marginTop ="0.8vw";

para.style.paddingLeft = "0.8vw";
para.style.width = "25vw"
para.style.fontSize = "0.8vw";


para.innerText = "Not your device? Selecting this checkbox reduces the amount of time you are signed in here."
display_box.append(para);


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

