export default function initFetchBitcoin() {
  const bitcoinValue = document.querySelector("[data-bitcoin]");
  if (bitcoinValue) {
    async function showBitcoinValue() {
      try {
        const response = await fetch("https://blockchain.info/ticker");
        const data = await response.json();
        bitcoinValue.innerHTML = (100 / data.BRL.sell).toFixed(4);
      } catch (erro) {
        console.log(erro);
      }
    }
    showBitcoinValue();
  }
}
