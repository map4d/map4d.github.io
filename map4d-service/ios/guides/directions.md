# Directions

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_route>

> API đùng để tìm đường đi giữa các địa điểm.

### Usage

- Service: [MFDirectionsService](reference/directions-service.md)
- Params: [MFDirectionsParams](reference/directions-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: [MFDirectionsResult](reference/directions-result.md)
  + Error: [MFServiceError](reference/service-error.md)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let origin = MFLocationComponent(latitude: 16.024634, longitude: 108.209217)
let destination = MFLocationComponent(latitude: 16.020179, longitude: 108.211212)
let params = MFDirectionsParams(origin: origin, destination: destination)
let service = MFDirectionsService()

service.fetchDirections(with: params) { result, error in
  guard let result = result else {
    print("Error: \(error!.message)")
    return
  }

  // ...
}
```

#### ** Objective-C **
```objc
MFLocationComponent *origin = [[MFLocationComponent alloc] initWithLatitude:16.073765 longitude:108.211724];
MFLocationComponent *destination = [[MFLocationComponent alloc] initWithLatitude:16.073486 longitude:108.211813];
MFDirectionsParams *params = [[MFDirectionsParams alloc] initWithOrigin:origin destination:destination];
MFDirectionsService* service = [[MFDirectionsService alloc] init];

[service fetchDirectionsWithParams:params
                 completionHandler:^(id<MFDirectionsResult>  _Nullable result, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (result != nil) {
    // ...
  }
}];
```
<!-- tabs:end -->
