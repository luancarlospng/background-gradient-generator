let gradientColor = document.querySelector('#gradientColor');

let rangeR = document.querySelector('#rangeR');
let textRotation = document.querySelector('#textRotation');

let repeating = document.querySelector('#repeating');

let color1 = document.querySelector('#color1');
color1.value = '#f9a4eb';
let color2 = document.querySelector('#color2');
color2.value = '#385db2';

gradientColor.setAttribute('style', 'background-image:linear-gradient(180deg,#f9a4eb,#385db2);');


function gerador() {

    let cor1 = color1.value;
    let cor2 = color2.value;

    let rotation = rangeR.value;
    textRotation.innerHTML = rotation;

    let repeatValue = parseInt(repeating.value);
    gradientColor.setAttribute('style', `background-image: linear-gradient(${rotation}deg,${cor1},${cor2});`);

    switch (repeatValue) {
             case 0:
                break
            case 1:
            gradientColor.setAttribute('style', `background-image: repeating-linear-gradient(${rotation}deg,${cor1} 10%,${cor2} 20%);`);
                break
        }



};


color1.addEventListener('input', gerador);
color2.addEventListener('input', gerador);
rangeR.addEventListener('input', gerador);
repeating.addEventListener('input', gerador);


let display = document.querySelector('#color1').style.display;
let btnColor = document.querySelector('#btnColor');

btnColor.addEventListener('click', () => {

    if (display == 'inline-block') {
        display = 'none';
        btnColor.innerHTML = 'Cores';
        color1.style.display = 'none';
        color2.style.display = 'none';
    } else {
        display = 'inline-block';
        btnColor.innerHTML = 'Pronto';
        color1.style.display = 'inline-block';
        color2.style.display = 'inline-block';
    }

});

document.getElementById('gerar').addEventListener('click',()=>{
    document.getElementById('coresCss').innerHTML = 'background-image: '+gradientColor.style.backgroundImage;
});