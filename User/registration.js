// global array for user data
var userArr = [];


// FUNCTION TO GET EXISTING USERS
const getExistingUsers = () => {
    let localUser = localStorage.getItem("userData");
    if(localUser){
        userArr = JSON.parse(localUser);
    }else{
        userArr = [];
    }
    signUp();
}

// Function to get current user from local storage
const CurrentUser = localStorage.getItem('CurrentUser');
curren = JSON.parse(CurrentUser);

// FUNCTION FOR SIGN UP BUTTON
const signUp = e => {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    let existingSignUpUser = userData.length && 
        JSON.parse(localStorage.getItem('userData')).some(data => 
            data.email.toLowerCase() == email.toLowerCase()
        );

    if(!existingSignUpUser){
        userData.push({firstname, lastname, username, email, password });
        localStorage.setItem('userData', JSON.stringify(userData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created Successfully.");
        window.location.href = "signin.html"
    }
    else{
        alert("This email has already been used!!!");
    }
    e.preventDefault();
}

// FUNCTION FOR SIGN IN BUTTON
const signIn = e => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userName = document.getElementById('username').value;

    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    
    let existingUser = userData.length && 
    JSON.parse(localStorage.getItem('userData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password && data.username.toLowerCase() == userName);
    if(!existingUser){
        alert("Incorrect login details");
    }
    else{
        localStorage.setItem('CurrentUser', JSON.stringify(userName));
        window.location.href = "userpage.html";    
    }
    e.preventDefault();
}

