# Place Detail

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

- Service: [MFPlacesService](reference/places-service.md)
- Params: place id *(string)*
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: [MFPlaceDetailResult](reference/place-detail-result.md)
  + Error: [MFServiceError](reference/service-error.md)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let service = MFPlacesService()
service.fetchPlaceDetail(withPlaceId: "5c9845df814a9df9d67e5598") { result, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Name: \(result.name)")
}
```

#### ** Objective-C **
```objc
MFPlacesService* service = [[MFPlacesService alloc] init];

[service fetchPlaceDetailWithPlaceId:@"60dd3850f81cb14bc880ed52" completionHandler:^(id<MFPlaceDetailResult> _Nullable result, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (results != nil) {
    NSLog(@"Name: %@", result.name);
  }
}];
```
<!-- tabs:end -->
