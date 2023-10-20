import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentComponent } from './teacher-student.component';

describe('TeacherStudentComponent', () => {
  let component: TeacherStudentComponent;
  let fixture: ComponentFixture<TeacherStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
