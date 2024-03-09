import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  backgroundColorCat: string[] = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ];

  borderColorCat: string[] =[
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ];

  categorias: string[] = [
    "business",
    "entertainment",
    "general",
    "technology",
    "health",
    "science",
    "sports"
  ];

  datosTabla = [
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 }
  ];

  datosLista = [
    "Esta será la línea 1 de la lista, vamos a poner un texto muy largo para ver qué es lo que hace en estos casos y como podemos corregirlo",
    "Esta será la línea 2 de la lista, será más corta que la anterior, pero entrará bastante justo en el ancho A4.",
    "Esta será la línea 3 de la lista, este entra bien",
    "Esta será la línea 4 de la lista, este entra bien",
    "Esta será la línea 5 de la lista, este entra bien",
    "Esta será la línea 6 de la lista, este entra bien",
    "Esta será la línea 7 de la lista, este entra bien",
    "Esta será la línea 8 de la lista, este entra bien",
    "Esta será la línea 9 de la lista, este entra bien",
    "Esta será la línea 10 de la lista, este entra bien",
    "Esta será la línea 11 de la lista, este entra bien",
    "Esta será la línea 12 de la lista, este entra bien",
    "Esta será la línea 13 de la lista, este entra bien",
    "Esta será la línea 14 de la lista, este entra bien",
    "Esta será la línea 15 de la lista, este entra bien",
    "Esta será la línea 16 de la lista, este entra bien",
    "Esta será la línea 17 de la lista, este entra bien",
    "Esta será la línea 18 de la lista, este entra bien",
    "Esta será la línea 19 de la lista, este entra bien",
    "Esta será la línea 20 de la lista, este entra bien",
  ];

  @ViewChild('container') container!: ElementRef;

  constructor(public servicioApiRest: ServiceService) {}

  ngOnInit() {
    // Mediante el array de categorias, llamamos a la API una vez por cada categoría.
    this.categorias.forEach(categoria => {
      this.servicioApiRest.cargarCategoria(categoria);
    });
  }

  generarPDF() {
    //Ancho en px de A4
    const anchoMax = 794;
    //Alto en px de A4
    const altoMax = 1123;
    const doc = new jsPDF({
      orientation: 'portrait', //Orientación normal
      unit: 'px', //En este caso como unidades utilizamos px, pero podríamos poner cm,mm,em,pt,...
      //mm -> [210, 297] para A4
      format: [anchoMax,altoMax]
    });

    /* querySelectorAll: Cogemos todos los selectores que tengan class="seccion" y creamos un NodeListOf de HTMLElement.
     * NodeListOf, es un array que contendrá nodos de DOM, en este caso, es un array de HTMLElement.
     */
    const sections = this.container.nativeElement.querySelectorAll('.seccion') as NodeListOf<HTMLElement>;
    // El total de secciones que tenemos en nuestro html
    const totalSections = sections.length;
    //Gestionará la sección que estamos analizando
    let currentSectionIndex = 0;
    //Controlará que se hayan creado todas las imagenes antes de crear el PDF. En caso contrario imprimiría un pdf por cada sección.
    let contSections = 0;
    //Definimos de que height queremos que empiece a dibujar nuestro PDF.
    let headerHeight = 55; //Altura del padding que le hemos dado al header
    let footerHeight = 10; //Altura del padding que le hemos dado al footer
    let currentPageHeight = headerHeight+footerHeight;
    //let currentPageHeight = 0;

    while (currentSectionIndex < totalSections) {
      const section = sections[currentSectionIndex];
      html2canvas(section).then(canvas => {
        const imageData = canvas.toDataURL('image/jpg');
        const width = doc.internal.pageSize.getWidth();
        /*Se calcula el height dependiendo del width del canvas y su relación con el width.
          *Esto se hace para que la imagen mantenga dimensiones proporcionales según el width de la página.
          */
        const height = canvas.height * (width / canvas.width);
        if (currentPageHeight + height >= doc.internal.pageSize.getHeight()) {
          doc.addPage();
          //currentPageHeight = 0;
          currentPageHeight = headerHeight + footerHeight;
          //this.addPageConfig(doc);
        }
        //this.addPageConfig(doc);
        doc.addImage(imageData, 'JPG', 0, currentPageHeight, width, height);
        currentPageHeight += height;
        contSections++;
        if (contSections === totalSections) {
          //Al final asignamos el header y footer a todas las páginas
          this.addPageConfig(doc);
          doc.save('dashboard.pdf');
        }
      });
      //Sumamos 1, para que el bucle realice todas las peticiones, una por cada sección
      currentSectionIndex++;
    }
  }

  addPageConfig(doc:jsPDF) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // Añadimos la págin
      doc.setPage(i);
      // Añadimos el logotipo, sus valores y posición
      const imagen = "/assets/icon/favicon.png";
      const imgWidth = 45; // Ancho de la imagen
      const imgHeight = 45; // Alto de la imagen
      const imgX = 5; // Posición X de la imagen
      const imgY = 5; // Posición Y de la imagen
      doc.addImage(imagen, "JPG", imgX, imgY, imgWidth, imgHeight);
      // Le asignamos un tamaño a las letras
      doc.setFontSize(10);
      doc.line(0, 55, doc.internal.pageSize.width, 55);
      // Añadimos información de la empresa
      const nombreEmpresa = "Nombre de la Empresa";
      const telefono = "Teléfono: 123-456-789";
      const direccion = "Dirección: Calle Principal, 123";
      const texto = nombreEmpresa+'\n'+telefono+'\n'+direccion;
      doc.text(texto, doc.internal.pageSize.width - 120, 10, {baseline:'top'});
      // Añadimos la paginación
      doc.text("Página "+i, doc.internal.pageSize.width - 100, doc.internal.pageSize.height - 10, {baseline:'bottom'});
    }
  }
}
