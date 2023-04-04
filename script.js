function changeText(obj, text) {
obj.innerText = text;
}

function changeBgColor(obj, colorName) {
    obj.style.backgroundColor = colorName;
}


function scaleUp(obj, size) {
    obj.style.fontSize = size;
}

function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";
  
    applyTheme(savedTheme);
  
    for (const optionElement of document.querySelectorAll("#selTheme option")) {
      optionElement.selected = savedTheme === optionElement.value;
    }
  
    document.querySelector("#selTheme").addEventListener("change", function () {
      localStorage.setItem("theme", this.value);
      applyTheme(this.value);
    });
  });

  
  

function gotoLink(link){
   console.log(link.value);
   location.href = link.value;
};

function checker(){
var result = confirm('Are You Sure To Be Redirected?');
if (result == false) {
event.preventDefault();
}
}

function checker2(){
  var result = confirm('🚫!! Restricted Area Please Click Cancel Immediately !!🚫');
  if (result == false) {
  event.preventDefault();
  }
  }

  function checker3(){
    var result = confirm(' || Are You Sure To Go To Form Spree CaptCha? ||');
    if (result == false) {
    event.preventDefault();
    }

  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
 
  




  window.addEventListener("scroll", function() {
    var goUpButton = document.getElementById("go-up-button");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goUpButton.classList.add("show");
    } else {
      goUpButton.classList.remove("show");
    }
  });
    window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });




  
  // Update Time
  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = (hours >= 12) ? "PM" : "AM";
    hours = hours % 12;
    hours = (hours == 0) ? 12 : hours;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").textContent = timeString;
    setTimeout(updateTime, 1000);
  }
  window.onload = function() {
    updateTime();
  }

  




  function copyText() {
    var textToCopy = document.getElementById("textToCopy");
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied the text: " + textToCopy.value);
  }

  // Google
  function onSignIn(googleUser) {
    // Get the user's ID token and basic profile information
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
    
    // Send the ID token and profile information to your server for verification and processing
    // (not shown here)
  }

      
  function fetch()
  {
var get = document.getElementById("get").value;
document.getElementById("hex").value = get;

  }