/**
 * 地図の色設定
 */
interface ColorConfig {
  // 震度の色
  // 震度速報など、地域ごとの色付けに使用する
  int1: string;
  int2: string;
  int3: string;
  int4: string;
  int5l: string;
  int5u: string;
  int6l: string;
  int6u: string;
  int7: string;

  // 地域ごとに色付けした場合の線の色
  int1Stroke: string;
  int2Stroke: string;
  int3Stroke: string;
  int4Stroke: string;
  int5lStroke: string;
  int5uStroke: string;
  int6lStroke: string;
  int6uStroke: string;
  int7Stroke: string;

  // 陸の色
  land: string;
  // ミニマップの陸の色
  minimapLand: string;
  // 県区切りの線の色
  prefCountryStroke: string;
  // 地域区切りの線の色
  areaStroke: string;
  // 海の色
  waterArea: string;
  // ミニマップの線の色
  minimapStroke: string;
}

export const Color: ColorConfig = {
  int1: '#54cfe8',
  int2: '#64e375',
  int3: '#f0ed4d',
  int4: '#eb9423',
  int5l: '#f74d4d',
  int5u: '#f74d4d',
  int6l: '#f03eb8',
  int6u: '#f03eb8',
  int7: '#b347ed',

  int1Stroke: '#62dfe3',
  int2Stroke: '#75e089',
  int3Stroke: '#e3df6f',
  int4Stroke: '#edab74',
  int5lStroke: '#eb6767',
  int5uStroke: '#eb6767',
  int6lStroke: '#f071d4',
  int6uStroke: '#f071d4',
  int7Stroke: '#b16aeb',

  land: '#262626',
  minimapLand: '#b8b8b8',
  prefCountryStroke: '#a6a6a6',
  areaStroke: '#4a4a4a',
  waterArea: '#5d7991',
  minimapStroke: '#ffffff',
};
