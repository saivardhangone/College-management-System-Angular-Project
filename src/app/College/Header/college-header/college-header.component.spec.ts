import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeHeaderComponent } from './college-header.component';

describe('CollegeHeaderComponent', () => {
  let component: CollegeHeaderComponent;
  let fixture: ComponentFixture<CollegeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
