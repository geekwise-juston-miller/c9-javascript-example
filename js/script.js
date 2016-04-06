var button;

var change_fontsize = function(){
    
    
    if (button.style.fontSize === '50px') {
        
        button.style.fontSize = '10px';
        
    } else { button.style.fontSize = '50px';
    
    }
    
    
};
    



document.addEventListener('DOMContentLoaded', function(event){
    
    
    
   button = document.createElement('button');
   
   document.body.appendChild(button);
   
   button.textContent = 'my button';
   
   button.style.backgroundColor = 'red';
   
   button.style.fontSize = '50px';
   

button.addEventListener('click', function(event){
    
    change_fontsize();
    
    
}); 

    
});







