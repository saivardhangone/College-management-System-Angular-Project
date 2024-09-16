import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberCComponent } from './subscriber-c.component';

describe('SubscriberCComponent', () => {
  let component: SubscriberCComponent;
  let fixture: ComponentFixture<SubscriberCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriberCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
