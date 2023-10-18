function calculateCost() {
    const area = document.getElementById("area").value;
    const cost = (area / 25) * 20;
    document.getElementById("result").innerHTML = "Cost: $" + cost.toFixed(2);

    if(((area / 25) * 20) <= 300)
    {
        console.log("Small");
        document.getElementById("recommend").innerText = "Small Package";
    }
    else if(((area / 25) * 20) <=1000){
        console.log("Medium");
        document.getElementById("recommend").innerText = "Medium Package";
    }
    else{
        console.log("Large");
        document.getElementById("recommend").innerText = "Larg Package";
    }
}
