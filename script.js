const rates = {
  USD: 1,
  EUR: 0.91,
  INR: 83,
  CNY: 7.27,
  JPY: 161.4,
  AUD: 1.49,
  RUB: 89.5,
  KRW: 1385
};

const currencyNames = {
  USD: "US Dollar",
  EUR: "Euro",
  INR: "Indian Rupee",
  CNY: "Chinese Yuan",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  RUB: "Russian Ruble",
  KRW: "Korean Won"
};

const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");

// Populate dropdowns
for (let code in rates) {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  option1.value = option2.value = code;
  option1.text = option2.text = `${currencyNames[code]} (${code})`;
  fromSelect.appendChild(option1);
  toSelect.appendChild(option2);
}

fromSelect.value = "USD";
toSelect.value = "INR";

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "Please enter a valid amount.";
    return;
  }

  const inUSD = amount / rates[from];
  const converted = inUSD * rates[to];

  document.getElementById("result").innerText =
    `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}