var loginData = [
        {email: "abc@gmail.com", pwd: "abc@21"},
        {email: "bcd@gmail.com", pwd: "bcd@21"},
        {email: "cde@gmail.com", pwd: "cde@21"},
    ]
localStorage.setItem('user', JSON.stringify(loginData));

document.querySelector("#save-btn").addEventListener("click", function(event){
    let email=document.getElementById("email").value;

    let psw=document.getElementById("psw").value;
    // console.log(email);
    // console.log(psw);

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("user"))
    if(user_records.some((v)=>{return v.email==email && v.pwd==psw}))
    {
        // alert("Login Pass");
        let current_user=user_records.filter((v)=>{return v.email==email && v.pwd==psw})[0]
        localStorage.setItem('email',current_user.email);
        localStorage.setItem('password',current_user.pwd);
        event.preventDefault();
        window.location.href = "jobsearch.html";
    }
    else
    {
        alert('Invalid Login Id or Password');
    }          
});