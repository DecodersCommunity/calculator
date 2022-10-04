let string = "";
let buttons = document.querySelectorAll('.button');
// audio which will be played on click
const clickAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      // playing audio
      clickAudio.play();
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
      // playing audio
      clickAudio.play();
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      // playing audio
      clickAudio.play();
    }
  })
})

