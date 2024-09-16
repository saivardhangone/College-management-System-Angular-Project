import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterresultComponent } from './registerresult.component';

describe('RegisterresultComponent', () => {
  let component: RegisterresultComponent;
  let fixture: ComponentFixture<RegisterresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
