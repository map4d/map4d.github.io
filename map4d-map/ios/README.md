# Map4dMap iOS SDK
[![map4d](https://img.shields.io/badge/map4d-map-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/cocoapods/p/Map4dMap)](https://www.apple.com/ios/)
[![cocoapods](https://img.shields.io/cocoapods/v/Map4dMap)](https://cocoapods.org/pods/Map4dMap)

> **Map4D iOS SDK** cho phép bạn tùy chỉnh bản đồ với nội dung để hiển thị trên iPhone, iPad.  
> Không chỉ mang hình ảnh thực tế lên trên bản đồ 3D, **Map4D iOS SDK** còn cho phép tương tác và điều chỉnh các đối tượng của bạn

![Map4D iOS SDK](resources/Untitled-1_0000_Right-Mockup--phone-demo.png)

## Installation

### Swift Package Manager (SPM)

Trong Xcode, chọn **File > Add Package Dependencies**, nhập URL:

```text
https://github.com/map4d/map4d-map-ios-sdk.git
```

Chọn **Dependency Rule: Up to Next Major Version**, bắt đầu từ **3.4.0**, sau đó thêm product **Map4dMap** vào app target.

Nếu khai báo dependency trong `Package.swift` của một Swift package:

```swift
// Trong dependencies của Package:
.package(url: "https://github.com/map4d/map4d-map-ios-sdk.git", from: "3.4.0")

// Trong dependencies của target sử dụng SDK:
.product(name: "Map4dMap", package: "map4d-map-ios-sdk")
```

### CocoaPods

Update your cocoapods local repo
```shell
pod repo update
```

Add to Podfile
```shell
pod 'Map4dMap', '~> 3.4'
```

Sau khi cập nhật Podfile, chạy `pod install` và mở file `.xcworkspace`

### Nền tảng được hỗ trợ

- iOS 12.0 trở lên.
- Xcode 12.0 trở lên; Swift tools 5.3.
- Map4D Access Key: tạo tại trang nhà phát triển của [Map4D](https://map.map4d.vn/developer/key) *(yêu cầu tài khoản đã kích hoạt tính năng nhà phát triển)*

## Using

1. Provide access key from Info.plist

```xml
<key>Map4dMapAccessKey</key>
<string>YOUR_ACCESS_KEY</string>
```

2. Create map view

```swift
import UIKit
import Map4dMap

class ViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    let mapView = MFMapView(frame: self.view.frame)
    view = mapView
  }
}
```
