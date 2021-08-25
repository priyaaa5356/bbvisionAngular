import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Sectionmaster } from '../model/sectionmaster';

@Component({
  selector: 'app-sectionmasteradd',
  templateUrl: './sectionmasteradd.component.html',
  styleUrls: ['./sectionmasteradd.component.css']
})
export class SectionmasteraddComponent implements OnInit {
  formgroup!: FormGroup;
  section: Sectionmaster = new Sectionmaster();
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(153 153 153)";
  name: any;
  statuses: any;
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
    this.section.name = this.name;
    this.section.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      name: [this.section.name, [Validators.required]],
      status: [this.section.status, [Validators.required]]
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
    } else if (this.formgroup.value.status === "InActive") {
      this.formgroup.patchValue({
        status: false
      })
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }
  }
  onToggle(event: MatSlideToggleChange) {
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
