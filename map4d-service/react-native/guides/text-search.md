# Text Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_text_search>

> Tìm kiếm các địa điểm bằng chuỗi ký tự.

### Usage

Import hàm `fetchTextSearch` từ thư viện `'react-native-map4d-services'`

```js
import { fetchTextSearch } from 'react-native-map4d-services';
```

Tham số request cho `fetchTextSearch` là một đối tượng có dạng:

```js
export type MFTextSearchParams = {
  text: string,
  types?: string[],
  datetime?: number,
  location?: MFLocationComponent,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| text         | string                                                      | Nội dung muốn tìm kiếm.                                                            |
| types        | string[]                                                    | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| datetime     | number                                                      | Thời gian địa điểm vẫn còn tồn tại.                                                |
| location     | [MFLocationComponent](components/location-component.md)     | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.                   |


### Example

```js
fetchTextSearch({
  text: 'abc',
  // types: ['atm', 'hotel'],
  location: {
    latitude: 16.036461,
    longitude: 108.218159
  },
  datetime: date.getTime()
}).then(response => {
  if (response.code == 'ok') {
    console.log('Text Search Results:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
})
```

