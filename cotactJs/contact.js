document.getElementById('contactForm').onsubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_f6kvhe9', 'template_ac7i9yg', '#contactForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
var menu=false;
const menuClick=()=>{
    document.getElementById('MobileMenubtn').onclick=()=>{
        if(menu==false){
            menu=true;
            document.getElementById('MobileMenubtn').innerHTML=`<img src="./icon-pack/close.png" alt="Mobile Menu" >`;
            document.getElementById('mobileMenu').style.display='flex';
        }else{
            menu=false;
            document.getElementById('MobileMenubtn').innerHTML=`<img src="./icon-pack/menu-burger.png" alt="Mobile Menu" >`;
            document.getElementById('mobileMenu').style.display='none';
        }
    }
};
menuClick();
window.onresize=()=>{
    if(window.innerWidth >501){
        menu=false;
        document.getElementById('MobileMenubtn').innerHTML=`<img src="./icon-pack/menu-burger.png" alt="Mobile Menu" >`;
        document.getElementById('mobileMenu').style.display='none';
    }
}