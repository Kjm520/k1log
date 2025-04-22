export function fetchLoadCount() {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFhX5xkv3eZZrUaszD0P2fiSzteU-Ny3LINFOcAtZvn-Xzue9xdHX_0w_UrRNkuGsx1gTl9HXjOP_s/pub?gid=0&single=true&output=csv";
  return fetch(url)
    .then(r => r.text())
    .then(text => text.trim());
}
