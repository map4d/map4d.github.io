# Distance Matrix

> Tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến.

### Usage

Import hàm `fetchDistanceMatrix` từ thư viện `'react-native-map4d-services'`

```js
import { fetchDistanceMatrix } from 'react-native-map4d-services';
```

Tham số request cho `fetchDistanceMatrix` là một đối tượng có dạng:

```js
export type MFDistanceMatrixParams = {
  origins: MFLocationComponent[],
  destinations: MFLocationComponent[],
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| origins      | [MFLocationComponent](components/location-component.md)[]   | Vị trí các điểm bắt đầu dùng để tính toán ma trận                                  |
| destinations | [MFLocationComponent](components/location-component.md)[]   | Vị trí các điểm kết thúc dùng để tính toán ma trận                                 |
| mode         | [MFTravelMode](components/travel-mode.md) \| string         | Phương thức di chuyển.                                                             |
| weighting    | [MFRouteWeighting](components/route-weighting.md) \| string | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| language     | [MFLanguageResult](components/language-result.md) \| string | Ngôn ngữ dùng để chỉ đường.                                                        |
| restriction  | [MFRouteRestriction](components/route-restriction.md)[]     | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |

### Example

```js
fetchDistanceMatrix({
  origins: [
    { latitude: 16.024634, longitude: 108.209217 },
    { latitude: 16.071766, longitude: 108.223615 },
  ],
  destinations: [
    { latitude: 16.020179, longitude: 108.211212 },
    { latitude: 16.061040, longitude: 108.216700 },
    { latitude: 16.059145, longitude: 108.221297 }
  ]
}).then(response => {
  if (response.code == 'ok') {
    console.log('Distance Matrix Result:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
})
```
