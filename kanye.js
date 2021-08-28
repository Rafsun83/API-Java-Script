const KanyeQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => Display(data))
}

const Display = (data) => {
    const KanyeQuotes = document.getElementById('quote')
    KanyeQuotes.innerText = data.quote

}