# Directions Service :id=api-directions-service

`MFDirectionsService` class

Dùng để tìm đường và tính ma trận khoảng cách. Khởi tạo bằng `MFDirectionsService()`.

### Types :id=api-directions-service-types

| Callback | Kiểu Swift |
|---|---|
| `MFDirectionsCallback` | `(MFDirectionsResult?, MFServiceError?) -> Void` |
| `MFDistanceMatrixCallback` | `(MFDistanceMatrixResult?, MFServiceError?) -> Void` |

### Public Member Functions :id=api-directions-service-public-member-functions

| Phương thức Swift | Tham số | Trả về | Mô tả |
|---|---|---|---|
| `fetchDirections(with:completionHandler:)` | MFDirectionsParams, @escaping MFDirectionsCallback | MFServiceTask | [Tìm đường](directions.md) giữa điểm xuất phát và điểm đến, qua các điểm trung gian nếu có. |
| `fetchDistanceMatrix(with:completionHandler:)` | MFDistanceMatrixParams, @escaping MFDistanceMatrixCallback | MFServiceTask | [Tính khoảng cách và thời gian](distance-matrix.md) giữa các điểm xuất phát và điểm đến. |

Task được trả về dùng để hủy request bằng `abort()`. Kết quả và lỗi trong callback có thể là nil; kiểm tra trước khi sử dụng.
