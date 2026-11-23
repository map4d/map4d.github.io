# Place Detail Result

`MFPlaceDetailResult` protocol

### Properties

| Name              | Type                                                                                   | Description                                                                                 |
|-------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                                               | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](reference/location-component.md)                                 | Ví trí của địa điểm                                                                         |
| name              | NSString                                                                               | Tên của địa điểm.                                                                           |
| address           | NSString                                                                               | Địa chỉ địa điểm.                                                                           |
| types             | NSArray\<NSString\>                                                                    | Danh sách các kiểu của địa điểm.                                                            |
| tags              | NSArray\<NSString\>                                                                    | Danh sách các nhãn của địa điểm.                                                            |
| desc              | NSString                                                                               | Mô tả thêm về địa điểm.                                                                     |
| metadatas         | NSArray<[MFPlaceMetadataResult](reference/place-metadata-result.md)>                   | Danh sách thông tin liên quan đến địa điểm.                                                 |
| photos            | NSArray<[MFPlacePhotoResult](reference/place-photo-result.md)>                         | Danh sách thông tin hình ảnh về địa điểm.                                                   |
| addressComponents | NSArray<[MFPlaceAddressComponentResult](reference/place-address-component-result.md)>  | Danh sách các thành phần của địa chỉ.                                                       |
| objectId          | NSString                                                                               | Đối tượng của địa điểm đó (ví dụ như địa điểm nó thuộc tòa nhà nào - tòa nhà là đối tượng). |