import { UserFormComponent } from './user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public openNameInputDialog(){
    const dialogRef = this.dialog.open(UserFormComponent,{
      width: '400px'
    })
  }

}
