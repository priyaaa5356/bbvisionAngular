import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RoleMaster } from '../model/rolemaster';

@Component({
  selector: 'app-rolemaster',
  templateUrl: './rolemaster.component.html',
  styleUrls: ['./rolemaster.component.css']
})
export class RolemasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'name1', 'status', 'tools'];
  dataSource!: MatTableDataSource<RoleMaster>;
  role: RoleMaster[] = [
    { name: 'Intreviewer', name1: 'ROLE-001	', status: true },
    { name: 'Recruiter', name1: 'ROLE-002	', status: true },
    { name: 'Admin', name1: 'ROLE-003	', status: true },
    { name: 'Technical', name1: 'ROLE-004	', status: true },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  az: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.role);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/rolemasteradd', "", "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/rolemasteradd', row.name, row.name1, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
