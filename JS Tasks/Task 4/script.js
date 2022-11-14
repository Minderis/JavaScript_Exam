/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.getElementById('output');

async function showCars() {
    try {
        await fetch(ENDPOINT)
            .then(res => res.json())
            .then(response => {
                const containerTitle = newElement('div', 'id', 'containerBlockTitle', 'class', 'containerBlockTitle');
                const carBrandTitle = newElement('div', 'id', 'carBrandTitle', 'class', 'carBrandTitle');
                const carModelsTitle = newElement('div', 'id', 'carModelsTitle', 'class', 'carModelsTitle');
                carBrandTitle.innerHTML = 'Brands';
                carModelsTitle.innerHTML = 'Available models';
                containerTitle.append(carBrandTitle, carModelsTitle);
                output.appendChild(containerTitle);
                response.forEach((element, index) => {
                    const container = newElement('div', 'id', 'containerBlock' + index, 'class', 'containerBlock');
                    container.style.backgroundColor = 'lightcyan';
                    const carBrand = newElement('div', 'id', 'carBrand' + index, 'class', 'carBrand');
                    const carModels = newElement('div', 'id', 'carModels' + index, 'class', 'carModels');
                    carBrand.innerHTML = element.brand;
                    element.models.forEach(insideElement => {
                        const uniqueCarModel = newElement('div', 'class', 'uniqueCarModel');
                        uniqueCarModel.innerHTML = insideElement;
                        carModels.appendChild(uniqueCarModel);
                    });
                    container.append(carBrand, carModels);
                    output.appendChild(container);
                });
            })
    } catch (error) {
        console.log(error);
    }
}

showCars();

// create new element: first argument = element name, all other key -> value pairs, class can be defined multiple times
function newElement(...args) {
    const element = document.createElement(args[0]);
    for (let i = 1; i < args.length; i = i + 2) {
        if (args[i] && args[i + 1]) {
            if (args[i] == 'class') {
                element.classList.add(args[i + 1]);
            } else {
                element.setAttribute(args[i], args[i + 1]);
            }
        }
    }
    return element;
}
