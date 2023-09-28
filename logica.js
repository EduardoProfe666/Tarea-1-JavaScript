import { validarNoNullUndefined } from "./utilidades.js";

export class Libro {
  /**
   * Constructor de Libro. El identificador es autogenerado.
   * @param {string} titulo Título del libro
   * @param {string} autor Autor del libro
   * @param {number} anno_publicacion Año de publicación del libro
   */
  constructor(titulo, autor, anno_publicacion) {
    // Atributos Privados
    let _id = performance.now() + performance.timeOrigin; // Permite crear un identificador único con la fecha y hora del sistema en alta precisión
    let _titulo = titulo;
    let _autor = autor;
    let _anno_publicacion = anno_publicacion;

    // Getters
    this.getId = () => _id;
    this.getTitulo = () => _titulo;
    this.getAutor = () => _autor;
    this.getAnnoPublicacion = () => _anno_publicacion;

    // Setters
    this.setTitulo = (titulo) => {
      if (!validarNoNullUndefined(titulo)) throw new Error("Título no válido");
      _titulo = titulo;
    };

    this.setAutor = (autor) => {
      if (!validarNoNullUndefined(autor)) throw new Error("Autor no válido");
      _autor = autor;
    };

    this.setAnnoPublicacion = (anno_publicacion) => {
      if (!validarNoNullUndefined(anno_publicacion))
        throw new Error("Año de publicación no válido");
      _anno_publicacion = anno_publicacion;
    };

    // Setear atributos
    this.setTitulo(titulo);
    this.setAutor(autor);
    this.setAnnoPublicacion(anno_publicacion);
  }

  imprimir() {
    console.log(
      `Libro con id: ${this.getId()}, título: ${this.getTitulo()}, autor: ${this.getAutor()} y año de publicación: ${this.getAnnoPublicacion()}`
    );
  }
}

export class Biblioteca {
  constructor() {
    let listado_libros = [];

    // Getters
    this.getListadoLibros = () => listado_libros;
  }

  /**
   * Permite agregar un libro dado al listado de libros
   *
   * @param {Libro} libro
   */
  agregarLibro(libro) {
    if (!validarNoNullUndefined(libro)) throw new Error("Libro no válido");
    this.getListadoLibros().push(libro);
  }

  /**
   * Permite imprimir el listado de libros
   */
  imprimirListadoLibros() {
    for (let libro of this.getListadoLibros()) libro.imprimir();
  }

  /**
   * Permite imprimir el listado de libros dado
   */
  static imprimirListadoLibros(listado_libros) {
    if (!validarNoNullUndefined(listado_libros))
      throw new Error("Listado no válido");
    for (let libro of listado_libros) libro.imprimir();
  }

  /**
   * Permite buscar los libros que tengan un autor dado
   *
   * @param {string} autor Autor a encontrar
   * @returns Listado de libros encontrados
   */
  buscarLibrosAutor(autor) {
    if (!validarNoNullUndefined(autor)) throw new Error("Autor no válido");

    return this.getListadoLibros().filter(
      (libro) => libro.getAutor() === autor
    );
  }

  /**
   * Permite eliminar un libro dado su identificador.
   * @param {number} id_libro
   */
  eliminarLibro(id_libro) {
    if (!validarNoNullUndefined(id_libro))
      throw new Error("Identificador no válido");

    this.getListadoLibros().splice(this.buscarLibro(id_libro), 1);
  }

  /**
   * Permite encontrar un libro dado su identificador.
   * @param {number} id_libro Identificador del libro a encontrar
   * @returns Índice del libro encontrado o -1 si no se encontró
   */
  buscarLibro(id_libro) {
    let indice = -1;

    for (let i = 0; i < this.getListadoLibros().length && indice == -1; i++) {
      if (this.getListadoLibros()[i].getId() === id_libro) {
        indice = i;
      }
    }

    if (indice == -1) throw new Error("Identificador no existente");

    return indice;
  }

  /**
   * Permite modificar el título de un libro
   * @param {number} id_libro Identificador del libro a encontrar
   * @param {string} titulo Título nuevo
   */
  editarTituloLibro(id_libro, titulo) {
    if (!validarNoNullUndefined(titulo)) throw new Error("Título no válido");
    this.getListadoLibros()[this.buscarLibro(id_libro)].setTitulo(titulo);
  }

  /**
   * Permite modificar el autor de un libro
   * @param {number} id_libro Identificador del libro a encontrar
   * @param {string} autor Autor nuevo
   */
  editarAutorLibro(id_libro, autor) {
    if (!validarNoNullUndefined(autor)) throw new Error("Autor no válido");
    this.getListadoLibros()[this.buscarLibro(id_libro)].setAutor(autor);
  }

  /**
   * Permite modificar el año de publicación de un libro
   * @param {number} id_libro Identificador del libro a encontrar
   * @param {number} anno_publicacion Año de publicación
   */
  editarAnnoPublicacionLibro(id_libro, anno_publicacion) {
    if (!validarNoNullUndefined(anno_publicacion))
      throw new Error("Año de publicación no válido");
    this.getListadoLibros()[this.buscarLibro(id_libro)].setAnnoPublicacion(
      anno_publicacion
    );
  }
}
