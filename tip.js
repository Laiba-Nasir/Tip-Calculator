//Calculate Tip
function calculateTip(){
    var billAmt=document.getElementById("billamt").value;
    var serviceQual=document.getElementById("serviceQual").value;
    var numberofPeople=document.getElementById("peopleamt").value;
    //validate input
    if(billAmt===""||serviceQual==0){
        alert("please enter value");
        return;
    }
    //to check if input is empty or less than or equal to 1
    if(numberofPeople==""||numberofPeople<=1){
        numberofPeople=1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }
    //calculate tip
    var total=(billAmt*serviceQual)/numberofPeople;
    //round to two decimal
    total=Math.round(total);
    //display it
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;
}
//hide the tip on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
//click to call funtion
document.getElementById("calculate").onclick=function(){
calculateTip();
};