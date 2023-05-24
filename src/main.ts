import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export interface Alumnos {
    id: number;
    nombres: String;
    apellidos: String;
    edad: number;
    email: String;
    contraseña: String;
    telefono: number;
    DNI: number;
    direccion: String;
    cp: number;
  }
  export interface Notas {
    nombres: String;
    curso: String;
    asignatura: String;
    nota: String;
  }