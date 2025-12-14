import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';  

interface Producto {
  nombre: string;
  autor: string;
  imagen: string;
  descripcion: string;
  categoria: string;
  precio: number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false
})
export class ProductosPage implements OnInit {


  productos: Producto[] = [
  { nombre: 'El Principito', autor: 'Antoine de Saint-Exupéry', imagen: 'assets/img/principe.png', descripcion: 'Historia sobre la inocencia y la sabiduría infantil.', categoria: 'Fábula', precio: 8.9 },
  { nombre: 'Cien años de soledad', autor: 'Gabriel García Márquez', imagen: 'assets/img/cien_soledad.png', descripcion: 'Relato de la familia Buendía en Macondo.', categoria: 'Realismo mágico', precio: 12.9 },
  { nombre: '1984', autor: 'George Orwell', imagen: 'assets/img/1984.png', descripcion: 'Una sociedad controlada por el Gran Hermano.', categoria: 'Distopía', precio: 9.9 },
  { nombre: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', imagen: 'assets/img/quijote.png', descripcion: 'Aventuras de un caballero y su escudero.', categoria: 'Clásico', precio: 15.0 },
  { nombre: 'Fahrenheit 451', autor: 'Ray Bradbury', imagen: 'assets/img/451.png', descripcion: 'En un mundo donde leer está prohibido.', categoria: 'Ciencia ficción', precio: 10.5 },
  { nombre: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', imagen: 'assets/img/cronica.png', descripcion: 'Una tragedia contada desde el final.', categoria: 'Novela', precio: 11.5 },
  { nombre: 'Orgullo y prejuicio', autor: 'Jane Austen', imagen: 'assets/img/orgullo.png', descripcion: 'Romance e ironía en la sociedad inglesa.', categoria: 'Romance', precio: 8.7 },
  { nombre: 'El Hobbit', autor: 'J. R. R. Tolkien', imagen: 'assets/img/hobbit.jpg', descripcion: 'La aventura de Bilbo Bolsón hacia la Montaña Solitaria.', categoria: 'Fantasía', precio: 13.2 },
  { nombre: 'Los miserables', autor: 'Victor Hugo', imagen: 'assets/img/miserables.png', descripcion: 'Redención y justicia en la Francia del siglo XIX.', categoria: 'Drama histórico', precio: 16.8 },
  { nombre: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', imagen: 'assets/img/sombra.png', descripcion: 'Una historia de libros, amor y misterio.', categoria: 'Misterio', precio: 13.9 },
  { nombre: 'It', autor: 'Stephen King', imagen: 'assets/img/it.png', descripcion: 'Un grupo enfrenta sus miedos y un ser aterrador.', categoria: 'Terror', precio: 14.5 },
  { nombre: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', imagen: 'assets/img/harry.png', descripcion: 'El inicio de la aventura mágica.', categoria: 'Fantasía', precio: 12.0 },
  { nombre: 'El alquimista', autor: 'Paulo Coelho', imagen: 'assets/img/alquimia.png', descripcion: 'Un viaje espiritual en busca de los sueños.', categoria: 'Filosofía', precio: 8.9 },
  { nombre: 'La casa de los espíritus', autor: 'Isabel Allende', imagen: 'assets/img/casa.png', descripcion: 'Saga familiar llena de realismo mágico.', categoria: 'Novela', precio: 13.4 },
  { nombre: 'Matar a un ruiseñor', autor: 'Harper Lee', imagen: 'assets/img/matar.png', descripcion: 'Una historia sobre justicia y prejuicio.', categoria: 'Clásico', precio: 9.8 },
  { nombre: 'El nombre del viento', autor: 'Patrick Rothfuss', imagen: 'assets/img/nombre.png', descripcion: 'La vida y aventuras del joven Kvothe.', categoria: 'Fantasía épica', precio: 15.2 },
  { nombre: 'Drácula', autor: 'Bram Stoker', imagen: 'assets/img/dracula.png', descripcion: 'El clásico del vampiro por excelencia.', categoria: 'Terror', precio: 9.1 },
  { nombre: 'Los juegos del hambre', autor: 'Suzanne Collins', imagen: 'assets/img/juegos.png', descripcion: 'Una lucha por sobrevivir en un futuro distópico.', categoria: 'Distopía', precio: 11.0 },
  { nombre: 'El código Da Vinci', autor: 'Dan Brown', imagen: 'assets/img/codigo.png', descripcion: 'Un misterio que mezcla historia y religión.', categoria: 'Thriller', precio: 12.5 },
  { nombre: 'La odisea', autor: 'Homero', imagen: 'assets/img/odisea.png', descripcion: 'La travesía de Ulises para volver a Ítaca.', categoria: 'Épico', precio: 9.9 }
  ];

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
