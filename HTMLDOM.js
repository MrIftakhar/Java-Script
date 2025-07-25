// let Id1 = document.getElementById("Id1");
// Id1.innerHTML = "okkk"

// let Course1 = document.getElementsByClassName("Cse")[0];
// Course1.innerHTML = "byyyy"

// let Head = document.getElementsByName("Heading")[0];
// Head.innerHTML = "Heading 4"

// let H1 = document.getElementsByTagName("h1")[0];
// H1.innerHTML = "time"

// document.querySelector("h1");

// document.querySelectorAll("h1");


// function ClickHere(){
//     document.getElementById("Id1").innerHTML = Date()
// }


// let pNote= document.querySelector(".pNote");
// console.log(pNote.parentNode)

// let ParentDiv = document.querySelector(".ParentDiv");
// console.log(ParentDiv.firstElementChild);
// console.log(ParentDiv.lastElementChild);
// console.log(ParentDiv.children);

// let Current = document.querySelector(".Current");
// console.log(Current.nextElementSibling);
// console.log(Current.previousElementSibling);



// let div = document.createElement("div");
// div.className = "MyStoryBook";
// div.id = "MyStory";
// div.innerHTML = "<p>this my story</p>";
// let text = document.createTextNode("This is a book");
// div.appendChild(text);
// let h1 = document.createElement("h1");
// h1.textContent = "h1 tag "
// div.appendChild(h1)
// document.body.appendChild(div);


// let ul = document.createElement("ul");
// ul.id = "menu";

// let li1 = document.createElement("li");
// li1.textContent = "Home";
// ul.appendChild(li1);

// let li2 = document.createElement("li");
// li2.textContent = "About";
// ul.appendChild(li2);

// let li3 = document.createElement("li");
// li3.textContent = "Contact";
// ul.appendChild(li3);

// document.body.appendChild(ul);

// let menu = document.querySelector("#menu");
// function CreateMenu(name){
//     let li = document.createElement("li");
//     li.textContent = name;
//     return li;
// }
// menu.appendChild(CreateMenu("MD"));
// menu.appendChild(CreateMenu("Iftakhar"));
// menu.appendChild(CreateMenu("Islam"));



// let note = document.getElementById("note");
// console.log(note.textContent);

// let menu = document.querySelector("#menu");
// console.log(menu.innerHTML);



// let menu = document.querySelector("#menu");
// let p = document.createElement("p");
// p.textContent = "I am a king"
// menu.appendChild(p);

// let menu = document.querySelector("#menu");
// menu.innerHTML = "<p>I am a king </P>";


// let menu = document.querySelector("#menu");
// let lang = ['python','javascript','php','laravel'];
// let fragment = document.createDocumentFragment();

// lang.forEach((language)=>{
//     let li = document.createElement("li");
//     li.textContent = language;
//     fragment.appendChild(li);
// })
// menu.appendChild(fragment);


// let menu = document.querySelector("#menu");

// let li = document.createElement("li");
// li.textContent = "Home";
// menu.insertBefore(li,menu.firstElementChild);


// let app = document.querySelector("#app");

// let names = ["ami", "tumi", "tomra"];

// let DOM = names.map((names)=>{
//     let li =document.createElement("li");
//     li.textContent = names;
//     return li;
// })
// // app.append(...DOM);
// app.prepend(...DOM);


// let menu = document.querySelector("#menu");

// menu.insertAdjacentHTML("beforebegin", "<h2>before</h2>");
// menu.insertAdjacentHTML("afterbegin", "<h2>after</h2>");
// menu.insertAdjacentHTML("afterend", "<h2>end</h2>");
// menu.insertAdjacentHTML("beforeend", "<h2>before end</h2>")

// let menu = document.querySelector("#menu");
// let li = document.createElement("li");
// li.textContent = "Home";

// menu.replaceChild(li, menu.firstElementChild);
// menu.removeChild(menu.lastElementChild);

// let cloneNode = menu.cloneNode(true);
// cloneNode.id = "CloneId"
// document.body.appendChild(cloneNode);



// let btn = document.querySelector("#btn");
// let div = document.querySelector("div");
// div.id = "menu"

// if(btn){
//     btn.setAttribute("name", "Ifty");
// }

//  if(btn){
//      console.log(btn.getAttribute("class"));
// }

// let RemoveButton = btn.removeAttribute("target")
// console.log();


// console.log(btn.hasAttribute("class"));


// let menu = document.querySelector("#menu");
// menu.style.backgroundColor = "yellow"
// menu.style.color = "red"
// menu.style.width = "40%"
// menu.style.height = "20%"


// let menu = document.querySelector("#menu");
// let style = getComputedStyle(menu);

// console.log(style.width);
// console.log(style.height);
// console.log(style.fontSize);

// let p = document.querySelector("p");
// console.log(p.className);

// let menu =document.querySelector("#menu");
// menu.classList.add("Ifty", "Islam");

// menu.classList.remove("Islam");
// menu.classList.replace("Ifty", "Info");

// let menu = document.querySelector("div");
// let width = menu.clientWidth;
// let height = menu.clientHeight;
// console.log(width,height);


// function Clicked(){
//     alert("Button was Clicked")
// }


// let btn = document.querySelector("#Clicked");
// btn.onclick = function(){
//     alert("0 Level Handler");
// };    //0 Level Handler


// let TwoLevel = document.querySelector("#TwoLevel");
// TwoLevel.addEventListener("click", function(){
//     alert("2 Level Handler");
// });    //2 Level Handler


// let track = document.querySelector("#track");

// function mouseEvent(e){
//     console.log(e.type)
// }
// track.addEventListener("mousedown", mouseEvent);
// track.addEventListener("mouseup", mouseEvent);
// track.addEventListener("click", mouseEvent);
// track.addEventListener("dbclick", mouseEvent)
// track.addEventListener("mouseover", mouseEvent);
// track.addEventListener("mouseout", mouseEvent);
// track.addEventListener("mouseenter", mouseEvent);
// track.addEventListener("mouseleave", mouseEvent);
// track.addEventListener("mousemove", mouseEvent);


// let message = document.querySelector("#message");
// function keyEvent(e){
//     console.log(e.type, e.key)
// }
// message.addEventListener("keyup", keyEvent);
// message.addEventListener("keydown", keyEvent);
// message.addEventListener("keypress", keyEvent);


// window.onscroll = ()=>{
//     alert("window is scrolled");
//     console.log("scroll");
// }