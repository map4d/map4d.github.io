# Place Detail

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: place id *(string)*
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: [MFPlaceDetailResult](/guides/place-detail.md?id=api-place-detail-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let service = MFPlacesService()
service.fetchPlaceDetail(withPlaceId: "5c9845df814a9df9d67e5598") { result, error in
  guard let result = result else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  print("Name: \(result.name)")
  print("Address: \(result.address)")
  print("Old address: \(result.oldAddress)")
}
```

---

## Place Address Component Result :id=api-place-address-component-result

`MFPlaceAddressComponentResult` class

#### Properties :id=api-place-address-component-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| name | String | Chỉ đọc | Tên của địa chỉ. |
| types | [String] | Chỉ đọc | Các loại đối tượng của địa điểm. |

---

## Place Detail Result :id=api-place-detail-result

`MFPlaceDetailResult` class

#### Properties :id=api-place-detail-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| id | String | Chỉ đọc | Mã id của địa điểm. |
| name | String | Chỉ đọc | Tên của địa điểm. |
| address | String | Chỉ đọc | Địa chỉ địa điểm. |
| oldAddress | String | Chỉ đọc | Địa chỉ cũ của địa điểm. |
| location | MFLocationComponent | Chỉ đọc | Ví trí của địa điểm |
| types | [String] | Chỉ đọc | Danh sách các kiểu của địa điểm. |
| desc | String? | Chỉ đọc | Mô tả thêm về địa điểm. |
| tags | [String]? | Chỉ đọc | Danh sách các nhãn của địa điểm. |
| metadatas | [MFPlaceMetadataResult]? | Chỉ đọc | Danh sách thông tin liên quan đến địa điểm. |
| photos | [MFPlacePhotoResult]? | Chỉ đọc | Danh sách thông tin hình ảnh về địa điểm. |
| addressComponents | [MFPlaceAddressComponentResult]? | Chỉ đọc | Danh sách các thành phần của địa chỉ. |
| oldAddressComponents | [MFPlaceAddressComponentResult]? | Chỉ đọc | Các thành phần của địa chỉ cũ. |
| objectId | String? | Chỉ đọc | Đối tượng của địa điểm đó (ví dụ như địa điểm nó thuộc tòa nhà nào - tòa nhà là đối tượng). |

---

## Place Metadata Result :id=api-place-metadata-result

`MFPlaceMetadataResult` class

#### Properties :id=api-place-metadata-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| id | String | Chỉ đọc | Mã định danh. |
| name | String | Chỉ đọc | Tên hiển thị. |
| type | String | Chỉ đọc | Loại thông tin. |
| content | String | Chỉ đọc | Nội dung thông tin. |
| order | Int | Chỉ đọc | Thứ tự hiển thị. |

---

## Place Photo Result :id=api-place-photo-result

`MFPlacePhotoResult` class

#### Properties :id=api-place-photo-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| url | String | Chỉ đọc | Đường dẫn hình ảnh. |
| name | String | Chỉ đọc | Tên hiển thị. |
