import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DataService } from '@app/auth/services/data-db.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent implements OnInit {

  public contactForm: FormGroup;

  public inmueblesEncontrados = [];

  get caracteristicas() { return this.contactForm.get('caracteristicas') as FormArray; }
  constructor(
    private dbData: DataService,
    private afs: AngularFirestore,
    private formBuilder: FormBuilder,
  ) {

    this.contactForm = this.createForm();

  }

  createForm() {
    return new FormGroup({

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




  onSubmit(): void {



    // filtrados tags, es decir, solo rescatamos los que el usuario selecciono
    const selectedValuesToSearch = this.caracteristicas.value.filter(c => c.seleccionado === true);
    console.log('selectedValuesToSearch', selectedValuesToSearch);


    // hacemos un arreglo vacio, en donde vamos a vaciar los inmuebles encontrados


    // vamos a la base de datos y traemos los inmuebles registrados
    this.afs.collection<any>('ingfor').valueChanges().subscribe(inmueblesEncontrandosEnBD => {
      console.log('inmueblesEncontrandosEnBD', inmueblesEncontrandosEnBD)
      this.inmueblesEncontrados = inmueblesEncontrandosEnBD.filter(inmuebleEncontradoEnDB => {
        let encontrado = false;
        let contador = 0;

        if (inmuebleEncontradoEnDB.caracteristicas) {
          for (const inmCaracteristica of inmuebleEncontradoEnDB.caracteristicas) {


            for (const selectedValueToSearch of selectedValuesToSearch) {
              if (inmCaracteristica.id === selectedValueToSearch.id && inmCaracteristica.seleccionado === selectedValueToSearch.seleccionado) {
                contador++;
                if (contador == selectedValuesToSearch.length) {
                  encontrado = true;
                }
              }
            }
          }

          inmuebleEncontradoEnDB.contador = contador;
        }

        inmuebleEncontradoEnDB.caracteristicas = inmuebleEncontradoEnDB.caracteristicas.filter(c => c.seleccionado);

        return encontrado;
      });



      console.log('inmueblesEncontrados', this.inmueblesEncontrados)

    });

    // console.log(JSON.stringify(this.contactForm.getRawValue()));
    // console.log(this.contactForm.getRawValue())
  }

  ngOnInit(): void {
  }

}
