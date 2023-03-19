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
}