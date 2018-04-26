const reFresh = () => {
    location.reload;
};
setInterval(() => {
    reFresh();
}, 360000);
let courses = [];
let place = 'jussi';
const s = JSON.stringify;
const p = JSON.parse;
let currentdate = new Date();
let minuutti = currentdate.getMinutes();
let tunti = currentdate.getHours();
let vuosi = currentdate.getFullYear();
let kuukausi = (currentdate.getMonth() + 1);
let paiva = currentdate.getDate();
let paivalkm;
let viikonpaiva = currentdate.getDay();
let date = vuosi + '/' + kuukausi + '/' + paiva;
let pro;
let titlefi;
let hinta;
// let dateviikonpaiva = vuosi + '/'
// + kuukausi + '/' + paiva + '/' + viikonpaiva;
// let lokaatio = ['16435', '16363', '16364', '16362'];
let loc;
let laktoositon;
let vegaani;
let gluteeniton;
let maidoton;
const clearMenu = () => {
    document.getElementById('menu').innerHTML = '';
};
if (localStorage.laktoositon === '1') {
    document.getElementById('lakt').setAttribute('checked', '');
}
if (localStorage.vegaani === '1') {
    document.getElementById('veg').setAttribute('checked', '');
}
if (localStorage.gluteeniton === '1') {
    document.getElementById('glut').setAttribute('checked', '');
}
if (localStorage.maidoton === '1') {
    document.getElementById('maid').setAttribute('checked', '');
}
document.getElementById('glut').addEventListener('click', (evt) => {
    console.log(gluteeniton + ' gluteenittoman arvo');
    if ((gluteeniton === 0) || (isNaN(gluteeniton))) {
        localStorage.setItem('gluteeniton', 1);
    } else if (gluteeniton === 1) {
        localStorage.setItem('gluteeniton', 0);
    }
    getMenu();
});

document.getElementById('maid').addEventListener('click', (evt) => {
    if ((maidoton === 0) || (isNaN(maidoton))) {
        localStorage.setItem('maidoton', 1);
    } else if (maidoton === 1) {
        localStorage.setItem('maidoton', 0);
    }
    getMenu();
});

document.getElementById('lakt').addEventListener('click', (evt) => {
    if ((laktoositon === 0) || (isNaN(laktoositon))) {
        localStorage.setItem('laktoositon', 1);
    } else if (laktoositon === 1) {
        localStorage.setItem('laktoositon', 0);
    }
    getMenu();
});

document.getElementById('veg').addEventListener('click', (evt) => {
    if ((vegaani === 0) || (isNaN(vegaani))) {
        localStorage.setItem('vegaani', 1);
    } else if (vegaani === 1) {
        localStorage.setItem('vegaani', 0);
    }
    getMenu();
});

const getMonthDays = () => {
    let month = kuukausi;
    switch (month) {
        case 1:
            paivalkm = 31;
            break;
        case 2:
            paivalkm = 28;
            break;
        case 3:
            paivalkm = 31;
            break;
        case 4:
            paivalkm = 30;
            break;
        case 5:
            paivalkm = 31;
            break;
        case 6:
            paivalkm = 30;
            break;
        case 7:
            paivalkm = 31;
            break;
        case 8:
            paivalkm = 31;
            break;
        case 9:
            paivalkm = 30;
            break;
        case 10:
            paivalkm = 31;
            break;
        case 11:
            paivalkm = 30;
            break;
        case 12:
            paivalkm = 31;
            break;
    }
};
// asetetaan nykyisen kuukauden päivien lukumäärä
getMonthDays();
let aukitunnit;
let aukiminuutit;
let kiinnitunnit;
let kiinniminuutit;
loc = '16435';
place = 'Lepuski';
aukitunnit = 10;
kiinnitunnit = 14;
aukiminuutit = 30;
kiinniminuutit = 30;
if ((((tunti < aukitunnit) && (minuutti < aukiminuutit))
|| ((tunti - 1) < aukitunnit)) || ((tunti + 1) > kiinnitunnit)
|| ((tunti > kiinnitunnit) && (minuutti > kiinniminuutit))
|| ((viikonpaiva === 6) || (viikonpaiva === 7))) {
    document.getElementById('lounasaika').innerHTML = 'Ravintola on suljettu';
} else {
    document.getElementById('lounasaika')
    .innerHTML = 'Lounas on nyt tarjolla';
}
setInterval(() => {
    if ((((tunti < aukitunnit) && (minuutti < aukiminuutit))
    || ((tunti - 1) < aukitunnit)) || ((tunti + 1) > kiinnitunnit)
    || ((tunti > kiinnitunnit) && (minuutti > kiinniminuutit))
    || ((viikonpaiva === 6) || (viikonpaiva === 7))) {
        document.getElementById('lounasaika')
        .innerHTML = 'Ravintola on suljettu';
    } else {
        document.getElementById('lounasaika')
        .innerHTML = 'Lounas on nyt tarjolla';
    } if (minuutti < 60) {
        minuutti += 1;
    } else {
        minuutti = 1;
    }
    console.log(minuutti);
}, 60000);
document.getElementById('paikka').innerHTML = place;
setInterval(() => {
    if (tunti < 24) {
        console.log(document.getElementById('lounasaika').innerHTML);
        console.log(tunti + 'täs on tunti');
        tunti += 1;
    } else {
        tunti = 0;
    }
}, 3600000
);

