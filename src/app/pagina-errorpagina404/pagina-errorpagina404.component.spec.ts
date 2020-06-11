import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErrorpagina404Component } from './pagina-errorpagina404.component';

describe('PaginaErrorpagina404Component', () => {
  let component: PaginaErrorpagina404Component;
  let fixture: ComponentFixture<PaginaErrorpagina404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaErrorpagina404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaErrorpagina404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
