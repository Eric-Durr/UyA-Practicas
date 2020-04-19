

//Sign up 
const signupForm = document.querySelector('#signUp');

let auth = firebase.auth();

signupForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const username = signupForm['userName'].value;
    const email = signupForm['userMail'].value;
    const password = signupForm['password'].value;
    const passTrue = signupForm['passwordTrue'].value;

    console.log(username, email, password, passTrue);
})