

//Sign up 
const signupForm = document.querySelector('#signUp');



//SIGN UP
signupForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const username = signupForm['userName'].value;
    const email = signupForm['userMail'].value;
    const password = signupForm['password'].value;
    const passTrue = signupForm['passwordTrue'].value;

    if (password == passTrue){
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            const modal = document.querySelector('#loginModal')
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        })
    } else {
        alert("Las contraseñas no coinciden");
    }

})

//LOG OUT
const logOut = document.querySelector('#logout');

logOut.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then( () => {
        alert("Has abandonado tu cuenta");
    });
});

//SIGN IN

const signIn = document.querySelector('#signIn');
signIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signIn['signEmail'].value;
    const password = signIn['signPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then( cred => {
        console.log(cred.user);
        const modal = document.querySelector('#signInModal')
        M.Modal.getInstance(modal).close();
        signIn.reset();
    
    } )
})