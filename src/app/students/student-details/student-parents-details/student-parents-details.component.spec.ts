import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParentsDetailsComponent } from './student-parents-details.component';

describe('StudentParentsDetailsComponent', () => {
  let component: StudentParentsDetailsComponent;
  let fixture: ComponentFixture<StudentParentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentParentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentParentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
