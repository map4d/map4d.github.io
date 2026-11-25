# Place Detail

iPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

Import hàm `fetchPlaceDetail` từ thư viện `'react-native-ipostmap-services'`

```js
import { fetchPlaceDetail } from 'react-native-ipostmap-services';
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



