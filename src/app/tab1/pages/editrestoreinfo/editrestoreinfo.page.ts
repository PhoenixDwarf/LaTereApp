import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editrestoreinfo',
  templateUrl: './editrestoreinfo.page.html',
  styleUrls: ['./editrestoreinfo.page.scss'],
})
export class EditrestoreinfoPage implements OnInit {

  constructor() { }

  isThereASecurityQuiestion:boolean = false;
  ngOnInit() {
  }

  editinfoForm = new FormGroup({
    selector: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required, Validators.maxLength(50)])
  })


  //LOGIC IS MISSING
}
