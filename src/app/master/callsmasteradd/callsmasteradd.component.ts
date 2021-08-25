import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { CallsMaster } from '../model/callsmaster';

@Component({
  selector: 'app-callsmasteradd',
  templateUrl: './callsmasteradd.component.html',
  styleUrls: ['./callsmasteradd.component.css']
})
export class CallsmasteraddComponent implements OnInit {
  formgroup!: FormGroup;
  calls: CallsMaster = new CallsMaster();
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
    this.calls.name = this.name;
    this.calls.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      name: [this.calls.name, [Validators.required]],
      status: [this.calls.status, [Validators.required]]
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
    if (this.formgroup.value.status === "Active") {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else if (this.formgroup.value.status === "Inactive") {
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
  saveform() {

  }

  update() {

  }
}
