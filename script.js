let intvalue = 0;
let rsum = 0;
let Rscore = document.getElementById('Score').value;

function handleClick(numToAdd) {

  
  let inputValue = document.getElementById("score").value;
  inputValue = parseInt(intvalue);
  intvalue += numToAdd;
  document.getElementById("score").value = intvalue
  const min = 1;
  const max = 6;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  let out = document.getElementById('gameover');
  if (numToAdd === randomNum) {
    out.textContent = 'OUT';
    setTimeout(() => {
      out.style.display = "none";
    }, 3000);
    handleClick = null
  }
}
    function oppClick(num){
    const Min = 1; 
    const Max = 6; 
    let Randomnum; 
    Randomnum = Math.floor(Math.random() * Max) + Min;
    rsum += Randomnum 
    Rscore = parseInt(rsum);
    document.getElementById("Score").value = rsum;
    console.log(Randomnum)
    let out = document.getElementById('gameover');
    if (Randomnum === num){
      out.textContent = 'OUT';
      setTimeout(() => {
        out.style.display = "none";
      }, 3000);
    }
    }






//if(randomNum === numToAdd){
    //function handleClickOpponent(randomToAdd){
    //Rsum = randomnum
    //document.getElementById("Score").value = Rsum
    //const Min = 1;
    //const Max = 6;
    //let randomnum;
    //randomnum = Math.floor(Math.random() *Max) + Min
    //console.log(randomnum)
    //Rscore = String(Rsum)

  //}
//}


//let btn = document.getElementById('button')
//
//btn.onclick = function Click(btn1,btn2, btn3, btn4, btn5){
//  btn1 = 1
//  btn2 = 2
//  btn3 = 3
//  btn4 = 4
//  btn5 = 5
//
//  
//
//}
