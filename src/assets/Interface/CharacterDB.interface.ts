export interface RootObject {
  id: number;
  imageUrl: string;
  name: string;
  originplanet: Originplanet;
  role: string;
  specie: string;
  status: Status;
  transform: Transform | null;
  universe: string;
}

export enum Originplanet {
  Desconocido = "Desconocido",
  PlanetaDelNúcleoDelMundo = "Planeta del Núcleo del Mundo",
  PlanetaSadala = "Planeta Sadala",
  PlanetaTierra = "Planeta Tierra",
  PlanetaTsufrui = "Planeta Tsufrui",
  PlanetaVegeta = "Planeta Vegeta",
  PlanetaYardat = "Planeta Yardat",
}

export enum Status {
  Muerto = "Muerto",
  Vivo = "Vivo",
}

export enum Transform {
  S = "S",
}
