export class Resume {
    profilePic: string;
    name: string;
    ciudad: string;
    Estado:string;
    EstadodelUsuairo:string;
    contactNo: number;
    email: string;
    TipodeConvenio: TipodeConvenio[] = [];
    otherDetails: string;
    skills: Skill[] = [];
    direccionpersonal:string;
    CodigoPostal:string;
    Pais:string;
    EntreCallesUno:string;
    EntreCallesDos:string;
    Precio:string;
    NdelRepresentanteComercial:string;
    DirecciondelInmueble:string;
    Colonia:string;
    CiudaddelInmueble:string;
    socialProfile:string
    
    constructor() {
        this.TipodeConvenio.push(new TipodeConvenio());
        this.skills.push(new Skill());
    }
  }
  export class TipodeConvenio {
    degree: string;
    college: string;
    passingYear: string;
    percentage: number;
  }
  export class Skill {
    value: string;
  }