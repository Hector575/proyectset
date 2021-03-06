import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
  }

  salir() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }

}
