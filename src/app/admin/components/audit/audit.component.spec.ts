import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuditComponent } from './audit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


describe('AuditComponent', () => {
  let component: AuditComponent;
  let fixture: ComponentFixture<AuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        NoopAnimationsModule,
        MatSelectModule,
        MatPaginatorModule,
        MatTableModule
      ]
    });
    fixture = TestBed.createComponent(AuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
