import { FichaFauna } from './types';

const base = '/images/Flora/';
const img = (file: string) => encodeURI(base + file);

const descripcionGenerica =
  'Especie característica del matorral xerófilo del municipio de San Agustín Tlaxiaca, adaptada a condiciones de escasa precipitación, alta radiación solar y amplias variaciones de temperatura entre el día y la noche.';

export const FLORA: FichaFauna[] = [
  {
    nombre: 'Biznaga de barril',
    especie: 'Ferocactus latispinus (Britton & Rose, 1922)',
    descripcion: descripcionGenerica,
    imagen: img('Biznaga de barril .jpeg'),
  },
  {
    nombre: 'Biznaga partida de cuernos',
    especie: 'Coryphantha radians (Britton & Rose, 1923)',
    descripcion: descripcionGenerica,
    imagen: img('Biznaga partida de cuernos .jpeg'),
  },
  {
    nombre: 'Cardenche',
    especie: 'Cylindropuntia imbricata (Knuth, 1930)',
    descripcion: descripcionGenerica,
    imagen: img('Cardenche.jpeg'),
  },
  {
    nombre: 'Cinco llagas',
    especie: 'Tagetes lunulata (Ortega, 1797)',
    descripcion: descripcionGenerica,
    imagen: img('Cinco llagas.jpeg'),
  },
  {
    nombre: 'Cochinita',
    especie: 'Echeveria secunda (Booth & Lindley, 1838)',
    descripcion: descripcionGenerica,
    imagen: img('Cochinita .jpeg'),
  },
  {
    nombre: 'Flor de San Juan',
    especie: 'Bouvardia longiflora (Knuth, 1930)',
    descripcion: descripcionGenerica,
    imagen: img('Flor de San Juan.jpeg'),
  },
  {
    nombre: 'Gamoncillo',
    especie: 'Asphodelus fistulosus (Linneo, 1753)',
    descripcion: descripcionGenerica,
    imagen: img('Gamoncillo.jpeg'),
  },
  {
    nombre: 'Garañona',
    especie: 'Castilleja tenuiflora (Bentham, 1839)',
    descripcion: descripcionGenerica,
    imagen: img('Garañona.jpeg'),
  },
  {
    nombre: 'Gualdón',
    especie: 'Reseda luteola (Linneo, 1753)',
    descripcion: descripcionGenerica,
    imagen: img('Gualdón .jpeg'),
  },
  {
    nombre: 'Hierba de la bruja',
    especie: 'Verbesina virgata (Cavanilles, 1796)',
    descripcion: descripcionGenerica,
    imagen: img('Hierba de la bruja.jpg'),
  },
  {
    nombre: 'Maguey de Castilla',
    especie: 'Agave mapisaga (Trelease, 1920)',
    descripcion: descripcionGenerica,
    imagen: img('Maguey de castilla.jpeg'),
  },
  {
    nombre: 'Maguey pulquero',
    especie: 'Agave salmiana (Dyck, 1859)',
    descripcion: descripcionGenerica,
    imagen: img('Maguey pulquero.jpeg'),
  },
  {
    nombre: 'Nopal cardón',
    especie: 'Opuntia streptacantha (Lemaire, 1839)',
    descripcion: descripcionGenerica,
    imagen: img('Nopal Cardón .jpeg'),
  },
  {
    nombre: 'Nopal compuesto',
    especie: 'Opuntia robusta (Pfeiffer, 1837)',
    descripcion: descripcionGenerica,
    imagen: img('Nopal Compuestos .jpeg'),
  },
  {
    nombre: 'Palmita yuca',
    especie: 'Yucca filifera (Chabaud, 1876)',
    descripcion: descripcionGenerica,
    imagen: img('Palmita Yuca.jpeg'),
  },
  {
    nombre: 'Sotol verde',
    especie: 'Dasylirion acrotrichum (Zuccarini, 1840)',
    descripcion: descripcionGenerica,
    imagen: img('Sotol Verde.jpeg'),
  },
  {
    nombre: 'Tabaquillo',
    especie: 'Nicotiana glauca (Graham, 1828)',
    descripcion: descripcionGenerica,
    imagen: img('Tabaquillo.jpeg'),
  },
  {
    nombre: 'Tlacote',
    especie: 'Salvia mexicana (Linneo, 1753)',
    descripcion: descripcionGenerica,
    imagen: img('Tlacote.jpeg'),
  },
  {
    nombre: 'Trompetilla',
    especie: 'Bouvardia ternifolia (Cavanilles, 1797)',
    descripcion: descripcionGenerica,
    imagen: img('Trompetilla.jpeg'),
  },
];
