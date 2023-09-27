class Libro {
  /**
   * Constructor de Libro. El identificador es autogenerado.
   * @param {string} titulo Título del libro
   * @param {string} autor Autor del libro
   * @param {number} anno_publicacion Año de publicación del libro
   */
  constructor(titulo, autor, anno_publicacion) {
    // Atributos Privados
    let _id = performance.now();
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
      this.titulo = titulo;
    };
    this.setAutor = (autor) => {
      this.autor = autor;
    };
    this.setAnnoPublicacion = (anno_publicacion) => {
      this.anno_publicacion = anno_publicacion;
    };
  }

  imprimir() {
    console.log(
      `Libro con id: ${this.getId()}, título: ${this.getTitulo()}, autor: ${this.getAutor()} y año de publicación: ${this.getAnnoPublicacion()}`
    );
  }
}

let lib1 = new Libro("Rigoberto", "Frank Hernandez", 2002);
console.log(lib1.imprimir());
