export interface Position {
  lat: string;
  lon: string;
}

// 震源の情報
export type Epicenter = Position;

// 震度観測点の情報
export interface EarthquakeInfo {
  int1: Position[];
  int2: Position[];
  int3: Position[];
  int4: Position[];
  int5l: Position[];
  int5u: Position[];
  int6l: Position[];
  int6u: Position[];
  int7: Position[];
}
