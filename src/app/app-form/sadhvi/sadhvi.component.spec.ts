import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadhviComponent } from './sadhvi.component';

describe('SadhviComponent', () => {
  let component: SadhviComponent;
  let fixture: ComponentFixture<SadhviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SadhviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SadhviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
