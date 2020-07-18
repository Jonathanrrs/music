import Interface from "./Interface.js"
class Main {
    constructor() {
        let ui = new Interface();
        document.querySelector("#btnAgregar").addEventListener("click", () => {
            document.querySelector("#print").innerHTML = "";
            ui.addSong();
            ui.print();
            ui.resetForm()
        });

        document.querySelector("#print").addEventListener("click", (event) => {
            document.querySelector("#print").innerHTML = "";
            ui.deleteSong(event.target)
            ui.print();
         });
         document.querySelector("#print").addEventListener("click", (event) => {
            ui.love(event.target);
         });
         document.querySelector("#print").addEventListener("click", (event) => {
            ui.play(event.target);
         });
    }
}
let m = new Main();