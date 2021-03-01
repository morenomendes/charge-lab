import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalstationsComponent } from './modalstations.component';

describe('ModalstationsComponent', () => {
  let component: ModalstationsComponent;
  let fixture: ComponentFixture<ModalstationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalstationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
