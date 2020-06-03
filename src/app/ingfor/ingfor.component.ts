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
      this.router.navigate(['/CargaDeIne'])
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