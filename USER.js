
    let form=document.getElementById("loginpage")

    let alldata= JSON.parse(localStorage.getItem("login-data")) ||[]
    
    form.addEventListener("submit",function(event){
        event.preventDefault()
        let obj={
            number:form.number.value,
            password:form.pass.value,
        }
    
        alldata.push(obj)
        console.log(alldata)
    
        localStorage.setItem("login-data",JSON.stringify(alldata))
    
        console.log(alldata)
        alert("Account Created")
    
        // form.number.value=""
    })
    