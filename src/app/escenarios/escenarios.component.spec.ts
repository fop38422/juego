import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenariosComponent } from './escenarios.component';

describe('EscenariosComponent', () => {
  let component: EscenariosComponent;
  let fixture: ComponentFixture<EscenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscenariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
