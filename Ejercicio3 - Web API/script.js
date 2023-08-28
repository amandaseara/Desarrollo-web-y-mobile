
/*/////////////////////MENU///////////////////////////*/

/*Icon home*/

function handleClickHome(){
    alert('You clicked homepage!')
}

const myButtonHome = document.getElementById('home');
myButtonHome.addEventListener('click', handleClickHome);

/*Icon boards*/

function handleClickBoards(){
    alert('You clicked boards!')
}

const myButtonBoards = document.getElementById('boards');
myButtonBoards.addEventListener('click', handleClickBoards);

/*Icon search*/

function handleClickSearch(){
    alert('You clicked search!')
}

const myButtonSearch = document.getElementById('search');
myButtonSearch.addEventListener('click', handleClickSearch);

/*////////////////////////OPTIONS/////////////////////////////*/

/*Icon fav*/

const myButtonFav = document.getElementById('fav');
myButtonFav.addEventListener('click',handleClickFav);

function handleClickFav(){
    if (myButtonFav.className == "bi bi-star-fill"){
        myButtonFav.classList = "bi bi-star"
    } else {
    myButtonFav.classList = "bi bi-star-fill"
    }
}

/*//////////////////////LISTS////////////////////////////*/

/*Add another list*/

function handleClickAddList(){
    alert('You clicked Add List!')
}

const myButtonAddList = document.getElementById('addList');
myButtonAddList.addEventListener('click', handleClickAddList);

/*to do list*/

const url = "https://mocki.io/v1/4d8d13b5-2e4a-4970-b7ff-6b30d4b7065a";
var registro = 0;
console.log(registro);

async function fetchData() {
    try {
        const result = await fetch(url, { method: "GET" });
        data = await result.json();
        return data;
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
}

async function createCard() {
    const payload = await fetchData();

    let htmlData = 
    `
        <div id="Card-${registro}" class="TheCard"">
            <div class="card text-bg-light mb-3 text-center w-90">
                <div class="card-header">${payload["registro"][registro].cardHeader}</div>
                <div>
                    <span class="material-symbols-outlined" 
                        onclick="deleteCardOfWorld('Card-${registro}')">
                        delete
                    </span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${payload["registro"][registro].cardTitle}</h5>
                    <p class="card-text">${payload["registro"][registro].cardText}</p>
                </div>
            </div>
        </div>
    `;
    registro < 9 ? ++registro : registro = 0;
    return htmlData
    
}

//funcion que recibe la solicitud de una nueva card.
async function addCardInBucket(list) {
    const dropList = document.getElementById(list);
    const theCard = dropList.getElementsByClassName("card")[0];
    const element = await createCard();
    theCard.insertAdjacentHTML("beforebegin" ,element);
}

