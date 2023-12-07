const apikey= 'rcxD0fHQVmgslc7pMLgSERxkLu0oRnhq' //enlace al api key
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`) //acceso al endpoint (para ello debemos tener en cuenta el valor
//del apikey)
.then(resp=> resp.json()) //usamos una captura de excepcion, si accede al api rest entonces convertira el contenido de la api a un archivo json
.then(({data}) =>{ //usamos captura de execpciones para capturar el valor de la data
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src=url 
    document.body.append(img)
})

var hover = document.getElementsByClassName('h1')

hover.forEach(function(option) {
    option.addEventListener('mouseover', function() {
        this.classList.add('hovered');
    });

    option.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
    });
});