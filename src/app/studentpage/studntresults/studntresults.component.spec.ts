import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudntresultsComponent } from './studntresults.component';

describe('StudntresultsComponent', () => {
  let component: StudntresultsComponent;
  let fixture: ComponentFixture<StudntresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudntresultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudntresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
