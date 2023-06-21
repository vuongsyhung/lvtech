import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationlogoComponent } from './animationlogo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AnimationlogoComponent', () => {
  let component: AnimationlogoComponent;
  let fixture: ComponentFixture<AnimationlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationlogoComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
