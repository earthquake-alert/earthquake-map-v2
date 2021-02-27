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
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default function map(): Map {
  return new Map({
    layers: [
      new TileLayer({
          source: new OSM()
      })
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  })
}
