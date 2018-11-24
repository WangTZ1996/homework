    var first = document.getElementsByClassName('first');
    var second = document.getElementsByClassName('second');
    var ul1 = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var img = document.getElementsByTagName('img');
    var SD = document.getElementById('SD');
    

window.onload = function (){ 
 //    var second = document.getElementsByClassName('second');
 //    var ul1 = document.createElement('ul');
	// var li1 = document.createElement('li');
	// var li2 = document.createElement('li');
	// var li3 = document.createElement('li');
	// var img = document.getElementsByTagName('img');
	// var SD = document.getElementById('SD');
 //    var outer = document.getElementById('out');


    // function changeSD1(){
    // 	img[0].src="image/1.jpg";
    // }
    // function changeDB1(){
    // 	img[0].src="image/4.jpg"
    // }
    // function changeDC1(){
    // 	img[0].src="image/7.jpg"
    // }
    // function changeEVA1(){
    // 	img[0].src="image/10.jpg"
    // }
    // function changeOP1(){
    // 	img[0].src="image/13.jpg"
    // }

    function changeImg(i){
        img[0].src="image/"+i+".jpg"
    }

    function showMenu(){
        li1.innerHTML = '流川枫';
        li2.innerHTML = '樱木花道';
        li3.innerHTML = '三井寿';
        ul1.appendChild(li1);
        ul1.appendChild(li2);
        ul1.appendChild(li3);
        second[0].appendChild(ul1);
    }

    function hideMenu(){
        second[0].removeChild(ul1);
    }

    var SlimDunk = document.getElementById('SD');
    SlimDunk.addEventListener('click',function (){changeImg(20)},false);

    var DroganBall = document.getElementById('DB');
    DroganBall.addEventListener('click',function (){changeImg(21)},false);

    var DtConan = document.getElementById('DC');
    DtConan.addEventListener('click',function (){changeImg(22)},false);

    var EVA = document.getElementById('EVA');
    EVA.addEventListener('click',function (){changeImg(23)},false);

    var OnePiece = document.getElementById('OP');
    OnePiece.addEventListener('click',function (){changeImg(24)},false);

    first[0].addEventListener('mouseover',showMenu,false);  
    first[0].addEventListener('mouseout',hideMenu,false);  

};

    


   

	
