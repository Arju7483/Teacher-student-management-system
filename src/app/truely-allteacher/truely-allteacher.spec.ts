import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruelyAllteacher } from './truely-allteacher';

describe('TruelyAllteacher', () => {
  let component: TruelyAllteacher;
  let fixture: ComponentFixture<TruelyAllteacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruelyAllteacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruelyAllteacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
