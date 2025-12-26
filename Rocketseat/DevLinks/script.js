function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("lighty")
    
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains("lighty")){
    // se tiver light mode, add imagem light
    img.setAttribute("src", './assets/myavatar-light.png')
    }
    else{
        img.setAttribute("src", './assets/myavatar.png')
    }


    
    // se tiver sem light mode, manter a imagem normal
}