import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { certificationselect, employeementstatusselect, postappliedforselect, referaltypeselect, Resource, sourcetypeselect } from '../resourcemodel';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },

}
@Component({
  selector: 'app-resourceform',
  templateUrl: './resourceform.component.html',
  styleUrls: ['./resourceform.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ResourceformComponent implements OnInit {
  formgroup!: FormGroup;
 

  // resource: Resource[] =
  //  [{ source: 'good', referelname: '', date: '', postappliedfor: '', firstname: '', lastname: '', gender: '', mobilenumber: '', whatsappnumber: '', emailid: '', adhaarnumber: '', degree: '', yearsofpassout: '', percentage: '', employeestatus: '', companyname: '', totalexperience: '', noofexperience: '', releventexperience: '', expectedctc: '', currentctc: '', certification: '', certificate: '', certifiedfrom: '', validity: '', resume: '', status: true }]

  status: any;
  statuscolor: string = "rgb(153 153 153)";
  resource: Resource = new Resource();
  save: any;
  savedata: any;
  fileToUpload: any;
  @ViewChild('name') searchElement!: ElementRef;
  sourceselect: sourcetypeselect[] = [
    { sourcetype: 'facebook', sourcetypecode: 0 },
    { sourcetype: 'indeed', sourcetypecode: 0},

  ];
  referal: referaltypeselect[] = [
    { referaltype: 'preethi', referaltypecode: 0 },
    { referaltype: 'gopinath', referaltypecode: 0 },

  ];
  postapplied: postappliedforselect[] = [
    { postappliedfortype: 'senior developer ', postappliedfortypecode: 0 },
    { postappliedfortype: 'junior developer ', postappliedfortypecode: 0 },

  ];
  employeement: employeementstatusselect[] = [
    {  employeementstatustype: 'Fresher', employeementstatustypecode: 0 },
    {  employeementstatustype: 'Experience', employeementstatustypecode: 0 },

  ];
  certification: certificationselect[] = [
    {   certificationtype: 'Yes', certificationtypecode: 0 },
    {   certificationtype: 'No', certificationtypecode: 0 },

  ];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }
  ngOnInit(): void {


    this.formgroup = this.fb.group({
      source: [this.resource.source],
      referalname: [this.resource.referelname],
      date: [this.resource.date],
      postappliedfor: [this.resource.postappliedfor],
      firstname: [this.resource.firstname],
      lastname: [this.resource.lastname],
      gender: [this.resource.gender],
      mobilenumber: [this.resource.mobilenumber],
      whatsappnumber: [this.resource.whatsappnumber],
      emailid: [this.resource.emailid],
      adhaarnumber: [this.resource.adhaarnumber],
      degree: [this.resource.degree],
      college: [this.resource.college],
      yearsofpassout: [this.resource.yearsofpassout],
      percentage: [this.resource.percentage],
      employmentstatus: [this.resource.employeestatus],
      companyname: [this.resource.companyname],
      yearofexperience: [this.resource.yearsofexperience],
      totalexperience: [this.resource.totalexperience],
      releventexperience: [this.resource.releventexperience],
      expectedctc: [this.resource.expectedctc],
      currentctc: [this.resource.currentctc],
      certification: [this.resource.certification],
      certificate: [this.resource.certficate],
      certifiedfrom: [this.resource.certifiedfrom],
      validity: [this.resource.validity],
      noofyearexperience:[this.resource.noofyearexperience],
      resume: [this.resource.resume],
      status: [this.resource.status],
    });

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
  }
  onToggle(event: MatSlideToggleChange) {
    debugger;
    if (event.checked) {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else {
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }
  }
  saveform() {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
