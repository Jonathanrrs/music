class Song {
    constructor() {
        this.songs = [];
        

    }

    getData() {
        let name = document.querySelector("#name").value;
        let autor = document.querySelector("#autor").value;
        let year = document.querySelector("#year").value;
        let objSong = {
            name: name,
            autor: autor,
            year: year
        }

        return objSong;
    }

    addSong() {
        let data = this.getData()
        this.songs.push(data)
        this.print();
        let form = document.querySelector("#form");
        form.reset()
    }
   

    print() {
        let objetoSong = this.getData();
        let $print = document.querySelector('#print');
        let newDiv = document.createElement("innerHTML");
        newDiv.innerHTML = `
            <div class="agregadasBorde">
                <p class="cancionTitle">Canción</p>
                <p class="cancionName" id="cancionName">${objetoSong.name}</p>
                <img class="img" src="musica.png">
                <div class="agregadasInfo">
                    <p id="cancionInfo">${objetoSong.autor}-${objetoSong.year}</p>
                </div>
                <div class="actions">
                    <button class="btns mover"><img class="logos" id="btnLove" src="heart.png"></button>
                    <button onclick=play(this) class="btns" id="btnPlay"><img class="logos" src="play.png"></button>
                </div>
                <button class="btnDelete"><img class="logoDelete" src="delete.png"></button>
            </div> 
            `;
        return $print.appendChild(newDiv);
    }

    play() {
        let objetoSong = this.getData();
        let playing = document.querySelector("#playing");
         playing.innerHTML = `Reproduciendo... ${objetoSong.name}`;
    }   

    love() {
        let objetoSong = this.getData();
        let loving = document.querySelector("#loving");
        loving.innerHTML = `${objetoSong.name}`;
    }
   


}

let song = new Song();
document.querySelector("#btnAgregar").addEventListener("click", () => {
    song.addSong();
});

/* document.querySelector("#btnPlay").addEventListener("click", () => {
    console.log('entra');
    song.play();
}); */
/* document.querySelector("#btnLove").addEventListener("click", () => {
    console.log('entra');
    song.love()
}); */
document.querySelector("#btnPlay").addEventListener("click", play);

function play(b) {
    console.log(b);
    song.play(b);
}



