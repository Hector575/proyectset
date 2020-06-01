import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/auth/services/data-db.service';

@Component({
  selector: 'app-inf-de-regis',
  templateUrl:'./inf-de-regis.component.html',
  styleUrls: ['./inf-de-regis.component.css']
})
export class InfDeRegisComponent implements OnInit{
  

  public ClientesForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  afs: any;


  constructor
  
  (private dbData: DataService) {
    this.ClientesForm = this.createForm();
  }
  ngOnInit(): void {  }

  get name() { return this.ClientesForm.get('name'); }
  get email() { return this.ClientesForm.get('email'); }
  
  get apellido() {return this.ClientesForm.get( 'apellido');}
  get telefono() {return this.ClientesForm.get( 'telefono');}
  

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9)]),
    });
  }
  

  onResetForm(): void {
    this.ClientesForm.reset();
  }

  onSaveForm(): void {
    if (this.ClientesForm.valid) {
      this.dbData.saveClientes(this.ClientesForm.value);
      this.onResetForm();
    }
  }
  

}
