// DECLARING GOLBAL CONST 
const displayScreen = document.getElementById('displayScreen');
const displayScreen1 = document.getElementById('displayScreen1');
const btn = Array.from(document.getElementsByClassName('btnn'));
const historyCard = document.getElementById("historyCard");
const myHistory = document.getElementById('myHistory')
historyCard.style.display = 'none';
var result = '';
var calHistory = [];
//map function for calling every element from btn array
btn.map(btn => {
    btn.addEventListener('click', (e) => {

        let selectedChar = e?.target.innerText.toLowerCase();
        // switch cases for perticular symbols from calculator
        switch (selectedChar) {
            case '=':
                try {
                    displayScreen.innerText = eval(displayScreen.innerText);
                    displayScreen1.innerText = result;

                    calHistory.push(displayScreen1.innerText)
                    calHistory.push(displayScreen.innerText)

                } catch (error) {

                    let message = document.getElementById('message');
                    message.innerHTML = `<div class="alert alert-warning alert-dismissible               fadeshow"role=" alert ">
                         <p>Please enter proper values</p>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                         </button>
                      </div>`;
                    setTimeout(() => {
                        message.innerHTML = '';
                    }, 2000);
                    displayScreen.innerText = '';
                }
                break;

            case 'c':
                displayScreen.innerText = '';
                break;
            case '←':
                displayScreen.innerText = displayScreen.innerText.slice(0, -1);
                break;
            case 'x2':
                displayScreen.innerText = (displayScreen.innerText * displayScreen.innerText);
                break;
            case '√':
                displayScreen.innerText = Math.sqrt(displayScreen.innerText);
                break;
            case 'π':
                let pieValue = 3.14159265359
                displayScreen.innerText += pieValue;
                break;
            case 'log':
                displayScreen.innerText = Math.log(displayScreen.innerText);
                break;
            case 'sin':
                displayScreen.innerText = Math.sin(displayScreen.innerText);
                break;
            case 'cos':
                displayScreen.innerText = Math.cos(displayScreen.innerText);
                break;
            case 'tan':
                displayScreen.innerText = Math.tan(displayScreen.innerText);
                break;
            case '10x':
                displayScreen.innerText = Math.pow(10, displayScreen.innerText);
                break;
            case 'n!':
                let ans = 1;
                if (displayScreen.innerText == 0 || displayScreen.innerText == 1) {
                    ans = 1;
                    displayScreen.innerText = ans;
                } else {
                    for (let i = displayScreen.innerText; i >= 1; i--) {
                        ans = ans * i;
                    }
                    displayScreen.innerText = ans;
                }
                break;
            default:
                //to check whether user is enter valid operations
                if (displayScreen.innerText == '') {
                    if (btn.innerText == '/' || btn.innerText == '*' || btn.innerText == '%') {
                        let message = document.getElementById('message');
                        message.innerHTML = `<div class="alert alert-warning alert-dismissible fadeshow"role=" alert ">
                              <p>Please enter number first</p>
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                            </div>`;
                        setTimeout(() => {
                            message.innerHTML = '';
                        }, 2000);
                    } else {

                        displayScreen.innerText += selectedChar
                    }
                } else {
                    displayScreen.innerText += selectedChar
                }

                break;
        }

        result = displayScreen.innerText

    });
});


function showHistory() {
    historyCard.style.display = 'block'
    console.log('calHistory', calHistory);
    let print = '';
    for (let i = 0; i <= calHistory.length; i++) {
        myHistory.innerHTML = print;
        print += calHistory[i] + "<br>"

    }
}

function closeHistory() {
    historyCard.style.display = 'none'
}

function defaultTheme() {

    let historyCard = document.getElementById('historyCard');
    historyCard.style.backgroundColor = '#efa8e4'
    let body = document.getElementById('body');
    body.style.backgroundColor = '#2f404f';
    let calciCard = document.getElementById('calciCard');
    calciCard.style.backgroundColor = '#d2e2e2'
    let themeCard = document.getElementById('themeCard')
    themeCard.style.backgroundColor = '#efa8e4'
}

function theme1() {

    let body = document.getElementById('body');
    body.style.backgroundColor = '#c3b0c4';
    let calciCard = document.getElementById('calciCard');
    calciCard.style.backgroundColor = '#edf3f5'
    let themeCard = document.getElementById('themeCard')
    themeCard.style.backgroundColor = '#97e5ef'
    let historyCard = document.getElementById('historyCard');
    historyCard.style.backgroundColor = '#97e5ef'
}

function theme2() {
    let body = document.getElementById('body');
    body.style.backgroundColor = '#f0f1ee';
    let calciCard = document.getElementById('calciCard');
    calciCard.style.backgroundColor = '#a5dbdc'
    let themeCard = document.getElementById('themeCard')
    themeCard.style.backgroundColor = '#efa8e4'
    let historyCard = document.getElementById('historyCard');
    historyCard.style.backgroundColor = '#efa8e4'
}


function theme3() {
    let body = document.getElementById('body');
    body.style.backgroundColor = '#c7dad3';
    let calciCard = document.getElementById('calciCard');
    calciCard.style.backgroundColor = '#3f7c88'
    let themeCard = document.getElementById('themeCard')
    themeCard.style.backgroundColor = '#f7f7f7'
    let historyCard = document.getElementById('historyCard');
    historyCard.style.backgroundColor = '#f7f7f7'
}