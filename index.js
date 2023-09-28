import {
  Libro,
  agregarLibro,
  eliminarLibro,
  imprimirListadoLibros,
  buscarLibrosAutor,
  editarAnnoPublicacionLibro,
  editarAutorLibro,
  editarTituloLibro,
} from "./logica.js";

//---------------- Declaración de variables -------------------//
let libros = [];
let l1 = new Libro("Lib 1", "Juan", 2002);
let l2 = new Libro("Lib 2", "Juan", 2003);
let l3 = new Libro("Lib 3", "Pedro", 2004);
let l4 = new Libro("Lib 4", "Pepe", 1985);
let l5 = new Libro("Lib 5", "Lilian", 2003);

//---------------- Pruebas -------------------//
console.log("\nPrueba de correcta agregación: ");
agregarLibro(libros, l1);
agregarLibro(libros, l2);
agregarLibro(libros, l3);
agregarLibro(libros, l4);
agregarLibro(libros, l5);
imprimirListadoLibros(libros);

// Prueba con de edición de l3
console.log("\nPrueba de correcta edición de autor");
console.log("Antes:");
libros[2].imprimir();
console.log("Después:");
editarAutorLibro(libros, l3.getId(), "José");
libros[2].imprimir();

console.log("\nPrueba de correcta edición de título");
console.log("Antes:");
libros[3].imprimir();
console.log("Después:");
editarTituloLibro(libros, l4.getId(), "Libro G");
libros[3].imprimir();

console.log("\nPrueba de correcta edición de año de publicación");
console.log("Antes:");
libros[4].imprimir();
console.log("Después:");
editarAnnoPublicacionLibro(libros, l5.getId(), 2010);
libros[4].imprimir();

console.log("\nPrueba de correcta eliminación de libro");
console.log("Antes:");
imprimirListadoLibros(libros);
console.log("Después de eliminar Libro con id->" + l4.getId() + ":");
eliminarLibro(libros, l4.getId());
imprimirListadoLibros(libros);

console.log("\nPrueba de correcta búsqueda de libros por autor");
console.log("Libros del autor Juan:");
imprimirListadoLibros(buscarLibrosAutor(libros, "Juan"));
console.log("Libros del autor Lilian:");
imprimirListadoLibros(buscarLibrosAutor(libros, "Lilian"));

console.log("\n");
