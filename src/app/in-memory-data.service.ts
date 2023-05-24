import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Alumnos } from '../main';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuariosDb = [
      { id: 1, nombres: "Luis Manuel (API)", apellidos: "Moreira Esteban", edad: 27, email: "luismanuelmoreiraesteban@gmail.com", contraseña: "123456789", telefono: 622052509, DNI:4725525, direccion: "Calle Doctor Ángel Pascual Megías", cp: 3015 },
      { id: 2, nombres: "Jesús (API)", apellidos: "Alonso", edad: 29, email: "jesusalonso@ejemplo.es", contraseña: "123456789", telefono: 611215496, DNI:4745236, direccion: "Av. Doctor Rico Pérez", cp: 3014 },
      { id: 3, nombres: "María (API)", apellidos: "Rodríguez", edad: 23, email: "mariarodriguez@ejemplo.es", contraseña: "123456789", telefono: 699045478, DNI: 4773592, direccion: "Av. Rambla", cp: 3015 },
      { id: 4, nombres: "Jorge (API)", apellidos: "Álvarez Solís", edad: 30, email: "jorge@clicaonline.com", contraseña: "elmejor", telefono: 123456789, DNI: 12345678, direccion: "Av. Alcalde Lorenzo Carbonell", cp: 3008},
    ];
    return {usuariosDb};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(usuariosDb: Alumnos[]): number {
    return usuariosDb.length > 0 ? Math.max(...usuariosDb.map(usuariosDb => usuariosDb.id)) + 1 : 11;
  }
}