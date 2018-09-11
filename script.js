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
    showPicturesBtn.removeEventListener('click', createHintsList);
    showPicturesBtn.removeEventListener('click', createPasswordSection);

    let div1 = document.querySelector('.div1');

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'div1input');

    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'myBtn checkBtn');
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
        alert('You missed...');
    }
}

function createGalery(){

    let container = document.querySelector('.container');

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'div2 myDiv galeryDiv');

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


    div2.appendChild(photoDiv0);
    div2.appendChild(photoDiv1);
    div2.appendChild(photoDiv2);
    div2.appendChild(photoDiv3);

    container.appendChild(div2);
}



