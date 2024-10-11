export class Personaje {
    imagen:string="";
    clase:string="";
    nombre:string="";
    descripcion:string="";

    constructor(id:number) {

        if(id == 1) {
            this.imagen="../../assets/arquero.png";
            this.clase="ARQUERO";
            this.nombre="Légolos el Oscuro";
            this.descripcion="Légolos el Oscuro es un arquero sigiloso y mortal, cuya precisión es tan letal como su silencio.";
        } else if (id == 2) {
            this.imagen="../../assets/brujo.png";
            this.clase="BRUJO";
            this.nombre="Fermín el Sabio";
            this.descripcion="Fermín el Sabio es un brujo anciano y poderoso, maestro de antiguos hechizos y secretos arcanos.";
        } else if (id == 3) {
            this.imagen="../../assets/caballero.png";
            this.clase="CABALLERO";
            this.nombre="Górdez el Sólido";
            this.descripcion="Górdez el Sólido es un caballero imponente, cubierto de pesada armadura y portando una lanza letal.";
        } else if (id == 4) {
            this.imagen="../../assets/clerigo.png";
            this.clase="CLÉRIGO";
            this.nombre="Benedicto el Devoto";
            this.descripcion="Benedicto el Devoto es un clérigo ferviente, guiado por una fe inquebrantable en los dioses.";
        } else if (id == 5) {
            this.imagen="../../assets/ladron.png";
            this.clase="LADRÓN";
            this.nombre="Caco el Pícaro";
            this.descripcion="Caco el Pícaro es un ladrón astuto y escurridizo, experto en robar sin ser visto.";
        } else {
        this.imagen="";
        this.clase="";
        this.nombre="";
        this.descripcion="";
        }
    }
}