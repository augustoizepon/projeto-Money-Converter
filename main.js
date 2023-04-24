const convertButton = document.getElementById("convert-money")

const dolar = 5.2

const euro = 5.4;

const selectionMoney = document.getElementById("select-to")

const convertValues = () => {
    if (selectionMoney.value === "dolar") {
        const currentValue = document.getElementById("money-value").value
        const currentValueFormated = currentValue.toLocaleString("pt-BR")
        const realValueText = document.getElementById("money-from-result-value")
        const dolarValueText = document.getElementById("money-to-result-value")
        const convertedValue = currentValue / dolar
        const moneyResult = document.getElementById("money-to-result")
        const moneySvg = document.getElementById("money-to-img")
        moneySvg.src = "img/estados-unidos (1) 1.svg"
        moneyResult.innerHTML = "Dolar"
        realValueText.innerHTML = "R$ " + currentValueFormated
        dolarValueText.innerHTML = convertedValue.toLocaleString("pt-BR", { style: "currency", currency: "USD" })
    } else if (selectionMoney.value === "euro") {
        const currentValue = document.getElementById("money-value").value
        const realValueText = document.getElementById("money-from-result-value")
        const euroValueText = document.getElementById("money-to-result-value")
        const convertedValue = currentValue / euro
        const moneyResult = document.getElementById("money-to-result")
        const moneySvg = document.getElementById("money-to-img")
        moneySvg.src = "img/Design sem nome 1.svg"
        moneyResult.innerHTML = "Euro"
        realValueText.innerHTML = "R$ " + currentValue.toLocaleString("pt-BR")
        euroValueText.innerHTML = convertedValue.toLocaleString("pt-BR", { style: "currency", currency: "EUR" })
    }
}

convertButton.addEventListener("click", convertValues)