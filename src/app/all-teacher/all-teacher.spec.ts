import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeacher } from './all-teacher';

describe('AllTeacher', () => {
  let component: AllTeacher;
  let fixture: ComponentFixture<AllTeacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTeacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTeacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
