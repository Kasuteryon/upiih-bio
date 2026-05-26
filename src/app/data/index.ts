import { Categoria, FichaFauna } from './types';
import { AVES } from './aves';
import { MAMIFEROS } from './mamiferos';
import { REPTILES } from './reptiles';
import { INSECTOS } from './insectos';
import { ARACNIDOS } from './aracnidos';
import { FLORA } from './flora';

export const FICHAS_POR_CATEGORIA: Record<Categoria, FichaFauna[]> = {
  Flora: FLORA,
  Reptiles: REPTILES,
  Mamíferos: MAMIFEROS,
  Aves: AVES,
  Insectos: INSECTOS,
  Arácnidos: ARACNIDOS,
};

export const INTRO_POR_CATEGORIA: Partial<Record<Categoria, { titulo: string; texto: string }>> = {
  Flora: {
    titulo: 'Flora del matorral xerófilo de San Agustín Tlaxiaca',
    texto:
      'El municipio de San Agustín Tlaxiaca se localiza dentro de una región dominada por matorral xerófilo, uno de los ecosistemas más representativos de las zonas áridas y semiáridas del centro de México. La flora de este tipo de vegetación está conformada por especies adaptadas a condiciones de escasa precipitación, alta radiación solar y amplias variaciones de temperatura entre el día y la noche. Entre las plantas más comunes se encuentran diversas especies de cactáceas, agaves, nopales, biznagas y yucas, así como arbustos característicos como el huizache, mezquite, gobernadora y diferentes especies de jarillas y epazotes silvestres. Estas plantas presentan adaptaciones especiales para conservar agua, como hojas reducidas o transformadas en espinas, tallos suculentos capaces de almacenar humedad y sistemas radiculares extensos. La flora del matorral xerófilo proporciona alimento, refugio y sitios de reproducción para una gran variedad de insectos, aves, reptiles y mamíferos, y muchas de estas especies poseen valor cultural, medicinal y económico para las comunidades locales.',
  },
};

export type { Categoria, FichaFauna };
