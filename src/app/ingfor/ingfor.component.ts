import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/auth/services/data-db.service';
import { User } from '@app/shared/models/user.interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';

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
  
  (private dbData: DataService) {
    this.contactForm = this.createForm();
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  
  get apellido() {return this.contactForm.get( 'apellido');}
  get calle() {return this.contactForm.get( 'calle');}
  get Cp() {return this.contactForm.get( 'Cp');}
  get NumeroExterior() {return this.contactForm.get( 'NumeroExterior');}
  get NumeroInterior() {return this.contactForm.get( 'NumeroInterior');}
  get telefono() {return this.contactForm.get( 'telefono');}
  get colonia() {return this.contactForm.get( 'colonia');}
  get ciudad() {return this.contactForm.get( 'ciudad');}
  get Estado() {return this.contactForm.get( 'Estado');}
  get venta() {return this.contactForm.get( 'venta');}
  get renta() {return this.contactForm.get( 'renta');}
  get area() {return this.contactForm.get( 'area');}
  get Renta() { return this.contactForm.get('Renta'); }
  get Moneda() { return this.contactForm.get('Moneda'); }
  get Venta() { return this.contactForm.get('Venta'); }
  get Banos() { return this.contactForm.get('Banos'); }
  get Habitaciones() { return this.contactForm.get('Habitaciones'); }
  

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
      Renta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Moneda: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Venta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Banos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Habitaciones: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }
  

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    }
  }
  

}
