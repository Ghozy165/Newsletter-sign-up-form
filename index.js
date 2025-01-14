document.addEventListener('DOMContentLoaded', () => {

    const formpage = document.querySelector('.sign-up');
    const successpage = document.querySelector('.success');
    let validEmail = document.getElementById('valid-email');
    const emailError = document.getElementById('email-error');
 
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.elements['email'].value;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if(!regex.test(email)) {    
            emailError.style.display = 'flex';
            return;
        }
            
        validEmail.textContent = email;
        formpage.style.display = 'none';
        successpage.style.display = 'flex';
        emailError.style.display = 'none';
        form.reset();
    });

    const dismissBtn = document.querySelector('#btn-dissmiss');
    
    dismissBtn.addEventListener('click', () => {
        successpage.style.display = 'none';
        formpage.style.display = 'flex';
    });

});

