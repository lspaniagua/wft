import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ItemsInterceptor } from '../interceptors/items.interceptor';
import { ItemsResponse } from '../interfaces/items';

import { ItemsService } from './items.service';

const expectedItemsResponse: ItemsResponse = {
  items: [{
    title: "iPhone 6S Oro",
    description: "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
    price: "740",
    email: "iphonemail@wallapop.com",
    image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png"
  }, {
    title: "Polaroid 635",
    description: "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
    price: "50",
    email: "cameramail@wallapop.com",
    image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png"
  }, {
    title: "Bolso piel marca Hoss",
    description: "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
    price: "250",
    email: "bagmail@wallapop.com",
    image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png"
  }, {
    title: "Reloj de Daniel Wellington",
    description: "Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ",
    price: "100",
    email: "watchmail@wallapop.com",
    image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png"
  }, {
    title: "Coche antiguo americano",
    description: "Coche antiguo americano de color marrón. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas",
    price: "210000",
    email: "carmail@wallapop.com",
    image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/car.png"
  }],
  pagination: {
    page: { current: 1, size: 5, total: 4, start: 1, end: 4 },
    pages: [1, 2, 3, 4],
    index: { start: 0, end: 4},
    totalItems: 20
  }
};

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
        //HttpClientTestingModule
      ],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ItemsInterceptor,
        multi: true
      }],
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an ItemsResponse Object', (done: DoneFn) => {
    service.getItems().subscribe({
      next: itemsResponse => {
        expect(itemsResponse)
          .withContext('expected Items Response')
          .toEqual(expectedItemsResponse);
        done();
      },
      error: done.fail
    });
  });

  it('should get only 5 items', (done: DoneFn) => {
    service.getItems().subscribe({
      next: itemsResponse => {
        expect(itemsResponse.items.length)
          .withContext('expected Items Response')
          .toEqual(5);
        done();
      },
      error: done.fail
    });
  });
});