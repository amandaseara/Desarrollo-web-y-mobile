
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

/*Add card To Do*/

const myButtonAddCardToDo = document.getElementById('addToDo');
myButtonAddCardToDo.addEventListener('click', handleClickAddCardToDo);
const addCardToDo = document.getElementById('cardToDo');

function handleClickAddCardToDo(){
    let p = document.createElement("p");
    p.innerHTML = window.prompt("Create new assignment:");
    addCardToDo.appendChild(p);
}

/*Add card In Progress*/

const myButtonAddCardInProgress = document.getElementById('addInProgress');
myButtonAddCardInProgress.addEventListener('click', handleClickAddCardInProgress);
const addCardInProgress = document.getElementById('cardInProgress');

function handleClickAddCardInProgress(){
    let p = document.createElement("p");
    p.innerHTML = window.prompt("Create new assignment:");
    addCardInProgress.appendChild(p);
}

/*Add card Done*/

const myButtonAddCardDone = document.getElementById('addDone');
myButtonAddCardDone.addEventListener('click', handleClickAddCardDone);
const addCardDone = document.getElementById('cardDone');

function handleClickAddCardDone(){
    let p = document.createElement("p");
    p.innerHTML = window.prompt("Create new assignment:");
    addCardDone.appendChild(p);
}
