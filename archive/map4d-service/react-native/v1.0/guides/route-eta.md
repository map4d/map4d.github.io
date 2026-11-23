# Route ETA

> Tính toán thời gian dự kiến các đường đi giữa các địa điểm.

### Usage

Import hàm `fetchRouteETA` từ thư viện `'react-native-map4d-services'`

```js
import { fetchRouteETA } from 'react-native-map4d-services';
```

Tham số request cho `fetchRouteETA` là một đối tượng có dạng:

```js
export type MFRouteETAParams = {
  origins: MFLocationComponent[],
  destination: MFLocationComponent,
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| origins      | [MFLocationComponent](components/location-component.md)[]   | Vị trí các điểm bắt đầu dùng để ước lượng thời gian.                               |
| destination  | [MFLocationComponent](components/location-component.md)     | Vị trí kết thúc                                                                    |
| mode         | [MFTravelMode](components/travel-mode.md) \| string         | Phương thức di chuyển.                                                             |
| weighting    | [MFRouteWeighting](components/route-weighting.md) \| string | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| language     | [MFLanguageResult](components/language-result.md) \| string | Ngôn ngữ dùng để chỉ đường.                                                        |
| restriction  | [MFRouteRestriction](components/route-restriction.md)[]     | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |

### Example

```js
fetchRouteETA({
  origins: [
    { latitude: 16.024634, longitude: 108.209217, alias: "A" },
    { latitude: 16.039173, longitude: 108.210912, alias: "B" },
  ],
  destination: { latitude: 16.020179, longitude: 108.211212 },
  mode: MFTravelMode.car
}).then(response => {
  if (response.code == 'ok') {
    console.log('Route ETA Results:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
})
```
