import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuentosPage } from './cuentos.page';

describe('CuentosPage', () => {
  let component: CuentosPage;
  let fixture: ComponentFixture<CuentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
