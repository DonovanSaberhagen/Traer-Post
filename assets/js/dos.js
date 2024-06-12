const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
//const postSection = document.getElementById("post")

const buttonPost = document.getElementById("btnposts");
const postsList = document.getElementById("postsList");

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    
    data.forEach((post) => {
        
        postsList.innerHTML += `<div class="col"><div class="card">
  <div class="card-header">
  ${post.id}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${post.title}</p>
      <footer class="blockquote-footer">${post.body}</footer>
    </blockquote>
  </div>
</div></div>`;
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
*/