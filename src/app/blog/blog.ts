import { Component, signal, computed } from '@angular/core';
import { FICHAS_POR_CATEGORIA, INTRO_POR_CATEGORIA, Categoria, FichaFauna } from '../data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly categorias: Categoria[] = [
    'Flora',
    'Reptiles',
    'Mamíferos',
    'Aves',
    'Insectos',
    'Arácnidos',
  ];

  readonly categoriaActiva = signal<Categoria>('Aves');
  readonly fichaAbierta = signal<string | null>(null);

  readonly fichas = computed<FichaFauna[]>(
    () => FICHAS_POR_CATEGORIA[this.categoriaActiva()] ?? []
  );

  readonly intro = computed(() => INTRO_POR_CATEGORIA[this.categoriaActiva()] ?? null);

  seleccionar(cat: Categoria) {
    this.categoriaActiva.set(cat);
    this.fichaAbierta.set(null);
  }

  abrirFicha(nombre: string) {
    this.fichaAbierta.set(nombre);
  }

  cerrarFicha() {
    this.fichaAbierta.set(null);
  }

  fichaActiva = computed<FichaFauna | null>(() => {
    const nombre = this.fichaAbierta();
    if (!nombre) return null;
    return this.fichas().find((f) => f.nombre === nombre) ?? null;
  });
}
