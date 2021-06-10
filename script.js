document.onkeydown=function(e){
    console.log("Key Code is",e.keyCode);
        if(e.keyCode==38){
            dino=document.querySelector('.dino');
            dino.classList.add('animateDino');
            setTimeout(()=>{
                dino.classList.remove('animateDino');
            },700);
        }
}



setInterval(()=>{
    dino=document.querySelector('.dino')
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=window.getComputedStyle(dino,null).getPropertyValue('left');
    dy=window.getComputedStyle(dino,null).getPropertyValue('top');


    ox=window.getComputedStyle(obstacle,null).getPropertyValue('left');
    oy=window.getComputedStyle(obstacle,null).getPropertyValue('top');

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
},100);