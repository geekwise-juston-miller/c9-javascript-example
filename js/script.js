var html_element;

var make_element = function(element_name){
        var element = document.createElement(element_name);
        element.textContent = element_name;
        document.body.appendChild(element);
        
        
        html_element = element;
        
};

var  ul;

var  li;

ul = document.createElement('ul');

li = document.createElement('li');



document.addEventListener('DOMContentLoaded',function(){
    
        make_element('ul');
        make_element('li');
    
    ul = document.createElement('ul');

    li = document.createElement('li');

    
});


var createTags = function(){
    
    
    for(var i=0; i < 5; i++){
        
        console.log(i);
    };


};


document.addEventListener('DOMContentLoaded', function(event) {
    
    console.log('dom browser loaded');
})






