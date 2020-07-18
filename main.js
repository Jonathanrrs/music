import Interface from "./Interface.js"
class Main {
    constructor() {
        let ui = new Interface();
        document.querySelector("#btnAgregar").addEventListener("click", () => {
            document.querySelector("#print").innerHTML = "";
            ui.addSong();
            ui.print();
            ui.resetForm()
            console.log(ui);
        });

        document.querySelector("#print").addEventListener("click", (event) => {
            document.querySelector("#print").innerHTML = "";
            ui.deleteSong(event.target)
            ui.print();
         });
         document.querySelector("#print").addEventListener("click", (event) => {
            ui.love(event.target);
            console.log(ui);
         });
         document.querySelector("#print").addEventListener("click", (event) => {
            ui.play(event.target);
         });
    }
}
let m = new Main();