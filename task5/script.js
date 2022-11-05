document.addEventListener('keyup', function(){
    let a = document.querySelector('.tx').value;
    document.querySelector("#duplicateField").textContent = a;
});
document.querySelector("#submit").onclick = function(event){
    event.preventDefault(); 
    let a = document.querySelector('.tx').value;
    console.log(a);
    document.querySelector("#duplicateField").textContent = '';
    document.querySelector('.tx').value = '';
   }
