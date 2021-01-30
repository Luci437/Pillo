// JavaScript Document
var myString = " SEMINAR TOPIC: WEB HOSTING";
var myArray = myString.split(""); var loopTimer; function frameLooper() 
{
if(myArray.length > 0) 
{ 
document.getElementById("heading-text").innerHTML += myArray.shift(); 
}
else
{ 
clearTimeout(loopTimer); return false; }
loopTimer = setTimeout('frameLooper()',200); }
frameLooper();