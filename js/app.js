var check=document.querySelector(".check");
check.addEventListener('click',idioma);
//var chek=document.getElementById(".check").addEventListener("click",idioma);
function idioma(){
    //console.log(check.checked);
   let id=check.checked;
  if(check==true){
    location.href="ingles/index.html";
    //window.location.replace('C:\Users\Admin\Desktop\idiom\Cartelera_de_cine_NTI\ingles\index.html');
   }
   else{
    location.href="../index.html";
    //window.location.replace('C:\Users\Admin\Desktop\idiom\Cartelera_de_cine_NTI\ingles\index.html');
   }
}