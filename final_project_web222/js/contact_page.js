window.onload = function() {
 
let form=document.querySelector('#formID');
form.onsubmit=function(event){
    
    if(!form.checkValidity() || !(validatename())){
        event.preventDefault();
    }
}    

function radioCheck(){
    let radio=form.querySelector('#radiooption3');
    radio.addEventListener('click', clickRadio);
    let order=form.querySelector('#ordernumber');
    function clickRadio() {
        order.type="text";
    }

    let other2=form.querySelector('#radiooption2');
    let other1=form.querySelector('#radiooption1');
    other1.addEventListener('click',otherRadio);
    other2.addEventListener('click',otherRadio);
    function otherRadio(){
        order.type="hidden";
        order.value="";
    }

}
radioCheck();

function validatename() {
    var allAlpha = true;
    var elem = document.querySelector('#username');
    console.log(elem.value);
    var inputValue = elem.value.trim();
    if (inputValue.length == 0) {      /* check the length */
        alert("No input! Please enter a meaningful name with all Alphabet letter.\n");
        return false;
    }  
         
    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) {
            // check all character are letters
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }
    }  // for
       
    if (!allAlpha){
        alert("Name : Please enter a meaningful name with all alphabet letters.");
        elem.focus();
        return false;
    } /* else */
    return true;
} 













}