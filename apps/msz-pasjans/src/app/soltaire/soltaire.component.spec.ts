import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoltaireComponent } from './soltaire.component';

describe('SoltaireComponent', () => {
  let component: SoltaireComponent;
  let fixture: ComponentFixture<SoltaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoltaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoltaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
