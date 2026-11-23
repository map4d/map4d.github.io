# Nearby Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_nearby_search>

> Tìm kiếm các địa điểm lân cận.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFNearbySearchParams](/guides/nearby-search.md?id=api-nearby-search-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](/guides/place-result.md?id=api-place-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let params = MFNearbySearchParams(location: MFLocationComponent(latitude: 16.036461, longitude: 108.218159), radius: 500, text: "coffe")
let service = MFPlacesService()
service.searchNearby(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

#### ** Objective-C **
```objc
MFLocationComponent *location = [[MFLocationComponent alloc] initWithCoordinate:CLLocationCoordinate2DMake(16.036461,108.218159)];
MFNearbySearchParams *params = [[MFNearbySearchParams alloc] initWithLocation:location radius:5000 text:@"abc"];
MFPlacesService* service = [[MFPlacesService alloc] init];
[service searchNearbyWithParams:params completionHandler:^(NSArray<id<MFPlaceResult>> * _Nullable results, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (results != nil) {
    NSLog(@"Results count: %lu", results.count);
  }
}];
```
<!-- tabs:end -->

---

## Nearby Search Params :id=api-nearby-search-params

`MFNearbySearchParams` class

#### Public Member Functions :id=api-nearby-search-params-public-member-functions

##### initWithLocation: radius: text: :id=api-nearby-search-params-initwithlocation-radius-text

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius text:(NSString *)text;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và text.

##### initWithLocation: radius: types: :id=api-nearby-search-params-initwithlocation-radius-types

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius types:(NSArray<NSString *> *)types;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và types.

##### initWithLocation: radius: tags: :id=api-nearby-search-params-initwithlocation-radius-tags

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius tags:(NSArray<NSString *> *)tags;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và tags.

#### Properties :id=api-nearby-search-params-properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          | Vị trí địa điểm muốn tìm kiếm.                                                     |
| radius      | NSUInteger                                                      | Bán kính tìm dữ liệu xung quanh đơn vị là mét. Tối đa 50 000 mét.                  |
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags        | NSArray\<NSString\>                                             | Nhãn của địa điểm.                                                                 |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
