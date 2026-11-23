# Map4dServices iOS SDK
[![map4d](https://img.shields.io/badge/map4d-services-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/cocoapods/p/Map4dServices)](https://www.apple.com/ios/)
[![cocoapods](https://img.shields.io/cocoapods/v/Map4dServices)](https://cocoapods.org/pods/Map4dServices)

> **Map4dServices** cung cấp [Map4D Services API](https://docs.map4d.vn/map4d-service/api) wrapper sử dụng cho nhiều mục đích khác nhau như tìm kiếm địa điểm, chỉ đường, phân giải địa chỉ, ...  
> **Map4dServices** cho phép hạn chế ứng dụng sử dụng khóa API của bạn thông qua bundle id.  

## Installation

Use [CocoaPods](https://cocoapods.org)

1. Update your cocoapods local repo
```shell
pod repo update
```

2. Add to Podfile
```shell
pod 'Map4dServices'
```

## Using

1. Provide services access key from Info.plist

```xml
<key>Map4dServicesAccessKey</key>
<string>YOUR_SERVICES_ACCESS_KEY</string>
```

2. Import

<!-- tabs:start -->
#### ** Swift **

```swift
import Map4dServices
```

#### ** Objective C **

```objc
#import <Map4dServices/Map4dServices.h>
```
<!-- tabs:end -->

## Example

Get place detail

<!-- tabs:start -->
#### ** Swift **

```swift
let service = MFPlacesService()
service.fetchPlaceDetail(withPlaceId: "60dd3850f81cb14bc880ed52") { result, error in
  guard let result = result else {
    dump(error)
    return
  }
  print("name \(result.name)")
}
```

#### ** Objective C **

```objc
MFPlacesService* service = [[MFPlacesService alloc] init];
[service fetchPlaceDetailWithPlaceId:placeId completionHandler:^(id<MFPlaceDetailResult> _Nullable result, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"code: %@, message: %@", error.code, error.message);
  }
  else {
    NSLog(@"name: %@", result.name);
  }
}];
```
<!-- tabs:end -->