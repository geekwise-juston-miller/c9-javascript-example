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
             
             this.style.transform = 'rotateX(360deg)';
             this.style.width = '250px';
             this.style.height = '250px';
             this.style.transition = 'width 1s, height 1s, transform 1s';
         });
         
         image.addEventListener('mouseout', function(event){
             
             this.style.transform = 'rotateX(0deg)';
             this.style.width = '75px';
             this.style.height = '75px';
             this.style.transition = 'width .5s, height .5s, transform .5s';
        
        
         });
         
        //  image.addEventListener('click', function(event) {
             
        //      this.style.transform = "rotateY(180deg)";
             
             
        //  });
         
         
    }
};





document.addEventListener('DOMContentLoaded', function(event){
    
    add_images(68,'75px');
    
    
   
    
});







