let intvalue = 0;
let rsum = 0;
let Rscore = document.getElementById('Score').value;
let disableOpplick = true;
let out = document.getElementById('out');
let defeat = document.getElementById('defeat')
let won = document.getElementById('won')
let fnum = document.getElementById('fade-num')
let btn = document.getElementById('btn')
let fnum2 = document.getElementById('fade-num2')
let newmtch = document.getElementById('newmtch')
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
  fnum.textContent = 'OPPONENT TAKES - ' + randomNum

  if (numToAdd === randomNum) {
    //let out = document.getElementById('out');
    out.textContent = 'OUT';
    fnum.textContent = 'YOU TAKES - ' + numToAdd + ' ' + 'OPPONENT TAKES - ' + randomNum
    fnum.style.color = "red"
    
    setTimeout(() => {
      out.style.display = "none";
      fnum.style.display = "none"
    }, 2000);
    
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
    fnum2.textContent = 'OPPONENT TAKES - ' + randomnum  
    //console.log(randomnum)
    //let out = document.getElementById('out');
    if (Rscore > data){
      disableOpplick = true;
      defeat.textContent = 'OPPONENT WINS';
      setTimeout(() => {
        defeat.style.display = "none";
        fnum2.style.display = "none"
      }, 3000);
      newmtch.style.display = "block"
      newmtch.onclick = function NewClick(){
      window.location.reload()
      }
    }else if(num === randomnum && Rscore < data){
      fnum2.textContent = 'OPPONENT TAKES - ' + randomnum + 'YOU TAKES - ' + num
      fnum2.style.color = "green"
      disableOpplick = true;
      won.textContent = 'YOU WON';
      setTimeout(() => {
        fnum2.style.display = "none"
        won.style.display = "none";
      }, 3000);
      newmtch.style.display = "block"
    }

    }


   // Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function FaqClick() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


