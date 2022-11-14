/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.getElementById('btn__element').addEventListener('click', countClicks);
let counter = 0;
const state = document.getElementById('btn__state');

function countClicks() {
    counter++;
    state.innerHTML = counter;
}