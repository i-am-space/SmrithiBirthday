const text = "WHY SMRITHI == GREAT";
const delay = 80; // Delay in milliseconds between each character

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("smr-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

let smrithiCount=0;
function smrithi(){
    document.getElementById('smrithi').addEventListener('click', function(){
        smrithiCount++;
        if (smrithiCount<6){
            var smrithiPic = document.createElement("img");
            smrithiPic.src="smrithi2.png";
            smrithiPic.classList.add("smrithiPic");
            document.getElementById("col2").appendChild(smrithiPic);
        }
        else{
            alert("omg two pages with bharatanatyam pictures it's almost as if i have no others hahahahahahahahahaha")
        }
    });
}

window.onload = function (){
    smrithi();
    typeText();
};