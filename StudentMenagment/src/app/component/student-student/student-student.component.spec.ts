import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudentComponent } from './student-student.component';

describe('StudentStudentComponent', () => {
  let component: StudentStudentComponent;
  let fixture: ComponentFixture<StudentStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
