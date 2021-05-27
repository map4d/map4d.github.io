# Using Typescript

[Typescript](https://www.typescriptlang.org/) là một dự án mã nguồn mở được phát triển bởi Microsoft, nó có thể được coi là một phiên bản nâng cao của Javascript.

## Typescript declaration file for Map4D

Map4D Web SDK cung cấp file định nghĩa dữ liệu [map4d.d.ts](https://github.com/map4d/map4d-web-sdk/blob/master/dts/map4d.d.ts) để sử dụng với Typescript.

## Map4D with Typescript 

```typescript
let map: map4d.Map;
const center: map4d.LatLng = new map4d.LatLng(16.072163491469226, 108.22690536081757);

function initMap(): void {
  let options: map4d.MapOptions = {
    center: center,
    zoom: 15,
    controls: true
  }
  map = new map4d.Map(document.getElementById("map"), options)
}
```