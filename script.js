// Navigation

const links = document.querySelectorAll("a")
const burger = document.getElementById("burger")
const sideMenu = document.querySelector(".side-menu")

for(var x of links){
    x.addEventListener("click", function(){
        for(var x of links){
            x.classList.remove("selected")
        }
        this.classList.add("selected")
    })
}

burger.addEventListener("click", function(){
    this.classList.toggle("rotateZ");
    sideMenu.classList.toggle("translateX")
})

window.addEventListener("resize", function(){
    if(window.innerWidth > 600){
        burger.classList.remove("rotateZ");
        sideMenu.classList.remove("translateX")

        for(var x of links){
            x.classList.remove("selected")
        }
    }
})

// Subscription form validation

var inputName = document.getElementById("inputName")
inputName.style.color = "black";
var inputSName = document.getElementById("inputSName")
inputSName.style.color = "black";
var inputTel = document.getElementById("inputTel")
inputTel.style.color = "black";
var addelement = document.getElementById("submitFirst")

submitFirst.addEventListener("click", function(){
    

    if(inputName.value && inputSName.value && inputTel.value ){
        
        innerText = inputName.value
        innerText = inputSName.value
        innerText = inputTel.value
       
        
            
    } else {
            alert("Add Your details!")
            }
            inputName.value = ""
            inputSName.value = ""
            inputTel.value = ""
})

// Subscription form validation-2

var inputName2 = document.getElementById("inputName-2")
inputName2.style.color = "black";
var inputSName2 = document.getElementById("inputSName-2")
inputSName2.style.color = "black";
var inputTel2 = document.getElementById("inputTel-2")
inputTel2.style.color = "black";
var addelement = document.getElementById("submitSecond")

submitSecond.addEventListener("click", function(){
    

    if(inputName2.value && inputSName2.value && inputTel2.value ){
        
        innerText = inputName2.value
        innerText = inputSName2.value
        innerText = inputTel.value
        
            
    } else {
            alert("Add Your details!")
            }
            inputName2.value = ""
            inputSName2.value = ""
            inputTel2.value = ""
})

// Tabs

const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

function displayOut() {
    var x = document.getElementById('png-1');
    setTimeout(function(){
        x.style.opacity='0';
    }, 1000);
}
displayOut();

for(var x of tabs){
    x.style.display = "none"
}

function changeHeader(evt, name){


   for(var x of tabs){
    x.style.display = "none"
   }
   document.getElementById(name).style.display = "block"

   for(var x of buttons){
    x.classList.remove("selected")
   }
   evt.currentTarget.classList.add("selected")

}
