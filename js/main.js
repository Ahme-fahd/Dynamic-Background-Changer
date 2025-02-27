let changeColorBtn=document.getElementById('changeColorBtn');
let lastColor=null;

document.addEventListener('DOMContentLoaded',()=>{

    let savedColor= localStorage.getItem('newColor');
    if(savedColor){
    document.body.style.background=savedColor;
    lastColor=savedColor;
    }
    
    
    
    
    });
    
    

changeColorBtn.addEventListener('click',()=>{
let randomColor;
do{
    randomColor = "#" + Math.floor(Math.random() *16777215).toString(16).padStart(6, "0");



}while(randomColor===lastColor)
document.body.style.background=randomColor;
localStorage.setItem('newColor',randomColor);
lastColor=randomColor;

});


if(resetColorBtn){
resetColorBtn.addEventListener('click',()=>{

document.body.style.background="#ffffff";
localStorage.removeItem('newColor')


})

}



