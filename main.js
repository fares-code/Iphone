let img1=document.getElementById('1');
let img2=document.getElementById('2');
let img3=document.getElementById('3');
let img4=document.getElementById('4');
let img5=document.getElementById('5');
let main_img=document.getElementById('main_img');
img1.onclick= function(){
    main_img.src='0.png';
    document.body.style.backgroundColor='#111';
}
img2.onclick= function(){
    main_img.src='1.png';
    document.body.style.backgroundColor='rgb(99, 53, 169)';
}
img3.onclick= function(){
    main_img.src='2.png';
    document.body.style.backgroundColor='#3a2e4d';
}
img4.onclick= function(){
    main_img.src='3.png';
    document.body.style.backgroundColor='rgb(147, 172, 10)';
}
img5.onclick= function(){
    main_img.src='4.png';
    document.body.style.backgroundColor='rgb(187, 27, 27)';
}

