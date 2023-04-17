const whatsappGo = () =>{
    var w=window;
    w.open("https://api.whatsapp.com/send?phone=918420204013&text=Hi%20we%20need%20help%20regarding%20something");
    setTimeout(()=>{w.close()},1000);
  }
window.onload=()=>{
document.querySelector('.thisPage').style.color='rgb(196, 39, 0)';
document.querySelector('.thisPage').style.borderBottom='0.2vw solid rgb(255, 69, 7)';
}
