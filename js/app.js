var check=document.querySelector(".check");
var check2=document.querySelector(".check2");

check.addEventListener('click',idioma);
check2.addEventListener('click',idioma2);

function idioma(){
   let id=check.checked;
  if(check==true){
    
   }
   else{
    window.location.replace('ingles/index.html');
}
}
function idioma2(){
   let id=check2.checked;
  if(check2==true){
    
   }
   else{
    window.location.replace('../index.html');
}
}