import {View, Map} from 'ol';
import type {MapOptions} from 'ol/Map';
import control, {Attribution, OverviewMap} from 'ol/control';
import {VectorTile, Vector} from 'ol/layer';
import type BaseLayer from 'ol/layer/Base';
import type {Options} from 'ol/layer/Base';

export class MapBuilder {
  private layers: BaseLayer[];
  private controls: control.Control[];
  private view: View;

  constructor() {
    const attribution = new Attribution({
      className: 'copyright',
      collapsible: false,
    });
    this.controls.push(attribution);
  }

  public addVectorTile(o: Options) {
    this.layers.push(new VectorTile(o));
  }

  public addVector(o: Options) {
    this.layers.push(new Vector(o));
  }

  /**
   * ミニマップを追加する
   *
   * @param o - ミニマップ設定
   */
  public addMinimap(o: Options) {
    this.controls.push(new OverviewMap(o));
  }

  public generate(): MapOptions {
    return {
      controls: control.defaults().extend(this.controls),
      target: 'map',
      layers: this.layers,
      view: this.view,
    };
  }
}

/**
 * マップを描画する
 *
 * @param builder - OpenLayersのマップ設定
 * @returns マップオブジェクト
 */
export function renderMap(builder: MapBuilder): Map {
  return new Map(builder.generate());
}
