var photo_container;

var img_urls = new Array;

var add_images = function(number_of_images){
    
    var image;
    
    for(var i=0; i< number_of_images; i++){
        img_urls.push('images/profile_photo_' + (i + 1) + '.jpg');
        image = document.createElement('img');
        image.setAttribute('src', img_urls[i]);
        image.style.width = number_of_images;
        
        document.body.appendChild(image);
        
        
        
         image.addEventListener('mouseover', function(event){
             
             this.style.transform = "rotateZ(180deg)";
             this.style.transition = '1s';
             
         });
         
         image.addEventListener('click', function(event){
             
             
              this.style.transform = "rotateZ(360deg)";
              this.style.transition = '1s';
             
            
         }); 
        
    }
};





document.addEventListener('DOMContentLoaded', function(event){
    
    add_images(68,'25%');
    
    
   
    
});







