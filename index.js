document.title = "Alert box"
let head = document.head;
let body = document.body;
let favi = document.createElement("link");
favi.rel = "icon"
favi.type = "icon/x-image";
favi.href = "https://cdn3.iconfinder.com/data/icons/venus-business-2/48/002_067_product_package_box_alert-512.png"
// ======= body work

body.style.backgroundImage = "url('https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp')"

let box_1 = document.querySelector("#box1");
let boxBtn = document.querySelector("#btnBox");
// console.log(boxBtn);
let box_2 = document.querySelector("#box2");
let closee = document.querySelector("#close")


boxBtn.addEventListener("click", function(){
    if (box_1.style.visibility = "hidden"){
        box_2.style.visibility = "visible"
    } else {
        box_2.style.visibility = "hidden"
    }
});

closee.addEventListener("click",function close(){
    if (box_2.style.visibility = "visible"){
        box_1.style.visibility = "hidden"
    } else {
        box_2.style.visibility = "visible"
    }
}
);

// function addREm (){
//     box_1.classList.toggle("visible")
// }
// function rm(){
//     box_2.classList.toggle("visible")
// }

head.appendChild(favi)