function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function UserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => Display(data))
}

function UserPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => DisplayPost(data))
}

function Display(data) {
    const ul = document.getElementById('UsersID')
    for (Users of data) {
        const li = document.createElement('li')
        li.innerText = `Name: ${Users.name} email: ${Users.email}`
        ul.append(li)
    }

}

function DisplayPost(data) {
    const Ul = document.getElementById('UserPost')
    for (Post of data) {
        const li = document.createElement('li')
        li.innerText = Post.title
        Ul.append(li)

    }

}