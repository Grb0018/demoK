document.querySelector('.thisPage').style.color='rgb(196, 39, 0)';
document.querySelector('.thisPage').style.borderBottom='0.2vw solid rgb(255, 69, 7)';
const whatsappGo = () =>{
    window.open("https://api.whatsapp.com/send?phone=918420204013&text=Hi%20we%20need%20help%20regarding%20something");
  }
window.onload=()=>{
AOS.init();
  const slider =  document.getElementById('slider');
  const dot1 =  document.getElementById('d1st');
  const dot2 =  document.getElementById('d2nd');
  const dot3 =  document.getElementById('d3rd');
  const dot4 =  document.getElementById('d4th');
  const alldot=[dot1,dot2,dot3,dot4];
  var dotClick=false;
  for (const x of alldot) {
    x.onclick=(e)=>{
        dotClick=true;
      switch (e.target) {
        case dot1:
            slideItem=1;
                slider.style.marginLeft='00vw';
                dotChange(dot1);
                setTimeout(()=>{dotClick=false;},1200)
            break;
            case dot2:
                slideItem=2;
                slider.style.marginLeft='-100vw';
                dotChange(dot2);
                setTimeout(()=>{dotClick=false;},1200)
            break;  
            case dot3:
                slideItem=3;
                slider.style.marginLeft='-200vw';
                dotChange(dot3);
                setTimeout(()=>{dotClick=false;},1200)
            break;
            case dot4:
                slideItem=4;
                slider.style.marginLeft='-300vw';
                dotChange(dot4);
                setTimeout(()=>{dotClick=false;},1200)
                
            break;   
        default:
            break;
      }
    }
  }
  function dotChange(x){
    for (let i = 0; i < alldot.length; i++) {
        const element = alldot[i];
        if(element !== x){
            element.style.backgroundColor='rgb(169, 169, 169)';
        }else{
            element.style.backgroundColor='rgb(255, 30, 0)';
        }  
    }
  }
  var slideItem=1;
  setInterval(()=>{console.log(document.querySelector('#slider:hover'))},1000)
  var slide = setInterval(()=>{
if( dotClick==false){
    switch (slideItem) {
            case 1:
            slideItem+=1;
            slider.style.marginLeft='-100vw';
            dotChange(dot2)
            break;
            case 2:
                slideItem+=1;
                slider.style.marginLeft='-200vw';
                dotChange(dot3)
            break;           
            case 3:
                slideItem+=1;
                slider.style.marginLeft='-300vw';
                dotChange(dot4)
            break; 
            case 4:
                slideItem=1;
                slider.style.marginLeft='00vw';
                dotChange(dot1)
            break;
        default:
            break;
    }
}
  },7000)
  var touchGet=false;
  var x=0;
  document.getElementById('slider').ontouchmove=(e)=>{
    if(touchGet==false){
        x = parseInt(e.touches[0].clientX);
        touchGet=true;
    }
    
    var finalx = parseInt(e.touches[0].clientX);
    document.getElementById('slider').ontouchend=(ev)=>{
        touchGet=false;
        if(finalx>x && dotClick==false){
            dotClick=true;
            switch (slideItem) {
                case 1:
                slideItem=4;
                slider.style.marginLeft='-300vw';
                dotChange(dot4)
                setTimeout(()=>{dotClick=false;},1200)
                break;
                case 2:
                    slideItem=1;
                    slider.style.marginLeft='00vw';
                    dotChange(dot1)
                    setTimeout(()=>{dotClick=false;},1200)
                break;           
                case 3:
                    slideItem=2;
                    slider.style.marginLeft='-100vw';
                    dotChange(dot2)
                    setTimeout(()=>{dotClick=false;},1200)
                break; 
                case 4:
                    slideItem=3;
                    slider.style.marginLeft='-200vw';
                    dotChange(dot3)
                    setTimeout(()=>{dotClick=false;},1200)
                break;
            default:
                break;
        }

        }else{
            dotClick=true;
            switch (slideItem) {
                
                case 1:
                    slideItem=2;
                    slider.style.marginLeft='-100vw';
                    dotChange(dot2)
                    setTimeout(()=>{dotClick=false;},1200)
                break;
                case 2:
                    slideItem=3;
                    slider.style.marginLeft='-200vw';
                    dotChange(dot3)
                    setTimeout(()=>{dotClick=false;},1200)
                break;           
                case 3:
                    slideItem=4;
                    slider.style.marginLeft='-300vw';
                    dotChange(dot4)
                    setTimeout(()=>{dotClick=false;},1200)
                break; 
                case 4:
                    slideItem=1;
                    slider.style.marginLeft='00vw';
                    dotChange(dot1)
                    setTimeout(()=>{dotClick=false;},1200)
                break;
            default:
                break;
        }
        }
    }
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

