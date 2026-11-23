# Place Detail

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

Import hàm `fetchPlaceDetail` từ thư viện `'react-native-map4d-services'`

```js
import { fetchPlaceDetail } from 'react-native-map4d-services';
```

Tham số request cho `fetchTextSearch` là chuỗi ký tự ID của place

### Example

```js
fetchPlaceDetail('60dd389ef81cb14bc889d971').then(response => {
  if (response.code == 'ok') {
    console.log('Place Detail:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
});
```



