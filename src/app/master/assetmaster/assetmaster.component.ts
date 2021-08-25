import { Component, ElementRef, EventEmitter, Input, OnInit,Output,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetmasterMapping, Assetsselect, Assetstypeselect, Prefixcodeselect } from '../model/assetsmaster';

@Component({
  selector: 'app-assetmaster',
  templateUrl: './assetmaster.component.html',
  styleUrls: ['./assetmaster.component.css']
})
export class AssetmasterComponent implements OnInit {
 
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') someRef!: MatSelect;
  displayedColumns: string[] = ['assets', 'assetstype', 'prefixcode', 'status', 'tools'];
  dataSource!: MatTableDataSource<AssetmasterMapping>;
  asset: AssetmasterMapping[] = [

    { assets: 'monitor', assetstype: 'It asset', prefixcode: 'mon', status: true },
    { assets: 'keyboard', assetstype: 'It', prefixcode: 'key', status: true },
    { assets: 'cpu', assetstype: 'asset', prefixcode: 'cpu', status: false },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  view: boolean = true;
  
  assetsselect: Assetsselect[] = [
    { assetscode: 0, assets: 'monitor' },
    { assetscode: 1, assets: 'keyboard' },
    { assetscode: 2, assets: 'cpu' }
  ];
  assetstypeselect: Assetstypeselect[] = [
    { assetstypecode: 0, assetstype: 'It asset' },
    { assetstypecode: 1, assetstype: 'It' },
    { assetstypecode: 2, assetstype: 'asset' }
  ];
  prefixcodeselect: Prefixcodeselect[] = [
    { prefixcode: 0, prefixcodename: 'mon' },
    {prefixcode : 1, prefixcodename: 'key' },
    { prefixcode: 2, prefixcodename: 'cpu' }
  ];
  selectedRowIndex: any;

  constructor(public router: Router,private _Activatedroute:ActivatedRoute) { 
    
  }
  

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.asset);
   
  }
    
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  
  }
    add() {
      
      this.router.navigate(['/assetmasteradds','','','',false,"add"]);
    }
    EditMethod(row: any) {
      debugger
      console.log(row)
      this.router.navigate(['/assetmasteradds',row.assets,row.prefixcode,row.assetstype,row.status,"update"]);
    }

  
  
    }

    

  



