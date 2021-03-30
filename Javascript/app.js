 var favgenre = prompt('What is your favorite Genre? Jazz, Rock, or Pop?')
         if(favgenre === "Jazz"){ document.write("<h2>WELCOME, Jazz lover!</h2>")}
         else if (favgenre === "Rock"){document.write("<h2>WELCOME, Rock lover!</h2>")}
         else if (favgenre === "Pop"){document.write("<h2>WELCOME,Pop lover!</h2>")}
         else {document.write("<h2>WELCOME, Music lover!</h2>")}


/* var thirdLetter = prompt("What is the third letter in the word: Music?")
while (thirdLetter !== 's'){
    thirdLetter = prompt("try again, third letter in 'music?'")
}*/

pic =" ";
function displayHeart (){
    pic = pic + ('<img width="130px" src=Javascript/heart.png>')
}
function displayHeart2 (){
    pic = pic + ('<img  width="130px"src=Javascript/grayheart.png>')
}

var hearts = prompt('How much do you love music, on a scale of 1-10?');
for ( var i = 1 ; i<=hearts ; i++ ){
   displayHeart()
        
}
for ( var j = 1 ; j<=(10- hearts) ; j++ ){
    displayHeart2()
}
document.write(pic)