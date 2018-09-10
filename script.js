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
    firstOptionBtn.addEventListener('click', createDiv1);

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

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'myDiv div1');

    let p = document.createElement('p');
    p.innerText = 'Show me some pictures from best serials';

    let button = document.createElement('button');
    button.setAttribute('class', 'myBtn generateList');
    button.innerText = 'Show pictures';
    button.addEventListener('click', createHintsList);
    button.addEventListener('click', createPasswordSection);

    let list = document.createElement('ul');
    list.setAttribute('class', 'myDivUl');

    div1.appendChild(p);
    div1.appendChild(button);
    container.appendChild(div1);
    div1.classList.toggle('display');

}

function createHintsList() {
    let div1 = document.querySelector('.div1');

    let p = document.createElement('p');
    p.innerText = 'Not so fast. You need to pass correct password to see pictures. Here are a few hints. ';

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'myDivUl display');

    let liElements = {
        li0: document.createElement('li'),
        li1: document.createElement('li'),
        li2: document.createElement('li'),
    }

    liElements.li0.innerText = 'Oranges';
    liElements.li1.innerText = 'Apples';
    liElements.li2.innerText = 'DOM';

    for (let i = 0; i > liElements.length; i++) {
        let liElement = liElements[i];
        liElement.setAttribute('class', 'liStyle');
    }
    
    ul.appendChild(liElements.li0);
    ul.appendChild(liElements.li1);
    ul.appendChild(liElements.li2);

    div1.appendChild(p);
    div1.appendChild(ul);
}

function createPasswordSection() {
    let div1 = document.querySelector('.div1');

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'div1input');

    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'myBtn');
    checkBtn.innerText = 'check password';
    checkBtn.addEventListener('click', checkPassword);

    div1.appendChild(input);
    div1.appendChild(checkBtn);

}
function checkPassword() {
    let password = 'DOM';
    let input = document.querySelector('.div1input');
    let inputValue = input.value;

    if ( inputValue === password) {
        createGalery();
    } else {
        console.log('sorry ale nie');
    }

}

function createGalery(){
    console.log('będzie galeria');
}


// function createUl() {

//     let div1 = document.querySelector('.div1');

//     let input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('class', 'div1input');

//     var inputValue = document.querySelector('.div1input').nodeValue;


// }

