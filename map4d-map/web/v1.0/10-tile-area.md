# TileArea
Lớp TileArea cho phép người dùng thực hiện thay thế các tile tại một khu vực nào đó bằng các tile khác.

## 1. TileArea & TileAreaOptions

```javascript
  interface TileAreaOptions {
    bounds: ILatLngBounds // LatLng bounds để cho biết khu vực cần thay thế tileArea
    url?: string // Đường dẫn tile mới
    minZoom?: number // Mức zoom tối thiểu của TileArea
    maxZoom?: number // Mức zoom tối đa của TileArea
  }

  class TileArea {
    constructor(options: TileAreaOptions) // Khởi tạo Tile Area từ TileAreaOptions
    getBounds(): LatLngBounds // Lấy thông tin LatLngBounds khu vực thay thế TileArea
    getUrl(): string // Lấy thông tin đường dẫn tile
    getMinZoom(): number // Lấy thông tin mức zoom tối thiểu của TileArea
    getMaxZoom(): number // Lấy thông tin mức zoom tối đa của TileArea
    getMap(): Map // Lấy thông tin map.
    setMap(map: Map): void // Cài đặt map cẫn thay thế TileArea
    setBounds(bounds: ILatLngBounds): void // Cài đặt LatLngBounds khu vực thay thế TileArea
    setMinZoom(minZoom: number): void // Cài đặt mức zoom tối thiểu
    setMaxZoom(maxZoom: number): void // Cài đặt mức zoom tối đa
    setUrl(url: string): void // Cài đặt đường dẫn Tile
  }
```

## 2. Tạo tileArea

```javascript
  // Tạo tileAreaOptions
  let tileAreaOption: map4d.TileAreaOptions = {
      bounds:
        new map4d.LatLngBounds([8.606498, 104.699308], [10.567800, 107.974320]),
      url: "http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  }
  // Tạo TileArea
  let tileArea = new map4d.TileArea(tileAreaOption)
  // Cài đặt map cần vẽ
  tileArea.setMap(map)
  // Xóa tile area
  tileArea.setMap(null)
```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
