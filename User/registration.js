var userArr = [];



const getExistingUsers = () => {
    let localUser = localStorage.getItem("userData");
    if(localUser){
        userArr = JSON.parse(localUser);
    }else{
        userArr = [];
    }
    signUp();
}

const CurrentUser = localStorage.getItem('CurrentUser');
curren = JSON.parse(CurrentUser);

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
        // localStorage.setItem("currentuser", JSON.stringify(existingUser));
        localStorage.setItem('CurrentUser', JSON.stringify(userName));
        
        window.location.href = "userpage.html";    
    }

    e.preventDefault();
  }

//   let currentuser = JSON.parse(localStorage.getItem('currentUser'));

//   // Function to get the current user's email from local storage
// function getCurrentUser() {
//     return localStorage.getItem("currentUser");
// }

// // Function to set the current user's email in local storage
// function setCurrentUser(email) {
//     localStorage.setItem("currentUser", email);
// }

// // Function to display the current user's profile page
// function showProfilePage() {
//     // Get the current user's email
//     currentuser = getCurrentUser();
// }




  
//     // Set up user credentials
// const users = [
//     { username: "user1", password: "password1", profilePage: "profile1.html" },
//     { username: "user2", password: "password2", profilePage: "profile2.html" },
//     { username: "user3", password: "password3", profilePage: "profile3.html" }
//   ];
  
//   // Function to validate user credentials
//   function validateUser(username, password) {
//     for (let user of users) {
//       if (user.username === username && user.password === password) {
//         return user;
//       }
//     }
//     return null;
//   }
  
//   // Function to handle form submission
//   function handleFormSubmit(event) {
//     event.preventDefault();
    
//     // Get form input values
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
    
//     // Validate user credentials
//     const user = validateUser(username, password);
    
//     if (user) {
//       // Save user credentials to local storage
//       localStorage.setItem("currentUser", JSON.stringify(user));
      
//       // Redirect to user's profile page
//       window.location.href = user.profilePage;
//     } else {
//       alert("Invalid username or password. Please try again.");
//     }
//   }
  
//   // Check if user is already logged in
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
//   if (currentUser) {
//     // Redirect to user's profile page
//     window.location.href = currentUser.profilePage;
//   }
  
//   // Attach form submission event listener
//   const form = document.getElementById("login-form");
//   form.addEventListener("submit", handleFormSubmit);
  