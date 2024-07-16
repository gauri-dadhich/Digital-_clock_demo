

// Select the first <p> element inside the #content div using querySelector
// const paragraph = document.querySelector("#content p");

// Change the text content of the selected paragraph
// paragraph.textContent = "This paragraph has been updated using querySelector.";

// Change the style of the selected paragraph
// paragraph.style.color = "blue";

// Select and modify the <h1> element inside the #content div
// const heading = document.querySelector("#content h1");
// heading.textContent = "Hello, DOM!";

// You can also select elements by tag name
// const title = document.querySelector("title");
// title.textContent = "Updated Title";
// const heading = document.createElement("h1");
// heading.innertext="this is the second heading tag"
// const parent2= document.getElementById
// ("contentTwo");
// parent2.appendChild(heading)
function clockstart(){
    let date=new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours>=12){
        hours=hours-12;
    }
    let hrs =document.getElementById("hrs");
     hrs.innerText=hours;
     let mins =document.getElementById("mins");
     mins.innerText=minutes;
     let secs = document.getElementById("secs");
     secs.innerText=seconds;
}
setInterval(()=>{
    clockstart();
},1000);
 let date=new Date();
 let hours=date.getHours();
 if(hours>=12){
     let ampm = document.getElementById("ampm");
     ampm.innerText="pm"

 }
 else if(hours<12){
    let ampm = document.getElementById("ampm");
    ampm.innerText="am";
 }
let greeting=document.getElementById("greeting")
if(hours>=12 && hours<16){
  greeting.innerHTML="GOOD AFTERNOON!!"
  }
if(hours>=16 && hours<20){
greeting.innerHTML="GOOD EVENING!!"
}
if(hours>=20 && hours<24){
  greeting.innerHTML="GOOD NIGHT!!"
  }
  button.addEventListener("click", function () {
    let date = new Date();
    let hours = date.getHours();
   
    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");
   
    if (parseInt(wakeUp.value) === hours) {
      console.log(wakeUp.value);
      document.getElementById("settime").innerHTML = "GRAB SOME BREAKFAST!";
      document.getElementById("clockimage").src = "./images/Component 30 – 1.svg";
    } else if (parseInt(lunch.value) === hours) {
      document.getElementById("settime").innerHTML = "LET'S HAVE SOME LUNCH !";
      document.getElementById("clockimage").src ="./images/Component 31 GÇô 1.jpg";
    } else if (parseInt(nap.value) === hours) {
      document.getElementById("settime").innerHTML = "GET SOME TEA..!";
      document.getElementById("clockimage").src = "./images/lunch_image.png";
    } else if (parseInt(night.value) === hours) {
      document.getElementById("settime").innerHTML = "GO TO SLEEP";
      document.getElementById("clockimage").src =
        "./images/Component 32 GÇô 1.jpg";
    }
    let timing = document.getElementsByClassName("timing");
   
    console.log(wakeUp.options[wakeUp.selectedIndex].textContent);
   
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
   
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
  })
