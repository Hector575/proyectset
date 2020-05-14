import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Resume,  TipodeConvenio, Skill } from '../../shared/Models/resume.component';
import { NgForm } from '@angular/forms';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdf-exclusive-renta',
  templateUrl:'./pdf-exclusive-renta.component.html',
  styleUrls: ['./pdf-exclusive-renta.component.css']
})
export class PdfExclusiveRentaComponent{ 
  resume = new Resume();
  degrees = ['Exclusive99'];
  constructor() {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.TipodeConvenio || this.resume.TipodeConvenio.length === 0) {
      this.resume.TipodeConvenio = [];
      this.resume.TipodeConvenio.push(new TipodeConvenio());
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [];
      this.resume.skills.push(new Skill());
    }
  }
  
  addEducation() {
    this.resume.TipodeConvenio.push(new TipodeConvenio());
  }
  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

  resetForm() {
    this.resume = new Resume();
  }
  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'Convenio',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.resume.name,
              style: 'name'
            },
            {
              text: this.resume.direccionpersonal
            },
            {
              text: this.resume.Pais
            },
            {
              text: this.resume.CodigoPostal
            },
            {
              text: this.resume.EstadodelUsuairo
            },
            {
              text: this.resume.ciudad
            },
            {
              text: 'Email : ' + this.resume.email,
            },
            {
              text: 'Contant No : ' + this.resume.contactNo,
            },
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Datos del inmueble',
          style: 'header'
        },
        {
          columns : [
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },{
              ul : [
                this.resume.EntreCallesUno
              ]
            },
            {
              ul : [
                this.resume.EntreCallesDos
              ]
            },
            {
              ul : [
                this.resume.CiudaddelInmueble
              ]
            },
            {
              ul : [
                this.resume.Colonia
              ]
            },
            {
              ul : [
                this.resume.Precio
              ]
            },
            {
              ul : [
                this.resume.Estado
              ]
            },
            {
              ul : [
                this.resume.NdelRepresentanteComercial
              ]
            },
          ]
        },
        this.getEducationObject(this.resume.TipodeConvenio),
        {
          text: 'Other Details',
          style: 'header'
        },
        {
          text: this.resume.otherDetails
        },
        {
          text: 'Signature',
          style: 'sign'
        },
        {
          columns : [
              { qr: this.resume.name + ', Contact No : ' + this.resume.contactNo, fit : 100 },
              {
              text: `(${this.resume.name})`,
              alignment: 'right',
              }
          ]
        }
      ],
      info: {
        title: this.resume.name + '_RESUME',
        author: this.resume.name,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10],
            decoration: 'underline'
          },
          name: {
            fontSize: 16,
            bold: true
          },
          jobTitle: {
            fontSize: 14,
            bold: true,
            italics: true
          },
          sign: {
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
          }
        }
    };
  }
  getEducationObject(TipodeConvenio: TipodeConvenio[]) {
    return {
      table: {
        widths: ['*'],
        body: [
          [{
            text:'DEFINICIONES Se le denomina representante del inmueble a ' +  this.resume.name  + ' y Net99 a Juan José Márquez Villanueva, conforme a las siguientes declaraciones, objeto, subsecuentes términos/ condiciones y cláusulas. Set99: Sistema autónomo de gestión cuántica Convenio: Gold99 Prospecto(s): Cliente(s) promitente(s) DECLARACIONES Primero. - Declara el representante del inmueble: a) Ser mexicano, mayor de edad, con plena capacidad para contratar y obligarse en los términos del presente instrumento. Lo cual lo acredita con la copia de su identificación oficial, la cual se agrega una copia al presente como (anexo 1) b) Que señala como domicilio para cualquier efecto legal en (la dirección que aparece en su identificación oficial) en esta ciudad de León, Guanajuato, México., mismo que señala para efectos de oír y recibir todo tipo de notificaciones relacionadas con el presente convenio. Teléfono +52   ' +  this.resume.contactNo  + ' . c) Que es legítimo propietario, dueño o apoderado. Que cumple con  todos los requisitos y comprobación jurídica que demuestre del inmueble ubicado en: (calle, número, colonia, código postal, ciudad, estado y país del inmueble en promoción)., entre las calles (entrecalle 1 del inmueeble en promoción) y (entre calle 2 del inmueble en promoción). d) Haber verificado escrituras del inmueble antes descrito. Así como también libertad de gravámenes mediante documento vigente del inmueble. e) Que es su interés contratar los servicios de Net99 profesional en el ramo. f) Que Net99 puede disponer del inmueble para su exhibición e intermediación de éste en absoluta exclusiva y que es su deseo que Net99 promueva el arrendamiento del mismo en absoluta exclusiva mediante un periodo de 30 (treinta) días. Segundo. – Declara Net99: a) Que es una empresa jurídica y socialmente comprometida, que opera totalmente y con toda transparencia dentro del marco legal y que su representante legal es mexicano, mayor de edad, con plena capacidad para contratar y obligarse en los términos del presente instrumento. b) Que tiene su domicilio en Av. Alud 833, Int 207, Jardines del Moral, C.P. 37160 en la ciudad de León, Guanajuato, mismo que señala para efectos de oír y recibir todo tipo de notificaciones relacionadas con el presente convenio. c) Que cuenta con experiencia probada y calificada como solicitante, así como con los medios oportunos y recursos suficientes propios para realizar tales funciones. d) Que cuenta con los elementos e instrumentos propios necesarios para desempeñar su actividad de intermediario mercante, por lo que el representante del inmueble no tiene ninguna responsabilidad en el desarrollo de su labor de Net99. OBJETO El representante del inmueble le confiere a Net99 la comisión mercantil, en términos del articulo 273 del código de comercio, consiste en lograr el arrendamiento y por consecuencia la celebración del contrato para formalizar la operación de arrendamiento del inmueble material del presente convenio. TÉRMINOS Y CONDICIONES Esta sección establece los términos y condiciones para el contenido y servicios de este convenio TÉRMINOS • Precio de arrendamiento del inmueble: $(00.00)MX • Fecha de inicio del convenio: (día/mes/año y hora dee firma). • Vigencia de este convenio: La vigencia de este convenio es por un periodo indefinido ya que este se auto-renueva mensualmente a excepción de que el representante del inmueble realice la suspensión de este convenio comunicándose a la línea de atención general de Net99. • Honorarios por servicio: La forma del pago de los honorarios por servicio será pagada por el representante del inmueble a Net99 a la firma del contrato de arrendamiento por la cantidad equivalente a un mes  de arrendamiento del inmueble más I.V.A. •Beneficios Net99: Portales de promoción digital para inmuebles, pendones zonificados, adaptación de lonas sobre el inmueble*, general Set99 wallet*, exclusive Set99 wallet*, gold Set99 wallet, diamond Set99 wallet, priority diamond Set99 wallet,  37% de prioridad en carteras aplicables, 18% de priporidad en la difusión y periodos de publicación mediante medios generales, particulares y propios digitales a identidad total de Net99, emisión, difusión y distribución de panfletos a identidad total de Net99, difusión en revistas, periodicos y folletos a identidad total de Net99, producción profesional de video mediante drones de gama regular___, producción profesional de video mediante drones de media gama__, producción profesional de video mediante drones de alta gama___,  producción profesional de galaría fotográfica mediante cámaras de gama regular*, producción profesional de galaría fotográfica mediante cámaras de media gama__, producción profesional  de galaría fotográfica mediante cámaras de alta gama___, modelo de difusión digital fastmarket*, modelo de difusión digital specifiedmarket__, apertura de sesión para accesclear___. • Responsabilidades 1: Net99 se limita a la gestión de prospectos para el arrendamiento de este inmueble. • Responsabilidades 1.1: Net99 queda exento de toda  responsabilidad legal y conductas realizadas por el representante del inmueble incluso en el mismo cumplimiento o incumplimiento de sus declaraciones en el presente convenio. Así como al contenido del inmueble en arrendamiento descrito en este convenio, datos, fallas y/o reparaciones relacionadas a éste. • Responsabilidades 1.2: El representante del inmueble es único y exclusivo responsable de toda actividad legal, comercial y financiera hacia el prospecto de Net99 en el procedimiento de las operaciones de arrendamiento de este inmueble, ya que da por hecho ser legítimo propietario del inmueble descrito en este presente convenio, haber verificado escrituras del inmueble, declarando que el inmueble  está en total regularidad jurídica y en libertad de gravámenes o cualuquiera que sea el factor que pudiera traerle conflictos al futuro comprador de Net99. Ya que Net99 se limita a la gestión de intermediación tercera con prospectos para el arrendamiento de este inmueble. Es decir, Net99 mostrará de manera física o virtual el inmueble a sus prospectos con la única intención de concretar el arrendamiento de éste. • Responsabilidades 1.3: Net99 estará haciendo contacto con el representante del inmueble en promedio cada séptimo día para actualizar en Set99 el estatus del inmueble, es decir su disponibilidad. (aplica sólo en convenios Free) CONDICIONES • El representante del inmueble no podrá tener contacto por ningún motivo de manera directa con ninguno de los prospectos de Net99 para el arrendamiento de este inmueble. Aún y cunado sea iniciativa del prospecto, conducto de Net99. • Suspensión del convenio 1: El representante del inmueble podrá suspender el presente convenio en exclusiva hasta dentro de un perido de 30 (treinta) días y dentro de los primeros 3(tres) días previos a la auto-renovación del presente convenio. Ya sea por motivos personales y que no incumplan las condiciones de este convenio. • Suspensión del convenio 1.1: El representante del inmueble no podrá suspender el convenio cuando haya operaciones de arrendamiento avanzadas con los prospectos de Net99. Es decir, una propuesta u ofrecimiento tangible. Ya sea por medios electrónicos o documentos físicos que sostengan la veracidad de este argumento. • Suspensión del convenio 1.2: El representante del inmueble no podrá suspender por ningún motivo el convenio para tomar posesión de los prospectos de Net99 y dar continuidad a procesos de arrendamiento, de ser sorprendido pagará a Net99 el equivalente a un mes de arrendamiento por sanción sobre el precio de arrendamiento del inmueble por el incumplimiento de esta condición. Es decir, un prospecto de Net99 es todo aquel con el cual ya se iniciaron procesos de ofrecimiento (bajo cualquier medio de propuesta, ya sea verbal, escrita o indirecta) del inmueble descrito en este convenio. • Suspensión del convenio 1.3: Net99 se reserva el derecho de suspender temporal o definitivamente sin previo aviso el presente convenio. En caso de que el representante del inmueble realice actos que atente en contra de sus declaraciones o cual sea la metería jurídica correspondiente, o incluso por no respetar los términos y condiciones del presente convenio y esto no lo librará de sus respectivas sanciones en caso de haberlas. • Promoción 1: Net99 registrará la propiedad en Set99 para  potencializar la gestión interna de prospectos para el arrendamiento  del inmueble a estructura de generación de galería fotográfica por nuestros profesionales, estructura legal y descripción inmobiliaria. • Promoción 1.1: Net99 promoverá de ser necesario a manera internacional por todos los medios de difusión seleccionados y mediante Set99 el inmueble hasta efectuar el arrendamiento. • Net99 se reserva el derecho de reemplazar o cambiar sin previo aviso al profesional en corretaje inmobiliario que representa en manera limitada la gestión con prospectos, registros, procesos y por ningún motivo el profesional en corretaje inmobiliario que representa la gestión de manera limitada para este inmueble podrá generar los cobros por honorarios al representante del inmueble de ser el caso. • Cobro de honorarios 1: El cobro por honorarios será aplicable bajo los términos correspondientes en el presente convenio, siempre y cuando el representante del inmueble por conducto de Net99 concrete el arrendamiento . • Cobro de honorarios 1.1: Cuando el representante del inmueble concrete por conducto de Net99 el arrendamiento del inmueble mencionado en este convenio se generará el cobro por honorarios por nuestro representante de operaciones Juan José Márquez Villanueva el cual se pondrá en contacto con el propietario con anticipación para dar continuidad presencial al cobro por honorarios a la firma de las partes con notario; cual sea el método de pago por honorarios que el representante del inmueble realizará a nombre de nuestro representante de operaciones Juan José Márquez Villanueva y con los datos fiscales proporcionados por nuestro representante de operaciones Juan José Márquez Villanueva, conducto de Net99. • Cobro de honorarios 1.2: Si fuera el caso de que el representante del inmueble concrete el arrendamiento por conducto de Net99 y el pago de honorarios fuese por transferencia electrónica o cheque certificado el representante del inmueble tendrá un máximo de 3(tres) días hábiles para efectuar el pago de honorarios al representante de operaciones conducto de Net99. • Cobro de honorarios 1.3: Si la deuda por honorarios no es liquidada por el representante del inmueble dentro de los primeros 3 (tres) días hábiles, Net99 será acreedor de un interés moratorio del 1.5% diario aplicado al representante del inmueble sobre el monto total de los honorarios por la operación de arrendamiento concretada por el representante del inmueble bajo conducto de Net99. • Cobro de honorarios 1.4: Siendo el caso de que el representante del inmueble concrete el arrendamiento del inmueble por conducto de Net99 el pago que realice por honorarios a Net99 mediante cheque certificado, éste será salvo buen cobro y de ser rechazado se sumará un adeudo del 20% sobre el monto total de los honorarios correspondientes a Net99. • Cobro de honorarios 1.5: Sí el representante del inmueble logra el arrendamiento del inmueble bajo conducto de Net99 y este realizará el pago de honorarios correspondientes a Net99 a otra persona que no sea nuestro representante de operaciones es decir la Juan José Márquez Villanueva. Éste pago no se tomará por valido para Net99.• Anticipos 1: En caso de que alguno de los prospectos por conducto de Net99 genere anticipos al representante del inmueble bajo conducto de Net99, Net99 tomará como retenido dicho anticipo, para brindar garantía a ambas partes y ligarlo al proceso convenido. • Anticipos 1.1: En caso de desistimiento por el prospecto de Net99 y que haya efectuado el anticipo correspondiente para el arrendamiento del inmueble al representante del inmueble, conducto de Net99 dicho anticipo será tomado como pena convencional sobre el 50%(cincuenta prociento) de dicho anticipo para el prospecto de Net99 por gastos de operación de Net99. Es decir, se le devolverá el 50%(cincuenta porciento) del anticipo al prospecto de Net99, siempre y cuando no haya sido por alguna circunstacia irregular por la parte del representante del inmueble, de ser el caso se devolverá al prospecto de Net99 el 100%(cien porciento) de su anticipo. •Anticipos 1.2: Sí Net99 por conducto del representante del inmueble llegará a renetener algún anticipo y se concluyse la el arrendamiento , Net99 tomará como parte del cobro de honorarios dicha cantidad generada por el anticipo retenido, la cantidad restante será pagada por el representante del inmueble a Net99 bajo las condiciones antes mencionadas en cobro de honorarios 1 al 1.5. De ser lo contrario y si dicha cantidad retenida por Net99 concepto de anticipos llegará a superar el monto por honorarios, Net99 devolverá al representante del inmueble la cantidad correspondiente, es decir; el monto o cantidad sobrante y que supera el cobro por honorarios de Net99. •Anticipos 1.3: Sí Net99 llegará a retener algún anticipo y no se concluyese el arrendamiento por cual sea el motivo que el prospecto presentará; Net99 devolverá al prospecto sólo el 50%(cincuenta porciento) de dicha cantidad.CLÁUSULAS •Cláusula primera. – El contenido absoluto de este convenio se rige por las leyes de los Estados Unidos Mexicanos. El representante del inmueble se somete a la jurisdicción de los tribunales competentes ubicados en la Ciudad de León, Guanajuato, México, con renuncia expresa a cualquier otro fuero y/o jurisdicción. •Cláusula segunda. – El representante del inmueble se obliga al cumplimiento y acepta expresamente y por firmado en 2(dos) tantos las definiciones, declaraciones, objeto. Así como los términos, condiciones y cláusulas señalados en el presente convenio. •Usted no copiará ni adaptará el contenido de este convenio desarrollado por, o bajo conducto de Net99 para dar estructura legal a sus operaciones, gestión o cual sea el caso, el cual se encuentra protegido por la legislación aplicable y vigente en cada jurisdicción.Firma Net99 por conducto de su representante legal Juan José Márquez Villanueva www.net99.world EXCLUSIVE99 Leased Nombre y Firma de  (nombre del representante del inmueble) como propietario Firma (corredor asignado) como corredor asiganado por Net99',
            style: 'tableHeader'
          },
          ],
        ]
      }
    };
  }
  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }
  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
  addSkill() {
    this.resume.skills.push(new Skill());
  }
}


  
