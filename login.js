let form=document.getElementById("login")

let alldata=JSON.parse(localStorage.getItem("login-data"))

form.addEventListener("submit",function(event){
   event.preventDefault()
   let obj={
     number:form.number.value,
     password:form.pass.value,
   }

   let flag=false

   for(let i=0;i<alldata.length;i++){
       if(obj.number==alldata[i].number&&obj.password==alldata[i].password ){
           flag=true
  }

   }

   if(flag==true){
       window.location.href = "./index.html";
 }else{
alert("invalid number and password")
}

form.number.value=""
})