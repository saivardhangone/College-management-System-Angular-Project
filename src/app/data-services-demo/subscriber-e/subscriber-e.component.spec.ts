import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberEComponent } from './subscriber-e.component';

describe('SubscriberEComponent', () => {
  let component: SubscriberEComponent;
  let fixture: ComponentFixture<SubscriberEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriberEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
