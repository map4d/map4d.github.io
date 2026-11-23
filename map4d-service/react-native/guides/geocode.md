# Geocode

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_geocode_v2>

> Dùng để phân giải địa điểm ra tọa độ địa lý.

### Usage

Import hàm `fetchGeocode` từ thư viện `'react-native-map4d-services'`

```js
import { fetchGeocode } from 'react-native-map4d-services';
```

Tham số request cho `fetchGeocode` là một đối tượng có dạng:

```js
export type MFGeocodeParams = {
  location?: MFLocationComponent,
  address?: string,
  viewbox?: MFViewboxComponent,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| location     | [MFLocationComponent](components/location-component.md)     | Ví trí dùng để phân giải địa chỉ.                                                  |
| address      | string                                                      | Địa chỉ dùng để phân giải địa chỉ.                                                 |
| viewbox      | [MFViewboxComponent](components/viewbox-component.md)       | Khu vực tìm kiếm.                                                                  |

### Example

```js
fetchGeocode({
  address: '31 Lê Văn Duyệt, Phường Nại Hiên Đông, Quận Sơn Trà, Thành Phố Đà Nẵng',
}).then(response => {
  if (response.code == 'ok') {
    console.log('Geocode Results:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
})
```
