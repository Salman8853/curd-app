import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContactDetailsComponent } from './student-contact-details.component';

describe('StudentContactDetailsComponent', () => {
  let component: StudentContactDetailsComponent;
  let fixture: ComponentFixture<StudentContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentContactDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
