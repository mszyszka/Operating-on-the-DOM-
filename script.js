// let clickOnMeButton = document.querySelector('.clickOnMe');
// clickOnMeButton.addEventListener('click', function(){
//     document.querySelector('.div0').classList.toggle('display');
// })

// let firstOptionBtn = document.querySelector('.firstOptionBtn');
// firstOptionBtn.addEventListener('click', function(){
//     document.querySelector('.div1').classList.toggle('display');
// })

// let secondOptionBtn = document.querySelector('.secondOptionBtn');
// secondOptionBtn.addEventListener('click', function(){
//     document.querySelector('.div2').classList.toggle('display');
// })

// let generateListBtn = document.querySelector('.generateList');
// generateListBtn.addEventListener('click', function() {
//     document.querySelector('.myDivUl').classList.toggle('display');
// });


function createDiv0() {

    let h1Text = 'Taki nagłówek dla diva';
    let pText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur';
    let container = document.querySelector('.container');


    let div0 = document.createElement('div');
    div0.setAttribute('class', 'myDiv div0');

    let h1 = document.createElement('h1');
    h1.innerText = h1Text;

    let p = document.createElement('p');
    p.innerText = pText;

    let firstOptionBtn = document.createElement('div');
    firstOptionBtn.innerText = 'first option';
    firstOptionBtn.setAttribute('class', 'myBtn div0button firstOptionBtn');

    let secondOptionBtn = document.createElement('div');
    secondOptionBtn.innerText = 'second option';

    secondOptionBtn.setAttribute('class', 'myBtn div0button secondOptionBtn');

    div0.appendChild(h1);
    div0.appendChild(p);
    div0.appendChild(firstOptionBtn);
    div0.appendChild(secondOptionBtn);

    container.appendChild(div0);
    div0.classList.toggle('display');

}

let clickOnMeButton = document.querySelector('.clickOnMe');
clickOnMeButton.addEventListener('click', createDiv0);

function createDiv1() {

    let container = document.querySelector('.container');
    let buttonTxt = document.createTextNode('generate list');

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'myDiv div1');

    let button = document.createElement('button');
    button.setAttribute('class', 'myBtn generateList');
    button.innerText(buttonTxt);
    button.addEventListener('click', createUl);

    let list = document.createElement('ul');
    list.setAttribute('class', 'myDivUl');

    div1.appendChild('button');
    container.appendChild('div1');
    div1.classList.toggle('display');

}

function createUl() {

    console.log('jaja');
    // let container = document.querySelector('.div1');

    // let list = document.createElement('ul');
    // list.setAttribute('class', 'myDivUl');

}

let firstOptionBtn = document.querySelector('.firstOptionBtn');
