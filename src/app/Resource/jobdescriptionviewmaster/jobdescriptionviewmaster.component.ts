import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JobdescriptionviewMaster } from '../model/jobdescriptionviewmaster';

@Component({
  selector: 'app-jobdescriptionviewmaster',
  templateUrl: './jobdescriptionviewmaster.component.html',
  styleUrls: ['./jobdescriptionviewmaster.component.css']
})
export class JobdescriptionviewmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['id','name','name1','location', 'experience','joining','closing','status', 'tools'];
  dataSource!: MatTableDataSource<JobdescriptionviewMaster>;
  prefix: JobdescriptionviewMaster[] = [
    { id: '1', name: 'Trainee', name1: 'Krishna	',location: 'Chennai', experience:'2', joining:'2021-09-01',closing:'2021-09-01', status: true },
    {id: '2',  name: 'Trainee', name1: 'Krishna	',location: 'Chennai', experience:'3', joining:'2021-09-01',closing:'2021-09-01', status: true },
    { id: '3', name: 'Trainee', name1: 'Krishna	',location: 'Chennai', experience:'4', joining:'2021-09-01',closing:'2021-09-01', status: true },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.prefix);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/jobdescriptionviewmasteradd', "", "","","","","", "",false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/jobdescriptionviewmasteradd', row.id, row.name, row.name1, row.location, row.experience,row.joining, row.closing, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
