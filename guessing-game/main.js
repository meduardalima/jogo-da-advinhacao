const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let xAttempts = 1;

// eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

//função callback
function handleTryClick(event) {
  event.preventDefault(); //não faz o padrão desse evento, que é atualizar a página

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`; //pegue a tag h2 do id screen2 e troque o texto (adicionando um texto dentro de um elemento)
  }
  inputNumber.value = ""; //sempre que eu clicar neste botão, o input ficará vazio
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide"); //pegue o id scrren1 e adicione a classe hide
  screen2.classList.toggle("hide"); //pegue o id screen2 e remova a classe hide
}
