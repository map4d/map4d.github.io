# iPostMap iOS SDK
[![ipostmap](https://img.shields.io/badge/ipostmap-map-orange)](https://ipostmap.vn/)
[![platform](https://img.shields.io/cocoapods/p/iPostMap)](https://www.apple.com/ios/)
[![cocoapods](https://img.shields.io/cocoapods/v/iPostMap)](https://cocoapods.org/pods/iPostMap)

> **IPostMap iOS SDK** cho phép bạn tùy chỉnh bản đồ với nội dung để hiển thị trên iPhone, iPad.  
> **IPostMap iOS SDK** không chỉ mang hình ảnh thực tế lên trên bản đồ 3D, ngoài ra còn cho phép tương tác và điều chỉnh các đối tượng 3D của bạn

![IPostMap iOS SDK](../resources/Untitled-1_0000_Right-Mockup--phone-demo.png)

## Installation

Use [CocoaPods](https://cocoapods.org)

1. Update your cocoapods local repo
```shell
pod repo update
```

2. Add to Podfile
```shell
pod 'iPostMap'
```

### Nền tảng được hỗ trợ

- Hỗ trợ thiết bị iOS 64 bit và phiên bản iOS 12.0 trở lên

## Using

1. Provide access key from Info.plist

```xml
<key>iPostMapAccessKey</key>
<string>YOUR_ACCESS_KEY</string>
```

2. Create map view

```swift
import UIKit
import iPostMap

class ViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    let mapView = MFMapView(frame: self.view.frame)
    view = mapView
  }
}
```