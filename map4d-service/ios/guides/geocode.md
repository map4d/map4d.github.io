# Geocode

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_geocode_v2>

> Dùng để phân giải địa điểm ra tọa độ địa lý.

### Usage

- Service: [MFPlacesService](reference/places-service.md)
- Params: [MFGeocodeParams](reference/geocode-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: Array of [MFGeocodeResult](reference/geocode-result.md)
  + Error: [MFServiceError](reference/service-error.md)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let params = MFGeocodeParams(location: MFLocationComponent(latitude: 16.024634, longitude: 108.209217))
let service = MFPlacesService()
service.geocoding(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

#### ** Objective-C **
```objc
MFGeocodeParams *params = [[MFGeocodeParams alloc] initWithAddress:@"271 Tran Hung Dao, Da Nang"];
MFPlacesService* service = [[MFPlacesService alloc] init];
[service geocodingWithParams:params completionHandler:^(NSArray<id<MFGeocodeResult>> * _Nullable results, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (results != nil) {
    NSLog(@"Results count: %lu", results.count);
  }
}];
```
<!-- tabs:end -->
