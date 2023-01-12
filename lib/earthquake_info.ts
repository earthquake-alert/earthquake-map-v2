import {globalData} from './globalData';
import {EarthquakeInfo, Epicenter} from './types';

function main() {
  const epicenter = JSON.parse(globalData('epicenter')) as Epicenter;
  const ints = JSON.parse(globalData('ints')) as EarthquakeInfo;

  console.log(epicenter);
}

main();
