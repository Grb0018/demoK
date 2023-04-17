document.getElementById('contactForm').onsubmit=(e)=>{
    if(document.getElementById('send').innerText=="Send Message"){
    e.preventDefault();
    document.getElementById('send').innerText="Please Wait .."
    emailjs.sendForm('service_f6kvhe9', 'template_ac7i9yg', '#contactForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       document.getElementById('send').innerText="Send Message"
       const canVibrate = window.navigator.vibrate;
       if(canVibrate) window.navigator.vibrate(150);
       document.getElementById('notify').style.display="flex";
       setTimeout(()=>{
        document.getElementById('notify').style.display="none";
        var allInput =document.getElementById('contactForm').querySelectorAll('input');
         for (const x of allInput) {
            x.value='';
        }
        document.getElementById('contactForm').querySelector('textarea').value='';
       },2000)
    }, function(error) {
        alert('Check Your Internet Connection');
        document.getElementById('send').innerText="Send Message"
       console.log('FAILED...', error);
    });
}
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
