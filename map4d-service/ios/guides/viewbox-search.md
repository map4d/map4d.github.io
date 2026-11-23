# Viewbox Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_viewbox_search>

> Tìm các địa điểm trong khu vực địa lý hình chữ nhật.

### Usage

- Service: [MFPlacesService](reference/places-service.md)
- Params: [MFViewboxSearchParams](reference/viewbox-search-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: Array of [MFPlaceResult](reference/place-result.md)
  + Error: [MFServiceError](reference/service-error.md)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let viewbox = MFViewboxComponent(southwest: CLLocationCoordinate2DMake(16.056453967981348,108.19387435913086),
                                 northeast: CLLocationCoordinate2DMake(16.093031550262133,108.25927734375))
let params = MFViewboxSearchParams(viewbox: viewbox, text: "bank")

let service = MFPlacesService()
service.searchViewbox(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

#### ** Objective-C **
```objc
MFViewboxComponent *viewbox = [[MFViewboxComponent alloc] initWithSouthwest:CLLocationCoordinate2DMake(16.056453967981348,108.19387435913086)
                                                                  northeast:CLLocationCoordinate2DMake(16.093031550262133,108.25927734375)];
MFViewboxSearchParams *params = [[MFViewboxSearchParams alloc] initWithViewbox:viewbox text:@"atm"];
MFPlacesService* service = [[MFPlacesService alloc] init];

[service searchViewboxWithParams:params completionHandler:^(NSArray<id<MFPlaceResult>> * _Nullable results, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (results != nil) {
    NSLog(@"Results count: %lu", results.count);
  }
}];
```
<!-- tabs:end -->
