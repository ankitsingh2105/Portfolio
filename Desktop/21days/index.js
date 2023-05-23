
let align = document.querySelector(".align");
for (let index = 0; index < 21; index++) {
    align.innerHTML += `<div class="box" id="box-${index+1}" >${index + 1}</div>`;
}  

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    let objectArray = [];
    box.addEventListener("click", () => {
        box.style.background = "greenyellow";
        let checking = JSON.parse(localStorage.getItem("objectColor"));
        if(checking!==null){
            checking.forEach(element => 
                 {
                objectArray.push(element);
            });
        }
        objectArray.push({
            "color": "greenyellow",
            "id": box.innerHTML,
        });
        localStorage.setItem("objectColor", JSON.stringify(objectArray));
    });
    box.addEventListener("dblclick", () => {
        box.style.background = "red";
        let checking = JSON.parse(localStorage.getItem("objectColor"));
        if(checking!==null){
            checking.forEach(element => {
                objectArray.push(element);
            });
        }
        objectArray.push({
            "color": "red",
            "id": box.innerHTML,
        });
        localStorage.setItem("objectColor", JSON.stringify(objectArray));
    });
});


let colors = localStorage.getItem("objectColor");
colors = JSON.parse(colors);
if (colors !== null) {
    colors.forEach((element , i) => {
        let newBox = document.querySelector(`#box-${element.id}`);
        newBox.style.background = `${element.color}`;
    });
}

let btn = document.querySelector("#btn");
btn.addEventListener("click" , ()=>{
    localStorage.clear();
    console.log("hu");
})