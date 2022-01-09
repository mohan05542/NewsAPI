$(function () {
    $('#header',).load('header.html');
});

$(function(){
  $('#footer',).load('footer.html');
});

$(function(){
    $('#search',).load('search.html');
});

// Latest news api use here form newsapi.io

let newsPro = document.getElementById('newsPro');

const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsdata.io/api/1/news?apikey=pub_3072f68d5e2ddefdea224a563d3b30339854&language=in,en',true);
// xhr.open('GET','https://api.publicapis.org/entries',true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload= function(){
    if(this.status === 200){
       let json = JSON.parse(this.responseText);
       let results = json.results;
    //    console.log(results);
       let newsHtml= "";
       
       results.forEach(function(element){
        //    console.log(results[news]);
           let news=`
                <div class="box">
                <div class="card_body">
                <img id="myimage" src="${element["image_url"]}" height="auto" width="100%" style="padding:10px"></img>
                    <h5 class="card_title">${element["title"]}</h5>
                    <p class="card_text">${element["description"]}</</p>
                    <p class="card_update"><small class="text_muted">Last Update ${element["pubDate"]}</small></p>
                    <p>
                    <a href="${element['link']}" class="sec_btn" target="_blank">Read More</a>
                    </p>
                </div>
                </div>`;
            newsHtml +=news;

        });
       newsPro.innerHTML = newsHtml;
    }
    else{
        console.log("Error occured")
    }
}
xhr.send()

// Latest News API End Here

// Hacking News API Start From Here




