export class Escenario {
    imagen:string="";
    nombre:string="";

    constructor(id:number) {
        if (id == 1) {
            this.imagen="../../assets/bosque.jpg";
            this.nombre="BOSQUE";
        } else if (id == 2) {
            this.imagen="../../assets/ciudad.jpg";
            this.nombre="CIUDAD";
        } else if (id == 3) {
            this.imagen="../../assets/costa.jpg";
            this.nombre="COSTA";
        } else {
            this.imagen="";
            this.nombre="";
        }
    }
}