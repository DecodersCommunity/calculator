let string = "";
let buttons = document.querySelectorAll('.button');
const audio = new Audio('../assets/keyPressClick.mp3');

var play=true;
var count=1;
document.querySelector("#mute").addEventListener('click',function(){
    if(count%2){
        play=false;
    }
    else{
       play=true;
    }
    count++;
});

Array.from(buttons).forEach((button) => {
	button.addEventListener('click', (e) => {
		if(play){
		audio.play();
		}
		console.log(string)
		if (e.target.innerHTML == '=') {
			string = eval(string);
			input.value = string;
		} else if (e.target.innerHTML == 'C') {
			string = '';
			input.value = string;
		} else {
			string = string + e.target.innerHTML;
			console.log(string)
			input.value = string;
		}
	});
});

var regex = new RegExp("^[0-9-/()%*+-M]");


input.addEventListener('input', function (e) {
	if (this.checkValidity()) {
		string = this.value;
	} else {
		this.value = string;
	}
});

body.addEventListener('keyup',
	function (e) {
		if (e.key == "Enter") {
			if(play) {
			audio.play();
			}
			string = eval(input.value);
			input.value = string;
		} else if (e.key == "Delete") {
			if(play) {
			audio.play();
			}
			string = '';
			input.value = string;
		} else if (regex.test(e.key)) {
			if(play) {
			audio.play();
			}
			input.focus();
			var val = input.value;
			input.value = '';
			input.value = val;
		}
	}
);

