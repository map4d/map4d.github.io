# Auto Suggestion

iPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/#/api_autosuggest>

> Auto Suggestion sẽ tự động đề xuất các địa điểm dựa trên chuỗi tìm kiếm hoàn chỉnh hoặc chưa hoàn chỉnh, hỗ trợ tìm kiếm với chuỗi ký tự viết tắt.

### Usage

Import hàm `fetchSuggestion` từ thư viện `'react-native-ipostmap-services'`

```js
import { fetchSuggestion } from 'react-native-ipostmap-services';
```

Tham số request cho `fetchSuggestion` là một đối tượng có dạng:

```ts
export type MFSuggestionParams = {
  text: string,
  location?: MFLocationComponent,
  acronym?: boolean,
}
```

Trong đó:

| Name         | Type                                                        | Description                                                                  |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------------------|
| text         | string                                                      | Chuỗi tìm kiếm.                                                              |
| location     | [MFLocationComponent](components/location-component.md)     | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.             |
| acronym      | boolean                                                     | Set `true` nếu chuỗi tìm kiếm là từ viết tắt, chỉ hỗ trợ viết tắt ở địa chỉ. |



### Example

```js
fetchSuggestion({
  text: 'abc',
  acronym: true,
  location: {
    latitude: 16.036461,
    longitude: 108.218159
  }
}).then(response => {
  if (response.code == 'ok') {
    console.log('Suggestions:', response.result)
  }
  else {
    console.log(`Error code: ${response.code}, message: ${response.message}`);
  }
});
```

