// let section_m365=document.getElementById("m365");
// let section_surface=document.getElementById("surface");
// let section_xbox=document.getElementById("xbox");
// let section_win11=document.getElementById("win11");

// function clicked(event){
//     console.log(event);
//     // setTimeout(function(section_m365){
//     //     let child=section_m365.firstElementChild;
//     //     console.log(child);
//     //     child.style.backgroundColor='blue';
//     // },3000);
// };

// section_m365.addEventListener('click',clicked);
// section_surface.addEventListener('click',clicked);
// section_xbox.addEventListener('click',clicked);
// section_win11.addEventListener('click',clicked);

let small = document.getElementById("menu_icon");
let menu = document.getElementById("display");
let hindi = document.getElementById("hindi");

small.onclick = function () {
  menu.style.visibility = "visible";
  menu.style.animation = "icon_smooth 3s ease-in-out";

  console.log("clicked");
  hindi.classList.add = "hindi";
};

hindi.onclick = () => {
  hindi.classList.remove = "hindi";
  menu.style.visibility = "hidden";
  menu.style.animation = "";
  console.log("clicked");
};

document.getElementById("icon-close").onclick = function () {
  menu.style.visibility = "hidden";
  menu.style.animation = "";
};
