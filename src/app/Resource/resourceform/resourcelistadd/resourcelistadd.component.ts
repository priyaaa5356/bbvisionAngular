import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resourceadd } from '../../model/resourcelist';

@Component({
  selector: 'app-resourcelistadd',
  templateUrl: './resourcelistadd.component.html',
  styleUrls: ['./resourcelistadd.component.css']
})
export class ResourcelistaddComponent implements OnInit {
  formgroup!: FormGroup;
  resourceadded: Resourceadd = new Resourceadd();
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
 
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }


  ngOnInit(): void {
    this.resourceadded = history.state[0];

    this.formgroup = this.fb.group({
      source: [this.resourceadded.source],
      consultant: [this.resourceadded.consultantname],
      date: [this.resourceadded.date],
      postappliedfor: [this.resourceadded.postappliedfor],
      firstname: [this.resourceadded.firstname],
      lastname: [this.resourceadded.lastname],
      mobilenumber: [this.resourceadded.mobilenumber],
      whatsappnumber: [this.resourceadded.whatsappnumber],
      emailid: [this.resourceadded.emailid],
      adhaarnumber: [this.resourceadded.adhaarnumber],
      degree: [this.resourceadded.degree],
      college: [this.resourceadded.college],
      yearsofpassout: [this.resourceadded.yearsofpassout],
      percentage: [this.resourceadded.percentage],
      employeestatus: [this.resourceadded.employeementstatus],
      expectedctc: [this.resourceadded.expectedctc],
      certification:[this.resourceadded.certification],
      currentctc: [this.resourceadded.currentctc],
      feedback:  [this.resourceadded.feedback],
      interviewdate:  [this.resourceadded.interviewdate],
      remarks:  [this.resourceadded.remarks],
     


    });



  }

}
