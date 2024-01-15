let colors = []

function loadcolors(){
$.ajax({
	url: "index.json",
	success: function(response){
		for(let i = 0 ; i<response.length ; i++ ){
			for(let j = 0 ; j<response.length ; j++){
       colors.push(response[i])
	   if(i === 0){
	   $("#boxs").append(`
	       <div class="color-box" style="background-color: ${response[i].colors[j]};">${response[i].colors[j]}</div>
	    
	   `);}
	   else if(i === 1){
		$("#boxs1").append(`
	       <div class="color-box" style="background-color: ${response[i].colors[j]};">${response[i].colors[j]}</div>
	    
	   `);}
	   else if(i === 2){
		$("#boxs2").append(`
	       <div class="color-box" style="background-color: ${response[i].colors[j]};">${response[i].colors[j]}</div>
	    
	   `);}
	   else if(i === 3){
		$("#boxs3").append(`
	   <div class="color-box" style="background-color: ${response[i].colors[j]};">${response[i].colors[j]}</div>
       `);}
		}}
	},
})
}
loadcolors();
// let arr = []
// function AddToList(e){
// 	arr.push(e)
// //لحفظ معلومات المستخدم في المتصفح و تبقى المعلومات حتى بعد التحديث
// localStorage.setItem("user age" , JSON.stringify(arr));
// let items = JSON.parse(localStorage.getItem('user age'));
// $('#counter').html(items.length)
// }
// function getlist(){
// 	let blacklist = []
// 	let items = JSON.parse(localStorage.getItem('user age'));
//      for(let i = 0 ; i<items.length ; i++){
//           blacklist.push(user.find((user)=> user.age == items[i]));
// 	 }
// 	 showlist(blacklist)
// }
// function showlist(ab){
// 	for(let i = 0 ; i<ab.length ; i++){    
// 	  $("#list").append(`
		 

// 	  <div class="col-md-4 mt-3">
		  
// 	  <div class="card">
	  
// 		<div class="card-header"><p>Name:</p>${ab[i]}</div>
// 		<div class="card-body"><p>City:</p>${ab[i]}</div>
// 		<div class="card-footer"><span class="badge badge-secondary">${ab[i]} old year</span> 
// 		</div>
		
// 	  </div>
// 	  </div>
// 				`);
// 			  }
  

// }
// //success