function LoadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => Display(data))
}


function Display(data) {
    const DisplayPost = document.getElementById('UserPost');
    for (post of data) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
       <h3>${post.title}</h3>
       <p>${post.body}</p>
       `;
        DisplayPost.appendChild(div);
    }


}