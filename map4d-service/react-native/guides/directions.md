# Directions

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_route>

> API đùng để tìm đường đi giữa các địa điểm.

### Usage

Import hàm `fetchDirections` từ thư viện `'react-native-map4d-services'`

```js
import { fetchDirections } from 'react-native-map4d-services';
```

Tham số request cho `fetchDirections` là một đối tượng có dạng:

```js
export type MFDirectionsParams = {
  origin: MFLocationComponent,
  destination: MFLocationComponent,
  waypoints?: MFLocationComponent[],
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| origin       | [MFLocationComponent](components/location-component.md)     | Vị trí bắt đầu                                                                     |
| destination  | [MFLocationComponent](components/location-component.md)     | Vị trí kết thúc                                                                    |
| waypoints    | [MFLocationComponent](components/location-component.md)[]   | Các điểm sẽ đi qua.                                                                |
| mode         | [MFTravelMode](components/travel-mode.md) \| string         | Phương thức di chuyển.                                                             |
| weighting    | [MFRouteWeighting](components/route-weighting.md) \| string | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| language     | [MFLanguageResult](components/language-result.md) \| string | Ngôn ngữ dùng để chỉ đường.                                                        |
| restriction  | [MFRouteRestriction](components/route-restriction.md)[]     | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |

### Example

```js
fetchDirections({
  origin: { latitude: 16.024634, longitude: 108.209217 },
  destination: { latitude: 16.020179, longitude: 108.211212 },
  mode: MFTravelMode.car,
  weighting: 'shortest',
  language: 'vi',
  waypoints: [
    { latitude: 16.024634, longitude: 108.211212 }
  ],
  restriction: {
    location: { latitude: 16.024634, longitude: 108.209217 },
    radius: 30,
    types: ['motorway']
  }
}).then(response => {
  if (response.code == 'ok') {
    console.log('Directions Result:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
})
```
