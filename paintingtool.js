
/**
 * Simple Paint Program
 * Gabriel Votaw
 * 22 January 2021
 */

var brushRed = 0,brushGreen = 0,brushBlue = 0;

function setup(){
    createCanvas(960,720)
}

function mouseIsOver(x,y){
    if(mouseX >= x && mouseX <= x+25 && mouseY >= y && mouseY <= y+25){
        return true;
    }
    return false;
}

function colorButton(r,g,b,x,y){
    noStroke();
    fill(r,g,b);
    rect(x,y,25);
    if(mouseIsPressed && mouseIsOver(x,y)){
         brushRed = r; brushGreen = g; brushBlue = b;
    }
}

function draw(){
    stroke(0,0,0);
    strokeWeight(5);
    line(0,720,960,720);
    line(960,0,960,720);

    noStroke();
    fill(219,217,217);
    rect(0,0,30,274);

    colorButton(255,0,0,2,2);
    colorButton(255,165,0,2,29);
    colorButton(255,255,0,2,56);
    colorButton(0,255,0,2,83);
    colorButton(0,255,255,2,110);
    colorButton(0,0,255,2,137);
    colorButton(255,0,255,2,164);
    colorButton(120,80,39,2,191);
    colorButton(255,255,255,2,218);
    colorButton(0,0,0,2,245);

    if(mouseIsPressed){
        stroke(brushRed,brushGreen,brushBlue);
        strokeWeight(10);
        line(mouseX,mouseY,pmouseX,pmouseY);
    }
}