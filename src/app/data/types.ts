export interface FichaFauna {
  nombre: string;
  especie: string;
  longitud: string;
  peso: string;
  longevidad: string;
  paridad?: string;
  nota?: string;
  descripcion: string;
  imagen?: string;
  pieDeImagen?: string;
}

export type Categoria =
  | 'Flora'
  | 'Reptiles'
  | 'Mamíferos'
  | 'Aves'
  | 'Insectos'
  | 'Arácnidos';