document.getElementById('nuoli1').addEventListener('click', (evt) => {
    console.log(viikonpaiva + 'VIIKONPÄIVÄ');
    if ((viikonpaiva != 6) && (viikonpaiva != 0) && (viikonpaiva != 7)) {
        document.getElementById('d' + viikonpaiva)
        .style.borderColor = 'hotpink';
    }
    if (paiva < paivalkm) {
        paiva = paiva + 1;
    } else if (kuukausi < 12) {
        kuukausi += 1;
        getMonthDays();
        paiva = 1;
    } else {
        vuosi += 1;
        kuukausi = 1;
        paiva = 1;
    }
    if (viikonpaiva < 7) {
        viikonpaiva += 1;
    }
    date = currentdate.getFullYear()
        + '/' + (currentdate.getMonth() + 1) + '/' + paiva;
    console.log(currentdate.getDate());
    if (viikonpaiva === 7) {
        viikonpaiva = 0;
    }
    getMenu();
});
document.getElementById('nuoli2').addEventListener('click', (evt) => {
    if ((viikonpaiva != 6) && (viikonpaiva != 0) && (viikonpaiva != 7)) {
        document.getElementById('d' + viikonpaiva)
        .style.borderColor = 'hotpink';
    }
    if (paiva > 1) {
        paiva = paiva - 1;
        console.log(kuukausi);
    } else if (kuukausi > 1) {
        kuukausi -= 1;
        console.log(kuukausi);
        getMonthDays();
        // päivämäärän päivät vaihtuvat switchin valituksi päivien lukumääräksi
        paiva = paivalkm;
    } else {
        vuosi -= 1;
        kuukausi = 12;
        paiva = 31;
    }
    if (viikonpaiva > 0) {
        viikonpaiva -= 1;
    }
    date = currentdate.getFullYear()
        + '/' + (currentdate.getMonth() + 1) + '/' + paiva;
    console.log(currentdate.getDate());
    if (viikonpaiva === 0) {
        viikonpaiva = 7;
    }
    getMenu();
});
const getPvm = () => {
    document.getElementById('pvm').innerHTML = date;
};

document.addEventListener('change', (evt) => {
    loc = document.getElementById('selektio').value;
    getMenu();
    switch (loc) {
        case '16435':
            place = 'Lepuski';
            aukitunnit = 10;
            kiinnitunnit = 14;
            aukiminuutit = 30;
            kiinniminuutit = 30;
            break;
        case '16363':
            place = 'Bule';
            aukitunnit = 10;
            kiinnitunnit = 14;
            aukiminuutit = 30;
            kiinniminuutit = 0;
            break;
        case '16364':
            place = 'Hämeentie';
            aukitunnit = 10;
            kiinnitunnit = 13;
            aukiminuutit = 30;
            kiinniminuutit = 0;
            break;
        case '16362':
            place = 'Albert';
            aukitunnit = 10;
            kiinnitunnit = 13;
            aukiminuutit = 30;
            kiinniminuutit = 30;
            break;
        case '16365':
            place = 'Leiritie';
            aukitunnit = 10;
            kiinnitunnit = 14;
            aukiminuutit = 30;
            kiinniminuutit = 30;
            break;
        case '16448':
            place = 'Vanha Viertotie';
            aukitunnit = 10;
            kiinnitunnit = 14;
            aukiminuutit = 30;
            kiinniminuutit = 0;
            break;
    }
    document.getElementById('paikka').innerHTML = place;
}
);

const appendAndCreate = () => {
    let table = document.getElementById('menu');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    th1.appendChild(document.createTextNode('Ruoka'));
    th2.appendChild(document.createTextNode('Valio'));
    th3.appendChild(document.createTextNode('Hinta'));
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
};
let hintaeuroilla;
let replacepro;
let replacepro2;
let table;
let tr;
let td1;
let td2;
let td3;
let titlefilow;

