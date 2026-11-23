# Nearby Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_nearby_search>

> Tìm kiếm các địa điểm lân cận.

### Usage

- Service: [MFPlacesService](reference/places-service.md)
- Params: [MFNearbySearchParams](reference/nearby-search-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: Array of [MFPlaceResult](reference/place-result.md)
  + Error: [MFServiceError](reference/service-error.md)

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
