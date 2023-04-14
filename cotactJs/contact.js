document.getElementById('contactForm').onsubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_f6kvhe9', 'template_ac7i9yg', '#contactForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}