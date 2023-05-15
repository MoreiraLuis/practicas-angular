import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export interface Alumnos {
    id: String;
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