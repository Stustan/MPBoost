let clickCount = 0;
function swapText(){
  clickCount++;
  let firstElement = document.getElementById('blockHeader');
  let secondElement = document.getElementById('blockText');

  let temp = firstElement.innerText;
  firstElement.innerText = secondElement.innerText;
  secondElement.innerText = temp;

  document.getElementById('blockButton').innerText = clickCount;
}
