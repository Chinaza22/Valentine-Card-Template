const cardBackground = document.getElementById ("card-container").firstElementChild;

const backgrounds = document.getElementsByClassName ("background-choice");

const cardText = document.getElementById("card-text");

const userText = document.getElementById ("user-text");


const updateText = () =>{
  cardText.innerHTML = userText.value
}


const changeBackground = (selectedBackground) =>{
  cardBackground.src = selectedBackground
} 




for (let i = 0; i<backgrounds.length; i++){
  backgrounds[i].addEventListener("click", () => changeBackground(backgrounds[i].firstElementChild.src));
}

const changeColor = (selectedColor) => {
  cardText.style.color = selectedColor;
}