var random_number = function()


var html_element;

var make_element = function(element_name){
        var element = document.createElement(element_name);
        element.textContent = random_number();
        document.body.appendChild(element);
        
        
        html_element = element;
        
}





var  ul;

var  li;

ul = document.createElement('ul');

li = document.createElement('li');



document.addEventListener('DOMContentLoaded',function(){
    
    
        document.body.appendChild(ul);
        document.body.appendChild(li);


    ul.textContent = 'my ul tag';

    li.textContent = 'my li tag';
    
});