const setValues = () => {
    hintaeuroilla = hinta.replace('/', '€');
    hintaeuroilla = hintaeuroilla.replace('/', '€');
    replacepro = pro.replace('"', '');
    replacepro2 = replacepro.replace('"', '');
    laktoositon = parseInt(localStorage.laktoositon);
    vegaani = parseInt(localStorage.vegaani);
    gluteeniton = parseInt(localStorage.gluteeniton);
    maidoton = parseInt(localStorage.maidoton);

    table = document.getElementById('menu');
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    titlefilow = titlefi.toLowerCase();
};

const appendTd = () => {
    td1.appendChild(document.createTextNode(p(titlefi)));
    td2.appendChild(document.createTextNode(replacepro2));
    td3.appendChild(document
        .createTextNode(p(hintaeuroilla) + '€'));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
};

const ifItAppends = () => {
    if (((replacepro2 === 'L') && (laktoositon === 1))
        || (((replacepro2 === 'G') || (replacepro2 === 'G, VL'))
            && (gluteeniton === 1))
        || ((replacepro2 === 'G, L') && (gluteeniton === 1)
            && (laktoositon === 1))
        || ((replacepro2 === 'M') && (maidoton === 1))
        || ((replacepro2 === 'G, M') && (gluteeniton === 1)
            && (maidoton === 1))
        || (((replacepro2 === '') || (replacepro2 === 'VL'))
            && (((maidoton === 0) && (gluteeniton === 0)
                && (laktoositon === 0)
                && (vegaani === 0)) || ((isNaN(maidoton))
                    && (isNaN(gluteeniton)) && (isNaN(laktoositon)))))
        || (((isNaN(maidoton)) && (isNaN(gluteeniton))
            && (isNaN(laktoositon)
                && (isNaN(vegaani))) || ((maidoton === 0)
                    && (gluteeniton === 0) && (laktoositon === 0)
                    && (vegaani === 0)))
            // vegaani
            || ((((titlefilow.includes('vegaani'))
                || ((titlefilow.includes('broi') === false)
                    && (titlefilow.includes('liha') === false)
                    && (titlefilow.includes('muna') === false)
                    && (titlefilow.includes('kinkku') === false)
                    && (titlefilow.includes('juusto') === false)
                    && (titlefilow.includes('maito') === false)
                    && (titlefilow.includes('silak') === false)
                    && (titlefilow.includes('kala') === false)
                    && (titlefilow.includes('lohi') === false)
                    && (titlefilow.includes('kalkku') === false)
                    && (titlefilow.includes('kana') === false)
                    && (titlefilow.includes('jansson') === false)
                    && (titlefilow.includes('wurst') === false)
                    && (titlefilow.includes('leike') === false)
                    && (titlefilow.includes('porsa') === false)
                    && (titlefilow.includes('kerma') === false)
                    && (titlefilow.includes('riista') === false)
                    && (titlefilow.includes('härkä') === false)
                    && (titlefilow.includes('makkara') === false)
                    && (titlefilow.includes('pytti') === false)
                    && (titlefilow.includes('pork') === false)
                    && (titlefilow.includes('chicken') === false)
                    && (titlefilow.includes('muna') === false)))
                && (vegaani === 1))))) {
        console.log('TOIMIIKO');
        appendTd();
    } else {
        console.log('EHTO EI TÄYTTYNYT');
    }
};

const getMenu = () => {
    console.log(viikonpaiva + 'VIIKONPÄIVÄ');
    if ((viikonpaiva != 6) && (viikonpaiva != 0) && (viikonpaiva != 7)) {
        document.getElementById('d' + viikonpaiva).style.borderColor = 'white';
    }
    getPvm();
    fetch('https://www.sodexo.fi/ruokalistat/output/daily_json/' + loc + '/' + date + '/fi')
        .then((response) => {
            console.log('got fetch response');
            return response.json();
        })
        .then((result) => {
            clearMenu();
            appendAndCreate();
            courses = result.courses;
            if (courses.length === 0) {
                document.getElementById('vkl')
                    .innerHTML = 'VIIKONLOPPU MEE HIMAA SYÖMÄÄ';
                    clearMenu();
            } else {
                document.getElementById('vkl').innerHTML = '';
            }
            for (let i = 0; i < courses.length; i++) {
                titlefi = s(result.courses[i].title_fi);
                pro = s(result.courses[i].properties);
                if (pro === undefined) {
                    pro = '';
                }
                hinta = s(result.courses[i].price);
                setValues();
                ifItAppends();
            }
        });
};
getMenu();

