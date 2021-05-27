# Map4dMap iOS SDK
[![map4d](https://img.shields.io/badge/map4d-map-success)](https://map4d.vn/)
[![cocoapods](https://img.shields.io/cocoapods/v/Map4dMap)](https://cocoapods.org/pods/Map4dMap)
[![platform](https://img.shields.io/cocoapods/p/Map4dMap)](https://map4d.vn/)

> **Map4D iOS SDK** cho phép bạn tùy chỉnh bản đồ với nội dung để hiển thị trên iPhone, iPad.  
> **Map4D iOS SDK** không chỉ mang hình ảnh thực tế lên trên bản đồ 3D, ngoài ra còn cho phép tương tác và điều chỉnh các đối tượng 3D của bạn

![Map4D iOS SDK](../resources/Untitled-1_0000_Right-Mockup--phone-demo.png)

## Installation

Use [CocoaPods](https://cocoapods.org)

1. Update your cocoapods local repo
```shell
pod repo update
```

2. Add to Podfile
```shell
pod 'Map4dMap'
```

## Using

1. Provide access key from Info.plist

```xml
<key>Map4dMapAccessKey</key>
<string>{YOUR_KEY}</string>
```

2. Create map view

<!-- tabs:start -->
#### ** Swift **

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

#### ** Objective C **

```objc
#import <Map4dMap/Map4dMap.h>

@implementation ViewController

- (void)viewDidLoad {
  MFMapView * mapView;
  [super viewDidLoad];
  mapView = [[MFMapView alloc] initWithFrame: self.view.frame];
  [self.view addSubview:mapView];
}

@end
```
<!-- tabs:end -->