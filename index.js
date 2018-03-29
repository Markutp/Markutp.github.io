let musa = document.getElementById('musa');
let niilo = document.getElementById('video1')
let ismo = document.getElementById('ismo');
document.getElementById('teksti2').style.display='none';
document.getElementById('oho').style.display = 'none';
document.getElementById('wrap').style.display = 'none';
let merkki = 0;
const musaplay = () => {
    if (merkki == 0) {
    musa.play();
    }
};
const niiloust = () => {
    if (merkki == 0) {
niilo.play();
} else {
    niilo.pause();
}

};
if (merkki == 0) {
    console.log(merkki);
setInterval(niiloust, 0);
musaplay();
};
const piilota = () => {
    document.getElementById('ismo').style.display='none';
    document.getElementById('wrap').style.display = 'block';
    document.getElementById('oho').style.display = 'block';
    document.getElementById('teksti2').style.display = 'block'
}
const naytakuva = () => {
    
    setTimeout(piilota, 3000);
}
    

document.getElementById('namiska').addEventListener('click', (evt) => {
    merkki = 1;
    console.log(merkki);
    musa.pause();
    document.getElementById('musa').style.display = 'none';
    document.getElementById('video1').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('namiska').style.display = 'none';
    document.getElementById('ismo').style.display = 'block';

    ismo.play();
    naytakuva();

});