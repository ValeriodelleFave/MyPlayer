function init() {

}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function loadFile(params) {
    console.log(params.target)
}


document.getElementById("inputVideo").addEventListener('change', function() {
    const file = this.files[0];
    const video = document.getElementById("video");

    
    //video.attributes.getNamedItem('src').value = file;
     
    debugger
    var source = document.getElementById('source');   
    source.setAttribute('sizes', file.size);
    source.setAttribute('type', file.type);
   video.play()
})