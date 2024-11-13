import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsiteComponent } from './adminsite.component';

describe('AdminsiteComponent', () => {
  let component: AdminsiteComponent;
  let fixture: ComponentFixture<AdminsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsiteComponent]
    });
    fixture = TestBed.createComponent(AdminsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
