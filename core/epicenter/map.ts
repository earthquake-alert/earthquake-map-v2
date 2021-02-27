/**!
 * Map render.
 *
 * @author Yuto Watanabe
 * @version 1.0.0
 *
 * Copyright (c) 2021 Earthquake alert
 */
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { Attribution } from 'ol/control'
import { MVT } from 'ol/format'
import { VectorTile } from 'ol/layer'
import { fromLonLat } from 'ol/proj'
import { VectorTile as SVectorTile} from 'ol/source'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'
import { prefAndCountryStroke, waterArea, land } from '../colors'
import { prefMapUrl, waterAreaUrl, worldMapUrl } from '../mapUrl'

/**
 * pref map.
 * @returns {VectorTile} vector tile map layer.
 */
function prefMap(): VectorTile {
  return new VectorTile({
    source: new SVectorTile({
      format: new MVT(),
      url: prefMapUrl,
      attributions: [
        'Copyright (c) 2021 Earthquake alert / 地図データ: 国土数値情報（湖沼データ）、気象庁（緊急地震速報/府県予報区）'
      ]
    }),
    style: new Style({
      stroke: new Stroke({
        color: prefAndCountryStroke,
        width: 3,
      }),
      fill: new Fill({
        color: land
      })
    }),
    maxZoom: 10,
    minZoom: 0,
    maxResolution: 5000
  })
}

/**
 * water area map.
 * @returns {VectorTile} vector tile map layer.
 */
function waterAreaMap(): VectorTile {
  return new VectorTile({
    source: new SVectorTile({
      format: new MVT(),
      url: waterAreaUrl,
    }),
    style: new Style({
      fill: new Fill({
        color: waterArea
      })
    }),
    maxZoom: 10,
    minZoom: 0,
    maxResolution: 5000
  })
}

/**
 * world map.
 * @returns {VectorTile} vector tile map layer.
 */
function worldMap(): VectorTile {
  return new VectorTile({
    source: new SVectorTile({
      format: new MVT(),
      url: worldMapUrl,
      attributions: [
        'Copyright(c) 2021 Earthquake alert / 地図データ: Natural Earth',
      ],
    }),
    style: new Style({
      fill: new Fill({
        color: land
      }),
      stroke: new Stroke({
        color: prefAndCountryStroke,
        width: 2
      })
    }),
    maxZoom: 5,
    minZoom: 0,
    minResolution: 5000
  })
}

export default function map(): Map {
  return new Map({
    layers: [
      worldMap(),
      prefMap(),
      waterAreaMap(),
    ],
    target: 'map',
    controls: [
      new Attribution({
        className: 'copyright',
        collapsible: false,
      })
    ],
    view: new View({
      center: fromLonLat([139.570312, 35.621581]),
      zoom: 5,
      maxZoom: 10,
      minZoom: 1
    })
  })
}
