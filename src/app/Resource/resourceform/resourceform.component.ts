import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from '../resourcemodel';

@Component({
  selector: 'app-resourceform',
  templateUrl: './resourceform.component.html',
  styleUrls: ['./resourceform.component.css']
})
export class ResourceformComponent implements OnInit {
  formgroup!: FormGroup;
  @ViewChild('name') searchElement!: MatSelect;
  resource: Resource[] = [
    {source: 'good', referelname: '',date:'',postappliedfor:'',
  firstname:'',lastname:'',gender:'',mobilenumber:'',whatsappnumber:'',emailid:'',adhaarnumber:'',degree:'',yearsofpassout:'',
 percentage:'',employeestatus:'',companyname:'',totalexperience:'',noofexperience:'',releventexperience:'',
expectedctc:'',currentctc:'',certification:'',certificate:'',certifiedfrom:'',validity:'',resume:'',status:true}]

   
    yearsofpassout:string="";
    percentage:string="";
    employeestatus:string="";
    companyname: string="";
    totalexperience: string="";
    noofexperience: string="";
    releventexperience: string="";
    expectedctc:string="";
    currentctc: string ="";
    certification:string="";
    certificate:string="";
    certifiedfrom: string="";
    validity:string="";
    resume:string="";
    status:boolean=false;



  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    debugger;
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }
  ngOnInit(): void {
    this.resource = history.state[0];
  }

}
