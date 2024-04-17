export default function bitcoinApi(url, target) {
  const bitcoinValue = document.querySelector(target);
  if (bitcoinValue) {
    async function showBitcoinValue() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        bitcoinValue.innerText = (100 / data.BRL.sell).toFixed(4);
      } catch (erro) {
        console.log(erro);
      }
    }
    showBitcoinValue();
  }
}
