import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { AssetmasterMapping, Assetstypeselect } from '../model/assetsmaster';

@Component({
  selector: 'app-assetmasteradds',
  templateUrl: './assetmasteradds.component.html',
  styleUrls: ['./assetmasteradds.component.css']
})
export class AssetmasteraddsComponent implements OnInit {
  formgroup!: FormGroup;
  asset: AssetmasterMapping = new AssetmasterMapping()
  assets: Assetstypeselect[] = [];
  asset123: any;
  prefixcode: any;
  assets1: AssetmasterMapping[] = [

    { assets: 'monitor', assetstype: 'It asset', prefixcode: 'mon', status: true },
    { assets: 'keyboard', assetstype: 'It', prefixcode: 'key', status: true },
    { assets: 'cpu', assetstype: 'asset', prefixcode: 'cpu', status: false },
  ];
  @ViewChild('name') searchElement!: ElementRef;
  assetstypeselect: Assetstypeselect[] = [
    { assetstypecode: 0, assetstype: 'It asset' },
    { assetstypecode: 1, assetstype: 'It' },
    { assetstypecode: 2, assetstype: 'asset' }
  ];
  assetselect: any
  sub: any;
  save: any;
  savedata: boolean = true;
  status: any;
  statuscolor: any;
  assetstype12: any;
  assetsname: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,) { }

  kkk: any;
  ngOnInit(): void {
    debugger;
    this.sub = this.route.paramMap.subscribe(params => {
      debugger;
      this.assetsname = params.get('id');
      this.prefixcode = params.get('id1');
      this.assetstype12 = params.get('id2');
      this.status = params.get('id3');
      this.save = params.get('save');
      console.log(params);
      debugger;
      this.assets = this.assetstypeselect.filter(
        book => book.assetstype === this.assetstype12);
    });
    debugger;
    // this.assetstypeselect = this.assets;

    debugger;
    this.asset.assets = this.assetsname;
    this.asset.prefixcode = this.prefixcode;
    this.asset.assetstype = this.assetstype12;
    this.asset.status = this.status;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }

    this.formgroup = this.fb.group({
      asset: [this.asset.assets, [Validators.required]],
      prefix: [this.asset.prefixcode, [Validators.required]],
      assettype: [this.asset.assetstype, [Validators.required]],
      status: [this.asset.status, [Validators.required]]


    })
    debugger;
    if (this.assets.length > 0) {
      this.formgroup.controls.assettype.setValue(this.assets[0].assetstypecode);
    } else {
      this.formgroup.controls.assettype.setValue(this.assetstypeselect[0].assetstypecode);
    }
    console.log(this.formgroup.value)
    this.ontoggledefault();
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }
  AssetmasterMapping(AssetmasterMapping: any, arg1: boolean): any {
    throw new Error('Method not implemented.');
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

