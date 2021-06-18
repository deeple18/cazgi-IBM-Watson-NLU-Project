function compute()
{
   var p,r,t,si;
    p = document.getElementById("principal").value;
    t=parseInt(document.getElementById("years").value);
    r=document.getElementById("rate").value;
   si=parseInt((p*t*r)/100);
   var year= new Date().getFullYear() + t-1;
   
document.getElementById('result').innerHTML="If you deposit "+p+" , <br>at an interest rate of  "+r+". <br>You will receive an amount of  "+si+", <br>in the year "+year+" .";
}

function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}     
function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
