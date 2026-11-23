# Distance Matrix

> Tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến.

### Usage

- Service: [MFDirectionsService](reference/directions-service.md)
- Params: [MFDistanceMatrixParams](reference/distance-matrix-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: [MFDistanceMatrixResult](reference/distance-matrix-result.md)
  + Error: [MFServiceError](reference/service-error.md)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let origins = [
  MFLocationComponent(latitude: 16.024634, longitude: 108.209217),
  MFLocationComponent(latitude: 16.071766, longitude: 108.223615)
]
let destinations = [
  MFLocationComponent(latitude: 16.020179, longitude: 108.211212),
  MFLocationComponent(latitude: 16.061040, longitude: 108.216700),
  MFLocationComponent(latitude: 16.059145, longitude: 108.221297)
]

let params = MFDistanceMatrixParams(origins: origins, destinations: destinations)
let service = MFDirectionsService()

service.fetchDistanceMatrix(with: params) { result, error in
  guard let result = result else {
    print("Error: \(error!.message)")
    return
  }

  // ...
}
```

#### ** Objective-C **
```objc
MFLocationComponent *origin = [[MFLocationComponent alloc] initWithLatitude:16.024634 longitude:108.209217];
MFLocationComponent *destination = [[MFLocationComponent alloc] initWithLatitude:16.020179 longitude:108.211212];
MFDistanceMatrixParams *params = [[MFDistanceMatrixParams alloc] initWithOrigins:[NSArray arrayWithObject:origin]
                                                                    destinations:[NSArray arrayWithObject:destination]
                                                                            mode:MFTravelModeBike
                                                                       weighting:MFRouteWeightingBalance];
MFPlacesService* service = [[MFDirectionsService alloc] init];

[service fetchDistanceMatrixWithParams:params
                     completionHandler:^(id<MFDistanceMatrixResult>  _Nullable result, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (result != nil) {
    // ...
  }
}];
```
<!-- tabs:end -->
