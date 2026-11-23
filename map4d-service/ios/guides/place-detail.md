# Place Detail

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: place id *(string)*
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: [MFPlaceDetailResult](/guides/place-detail.md?id=api-place-detail-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let service = MFPlacesService()
service.fetchPlaceDetail(withPlaceId: "5c9845df814a9df9d67e5598") { result, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Name: \(result.name)")
}
```

#### ** Objective-C **
```objc
MFPlacesService* service = [[MFPlacesService alloc] init];

[service fetchPlaceDetailWithPlaceId:@"60dd3850f81cb14bc880ed52" completionHandler:^(id<MFPlaceDetailResult> _Nullable result, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (results != nil) {
    NSLog(@"Name: %@", result.name);
  }
}];
```
<!-- tabs:end -->

---

## Place Address Component Result :id=api-place-address-component-result

`MFPlaceAddressComponentResult` protocol

#### Properties :id=api-place-address-component-result-properties

| Name        | Type                | Description                      |
|-------------|---------------------|----------------------------------|
| name        | NSString            | Tên của địa chỉ.                 |
| types       | NSArray\<NSString\> | Các loại đối tượng của địa điểm. |

---

## Place Detail Result :id=api-place-detail-result

`MFPlaceDetailResult` protocol

#### Properties :id=api-place-detail-result-properties

| Name              | Type                                                                                   | Description                                                                                 |
|-------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                                               | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](/guides/location-component.md?id=api-location-component)                                 | Ví trí của địa điểm                                                                         |
| name              | NSString                                                                               | Tên của địa điểm.                                                                           |
| address           | NSString                                                                               | Địa chỉ địa điểm.                                                                           |
| types             | NSArray\<NSString\>                                                                    | Danh sách các kiểu của địa điểm.                                                            |
| tags              | NSArray\<NSString\>                                                                    | Danh sách các nhãn của địa điểm.                                                            |
| desc              | NSString                                                                               | Mô tả thêm về địa điểm.                                                                     |
| metadatas         | NSArray<[MFPlaceMetadataResult](/guides/place-detail.md?id=api-place-metadata-result)>                   | Danh sách thông tin liên quan đến địa điểm.                                                 |
| photos            | NSArray<[MFPlacePhotoResult](/guides/place-detail.md?id=api-place-photo-result)>                         | Danh sách thông tin hình ảnh về địa điểm.                                                   |
| addressComponents | NSArray<[MFPlaceAddressComponentResult](/guides/place-detail.md?id=api-place-address-component-result)>  | Danh sách các thành phần của địa chỉ.                                                       |
| objectId          | NSString                                                                               | Đối tượng của địa điểm đó (ví dụ như địa điểm nó thuộc tòa nhà nào - tòa nhà là đối tượng). |

---

## Place Metadata Result :id=api-place-metadata-result

`MFPlaceMetadataResult` protocol

#### Properties :id=api-place-metadata-result-properties

| Name              | Type      | Description                           |
|-------------------|-----------|---------------------------------------|
| id                | NSString  |                                       |
| name              | NSString  |                                       |
| type              | NSString  |                                       |
| content           | NSString  |                                       |
| order             | NSInteger |                                       |

---

## Place Photo Result :id=api-place-photo-result

`MFPlacePhotoResult` protocol

#### Properties :id=api-place-photo-result-properties

| Name              | Type      | Description                           |
|-------------------|-----------|---------------------------------------|
| url               | NSString  |                                       |
| name              | NSString  |                                       |
