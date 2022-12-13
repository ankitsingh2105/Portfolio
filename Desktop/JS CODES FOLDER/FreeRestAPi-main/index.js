let day = ["Monday", "Tuesday", "Wedanesday", "Thrusday", "Friday", "Saturday", "Sunday"];
let loader = document.getElementsByClassName('loader');
let section = document.getElementsByClassName('section');
async function display() {
    let info = document.querySelector(".info");
    section[0].style.display = "none";
    let p = await fetch("https://kontests.net/api/v1/codeforces");
    let e = await p.json();
    e.forEach((element, index) => {
        const { name, url, start_time, end_time, duration, status } = element
        let dateAndtime = new Date(start_time);
        let endtime = new Date(end_time);
        info.innerHTML += `<div class="card">
       <div>
           <li class="gray"><strong>Name:</strong> ${name}<br/></li>
           <a class="gray1" href="${url}"><strong style="color :red" >URL:</strong> ${url}<br/></a>
           <li class="gray"><strong>Duration   :</strong> ${(duration - (duration % 3600)) / 3600} hours ${(duration % 3600) / 60} minutes <br/></li>
           <li class="gray1" ><strong class="blue">STATUS :</strong> ${status}<br/></li>
           <li class="gray" ><strong class="blue">Start time :</strong> ${day[dateAndtime.getDay() - 1]} - ${dateAndtime.toLocaleString()}<br/></li>
           <li class="gray1"><strong class="blue">End Time   :</strong> ${day[endtime.getDay() - 1]} - ${endtime.toLocaleString()}<br/></li>
           </div>
           <div class="align" class="gray">
           <a class="remove" href="https://codeforces.com/contests" >
           <div class="register">Register</div>
           </a>
           <div></div>
           </div>
           <br/> 
           </div>`
    });
    section[0].style.display = 'block';
    loader[0].style.display = 'none';
}

async function display1() {
    let info1 = document.querySelector(".info1");
    section[1].style.display = "none";
    let p = await fetch("https://kontests.net/api/v1/codeforces");
    let e = await p.json();
    e.forEach((element, index) => {
        const { name, url, start_time, end_time, duration, status } = element
        let dateAndtime = new Date(start_time);
        let endtime = new Date(end_time);
        info1.innerHTML += `<div class="card">
        <div>
           <li class="gray"><strong>Name       :</strong> ${name}<br/></li>
           <a class="gray1" href="${url}"><strong style="color :red" >URL:</strong> ${url}<br/></a>
           <li class="gray"><strong>Duration   :</strong> ${(duration - (duration % 3600)) / 3600} hours ${(duration % 3600) / 60} minutes<br/></li>
           <li class="gray1" ><strong class="blue">STATUS :</strong> ${status}<br/></li>
           <li class="gray" ><strong class="blue">Start time :</strong> ${day[dateAndtime.getDay() - 1]} - ${dateAndtime.toLocaleString()}<br/></li>
           <li class="gray1" ><strong class="blue">End Time   :</strong> ${day[endtime.getDay() - 1]} - ${endtime.toLocaleString()}<br/></li>
           </div>
           <div class="align">
           <a class="remove" href="https://codeforces.com/contests" >
           </a>
           <div></div>
           </div>
           <br/> 
           </div>`
        section[1].style.display = 'block';
        loader[1].style.display = 'none';
    })
}

async function display2() {
    let info2 = document.querySelector(".info2");
    section[2].style.display = "none";
    let p3 = await fetch("https://kontests.net/api/v1/codeforces");
    let e = await p3.json();
    e.forEach((element, index) => {
        const { name, url, start_time, end_time, duration, status } = element
        let dateAndtime = new Date(start_time);
        let endtime = new Date(end_time);
        info2.innerHTML += `<div class="card">
       <div>
           <li class="gray"><strong>Name       :</strong> ${name}<br/></li>
           <a class="gray1" href="${url}"><strong style="color :red" >URL:</strong> ${url}<br/></a>
           <li class="gray"><strong>Duration   :</strong> ${(duration - (duration % 3600)) / 3600} hours ${(duration % 3600) / 60} minutes <br/></li>
           <li class="gray1"><strong class="blue">STATUS :</strong> ${status}<br/></li>
           <li class="gray" ><strong class="blue">Start time :</strong> ${day[dateAndtime.getDay() - 1]} - ${dateAndtime.toLocaleString()}<br/></li>
           <li class="gray1" ><strong class="blue">End Time   :</strong> ${day[endtime.getDay() - 1]} - ${endtime.toLocaleString()}<br/></li>
           </div>
           <div class="align">
           <a class="remove " href="${url}" >
           <div class="register bluereg">Register</div>
           </a>
           <div></div>
           </div>
           <br/> 
    </div>`
    });
    section[2].style.display = 'block';
    loader[2].style.display = 'none';
}
display();
display1();
display2();
