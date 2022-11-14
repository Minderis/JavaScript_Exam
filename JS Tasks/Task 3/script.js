/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', updateForm);
const output = document.getElementById('output');

function updateForm() {
    output.innerHTML = "";
    showUsers();
}

async function showUsers() {
    try {
        await fetch(ENDPOINT)
            .then(res => res.json())
            .then(response => {
                response.forEach((element, index) => {
                    const container = newElement('div', 'id', 'container' + index, 'class', 'container');
                    container.style.backgroundColor = 'lightyellow';
                    const userLogin = newElement('div', 'id', 'user' + index, 'class', 'userLogin');
                    const userAvatar = newElement('div', 'id', 'avatar' + index, 'class', 'userAvatar');
                    const avatarImg = newElement('img', 'id', 'image' + index, 'class', 'image');
                    avatarImg.setAttribute('src', element.avatar_url);
                    userLogin.innerHTML = element.login;
                    userAvatar.appendChild(avatarImg);
                    container.append(userLogin, userAvatar);
                    output.appendChild(container);
                });
            })
    } catch (error) {
        console.log(error);
    }
}

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
