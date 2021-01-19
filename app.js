const btn = document.getElementById('btn');

btn.addEventListener("click", myFunction);
var oldvalue = 0, i = 1;
function myFunction(){
    var value = document.getElementById('value').value;
    value = parseInt(value) + parseInt(oldvalue);
    for ( ;i<= value; i++){
        var box = document.createElement('div');
        box.classList.add('boxes');
        document.getElementById('box').appendChild(box); 
        box.innerHTML = i;
        //document.getElementsByClassName('boxes').innerHTML = i; 
        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
    }
   
}