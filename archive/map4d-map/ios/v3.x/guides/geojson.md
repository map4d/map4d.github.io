# GeoJSON Layer

GeoJSON layer cho phép người dùng hiển thị dữ liệu địa lý theo định dạng [GeoJSON](https://geojson.org/) lên bản đồ Map4D

## 1. Thêm mới GeoJSON layer

Để thêm 1 GeoJSON layer vào bản đồ, ta tạo 1 đối tượng [MFGeoJSON](/reference/geojson) và set map cho đối tượng đó

<!-- tabs:start -->

#### ** Swift **

```swift 
let geoJSON = MFGeoJSON(json: jsonString)
geoJSON.map = mapView
```

#### ** Objective C **

```objc 
MFGeoJSON *geoJSON = [[MFGeoJSON alloc] initWithJson:jsonString];
[geoJSON setMap:mapView];
```

<!-- tabs:end -->

## 2. Xóa GeoJSON layer khỏi bản đồ

Để xóa GeoJSON layer khỏi bản đồ, ta set property `map` của đối tượng bằng `nil`

<!-- tabs:start -->

#### ** Swift **

```swift 
geoJSON.map = nil
```

#### ** Objective C **

```objc 
[geoJSON setMap:nil];
```

<!-- tabs:end -->

## 3. Sự kiện trên GeoJSON layer

Sự kiện trên GeoJSON layer được gọi khi người dùng tap vào vùng hiển thị của GeoJSON layer
Giá trị trả về gồm đối tượng [MFGeoJSON](/reference/geojson) và [Feature](/reference/geojson?id=mfgeojsonfeature-class) mà người dùng touch vào đó

<!-- tabs:start -->

#### ** Swift **

```swift 
func mapView(_ mapView: MFMapView!, didTap geoJSON: MFGeoJSON!, feature: MFGeoJSON.Feature!) {}
```

#### ** Objective C **

```objc 
- (void)mapView:(MFMapView *)mapView didTapGeoJSON:(MFGeoJSON *)geoJSON feature:(MFGeoJSONFeature *)feature {}
```

<!-- tabs:end -->

## 4. Thay đổi icon mặc định cho Point của GeoJSON layer

Để thay đổi icon mặc định cho Point của GeoJSON layer, ta set 

<!-- tabs:start -->

#### ** Swift **

```swift 
geoJSON.pointStyle.icon = UIImage(named: "image_name")
```

#### ** Objective C **

```objc 
geoJSON.pointStyle.icon = [UIImage imageWithImage:@"image_name"];
```

<!-- tabs:end -->