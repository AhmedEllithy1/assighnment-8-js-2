
function randomText() {
    var user_info = ["You miss 100% of the shots you don't take.","The best revenge is massive success."," It's not what happens to you, but how you react to it that matters.","Do not take life too seriously. You will not get out alive.","Resentment is like drinking poison and waiting for your enemies to die."];
    var userName = ["--Wayne Gretzy", "--Frank Sinatra", "--Epictetus","--Elbert Hubbard","--Nelson Mandela"];

var num = Math.floor(Math.random()*user_info.length);

document.getElementById("Quotes").innerHTML= user_info[num] ;
document.getElementById("Quotes2").innerHTML= userName[num] ;
}


