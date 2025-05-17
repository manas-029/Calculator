let myText = document.getElementById("myText");

// inputing numbers

document.getElementById("btn5").onclick= function(){
   myText.textContent += 7;
}
document.getElementById("btn6").onclick= function(){
   myText.textContent += 8;
}
document.getElementById("btn7").onclick= function(){
   myText.textContent += 9;
}
document.getElementById("btn9").onclick= function(){
   myText.textContent += 4;
}
document.getElementById("btn10").onclick= function(){
   myText.textContent += 5;
}
document.getElementById("btn11").onclick= function(){
   myText.textContent += 6;
}
document.getElementById("btn13").onclick= function(){
   myText.textContent += 1;
}
document.getElementById("btn14").onclick= function(){
   myText.textContent += 2;
}
document.getElementById("btn15").onclick= function(){
   myText.textContent += 3;
}
document.getElementById("btn17").onclick= function(){
   myText.textContent += 0;
}
document.getElementById("btn18").onclick= function(){
   myText.textContent += ".";
}
document.getElementById("btn2").onclick= function(){
   myText.textContent -="";
}

// clearing screen

document.getElementById("btn1").onclick= function(){
   myText.textContent ="";
}
// operators input

document.getElementById("btn16").onclick= function(){
   myText.textContent +="+";
}

document.getElementById("btn12").onclick= function(){
   myText.textContent +="-";
}
document.getElementById("btn8").onclick= function(){
   myText.textContent +="*";
}

document.getElementById("btn4").onclick= function(){
   myText.textContent +="/";
}

document.getElementById("btn3").onclick= function(){
   myText.textContent +="%";
}

// evaluation
document.getElementById("btn19").onclick= function(){
   let c = eval(myText.textContent);
   myText.textContent =c;
   console.log(myText);
}