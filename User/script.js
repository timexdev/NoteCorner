const signUp = e => {
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwrd').value;

    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    let exist = userData.length && 
        JSON.parse(localStorage.getItem('userData')).some(data => 
            data.email.toLowerCase() == email.toLowerCase()
        );

    if(!exist){
        userData.push({ firstname, lastname, email, password });
        localStorage.setItem('userData', JSON.stringify(userData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created Successfully.");
        window.location.href = "signin.html"
    }
    else{
        alert("You have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwrd').value;
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let exist = userData.length && 
    JSON.parse(localStorage.getItem('userData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if(!exist){
        alert("Incorrect login details");
    }
    else{
        window.location.href = "home.html";
    }
    e.preventDefault();
}



// var userArr = [];

// function signIn(){
//     let userN = localStorage.getItem("username");
//     let userP = localStorage.getItem("password");
//     let inpU = document.getElementById('user').value;
//     let inpP = document.getElementById('pass').value;

//     if(inpU == userN && inpP == userP){
//         //check
//         window.location.assign("../home/home.html")
        

//     }
//     else{
//     document.getElementById('error').style.display='block';
//     document.getElementById('error').innerHTML = "Incorrect Information";


// }}
// // check for existing users onload of sign up page
// function getExistingUsers(){
//     let localUser = localStorage.getItem("users");
//     if(localUser){
//         userArr = JSON.parse(localUser);
//     }else{
//         userArr = [];
//     }
    
//     updateLocalStorage();

// }
// // function for sign up buttton
// function signUp(){
//     let rName = document.getElementById('userR').value;
//     let rEmail = document.getElementById('emailR').value;
//     let rPass = document.getElementById('passR').value;
//     let rPassC = document.getElementById('re-passR').value;

//     let userObj = {username:rName, email:rEmail, password:rPass, repassword:rPassC};
    

    

//     // localStorage.setItem("username", rName);
//     // localStorage.setItem("email", rEmail);
//     // localStorage.setItem("password", rPass);
//     // localStorage.setItem("re-password", rPassC);

//     // let a = localStorage.getItem("username");
//     // let b = localStorage.getItem("email");
//     // let c = localStorage.getItem("password");
//     // let d = localStorage.getItem("re-password");

//     if(rName == null || rEmail == null || rPass == null || rPassC == null){
//         document.getElementById('error').style.display='block';
//         document.getElementById('error').innerHTML = "Incorrect Information";
//     }else if(rPass != rPassC){
//         document.getElementById('error').style.display='block';
//         document.getElementById('error').innerHTML = "Password not matched";
//     }else if(rEmail == userObj){
//         document.getElementById('error').style.display='block';
//         document.getElementById('error').innerHTML = "Email has been used";
//     }
//     else{
//         userArr.unshift(userObj);
//         window.location.assign("signin.html");

//     }

//     updateLocalStorage();
// }

// function updateLocalStorage(){
    
//     localStorage.setItem ("users", JSON.stringify(userArr));
// }