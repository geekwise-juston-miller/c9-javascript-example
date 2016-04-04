var html_element;

var input_box;

var input_box = document.createElement('input'){

        input_box.textContent = enter a number;
        
};

      


var make_element = function(element_name){
        var element = document.createElement(element_name);
        element.textContent = element_name;
        document.body.appendChild(element);
        
        
        html_element = element;
        
};



document.addEventListener('DOMContentLoaded', function(event) {
    
    make_element('ul');
    make_element('li');
    
    document.body.appendChild(input_box);
    input_box.textContent = enter a number;  
});






