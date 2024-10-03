import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

// Angular Material Modules
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
// Translation Module
import { TranslateModule } from '@ngx-translate/core';

// HTTP Module
import { HttpClientModule } from '@angular/common/http';

// Reactive Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    
    // Angular Material Modules
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatStepperModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    NavbarComponent,
    
    // Angular Material Modules
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatStepperModule
  ]
})
export class SharedModule { }
