const btn = document.getElementsByClassName("modeBtn")[0];
const body=document.body;
const footer=document.getElementsByTagName("footer")[0];
const header=document.getElementsByTagName("header")[0];
const popy=document.getElementsByClassName("ul")[0];
const as=document.getElementsByTagName("a");
btn.addEventListener("click",()=>{
    btn.classList.toggle("dark_mode");
    body.classList.toggle("dark_body");
    footer.classList.toggle("dark");
    header.classList.toggle("dark");
    popy.classList.toggle("dark");
    for(i=0;i<as.length;i++){
        as[i].classList.toggle("white");
    }
    const btnMode = btn.textContent;
    if(btnMode=="D"){
        btn.textContent="L";
    }else{
        btn.textContent="D";
    }
});

/*changing hmburger menu*/
const ham=document.querySelector(".hamburger");
const ul=document.querySelector(".ul");
ham.addEventListener("click",()=>{
    ham.classList.toggle("change");
    ul.classList.toggle("listOnClick");
  });