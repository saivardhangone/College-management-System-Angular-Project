import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExchangeDemoComponent } from './data-exchange-demo.component';

describe('DataExchangeDemoComponent', () => {
  let component: DataExchangeDemoComponent;
  let fixture: ComponentFixture<DataExchangeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataExchangeDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataExchangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
