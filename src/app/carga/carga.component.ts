import { Component, OnInit } from '@angular/core';
import { FileItem } from '@shared/Models/file-item';
import { CargaImagenesService } from '../auth/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl:'./carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {
  

  estaSobreElemento = false;
  archivos: FileItem[] = [];
  
  

  constructor( public _cargaImagenes: CargaImagenesService ) { }

  ngOnInit() {
  }


  cargarImagenes() {
    this._cargaImagenes.cargaImagenesFirebase( this.archivos );
  }

  LimpiarArchivos(){
    this.archivos = [];
  }

}
