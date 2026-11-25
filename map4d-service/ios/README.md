# iPostMapServices iOS SDK
[![ipostmap](https://img.shields.io/badge/ipostmap-services-orange)](https://ipostmap.vn/)
[![platform](https://img.shields.io/cocoapods/p/iPostMapServices)](https://ipostmap.vn/)

> **iPostMapServices** cung cấp [iPostMap Services API](https://docs.ipostmap.vn/map4d-service/api) wrapper sử dụng cho nhiều mục đích khác nhau như tìm kiếm địa điểm, chỉ đường, phân giải địa chỉ, ...  
> Cho phép hạn chế ứng dụng sử dụng khóa API của bạn thông qua bundle id.  

## Yêu cầu

- iOS 12.0 trở lên.
- Xcode 12 trở lên; Swift tools 5.3.
- Services Access Key phù hợp với bundle ID của ứng dụng. Tạo tại trang nhà phát triển của [iPostMap](https://map.ipostmap.vn/developer/key) *(yêu cầu tài khoản đã kích hoạt tính năng nhà phát triển)*

## Installation

### Swift Package Manager (SPM)

Trong Xcode, chọn **File > Add Package Dependencies**, nhập URL package:

```text
https://github.com/map4d/ipostmap-services-ios-sdk.git
```

Chọn **Up to Next Major Version**, bắt đầu từ **1.1.0**, rồi thêm product **Map4dServices** vào app target.

Với một Swift package, khai báo trong `Package.swift`:

```swift
// dependencies của Package:
.package(url: "https://github.com/map4d/ipostmap-services-ios-sdk.git", from: "1.1.0")

// dependencies của target dùng SDK:
.product(name: "iPostMapServices", package: "ipostmap-services-ios-sdk")
```

### CocoaPods

1. Update your cocoapods local repo
```shell
pod repo update
```

2. Add to Podfile
```shell
pod 'iPostMapServices'
```

Chạy `pod install` và mở file `.xcworkspace`

## Using

Cung cấp `Map4dServicesAccessKey` tại Info.plist. Có thể tạo services access key tại [iPostMap](https://map.ipostmap.vn/developer/key) *(yêu cầu tài khoản đã kích hoạt tính năng nhà phát triển)*

```xml
<key>Map4dServicesAccessKey</key>
<string>YOUR_SERVICES_ACCESS_KEY</string>
```

2. Import

```swift
import iPostMapServices
```

## Example

Tìm kiếm địa điểm theo từ khóa với Text Search.

```swift
let params = MFTextSearchParams(text: "Hà Nội")
let service = MFPlacesService()
service.searchText(with: params) { results, error in
  if let error = error {
    print("Error: \(error.message)")
    return
  }
  guard let places = results else { return }

  for place in places {
    print("Name: \(place.name)")
    print("Address: \(place.address)")
  }
}
```