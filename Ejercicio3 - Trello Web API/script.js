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
let registro = 0;
let cardId = 0;

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
        <div id="Card-${cardId}" class="TheCard"">
            <div class="accordion accordion-flush">
                <div class="accordion-item m-1 rounded-3">
                    <div class="accordion-header" id="flush-heading${cardId}">
                        <div class="accordion-button collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${cardId}" aria-expanded="false" aria-controls="flush-collapse${cardId}">
                            ${payload["registro"][registro].cardTitle}
                        </div>
                    </div>
                    <div id="flush-collapse${cardId}" class="accordion-collapse collapse" aria-labelledby="flush-heading${cardId}" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>${payload["registro"][registro].cardText}</p>
                            <div>
                                <i class="bi bi-trash" onclick="deleteCard('Card-${cardId}')"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    registro < 9 ? ++registro : registro = 0;
    cardId++;
    return htmlData
    
}

async function addCardInBucket(list) {
    const listCards = document.getElementById(list);
    const theCard = listCards.getElementsByClassName("card")[0];
    const element = await createCard();
    theCard.insertAdjacentHTML("beforebegin" ,element);
}

function deleteCard(cardId){
    const theCardRemove = document.getElementById(cardId);
    theCardRemove.remove();
}
