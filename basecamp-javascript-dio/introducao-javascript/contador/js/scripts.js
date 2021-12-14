let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
 
        count++;
        CURRENT_NUMBER.innerHTML=count;
        addEventListener("click", mudarColorFont());
        addEventListener("click", disableContador());      
}
function decrement(){
        count--;
        CURRENT_NUMBER.innerHTML=count;
        addEventListener("click", mudarColorFont());
        addEventListener("click", disableContador());
}

function mudarColorFont(){
    if (count>=0) {
        CURRENT_NUMBER.style.color="blue";    
    } else {
        CURRENT_NUMBER.style.color="red";
    }
}

function disableContador(){
    if(count==-10|| count==10 ){
        count=alert("Limite da contagem");;
      
    }
}

