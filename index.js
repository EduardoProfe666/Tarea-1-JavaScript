import { Libro, Biblioteca } from "./logica.js";

//---------------- Declaración de variables -------------------//
let biblioteca = new Biblioteca();
let l1 = new Libro("Lib 1", "Juan", 2002);
let l2 = new Libro("Lib 2", "Juan", 2003);
let l3 = new Libro("Lib 3", "Pedro", 2004);
let l4 = new Libro("Lib 4", "Pepe", 1985);
let l5 = new Libro("Lib 5", "Lilian", 2003);

//---------------- Pruebas -------------------//
console.log("\nPrueba de correcta agregación: ");
biblioteca.agregarLibro(l1);
biblioteca.agregarLibro(l2);
biblioteca.agregarLibro(l3);
biblioteca.agregarLibro(l4);
biblioteca.agregarLibro(l5);
biblioteca.imprimirListadoLibros();

console.log("\nPrueba de correcta edición de autor");
console.log("Antes:");
biblioteca.getListadoLibros()[2].imprimir();
console.log("Después:");
biblioteca.editarAutorLibro(l3.getId(), "José");
biblioteca.getListadoLibros()[2].imprimir();

console.log("\nPrueba de correcta edición de título");
console.log("Antes:");
biblioteca.getListadoLibros()[3].imprimir();
console.log("Después:");
biblioteca.editarTituloLibro(l4.getId(), "Libro G");
biblioteca.getListadoLibros()[3].imprimir();

console.log("\nPrueba de correcta edición de año de publicación");
console.log("Antes:");
biblioteca.getListadoLibros()[4].imprimir();
console.log("Después:");
biblioteca.editarAnnoPublicacionLibro(l5.getId(), 2010);
biblioteca.getListadoLibros()[4].imprimir();

console.log("\nPrueba de correcta eliminación de libro");
console.log("Antes:");
biblioteca.imprimirListadoLibros();
console.log("Después de eliminar Libro con id->" + l4.getId() + ":");
biblioteca.eliminarLibro(l4.getId());
biblioteca.imprimirListadoLibros();

console.log("\nPrueba de correcta búsqueda de libros por autor");
console.log("Libros del autor Juan:");
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibrosAutor("Juan"));
console.log("Libros del autor Lilian:");
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibrosAutor("Lilian"));

console.log("\n");
