class Song {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;

    }
}

class UI {
    addSong(song) {
        let songList = document.querySelector("#print");
        let element = document.createElement("div");
        element.className = "agregadasBorde"
        element.innerHTML = `
                <p class="cancionTitle">Canción</p>
                <p class="cancionName" id="cancionName">${song.name}</p>
                <img class="img" src="imgs/musica.png">
                <div class="agregadasInfo">
                    <p id="cancionInfo">${song.author}-${song.year}</p>
                </div>
                <div class="actions">
                        <button class="btns mover"><img class="logos" id="btnLove"  data-loving="${song.name}-${song.author}" name="love" src="imgs/heart.png"></button>
                        <button  class="btns" id="btnPlay"><img data-nombre="Reproduciendo...${song.name}" class="logos" name="play" src="imgs/play.png"></button>
                </div>
                <button class="btnDelete"><img class="logoDelete" name="delete" src="imgs/delete.png"></button>
        `;
        songList.appendChild(element)
    }

    resetForm() {
        document.querySelector("#form").reset();
    }


    playSong(element) {
        console.log(element);
        let playing = document.querySelector("#playing");
        if (element.name == "play") {
            playing.innerHTML = `${element.dataset.nombre} <img class="playing-img" src="playing.png">`; /* dataset es para poder manejar los datos de los atributos personalizados */
        }
    }
    
    loveSong(element) {
        console.log(element.parentElement.parentElement);
        let loving = document.querySelector("#loving");
        if(element.name == "love") {
            loving.innerHTML += `<img class="cora" src="heart.png"> ${element.dataset.loving} <br> `;
            /* loving.innerHTML = `${this.addLoveSong()}` */
        }
    }
   /*  addLoveSong() {
        let lovesList = document.querySelector("#cancionesLoves");
        let element = document.createElement("p");
        element.innerHTML = `${this.loveSong(element)}`;
        lovesList.appendChild(element);
    } */
    
    delete(element) {
        if(element.name == "delete") {
            element.parentElement.parentElement.remove();
            this.prints();
        }
    }

    prints() {
        let playing = document.querySelector("#playing");
        let loving = document.querySelector("#loving");
        playing.innerHTML = "";
        loving.innerHTML = "";
    }
}

document.querySelector("#btnAgregar").addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let autor = document.querySelector("#autor").value;
    let year = document.querySelector("#year").value;
    let song = new Song(name, autor, year)
    let ui = new UI();
    ui.addSong(song)
    ui.resetForm();
});

document.querySelector("#print").addEventListener("click", (event) => {
    const ui = new UI();
    ui.playSong(event.target)
});

document.querySelector("#print").addEventListener("click", (event) => {
    const ui = new UI();
    ui.loveSong(event.target)
    /* ui.addLoveSong() */
});

document.querySelector("#print").addEventListener("click", (event) => {
   const ui = new UI();
   ui.delete(event.target)
  /*  ui.prints(); */
   /* console.log(ui.delete()); */

});
