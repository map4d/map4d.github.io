# Place Service :id=api-places-service

`MFPlacesService` class

Khởi tạo bằng `MFPlacesService()` để truy vấn gợi ý, địa điểm và địa chỉ.

### Types :id=api-places-service-types

| Callback | Kiểu Swift |
|---|---|
| `MFSuggestionCallback` | `([MFSuggestionResult]?, MFServiceError?) -> Void` |
| `MFPlaceDetailCallback` | `(MFPlaceDetailResult?, MFServiceError?) -> Void` |
| `MFTextSearchCallback` | `([MFPlaceResult]?, MFServiceError?) -> Void` |
| `MFNearbySearchCallback` | `([MFPlaceResult]?, MFServiceError?) -> Void` |
| `MFViewboxSearchCallback` | `([MFPlaceResult]?, MFServiceError?) -> Void` |
| `MFGeocodeCallback` | `([MFGeocodeResult]?, MFServiceError?) -> Void` |

### Public Member Functions :id=api-places-service-public-member-functions

| Phương thức Swift | Tham số | Trả về | Mô tả |
|---|---|---|---|
| `fetchSuggestion(with:completionHandler:)` | MFSuggestionParams, @escaping MFSuggestionCallback | MFServiceTask | [Gợi ý địa điểm](auto-suggest.md) theo từ khóa, vị trí ưu tiên hoặc chữ viết tắt. |
| `fetchPlaceDetail(withPlaceId:completionHandler:)` | String, @escaping MFPlaceDetailCallback | MFServiceTask | [Chi tiết địa điểm](place-detail.md) theo ID. |
| `searchText(with:completionHandler:)` | MFTextSearchParams, @escaping MFTextSearchCallback | MFServiceTask | [Tìm theo từ khóa](text-search.md). |
| `searchNearby(with:completionHandler:)` | MFNearbySearchParams, @escaping MFNearbySearchCallback | MFServiceTask | [Tìm lân cận](nearby-search.md) trong bán kính quanh tọa độ. |
| `searchViewbox(with:completionHandler:)` | MFViewboxSearchParams, @escaping MFViewboxSearchCallback | MFServiceTask | [Tìm trong vùng](viewbox-search.md) chữ nhật. |
| `geocoding(with:completionHandler:)` | MFGeocodeParams, @escaping MFGeocodeCallback | MFServiceTask | [Chuyển địa chỉ/tọa độ](geocode.md). |

Các callback trả về kết quả có thể nil và lỗi có thể nil. Một mảng rỗng là kết quả tìm kiếm không có phần tử. Giữ task nếu cần hủy request bằng `abort()`.
