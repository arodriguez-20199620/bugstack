import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from './user-modal/user-modal.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {
  isSmallScreen: boolean = false;
  selectedUser: User | null = null;

  dataSource = new MatTableDataSource<User>([
    { name: 'Cristian Calderon', email: 'cristian@gmail.com', type: 'Admin', status: 'Online' },
    { name: 'Sebastian Ramirez', email: 'sebastian@gmail.com', type: 'user', status: 'Online' },
    { name: 'Eduardo Urbina', email: 'eduardo@gmail.com', type: 'user', status: 'offline' },
    { name: 'Cerbero Rodriguez', email: 'cerbero@gmail.com', type: 'Admin', status: 'Online' },
    { name: 'Patroclo Hernandez', email: 'patroclo@gmail.com', type: 'user', status: 'offline' },
    { name: 'Brandon Gomez', email: 'brandon@gmail.com', type: 'Admin', status: 'Online' },
    { name: 'Herlin Gomez', email: 'herlin@gmail.com', type: 'user', status: 'Online' },
    { name: 'Hermes Batres', email: 'hermes@gmail.com', type: 'Admin', status: 'Online' },
    { name: 'Gerson Emmanuel', email: 'gerson@gmail.com', type: 'user', status: 'offline' },
  ]);

  displayedColumns: string[] = ['name', 'email', 'type', 'status', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dialogWidth = '400px';

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        this.dialogWidth = this.isSmallScreen ? '100%' : '400px'; 
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: this.dialogWidth,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal fue cerrado', result);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  toggleCard(user: User): void {
    if(this.selectedUser === user) {
      this.selectedUser = null;
    } else {
      this.selectedUser = user;
    }
  }

  deleteUser(user: User): void { 
    console.log('Eliminar usuario', user);
  }

  editUser(user: User): void {
    console.log('Editar usuario', user);
  }

}

export interface User {
  name: string;
  email: string;
  type: string;
  status: string;
}
