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
  prefix: JobdescriptionviewMaster = new JobdescriptionviewMaster();
  name: any;
  name1: any;
  location: any;
  experience: any;
  joining: any;
  closing: any;
  id: any;
  statuses: any;
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(153 153 153)";
  save: any;
  savedata: boolean = true;
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
      this.joining = params.get('joining');
      this.closing = params.get('closing');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);
    });
    debugger;
    this.prefix.id = this.id;
    this.prefix.name = this.name;
    this.prefix.name1 = this.name1;
    this.prefix.location = this.location;
    this.prefix.experience = this.experience;
    this.prefix.joining = this.joining;
    this.prefix.closing = this.closing;
    this.prefix.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      id: [this.prefix.id, [Validators.required]],
      name: [this.prefix.name, [Validators.required]],
      name1: [this.prefix.name1, [Validators.required]],
      location: [this.prefix.location, [Validators.required]],
      experience: [this.prefix.experience, [Validators.required]],
      joining: [this.prefix.joining, [Validators.required]],
      closing: [this.prefix.closing, [Validators.required]],
      status: [this.prefix.status, [Validators.required]]
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
