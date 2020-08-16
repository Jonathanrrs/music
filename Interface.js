export default class Interface {
    constructor() {
        this.listSong = [];
        this.loveSong = [];
        this.playingSong = [];
    }


    //searches
    /* Refactor */
    findSong(data) {
        let searching = this.listSong.map(search => search.name);
        let position = searching.indexOf(data);
        return position;
    }

    /* Refactor */
    findLove(data) {
        let position = this.loveSong.indexOf(data);
        return position;
    }
    /* Refactor */

    findPlaying(data) {
        let position = this.playingSong.indexOf(data);
        return position;
    }
    //Actions
    addSong() {
        let data = this.getData();
        if(data.name == "" || data.author == "" || data.year == "") {
            swal("Completa los campos!", "Haz click para continuar!", "error");
        } else{
            let found = this.findSong(data.name);
            if(found >= 0) {
                swal("Ya existe esta canción!", "Haz click para continuar!", "error");
            } else{
                this.listSong.push(data);
            }
        }
    }

    deleteSong(element) {
        let loveDelete = element.dataset.love;
        let foundLove = this.findLove(loveDelete)
        let found = this.findSong(element.dataset.delete);
        if (element.name == "delete" && found > -1) {
            this.listSong.splice(found, 1);
            swal("Eliminado correctamente!", "Haz click para continuar!", "success");
            if(foundLove>-1) {
                this.loveSong.splice(foundLove,1);
                document.querySelector("#loving").innerHTML = "";
                this.printLove();
            }
            if(this.loveSong.length == 0) {
                document.querySelector("#loving").innerHTML = "No hay en este momento";
            }
            if(this.playingSong[0] === element.dataset.delete) {
                this.playingSong.splice(0,1)
                document.querySelector("#playing").innerHTML = "Sin reproducción";
            } 
        }
    }

    love(element) {
        if(element.name == "love") {
            let found = this.findLove(element.dataset.loving);
            if(found >= 0) {
                swal("Ya existe en la lista!", "Haz click para continuar!", "error");
            } else{
                this.loveSong.push(element.dataset.loving);
                swal("Agregada a la lista!", "Haz click para continuar!", "success"); 
                document.querySelector("#loving").innerHTML = "";
                this.printLove();
            }

        }
    }

    play(element) {
        let playing = document.querySelector("#playing");
        if(element.name == "play") {
            if(this.playingSong.length == 0) {
                this.playingSong.push(element.dataset.suena)
                playing.innerHTML = `${element.dataset.nombre} <img class="playing-img" src="imgs/playing.png">`
                swal("Reproduciendo!", "Haz click para continuar!", "success");
            }
            else{
                this.playingSong.splice(0,1);
                this.playingSong.push(element.dataset.suena);
                playing.innerHTML = `${element.dataset.nombre} <img class="playing-img" src="imgs/playing.png">`
                swal("Reproduciendo!", "Haz click para continuar!", "success");
            }
        }
    
    }

    //Prints
    print() {
        for (let i = 0; i < this.listSong.length; i++) { 
            let songPrint = document.querySelector("#print");
            let element = document.createElement("div");
            element.className = "agregadasBorde";
            element.innerHTML += `<p class="cancionTitle">Canción</p>
            <p class="cancionName" id="cancionName">${this.listSong[i].name}</p>
            <img class="img" src="imgs/musica.png">
            <div class="agregadasInfo">
                <p id="cancionInfo">${this.listSong[i].author}-${this.listSong[i].year} </p>
            </div>
            <div class="actions">
                    <button class="btns mover"><img class="logos" id="btnLove" data-loving="${this.listSong[i].name}-${this.listSong[i].author}" name="love" src="imgs/heart.png"></button>
                    <button  class="btns" id="btnPlay"><img data-suena="${this.listSong[i].name}" data-nombre="Reproduciendo...${this.listSong[i].name}" class="logos" name="play" src="imgs/play.png"></button>
            </div>
            <button class="btnDelete"><img class="logoDelete" data-love="${this.listSong[i].name}-${this.listSong[i].author}" data-delete="${this.listSong[i].name}" name="delete" id="delete" src="imgs/delete.png"></button>
            `;
            songPrint.appendChild(element)
        }
        
    }

    printLove() {
        let loving = document.querySelector("#loving");
        for (let i = 0; i < this.loveSong.length; i++) {
            loving.innerHTML += `<img class="cora" src="imgs/heart.png"> ${this.loveSong[i]} <br> `;
        } 
    }

    //UI
    getData() {
        let name = document.querySelector("#name").value;
        let author = document.querySelector("#autor").value;
        let year = document.querySelector("#year").value;
        let objData = {
            name: name,
            author: author,
            year: year
        };
        return objData;
    }

    resetForm() {
        document.querySelector("#form").reset();
    }



  

    
}