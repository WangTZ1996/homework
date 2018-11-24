function getQuery (){
	var url = window.location.href;
	var args=[];
	var temp = url.split('?');
	var query = temp[1].split('#');
	var item= query[0].split('&');
	for(let i=0;i<19;i++){
		var arr=item[i].split('=');
		var key=decodeURIComponent(arr[0]);
	    var value=decodeURIComponent(arr[1]);

	    if(key.length){
	    	args[key] = value;
	    }		
	}	
	return args;
}
