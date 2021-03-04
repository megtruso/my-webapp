import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchIntegrationComponent } from './twitch-integration.component';

describe('TwitchIntegrationComponent', () => {
  let component: TwitchIntegrationComponent;
  let fixture: ComponentFixture<TwitchIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
