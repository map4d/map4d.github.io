# Coordinates :id=api-coordinates

## MFCoordinateBounds :id=api-coordinates-mfcoordinatebounds
`MFCoordinateBounds`class

#### 1. Constructor  :id=api-coordinates-_1-constructor

<!-- tabs:start -->
#### ** Swift ** :id=api-coordinates-swift-

```swift
init(coordinate coord: CLLocationCoordinate2D, coordinate1 coord1: CLLocationCoordinate2D) {}
init(path: MFPath) {}
```

#### ** Objective C ** :id=api-coordinates-objective-c-

```objc  
- (instancetype _Nonnull) initWithCoordinate:(CLLocationCoordinate2D)coord coordinate1:(CLLocationCoordinate2D)coord1;
- (instancetype _Nonnull) initWithPath: (MFPath * _Nonnull)path;
```
<!-- tabs:end -->

#### 2. Properties :id=api-coordinates-_2-properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **northEast**              | CLLocationCoordinate2D                                                          |
| **southWest**              | CLLocationCoordinate2D                                                          |


#### 3. Methods :id=api-coordinates-_3-methods

| Name                       | Parameters                                                  | Return value                                               | Description                                         |
|----------------------------|:-----------------------------------------------------------:|:----------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **includingCoordinate**    | CLLocationCoordinate2D                                      | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds) | Mở rộng **bound** với một điểm truyền vào           |
| **including**              | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds)  | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds) | Mở rộng **bound** với một **bound** truyền vào      |
| **including**              | MFPath                                                      | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds) | Mở rộng **bound** với danh sách các điểm truyền vào |
| **containsLatitude**       | double                                                      | BOOL                                                       | Kiểm tra vĩ độ có thuộc **bound** không             |
| **containsLongitude**      | double                                                      | BOOL                                                       | Kiểm tra kinh độ có thuộc **bound** không           |
| **contains**               | CLLocationCoordinate2D                                      | BOOL                                                       | Kiểm tra các điểm có thuộc **bound** kkhông.        |

## MFPath :id=api-coordinates-mfpath
`MFPath` class

MFPath chứa một mảng các toạ độ **CLLocationCoordinate2D**  
Để tạo một đối tượng MFPath, ta có thể sử dụng `MFMutablePath`

## MFMutablePath :id=api-coordinates-mfmutablepath
`MFMutablePath` class

MFMutablePath là MFPath nhưng cho phép thay đổi giá trị của nó

<!-- tabs:start -->
#### ** Swift ** :id=api-coordinates-swift-1
```swift
class MFMutablePath: MFPath
```
#### ** Objective-C ** :id=api-coordinates-objective-c-1
```objc
@interface MFMutablePath: MFPath
```
<!-- tabs:end -->

#### 1. Constructor :id=api-coordinates-_1-constructor-1
<!-- tabs:start -->
#### ** Swift ** :id=api-coordinates-swift-2
```swift
let path = MFMutablePath()
```
#### ** Objective-C ** :id=api-coordinates-objective-c-2
```objc
MFMutablePath *path = [[MFMutablePath alloc] init];
```
<!-- tabs:end -->


#### 2. Properties :id=api-coordinates-_2-properties-1

| Name      | Type       | Description                                  |
|-----------|------------|----------------------------------------------|
| **count** | NSUInteger | Tổng số CLLocationCoordinate2D có trong path |

#### 3. Methods :id=api-coordinates-_3-methods-1

| Name              | Parameters  | Return Value | Description                                                           |
|-------------------|-------------|--------------|-----------------------------------------------------------------------|
| **addCoordinate:**                          | (CLLocationCoordinate2D)coord                               | `none` | Thêm coordinate vào path |
| **addLatitude:longitude**                   | (CLLocationDegrees)latitude<br>(CLLocationDegrees)longitude | `none` | Thêm coordinate vào path bằng lat, lng |
| **objectAtIndex:**                          | (NSUInteger)idx                             | CLLocationCoordinate2D | Lấy coordinate ở vị trí idx |
| **insertCoordinate:atIndex**                | (CLLocationCoordinate2D)coord<br>(NSUInteger)index          | `none` | Thêm coordinate vào vị trí index |
| **replaceCoordinateAtIndex:withCoordinate** | (NSUInteger)index<br>(CLLocationCoordinate2D)coord          | `none` | Thay thế coordinate ở vị trí index bằng coordinate khác |
| **removeCoordinateAtIndex:**                | (NSUInteger)index                                           | `none` | Xoá coordinate ở vị trí index |
| **removeLastCoordinate**                    | `none`                                                      | `none` | Xoá coordinate ở cuối path |
| **removeAllCoordinates**                    | `none`                                                      | `none` | Xoá toàn bộ coordinate trong path |
