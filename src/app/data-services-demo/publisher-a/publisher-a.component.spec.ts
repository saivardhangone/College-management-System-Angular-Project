import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherAComponent } from './publisher-a.component';

describe('PublisherAComponent', () => {
  let component: PublisherAComponent;
  let fixture: ComponentFixture<PublisherAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublisherAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublisherAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
