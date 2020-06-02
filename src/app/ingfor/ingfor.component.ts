import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/auth/services/data-db.service';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '@app/shared/models/user.interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { Router } from '@angular/router';

@Component({
  selector: 'IngforComponent',
  templateUrl: './ingfor.component.html',
  styleUrls: ['./ingfor.component.css']
})
export class IngforComponent {


  public contactForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  afs: any;


  constructor

    (private dbData: DataService,
      private formBuilder: FormBuilder,
      private router: Router) {
    this.contactForm = this.createForm();
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get apellido() { return this.contactForm.get('apellido'); }
  get calle() { return this.contactForm.get('calle'); }
  get Cp() { return this.contactForm.get('Cp'); }
  get venta() { return this.contactForm.get('venta '); }
  get renta() { return this.contactForm.get('renta '); }
  get NumeroExterior() { return this.contactForm.get('NumeroExterior'); }
  get NumeroInterior() { return this.contactForm.get('NumeroInterior'); }
  get telefono() { return this.contactForm.get('telefono'); }
  get colonia() { return this.contactForm.get('colonia'); }
  get ciudad() { return this.contactForm.get('ciudad'); }
  get Estado() { return this.contactForm.get('Estado'); }
  get area() { return this.contactForm.get('area'); }
  get CincoKRenta() { return this.contactForm.get('CincoKRenta'); }
  get NueveKRenta() { return this.contactForm.get('NueveKRenta'); }
  get TreintaKRenta() { return this.contactForm.get('TreintaKRenta'); }
  get SetentaKRenta() { return this.contactForm.get('SetentaKRenta'); }
  get QuinceMRenta() { return this.contactForm.get('QuinceMRenta'); }
  get TreintaCincoMRenta() { return this.contactForm.get('TreintaCincoMRenta'); }
  get SetentaMRenta() { return this.contactForm.get('SetentaMRenta'); }
  get NoventaMRenta() { return this.contactForm.get('NoventaMRenta'); }
  get CincoMventa() { return this.contactForm.get('CincoMventa'); }
  get UnoNoMventa() { return this.contactForm.get('UnoNoMventa'); }
  get DosCincoMventa() { return this.contactForm.get('DosCincoMventa'); }
  get SeisMventa() { return this.contactForm.get('SeisMventa'); }
  get QuinceMventa() { return this.contactForm.get('QuinceMventa'); }
  get CincuentaMventa() { return this.contactForm.get('CincuentaMventa'); }
  get QuinientosMventa() { return this.contactForm.get('QuinientosMventa'); }
  get NovecinetosNoventaYnueveMventa() { return this.contactForm.get('NovecinetosNoventaYnueveMventa'); }
  get MX() { return this.contactForm.get('MX'); }
  get US() { return this.contactForm.get('US'); }
  get Euro() { return this.contactForm.get('Euro'); }
  get Tresbanos() { return this.contactForm.get('Tresbanos'); }
  get Cincobanos() { return this.contactForm.get('Cincobanos'); }
  get NueveOmasbanos() { return this.contactForm.get('NueveOmasbanos'); }
  get Treshabitaciones() { return this.contactForm.get('Treshabitaciones'); }
  get Cincohabitaciones() { return this.contactForm.get('Cincohabitaciones'); }
  get NueveOmashabitaciones() { return this.contactForm.get('NueveOmashabitaciones'); }
  get caracteristicas() { return this.contactForm.get('caracteristicas') as FormArray; }

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),

      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      calle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Cp: new FormControl('', [Validators.required, Validators.minLength(3)]),
      NumeroExterior: new FormControl('', [Validators.required, Validators.minLength(2)]),
      NumeroInterior: new FormControl('000', [Validators.required, Validators.minLength(2)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9)]),
      colonia: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Estado: new FormControl('', [Validators.required, Validators.minLength(3)]),
      venta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      renta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      area: new FormControl('', [Validators.required, Validators.minLength(3)]),
      //Renta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      //Venta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      CincoKRenta: new FormControl('', [Validators.required]),
      NueveKRenta: new FormControl(''),
      TreintaKRenta: new FormControl(''),
      SetentaKRenta: new FormControl(''),
      QuinceMRenta: new FormControl(''),
      TreintaCincoMRenta: new FormControl(''),
      SetentaMRenta: new FormControl(''),
      NoventaMRenta: new FormControl(''),
      CincoMventa: new FormControl(''),
      UnoUnoMventa: new FormControl(''),
      DosCincoMventa: new FormControl(''),
      SeisMventa: new FormControl(''),
      QuinceMventa: new FormControl(''),
      CincuentaMventa: new FormControl(''),
      QuinientosMventa: new FormControl(''),
      NovecinetosNoventaYnueveMventa: new FormControl(''),
      MX: new FormControl(''),
      US: new FormControl(''),
      Euro: new FormControl(''),
      Tresbanos: new FormControl(''),
      Cincobanos: new FormControl(''),
      NueveOmasbanos: new FormControl(''),
      Treshabitaciones: new FormControl(''),
      Cincohabitaciones: new FormControl(''),
      NueveOmashabitaciones: new FormControl(''),

      caracteristicas: this.formBuilder.array(
        this.dbData.getCaracteristicas().map(caracteristica => {
          return this.formBuilder.group({
            id: caracteristica.id,
            descripcion: caracteristica.descripcion,
            seleccionado: false,
          })
        })
      ),

    });
  }


  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    // console.log(this.contactForm.getRawValue())
    // return;

    if (this.contactForm.valid) {
      console.log('form', this.contactForm.getRawValue())


      const body = JSON.parse(JSON.stringify(this.contactForm.value));

      body.caracteristicas = body.caracteristicas.filter(c => c.seleccionado);

      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      // this.router.navigate(['/CargaDeIne'])
      //routerLink="/CargaDeIne"
    } else {
      this.touchAllControls(this.contactForm);
    }


  }

  public touchAllControls(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: false });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.touchAllControls(control);
      }
    });
  }


}
