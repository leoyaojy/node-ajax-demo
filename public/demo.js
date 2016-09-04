var btn = document.getElementById("btn");
var keyword = document.getElementById("keyword");
btn.addEventListener("click",ajax);
keyword.oninput = ajax;
window.onload = function(){
	keyword.focus();
}
function ajax(){
	var xhr = new XMLHttpRequest();
	var key = keyword.value;
	xhr.open("GET","search/keyword?keyword="+encodeURIComponent(key));
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4&&xhr.status==200){
			dataHandle(xhr.responseText);
		}
	}
}
function dataHandle(data) {
	var data = JSON.parse(data);
	var listUl = document.getElementById("list");
	var list=[];
	if(data.length){
		for(var i in data){
			var li = "<li>"+data[i]+"</li>";
			list.push(li);
		}
		listUl.innerHTML=list.join("");
		listUl.style.display='block';
	}else{
		listUl.innerHTML="";
		listUl.style.display='none';
	}
}
document.getElementById("list").onclick = function(e){
	keyword.value = e.target.innerHTML;
	this.style.display="none";
	keyword.focus();
}