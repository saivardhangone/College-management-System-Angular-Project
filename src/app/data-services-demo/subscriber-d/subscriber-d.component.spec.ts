import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberDComponent } from './subscriber-d.component';

describe('SubscriberDComponent', () => {
  let component: SubscriberDComponent;
  let fixture: ComponentFixture<SubscriberDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriberDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
