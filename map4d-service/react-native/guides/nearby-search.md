# Nearby Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_nearby_search>

> Tìm kiếm các địa điểm lân cận.

### Usage

Import hàm `fetchNearbySearch` từ thư viện `'react-native-map4d-services'`

```js
import { fetchNearbySearch } from 'react-native-map4d-services';
```

Tham số request cho `fetchNearbySearch` là một đối tượng có dạng:

```js
export type MFNearbySearchParams = {
  location: MFLocationComponent,
  radius: number,
  text?: string,
  types?: string[],
  tags?: string[],
  datetime?: number,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| location     | [MFLocationComponent](components/location-component.md)     | Vị trí địa điểm muốn tìm kiếm.                                                     |
| radius       | number                                                      | Bán kính tìm dữ liệu xung quanh đơn vị là mét. Tối đa 50 000 mét.                  |
| text         | string                                                      | Nội dung muốn tìm kiếm.                                                            |
| types        | string[]                                                    | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags         | string[]                                                    | Nhãn của địa điểm.                                                                 |
| datetime     | number                                                      | Thời gian địa điểm vẫn còn tồn tại.                                                |


### Example

```js
fetchNearbySearch({
  location: {
    latitude: 16.036461,
    longitude: 108.218159,
  },
  radius: 500,
  text: 'abc',
}).then(response => {
  if (response.code == 'ok') {
    console.log('Nearby Search Results:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
});
```
