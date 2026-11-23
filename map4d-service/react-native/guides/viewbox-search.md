# Viewbox Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_viewbox_search>

> Tìm các địa điểm trong khu vực địa lý hình chữ nhật.

### Usage

Import hàm `fetchViewboxSearch` từ thư viện `'react-native-map4d-services'`

```js
import { fetchViewboxSearch } from 'react-native-map4d-services';
```

Tham số request cho `fetchViewboxSearch` là một đối tượng có dạng:

```js
export type MFViewboxSearchParams = {
  viewbox: MFViewboxComponent,
  text?: string,
  types?: string[],
  tags?: string[],
  datetime?: number,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                        |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| viewbox      | [MFViewboxComponent](components/viewbox-component.md)       | Khu vực muốn tìm kiếm.                                                             |
| text         | string                                                      | Nội dung muốn tìm kiếm.                                                            |
| types        | string[]                                                    | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags         | string[]                                                    | Nhãn của địa điểm.                                                                 |
| datetime     | number                                                      | Thời gian địa điểm vẫn còn tồn tại.                                                |


### Example

```js
fetchViewboxSearch({
  viewbox: {
    southwest: { latitude: 16.056453967981348, longitude: 108.19387435913086 },
    northeast: { latitude: 16.093031550262133, longitude: 108.25927734375 },
  },
  text: 'abc',
}).then(response => {
  if (response.code == 'ok') {
    console.log('Viewbox Search Results:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
})
```
