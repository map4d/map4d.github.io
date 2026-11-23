# Location Component :id=api-location-component

`MFLocationComponent` class

### Public Member Functions :id=api-location-component-public-member-functions

#### initWithCoordinate: :id=api-location-component-initwithcoordinate

```objc
- (instancetype)initWithCoordinate:(CLLocationCoordinate2D)coordinate;
```

Tạo đối tượng `MFLocationComponent` bằng coordinate.

#### initWithCoordinate: alias: :id=api-location-component-initwithcoordinate-alias

```objc
- (instancetype)initWithCoordinate:(CLLocationCoordinate2D)coordinate alias:(NSString *_Nullable)alias;
```

Tạo đối tượng `MFLocationComponent` bằng coordinate và alias.

#### initWithLatitude: longitude: :id=api-location-component-initwithlatitude-longitude

```objc
- (instancetype)initWithLatitude:(CLLocationDegrees)latitude longitude:(CLLocationDegrees)longitude;
```

Tạo đối tượng `MFLocationComponent` bằng latitude, longitude.

#### initWithLatitude: longitude: alias: :id=api-location-component-initwithlatitude-longitude-alias

```objc
- (instancetype)initWithLatitude:(CLLocationDegrees)latitude longitude:(CLLocationDegrees)longitude alias:(NSString *_Nullable)alias;
```

Tạo đối tượng `MFLocationComponent` bằng latitude, longitude và alias.

#### isValidCoordinate :id=api-location-component-isvalidcoordinate

```objc
- (BOOL)isValidCoordinate;
```

Kiểm tra location có hợp lệ hay không.

### Properties :id=api-location-component-properties

| Name        | Type                   | Description                        |
|-------------|------------------------|------------------------------------|
| coordinate  | CLLocationCoordinate2D | Tọa độ kinh độ, vĩ độ trên bản đồ. |
| alias       | NSString               | Biệt danh cho vị trí.              |
