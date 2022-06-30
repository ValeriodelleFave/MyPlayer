async function init() {
    let d = await fetchAsync("http://localhost:3000/player");
    console.log(typeof d);
}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}