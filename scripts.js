// Selecting DOM elements for form, input fields, and result display
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Adding an input event listener to the amount field to ensure only numeric input in real time when the user types
amount.addEventListener("input", () => {
  const hasCharsRegex = /\D+/g
  amount.value = amount.value.replace(hasCharsRegex, "")
  }
)

// Adding a submit event listener to the form to handle currency conversion when the user submits the form
form.onsubmit = (e) => {
  e.preventDefault() // Prevents the default form submission behavior (page reload) to allow for custom handling

  switch (currency.value) {
    case "USD":
      getExchangeRates("USD").then((rate) => convertCurrency(amount.value, rate, "US$"))
      break
    case "EUR":
      getExchangeRates("EUR").then((rate) => convertCurrency(amount.value, rate, "€"))
      break
    case "GBP":
      getExchangeRates("GBP").then((rate) => convertCurrency(amount.value, rate, "£"))
      break
    case "RUB":
      getExchangeRates("RUB").then((rate) => convertCurrency(amount.value, rate, "₽"))
      break
    case "CNY":
      getExchangeRates("CNY").then((rate) => convertCurrency(amount.value, rate, "¥"))
      break
    }
}

/**
 * Fetches live exchange rates for a given currency
 * @param {string} currency 
 * @returns {Promise<number>} 
 */
async function getExchangeRates(currency) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/8bcecf1f9401787bd706089c/latest/${currency}`)
  const data = await response.json();
  return data.conversion_rates.BRL;
}

/** 
 * Function to convert currency based on user input and selected currency, then display the result in Brazilian Reais (BRL).
 * @param {number} amount 
 * @param {number} price 
 * @param {string} symbol 
 */
function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    total = amount * price

    if (isNaN(total)) {
      return alert("Please enter a valid amount")
    }

    result.textContent = formatCurrencyBRL(total)
    footer.classList.add("show-result")
  } catch(error){
    console.log(error)
    footer.classList.remove("show-result")
    alert("Conversion Failed")
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}