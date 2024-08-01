function toggleMode() {
    const html = document.documentElement //atraves do documentElement eu acesso a tag html dentro do documento.

    /* if(html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("ligth")
    } 
        Se no html, na "classList" lista de classe, "contains" contém a class "light" ela é "remove" removida, se não contém, ela é "add" adicionada.*/
        
   html.classList.toggle("light") //o toggle simplifica a função acima.

   //pegar a tag imagem
   const img = document.querySelector("#profile img")

   //substituir a imagem
   if (html.classList.contains("light")) {
      //se tiver ligth, adiciona a imagem ligth
      img.setAttribute ("src", "./assets/avatar-light.png")
   } else {
      //se não tiver ligth, adiciona a imagem normal

      img.setAttribute("src", "./assets/avatar.png")
   }
}