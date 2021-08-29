let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
     h1.style.color = "whitesmoke";
     h1.style.marginLeft = "100px";
});

let h2 = document.querySelector("h2");
h2.addEventListener("mouseout", () => {
     h2.style.backgroundColor = "gold";
     h2.style.color = "white";
});
let p = document.querySelector("p");
p.addEventListener("mouseover", () => {
     p.style.backgroundColor = "orange";
     p.style.color = "white";
});
let bodyColor = document.querySelector("body");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
     bodyColor.style.backgroundColor = "red";
     alert("Damn you! How dare you change the color");
});
