/**
 * © 2025 K1 Freight LLC
 */





(fetchCount() {
  
  fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQFhX5xkv3eZZrUaszD0P2fiSzteU-Ny3LINFOcAtZvn-Xzue9xdHX_0w_UrRNkuGsx1gTl9HXjOP_s/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvText => {
      const cellValue = csvText.trim();
      document.getElementById("sheetNumber").innerText = cellValue;
    })
    .catch(error => {
    });

});



