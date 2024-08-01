export interface OrphanagePoint {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Orphanage {
  id: string;
  name: string;
  description: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  latitude: number;
  longitude: number;
  images: {
    name: string;
    path: string;
    url: string;
  }[];
}
