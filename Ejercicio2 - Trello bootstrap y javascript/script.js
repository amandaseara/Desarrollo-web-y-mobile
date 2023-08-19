
/*//////////////////Icon home///////////////////////*/

function handleClickHome(){
    alert('You clicked homepage!')
}

const myButtonHome = document.getElementById('home');
myButtonHome.addEventListener('click', handleClickHome);

/*//////////////////Icon boards///////////////////////*/

function handleClickBoards(){
    alert('You clicked boards!')
}

const myButtonBoards = document.getElementById('boards');
myButtonBoards.addEventListener('click', handleClickBoards);

/*/////////////////Icon fav////////////////////////*/

const myButtonFav = document.getElementById('fav');
myButtonFav.addEventListener('click',handleClickFav);

function handleClickFav(){
    if (myButtonFav.className == "bi bi-star-fill"){
        myButtonFav.classList = "bi bi-star"
    } else {
    myButtonFav.classList = "bi bi-star-fill"
    }
}
