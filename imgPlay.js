
function play(){
var target = document.getElementsByTagName('img');
        var i=0;
        
		var cycle=setInterval(function changeImg(){
		target[0].src = "image/"+i+".jpg";
		i  +=1;
		},3000);
	
	if(i===8){
		clearInterval(cycle);
	}
}

play();

		
	

		
	

