function GetDataLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(Response => Response.json())
        .then(data => imagesData(data))
}

function imagesData(data) {

    const ImagesDataLoad = document.getElementById('ImagesSection');
    for (post of data) {
        const img = document.createElement('img')
        img.innerHTML = `
        <img src="${post.url}" alt="">
        `;
        ImagesDataLoad.appendChild(img)

    }





}