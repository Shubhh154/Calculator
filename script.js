let string = "";
let buttons = document.querySelectorAll('.item');
let remove = document.querySelector('.backspace');
var history = [];

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.result').innerHTML = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('.result').innerHTML = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.result').innerHTML = string;
        }
    })
})

remove.addEventListener('click', (e)=>{
    string = string.slice(0, -1);
    document.querySelector('.result').innerHTML = string;
    })

function showHistory() {
    var history = getHistory();
    alert(history.join('\n'));
}
    
function saveToHistory(expression){
    history.pushState(expression);
}

function getHistory() {
    return history;
}