# Coordinates :id=api-coordinates

## MFCoordinateBounds :id=api-coordinates-mfcoordinatebounds
`MFCoordinateBounds`class

#### 1. Constructor  :id=api-coordinates-_1-constructor

```swift
init(coordinate coord1: CLLocationCoordinate2D, coordinate coord2: CLLocationCoordinate2D)
init(path: MFPath)
```

#### 2. Properties :id=api-coordinates-_2-properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **northEast**              | CLLocationCoordinate2D                                                          |
| **southWest**              | CLLocationCoordinate2D                                                          |

#### 3. Methods :id=api-coordinates-_3-methods

| Name                       | Parameters                                                  | Return value                                               | Description                                         |
|----------------------------|:-----------------------------------------------------------:|:----------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `includingCoordinate(_ coordinate: CLLocationCoordinate2D)` | CLLocationCoordinate2D | MFCoordinateBounds | Mở rộng bounds với một tọa độ. |
| `including(_ bounds: MFCoordinateBounds)` | MFCoordinateBounds | MFCoordinateBounds | Mở rộng bounds với một bounds khác. |
| `including(_ path: MFPath)` | MFPath | MFCoordinateBounds | Mở rộng bounds với các tọa độ trong path. |
| `containsLatitude(_ latitude: Double)` | Double | Bool | Kiểm tra vĩ độ có thuộc bounds không. |
| `containsLongitude(_ longitude: Double)` | Double | Bool | Kiểm tra kinh độ có thuộc bounds không. |
| `contains(_ coordinate: CLLocationCoordinate2D)` | CLLocationCoordinate2D | Bool | Kiểm tra tọa độ có thuộc bounds không. |

## MFPath :id=api-coordinates-mfpath
`MFPath` class

MFPath chứa một mảng các toạ độ **CLLocationCoordinate2D**.
`count` là thuộc tính chỉ đọc. Dùng `coordinate(at:)` để lấy tọa độ ở một vị trí, hoặc `MFPath(fromEncodedPath:)` để giải mã encoded polyline.
Để tạo một đối tượng MFPath, ta có thể sử dụng `MFMutablePath`

## MFMutablePath :id=api-coordinates-mfmutablepath
`MFMutablePath` class

MFMutablePath là MFPath nhưng cho phép thay đổi giá trị của nó

```swift
class MFMutablePath: MFPath
```

#### 1. Constructor :id=api-coordinates-_1-constructor-1

```swift
let path = MFMutablePath()
```

#### 2. Properties :id=api-coordinates-_2-properties-1

| Name      | Type       | Description                                  |
|-----------|------------|----------------------------------------------|
| **count** | UInt | Tổng số CLLocationCoordinate2D có trong path |

#### 3. Methods :id=api-coordinates-_3-methods-1

| Name              | Parameters  | Return Value | Description                                                           |
|-------------------|-------------|--------------|-----------------------------------------------------------------------|
| `add(_ coordinate: CLLocationCoordinate2D)` | CLLocationCoordinate2D | Void | Thêm tọa độ vào path. |
| `addLatitude(_ latitude: CLLocationDegrees, longitude: CLLocationDegrees)` | CLLocationDegrees, CLLocationDegrees | Void | Thêm tọa độ bằng vĩ độ và kinh độ. |
| `object(at idx: UInt)` | UInt | CLLocationCoordinate2D | Lấy tọa độ tại chỉ số idx. |
| `insert(_ coordinate: CLLocationCoordinate2D, at index: UInt)` | CLLocationCoordinate2D, UInt | Void | Chèn tọa độ tại chỉ số index. |
| `replaceCoordinate(at index: UInt, with coordinate: CLLocationCoordinate2D)` | UInt, CLLocationCoordinate2D | Void | Thay tọa độ tại chỉ số index. |
| `removeCoordinate(at index: UInt)` | UInt | Void | Xóa tọa độ tại chỉ số index. |
| `removeLastCoordinate()` | () | Void | Xóa tọa độ cuối cùng. |
| `removeAllCoordinates()` | () | Void | Xóa toàn bộ tọa độ. |
