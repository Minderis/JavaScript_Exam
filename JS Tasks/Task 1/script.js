/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const kg = document.getElementById('search').value;
    convertUnits(kg);
});

function convertUnits(kg) {
    const pounds = kg * 2.2046;
    const grams = kg / 0.0010000;
    const ounces = kg * 35.274;
    document.getElementById('output').innerHTML = '<div> In pounds: ' + pounds + ' lb</div>' + 
    '<div> In grams: ' + grams + ' gr</div>' + 
    '<div> In ounces: ' + ounces + ' oz</div>';
}

