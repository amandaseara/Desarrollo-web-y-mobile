import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJugadorComponent } from './detalles-jugador.component';

describe('DetallesJugadorComponent', () => {
  let component: DetallesJugadorComponent;
  let fixture: ComponentFixture<DetallesJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesJugadorComponent]
    });
    fixture = TestBed.createComponent(DetallesJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
