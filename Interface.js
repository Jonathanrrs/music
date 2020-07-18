export default class Interface {
    constructor() {
        this.listSong = [];
        this.loveSong = [];
        this.playingSong = [];
    }

    addSong() {
        let data = this.getData();
        if(data.name == "" || data.author == "" || data.year == "") {
            swal("Completa los campos!", "Haz click para continuar!", "error");
        } else{
            this.listSong.push(data)
        }
        
    }
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


    find(data) {
        let searching = this.listSong.map(search => search.name);
        for (let index = 0; index < searching.length; index++) {
            if (searching[index] === data) {
                return index;
            }

        }
    }
    deleteSong(element) {
        let loveDelete = element.dataset.love;
        let findedLove = this.findLove(loveDelete)
        let finded = this.find(element.dataset.delete);
        if (element.name == "delete" && finded > -1) {
            this.listSong.splice(finded, 1);
            swal("Eliminado correctamente!", "Haz click para continuar!", "success");
            console.log(this.findLove(loveDelete));
            console.log(findedLove);
            if(findedLove>-1) {
                this.loveSong.splice(findedLove,1);
                document.querySelector("#loving").innerHTML = "";
                this.printLove();
            }
            if(this.loveSong.length == 0) {
                document.querySelector("#loving").innerHTML = "No hay en este momento";
            }
            if(this.playingSong[0] === element.dataset.delete) {
                this.playingSong.splice(0,1)
                document.querySelector("#playing").innerHTML = "Sin reproducción"
            } 
        }
    }

    love(element) {
        if(element.name == "love") {
            let founded = this.findLove(element.dataset.loving)
            if(founded >= 0) {
                swal("Ya existe en la lista!", "Haz click para continuar!", "error");
            } else{
                this.loveSong.push(element.dataset.loving)
                swal("Agregada a la lista!", "Haz click para continuar!", "success"); 
                document.querySelector("#loving").innerHTML = "";
                this.printLove();
            }

        }
    }

    printLove() {
        let loving = document.querySelector("#loving");
        for (let i = 0; i < this.loveSong.length; i++) {
            loving.innerHTML += `<img class="cora" src="imgs/heart.png"> ${this.loveSong[i]} <br> `;
        } 
    }

    findLove(data) {
        let searching = this.loveSong.map(search => search);
        for (let index = 0; index < searching.length; index++) {
            if (searching[index] == data) {
                return index;
            }
        }
    }


    resetForm() {
        document.querySelector("#form").reset();
    }

    play(element) {
        let playing = document.querySelector("#playing");
        if(element.name == "play") {
            console.log(element.dataset.suena);
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

    findPlaying(data) {
        let searching = this.playingSong.map(search => search);
        console.log(searching);
        for (let index = 0; index < searching.length; index++) {
            if (searching[index] == data) {
                return index;
            }
        }
    }

    
}