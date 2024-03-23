let intvalue = 0;
let rsum = 0;
let Rscore = document.getElementById('Score').value;
let disableOpplick = true;
let out = document.getElementById('out');
let defeat = document.getElementById('defeat')
let won = document.getElementById('won')
let data;


function handleClick(numToAdd) {

  
  let inputValue = document.getElementById("score").value;
  inputValue = parseInt(intvalue);
  intvalue += numToAdd;
  document.getElementById("score").value = intvalue
  const min = 1;
  const max = 6;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  if (numToAdd === randomNum) {
    //let out = document.getElementById('out');
    out.textContent = 'OUT';
    setTimeout(() => {
      out.style.display = "none";
    }, 3000);
    handleClick = null
    disableOpplick = false;
    data = document.getElementById("score").value
    
    
  }
}
    
    function oppClick(num){
    if (disableOpplick) return;
    const Min = 1; 
    const Max = 6; 
    let randomnum; 
    randomnum = Math.floor(Math.random() * Max) + Min;
    rsum += randomnum 
    Rscore = parseInt(rsum);
    document.getElementById("Score").value = rsum;
    //console.log(randomnum)
    //let out = document.getElementById('out');
    if (Rscore > data){
      disableOpplick = true;
      defeat.textContent = 'OPPONENT WINS';
      setTimeout(() => {
        defeat.style.display = "none";
      }, 3000);
    }else if(num === randomnum && Rscore < data){
      disableOpplick = true;
      won.textContent = 'YOU WON';
      setTimeout(() => {
        won.style.display = "none";
      }, 3000);
    }

    }



