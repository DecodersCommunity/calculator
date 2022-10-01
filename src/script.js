
var val,a;
function show(num)
{
document.getElementById("main").value+=num;
}
function answer(){
  z=document.getElementById("main").value;
  document.getElementById("main").value=eval(z)
}
function erase()
{
  document.getElementById("main").value=" ";
}