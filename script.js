let counter=0;


function increment(){
    counter++;
    document.getElementById("screen").innerHTML=counter;
}
function decrement(){
    counter--;
    document.getElementById("screen").innerHTML=counter;
}

function reset(){
    counter=0;
    document.getElementById("screen").innerHTML=counter;
}




console.log(counter);