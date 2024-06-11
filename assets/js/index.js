const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
//const postSection = document.getElementById("post")

const fetchButton = document.getElementById('btnposts');
const postsList = document.getElementById('postsList');

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        postsList.innerHTML = ''; // Clear previous posts

        data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `**Post ID:** ${post.id} - **Title:** ${post.title} - **Body:** ${post.body}`;
            postsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error en el posts:', error);
        alert('Error al recuperar publicaciones. intentelo mas tarde');
    }
}

fetchButton.addEventListener('click', fetchPosts);