import { Categoria, FichaFauna } from './types';
import { AVES } from './aves';
import { MAMIFEROS } from './mamiferos';
import { REPTILES } from './reptiles';
import { INSECTOS } from './insectos';
import { ARACNIDOS } from './aracnidos';

export const FICHAS_POR_CATEGORIA: Record<Categoria, FichaFauna[]> = {
  Flora: [],
  Reptiles: REPTILES,
  Mamíferos: MAMIFEROS,
  Aves: AVES,
  Insectos: INSECTOS,
  Arácnidos: ARACNIDOS,
};

export type { Categoria, FichaFauna };
