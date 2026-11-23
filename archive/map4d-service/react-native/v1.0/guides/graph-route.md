# Graph Route

> Tìm biểu đồ tuyến đường giữa các địa điểm.

### Usage

Import hàm `fetchGraphRoute` từ thư viện `'react-native-map4d-services'`

```js
import { fetchGraphRoute } from 'react-native-map4d-services';
```

Tham số request cho `fetchGraphRoute` là một đối tượng có dạng:

```js
export type MFGraphRouteParams = {
  locations: MFLocationComponent[],
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}
```

Trong đó:

| Name        | Type                                                        | Description                                                                        |
|-------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| locations   | [MFLocationComponent](components/location-component.md)     | Các địa điểm để thực hiện tính toán biểu đồ.                                       |
| mode        | [MFTravelMode](components/travel-mode.md) \| string         | Phương thức di chuyển.                                                             |
| weighting   | [MFRouteWeighting](components/route-weighting.md) \| string | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| language    | [MFLanguageResult](components/language-result.md) \| string | Ngôn ngữ dùng để chỉ đường.                                                        |
| restriction | [MFRouteRestriction](components/route-restriction.md)[]     | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |


### Example

```js
fetchGraphRoute({
  locations: [
    { latitude: 16.039173, longitude: 108.210912 },
    { latitude: 16.044597, longitude: 108.217263 },
    { latitude: 16.082598, longitude: 108.221989 },
  ],
  mode: MFTravelMode.car
}).then(response => {
  if (response.code == 'ok') {
    console.log('Graph Route Results:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
});
```
