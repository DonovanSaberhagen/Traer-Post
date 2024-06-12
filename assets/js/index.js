const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
//const postSection = document.getElementById("post")

const buttonPost = document.getElementById("btnposts");
const postsList = document.getElementById("postsList");

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    postsList.innerHTML = "";

    data.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${post.id} - ${post.title} - ${post.body}`;
      postsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error en el posts:", error);
    return alert("Error al recuperar publicaciones. intentelo mas tarde");
  }
}

buttonPost.addEventListener("click", fetchPosts);

/*
                <div class="card">
  <div class="card-header">
  ${post.id}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${post.title}</p>
      <footer class="blockquote-footer">${post.body}</footer>
    </blockquote>
  </div>
</div>



const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const buttonPost = document.getElementById('btnposts');
const postsList = document.getElementById('postsList');

async function fetchPosts() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        
        postsList.innerHTML = '';
        
        data.forEach(post => {
            
            const card = document.createElement('div');
            card.classList.add('card');
            
            const cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            cardHeader.textContent = post.id;
            
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            
            const blockquote = document.createElement('blockquote');
            blockquote.classList.add('blockquote', 'mb-0');
            
            const title = document.createElement('p');
            title.textContent = post.title;
            
            const body = document.createElement('footer');
            body.classList.add('blockquote-footer');
            body.textContent = post.body;
            
            blockquote.appendChild(title);
            blockquote.appendChild(body);
            cardBody.appendChild(blockquote);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            
            
            postsList.appendChild(card);
            });
            } catch (error) {
                console.error('Error en el posts:', error);
                return alert('Error al recuperar publicaciones. Intentelo más tarde');
                }
                }
                
                buttonPost.addEventListener('click', fetchPosts);
                
                
                */
