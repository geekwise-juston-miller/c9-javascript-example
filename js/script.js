var http_request = new XMLHttpRequest;
http_request.open('GET','https://api.github.com', false);
http_request.send (null);

var github_data = JSON.parse(http_request.response);

http_request = new XMLHttpRequest;
http_request.open('GET',github_data.emojis_url,false);
http_request.send(null);

var github_emjois = JSON.parse(http_request.response);


document.addEventListener('DOMContentLoaded',function(event){
    for(var i in github_emjois){
    
    var emojoi_imgs = document.createElement('img');
    emojoi_imgs.setAttribute('src',github_emjois[i]);
    document.body.appendChild(emojoi_imgs);
   
};
    
    
     
    
});