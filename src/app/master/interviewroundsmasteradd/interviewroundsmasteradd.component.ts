import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { InterviewroundsmasterComponent } from '../interviewroundsmaster/interviewroundsmaster.component';
import { InterviewroundsMaster } from '../model/interviewroundsmaster';


@Component({
  selector: 'app-interviewroundsmasteradd',
  templateUrl: './interviewroundsmasteradd.component.html',
  styleUrls: ['./interviewroundsmasteradd.component.css']
})
export class InterviewroundsmasteraddComponent implements OnInit {
  @ViewChild(InterviewroundsmasterComponent) childReference: any;
  formgroup!: FormGroup;
  interviewrounds: InterviewroundsMaster = new InterviewroundsMaster();
  name: any;
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
      this.name = params.get('name');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);
    });
    debugger;
    this.interviewrounds.name = this.name;
    this.interviewrounds.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      name: [this.interviewrounds.name, [Validators.required]],
      status: [this.interviewrounds.status, [Validators.required]]
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
