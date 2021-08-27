import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { JobdescriptionviewMaster } from '../model/jobdescriptionviewmaster';
import { JobdescriptionviewmasterComponent } from '../jobdescriptionviewmaster/jobdescriptionviewmaster.component';

@Component({
  selector: 'app-jobdescriptionviewmasteradd',
  templateUrl: './jobdescriptionviewmasteradd.component.html',
  styleUrls: ['./jobdescriptionviewmasteradd.component.css']
})
export class JobdescriptionviewmasteraddComponent implements OnInit {
  @ViewChild(JobdescriptionviewmasterComponent) childReference: any;
  formgroup!: FormGroup;
  jobs: JobdescriptionviewMaster = new JobdescriptionviewMaster();
  name: any;
  name1: any;
  location: any;
  experience: any;
  education: any;
  roles: any;
  skill: any;
  certificate: any;
  joining: any;
  closing: any;
  id: any;
  statuses: any;
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(153 153 153)";
  save: any;
  savedata: boolean = true;
  view: boolean = true;
  allocate: boolean = true;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  sub!: any;
  ngOnInit(): void {
    debugger;
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.name = params.get('name');
      this.name1 = params.get('name1');
      this.location = params.get('location');
      this.experience = params.get('experience');
      this.education = params.get('education');
      this.roles = params.get('roles');
      this.skill = params.get('skill');
      this.certificate = params.get('certificate');
      this.joining = params.get('joining');
      this.closing = params.get('closing');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);
    });
    debugger;
    this.jobs.id = this.id;
    this.jobs.name = this.name;
    this.jobs.name1 = this.name1;
    this.jobs.location = this.location;
    this.jobs.experience = this.experience;
    this.jobs.education = this.education;
    this.jobs.roles = this.roles;
    this.jobs.skill = this.skill;
    this.jobs.certificate = this.certificate;
    this.jobs.joining = this.joining;
    this.jobs.closing = this.closing;
    this.jobs.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    if (this.save === "view") {
      this.view = true;
    } else {
      this.view = false;
    }
    if (this.save === "allocate") {
      this.allocate = true;
    } else {
      this.allocate = false;
    }
    this.formgroup = this.fb.group({
      id: [this.jobs.id, [Validators.required]],
      name: [this.jobs.name, [Validators.required]],
      name1: [this.jobs.name1, [Validators.required]],
      location: [this.jobs.location, [Validators.required]],
      experience: [this.jobs.experience, [Validators.required]],
      education: [this.jobs.education, [Validators.required]],
      roles: [this.jobs.roles, [Validators.required]],
      skill: [this.jobs.skill, [Validators.required]],
      certificate: [this.jobs.certificate, [Validators.required]],
      joining: [this.jobs.joining, [Validators.required]],
      closing: [this.jobs.closing, [Validators.required]],
      status: [this.jobs.status, [Validators.required]]
    })
    debugger;
    console.log(this.formgroup.value)
    this.ontoggledefault();
    setTimeout(() => {
      this.nameElement.nativeElement.focus();
    }, 0);
  }
  ontoggledefault() {
    debugger;
    if (this.formgroup.value.status === "true") {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else if (this.formgroup.value.status === "false") {
      this.formgroup.patchValue({
        status: false
      })
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
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
  saveform(){

  }

  update(){
    
  }
  
}
