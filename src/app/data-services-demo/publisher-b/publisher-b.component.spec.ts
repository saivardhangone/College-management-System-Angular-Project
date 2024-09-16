import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherBComponent } from './publisher-b.component';

describe('PublisherBComponent', () => {
  let component: PublisherBComponent;
  let fixture: ComponentFixture<PublisherBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublisherBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublisherBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
