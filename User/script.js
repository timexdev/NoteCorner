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



