import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { NavController, AlertController } from '@ionic/angular';


 //entorno login 
describe('LoginPage', () => {

  //definir variable 
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;

// recorrer login 
  beforeEach(async () => {

    //creando objetos nav y alert
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);

    //modulo
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: AlertController, useValue: alertControllerSpy },
      ],
    }).compileComponents();

    //asignar objeto a las variable 
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar una alerta si el correo está vacío', async () => {
    component.email = '';
    component.password = '1234';

    alertControllerSpy.create.and.returnValue(
      Promise.resolve({
        present: jasmine.createSpy('present'),
      } as any)
    );

    await component.login();

    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'El campo de correo no puede estar vacío.',
      buttons: ['OK'],
    });
  });

  it('debería mostrar una alerta si el correo tiene formato inválido', async () => {
    component.email = 'correo_invalido';
    component.password = '1234';

    alertControllerSpy.create.and.returnValue(
      Promise.resolve({
        present: jasmine.createSpy('present'),
      } as any)
    );

    await component.login();

    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'El formato del correo es inválido.',
      buttons: ['OK'],
    });
  });

  it('debería mostrar una alerta si la contraseña está vacía', async () => {
    component.email = 'test@example.com';
    component.password = '';

    alertControllerSpy.create.and.returnValue(
      Promise.resolve({
        present: jasmine.createSpy('present'),
      } as any)
    );

    await component.login();

    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'La contraseña no puede estar vacía.',
      buttons: ['OK'],
    });
  });

  it('debería mostrar una alerta si la contraseña tiene más de 4 caracteres', async () => {
    component.email = 'test@example.com';
    component.password = '12345';

    alertControllerSpy.create.and.returnValue(
      Promise.resolve({
        present: jasmine.createSpy('present'),
      } as any)
    );

    await component.login();

    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'La contraseña no puede tener más de 4 caracteres.',
      buttons: ['OK'],
    });
  });

  it('debería navegar a /home cuando los datos son válidos', async () => {
    component.email = 'test@example.com';
    component.password = '1234';

    await component.login();

    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['/home'], {
      queryParams: { email: 'test@example.com', password: '1234' },
    });
  });

  it('debería navegar a la página de registro cuando se llama CrearCuenta', () => {
    component.CrearCuenta();
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['/registro']);
  });
});
