import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCaballeroComponent } from './tarjeta-caballero.component';

describe('TarjetaCaballeroComponent', () => {
  let component: TarjetaCaballeroComponent;
  let fixture: ComponentFixture<TarjetaCaballeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCaballeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCaballeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
