const buddysFrnd = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => Display(data))
}

const Display = data => {

    const Buddy = data.results
    const BuddysBoy = document.getElementById('buddys');
    for (buddys of Buddy) {
        const p = document.createElement('p');
        p.innerText = ` Name:${buddys.name.first} email: ${buddys.email} 
        `
        BuddysBoy.appendChild(p)

    }





}