document.addEventListener("DOMContentLoaded", () => {

  function openImg(src){
    const fs = document.getElementById("fs");
    fs.style.display = "flex";
    fs.querySelector("img").src = src;
  }

  function closeImg(){
    document.getElementById("fs").style.display = "none";
  }

  function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
  }

  document.querySelectorAll(".menu-links a").forEach(a=>{
    a.addEventListener("click", ()=>{
      document.getElementById("menu").classList.remove("open");
    });
  });

  // чтобы функции были доступны из HTML onclick
  window.openImg = openImg;
  window.closeImg = closeImg;
  window.toggleMenu = toggleMenu;

});