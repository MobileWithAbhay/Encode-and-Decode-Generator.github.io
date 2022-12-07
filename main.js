var link = document.querySelector('.link');
var format = document.querySelector('.format');
var hidden = document.querySelector('.hidden');
function Direct() {
if(link.value!=""){
switch(format.value){
  case "Encode":
  hidden.classList.add('active');
  var resEncode = encodeURIComponent(link.value);
  document.querySelector(".result").value = resEncode;
  break;
  case "Decode":
  hidden.classList.add('active');
  var resDecode = decodeURIComponent(link.value);
  document.querySelector(".result").value = resDecode;
    break;
    
     }
   }
   else{
       alert('Enter Your Url');
     }
 }
var result = document.querySelector('.result');
function clipboard(){
  const textarea = document.createElement('textarea');
  const resultE = result.value;
  if (!result) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert("👇URL Copied to Clipboard👇\n"+result.value);

}
