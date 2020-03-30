
const result = document.getElementById("coin_result") 
function convertCurrency(form) {
    const from = form.from_coin.value
    const to = form.to_coin.value
    const amount = form.coin_val.value
    
    if(from === to )
    {
        letter = from == "E" ? " €" : (from == "D" ? " $": " ¥") 
        result.innerHTML = amount + letter
    }
    if(from == "E" && to == "D")
    {
        result.innerHTML = (amount*1.11).toFixed(2) + " $"
    }
    if(from == "E" && to == "Y")
    {
        result.innerHTML = (amount*119.40).toFixed(2) + " ¥"
    }
    if(from == "D" && to == "E")
    {
        result.innerHTML = (amount*0.90).toFixed(2) + " €"
    }

    if(from == "D" && to == "Y")
    {
        result.innerHTML = (amount*107.91).toFixed(2) + " €"
    }
    
    if(from == "Y" && to == "D")
    {
        result.innerHTML = (amount*0.0093).toFixed(2) + " €"
    }


    if(from == "Y" && to == "E")
    {
        result.innerHTML = (amount*0.90).toFixed(2) + " €"
    }


    console.log(from)
    console.log(to)
}