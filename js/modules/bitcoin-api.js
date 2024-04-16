export default function bitcoinApi(urls, target) {
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





























// export default function initBitcoinApi() {
//   const bitcoinValue = document.querySelector("[data-bitcoin]");
//   if (bitcoinValue) {
//     async function showBitcoinValue() {
//       try {
//         const response = await fetch("https://blockchain.info/ticker");
//         const data = await response.json();
//         bitcoinValue.innerText = (100 / data.BRL.sell).toFixed(4);
//       } catch (erro) {
//         console.log(erro);
//       }
//     }
//     showBitcoinValue();
//   }
// }
