import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements AfterViewInit {
  isSmallScreen: boolean = false;
  dataSource = new MatTableDataSource<Audit>([
    { entidad: 'Producto', usuario: 'Cristian', operacion: 'Create', fecha: '2023-09-25' },
    { entidad: 'Pedido', usuario: 'Sebastian', operacion: 'Update', fecha: '2023-09-24' },
    { entidad: 'Factura', usuario: 'Eduardo', operacion: 'Delete', fecha: '2023-09-23' },
    { entidad: 'Producto', usuario: 'Patroclo', operacion: 'Create', fecha: '2023-09-22' },
    { entidad: 'Cliente', usuario: 'Cerbero', operacion: 'Update', fecha: '2023-09-21' },
  ]);

  displayedColumns: string[] = ['entidad', 'usuario', 'operacion', 'fecha'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

interface Audit {
  entidad: string;
  usuario: string;
  operacion: string;
  fecha: string;
}
