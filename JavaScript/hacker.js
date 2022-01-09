$(function(){
    $('#header',).load('header.html');
});

$(function(){
    $('#footer',).load('footer.html');
});

$(function(){
	$('#search',).load('search.html');
});




let newsPros = document.getElementById('newsPros');

var url ="https://dev.to/api/articles/latest";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
     // console.log(xhr.status);
	  let json = JSON.parse(xhr.responseText);
	 // console.log(json);
      
           let newsHtml= "";
		   if(this.status === 200){
			       let json = JSON.parse(xhr.responseText);
			    
			       let newsHtml= "";
	       json.forEach(function(element){
	
	           let news=`
	                <div class="box">
	                <div class="card_body">
	                <img id="myimage" src="${element["cover_image"]}" height="auto" width="100%" style="padding:10px"></img>
	                    <h5 class="card_title">${element["title"]}</h5>
	                    <p class="card_text">${element["description"]}</</p>
	                    <p class="card_update"><small class="text_muted">Last Update ${element["edited_at"]}</small></p>
	                    <p>
	                    <a href="${element['canonical_url']}" class="sec_btn" target="_blank">Read More</a>
	                    </p>
	                </div>
	                </div>`;
	            newsHtml +=news;
	
	        });
	       newsPros.innerHTML = newsHtml;
		}
		else{
			console.log("Error find");
		}


   }};

  
xhr.send();