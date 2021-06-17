let nowindex = 1;


const imageSlider = document.querySelector('#imageSlider');


const bottonBtn01 = document.querySelector('#img1');
const bottonBtn02 = document.querySelector('#img2');
const bottonBtn03 = document.querySelector('#img3');
const bottonBtn04 = document.querySelector('#img4');
const bottonBtn05 = document.querySelector('#img5');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottonBtn01.addEventListener('click', moveA)
bottonBtn02.addEventListener('click', moveB)
bottonBtn03.addEventListener('click', moveC)
bottonBtn04.addEventListener('click', moveD)
bottonBtn05.addEventListener('click', moveE)

leftArrow.addEventListener('click', moveLeft)
rightArrow.addEventListener('click', moveRight)

function moveA()
{
    imageSlider.style.transform = 'translate(0px)'
    nowindex =1;
}

function moveB()
{
    imageSlider.style.transform = 'translate(-1000px)'
    nowindex =2;
}

function moveC()
{
    imageSlider.style.transform = 'translate(-2000px)'
    nowindex =3;
}

function moveD()
{
    imageSlider.style.transform = 'translate(-3000px)'
    nowindex =4;
}

function moveE()
{
    imageSlider.style.transform = 'translate(-4000px)'
    nowindex =5;
}
function moveLeft()
{
    if(nowindex == 1)
    {
        nowindex == 1;
    }
    else
    {
         nowindex --;
    }

    moveSlider(nowindex);
}

function moveRight()
{
    if(nowindex == 5)
    {
        nowindex == 5;
    }
    else
    {
         nowindex ++;
    }

    moveSlider(nowindex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
        case 5:
            moveE();
        break;
    }
}