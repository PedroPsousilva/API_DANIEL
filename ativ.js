async function main() {
    //VARIAVEl que guarda  URL da API
   const url = "https://jsonplaceholder.typicode.com/users/1";
   // chama e guarda a resposta da API
   const resposta = await fetch(url);
   //converte o texto em json em Objeto JS

     const usuario = await resposta.json();
   console.log("Nome:", usuario.name);
   console.log("E-mail:", usuario.email);
   console.log("Cidade:", usuario.address.city);
   }
 main();
