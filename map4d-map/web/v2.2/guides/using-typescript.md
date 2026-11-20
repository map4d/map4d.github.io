# Using Typescript

[Typescript](https://www.typescriptlang.org/) là một dự án mã nguồn mở được phát triển bởi Microsoft, nó có thể được coi là một phiên bản nâng cao của Javascript.

## Typescript declaration file for IPostMap

IPostMap Web SDK cung cấp file định nghĩa dữ liệu [ipostmap.d.ts](https://github.com/map4d/map4d-web-sdk/blob/master/dts/ipostmap.d.ts) để sử dụng với Typescript.

## IPostMap with Typescript 

```typescript
let map: ipostmap.Map;
const center: ipostmap.LatLng = new ipostmap.LatLng(16.072163491469226, 108.22690536081757);

function initMap(): void {
  let options: ipostmap.MapOptions = {
    center: center,
    zoom: 15,
    controls: true
  }
  map = new ipostmap.Map(document.getElementById("map"), options)
}
```