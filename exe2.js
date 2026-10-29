async function main() {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
    const resposta = await fetch(url);
    //posts é um vetor de objeto JS
    
    const posts = await resposta.json();
   
    console.log("Posts recebidos:", posts.length);
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].id, "-", posts[i].title.substring(0, 30));
    }
  }
  main();
