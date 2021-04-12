var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
colordisplay.textContent = pickedcolor;
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var numsquares=6


easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares=3;
    colors=generateRandomColor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquares=6;
    colors=generateRandomColor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        squares[i].style.display="block";
        
    }
});

resetbutton.addEventListener("click", function () {
    colors = generateRandomColor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    this.textContent="New Colors";
    messagedisplay.textContent="";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];

    }
    h1.style.background = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedcolor = this.style.background;
        if (clickedcolor === pickedcolor) {
            messagedisplay.textContent = "Correct!";
            resetbutton.textContent = "Play Again?";
            changecolor(clickedcolor);
            h1.style.background = clickedcolor;

        }
        else {
            this.style.background = "#232323";
            messagedisplay.textContent = "Try Again!";
        }
    });
}

function changecolor(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = color;
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomcolor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + ", " + y + ", " + z + ")";


}

function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomcolor());
    }
    return arr;
}