import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/auth/services/data-db.service';
import { User } from '@app/shared/models/user.interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  ngOnInit(): void { }
}

