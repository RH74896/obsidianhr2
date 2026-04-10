function openImg(src){
  const fs=document.getElementById("fs");
  fs.style.display="flex";
  fs.querySelector("img").src=src;
}
function closeImg(){
  document.getElementById("fs").style.display="none";
}