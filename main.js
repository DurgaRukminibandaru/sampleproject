// function loadjson(file,callback){
// 	var xhr= new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status===200){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }
// loadjson("data.json",function(text){
// var data = JSON.parse(text);
// console.log(data);
// basics(data.details);
// carrer(data.careerobjectives);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	career(data.careerobjectives);
})
var ch = document.querySelector(".child1");
function basics(det){
	var img =document.createElement("img");
	img.src="penguins.jpg";
	img.alt="Picture";
	ch.appendChild(img);
	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="mailto:rukku@gmail.com";
	email.textContent="rukku@gmail.com";
	ch.appendChild(email);
	var number=document.createElement("h3");
	number.textContent=det.number;
	ch.appendChild(number);
	var address=document.createElement("p");
	address.textContent=det.address;
}
var ch2 =document.querySelector(".child2");
function carrer(infodata){
	var h1=document.createElement("h2");
	h1.textContent="careerobjectives"
	ch2.appendChild(h1);
	var h2=document.createElement("p");
	h2.textContent=infodata.carobjectives;
}
function educationdetails(edu){
	var table1=document.createElement("table");
	table1.border="1";
	ch2.appendChild(table1);
	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].passout+"</td></tr>";
	}
	table1.innerHTML=tabledata
	}
