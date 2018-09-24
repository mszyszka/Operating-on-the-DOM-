function createDiv0() {
    let clickOnMeButton = document.querySelector('.clickOnMe');
    clickOnMeButton.removeEventListener('click', createDiv0);

    let h1Text = 'Operating on DOM element\'s';
    let pText = 'This is a program that I write with pure JavaScript. It\'s about manipulating DOM elements using methods like .createElement (), .appendChild (), and setAttribute (). There are only two elements in the HTML content, the rest of what you see is generated and supported by JavaScript.';
    let container = document.querySelector('.container');

    let div0 = document.createElement('div');
    div0.setAttribute('class', 'myDiv div0');

    let h1 = document.createElement('h1');
    h1.innerText = h1Text;

    let p = document.createElement('p');
    p.innerText = pText;

    let firstOptionBtn = document.createElement('button');
    firstOptionBtn.innerText = 'first option';
    firstOptionBtn.setAttribute('class', 'myBtn div0button firstOptionBtn');
    firstOptionBtn.addEventListener('click', createDiv1);

    let secondOptionBtn = document.createElement('button');
    secondOptionBtn.innerText = 'second option';
    secondOptionBtn.setAttribute('class', 'myBtn div0button secondOptionBtn');
    secondOptionBtn.addEventListener('click', createDiv3);

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

    let showPicturesBtn = document.createElement('button');
    showPicturesBtn.setAttribute('class', 'myBtn showPicturesBtn');
    showPicturesBtn.innerText = 'Show pictures';
    showPicturesBtn.addEventListener('click', createHintsList);
    showPicturesBtn.addEventListener('click', createPasswordSection);

    let list = document.createElement('ul');
    list.setAttribute('class', 'myDivUl');

    div1.appendChild(p);
    div1.appendChild(showPicturesBtn);
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
    showPicturesBtn = document.querySelector('.showPicturesBtn');
    showPicturesBtn.removeEventListener('click', createPasswordSection);
    showPicturesBtn.removeEventListener('click', createHintsList);

    let div1 = document.querySelector('.div1');

    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'myBtn checkBtn');
    checkBtn.innerText = 'check password';
    checkBtn.addEventListener('click', checkPassword);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'div1input');
    input.setAttribute('placeholder', 'password')
    input.addEventListener('keyup', function (e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            document.querySelector('.checkBtn').click();
        }
    });

    div1.appendChild(input);
    div1.appendChild(checkBtn);
}

function checkPassword() {
    let checkBtn = document.querySelector('.checkBtn');
    let password = 'DOM';
    let input = document.querySelector('.div1input');
    let inputValue = input.value;

    if (inputValue === password) {
        createDiv2();
        checkBtn.removeEventListener('click', checkPassword);
    } else {
        alert('You missed...');
    }
}

function createDiv2() {
    let container = document.querySelector('.container');

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'div2 myDiv galeryDiv');

    let p = document.createElement('p');
    p.innerText = 'Great! Here I have some pictures for you :)'

    let button = document.createElement('button');
    button.setAttribute('class', 'myBtn relodeBtn');
    button.innerText = 'Relode page and take second path';
    button.addEventListener('click', function reload() {
        location.reload();
    })


    let photoDiv0 = document.createElement('div');
    photoDiv0.setAttribute('class', 'photoDiv');

    let photoDiv1 = document.createElement('div');
    photoDiv1.setAttribute('class', 'photoDiv');

    let photoDiv2 = document.createElement('div');
    photoDiv2.setAttribute('class', 'photoDiv');

    let photoDiv3 = document.createElement('div');
    photoDiv3.setAttribute('class', 'photoDiv');

    let img0 = document.createElement('img');
    img0.setAttribute('src', 'img/dark.jpeg');

    let img1 = document.createElement('img');
    img1.setAttribute('src', 'img/ozark.jpeg');

    let img2 = document.createElement('img');
    img2.setAttribute('src', 'img/mindhunter.jpg');

    let img3 = document.createElement('img');
    img3.setAttribute('src', 'img/breakingbad.jpg');

    photoDiv0.appendChild(img0);
    photoDiv1.appendChild(img1);
    photoDiv2.appendChild(img2);
    photoDiv3.appendChild(img3);

    div2.appendChild(p);
    div2.appendChild(photoDiv0);
    div2.appendChild(photoDiv1);
    div2.appendChild(photoDiv2);
    div2.appendChild(photoDiv3);
    div2.appendChild(button);

    container.appendChild(div2);
}


function createDiv3() {
    let container = document.querySelector('.container');

    let div3 = document.createElement('div');
    div3.setAttribute('class', 'myDiv div3');
    div3.addEventListener('click', count);

    let p0 = document.createElement('p');
    p0.innerText = 'Click on this box exactly seven times';

    div3.appendChild(p0);
    container.appendChild(div3);
}

function count() {

    let counter = 1;
    let div3 = document.querySelector('.div3');
    div3.removeEventListener('click', count);

    let clicksDiv = document.createElement('div');
    clicksDiv.setAttribute('class', 'clicksDiv');

    let p = document.createElement('p');
    p.setAttribute('class', 'counter');
    p.innerText = counter;

    let p1 = document.createElement('p');
    p1.setAttribute('class', 'counter');
    p1.innerText = 'Yeah, You\'re good...';

    let p2 = document.createElement('p');
    p2.setAttribute('class', 'counter');
    p2.innerText = 'But I don\'t have time to create present for You like this photo gallery on the end of first path. I hope You\'ll be ok!';


    div3.addEventListener('click', function () {
        counter = counter + 1;
        p.innerText = counter;

        if (counter == 7) {
            clicksDiv.removeChild(p);
            clicksDiv.appendChild(p1);
            clicksDiv.appendChild(p2);

            createReloder();

        }
    })

    clicksDiv.appendChild(p);
    div3.appendChild(clicksDiv);

}



function createReloder() {
    let div3 = document.querySelector('.div3');

    let button = document.createElement('button');
    button.setAttribute('class', 'myBtn relodeBtn');
    button.innerText = 'Relode page and take first path';
    button.addEventListener('click', function reload() {
        location.reload();
    });

    div3.appendChild(button);
}