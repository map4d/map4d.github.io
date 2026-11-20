# IPostMap SDK

IPostMap SDK for iOS, written in C/C++, Objective C.

[![IPostMap iOS SDK](../resources/Untitled-1_0000_Right-Mockup--phone-demo.png)](https://ipostmap.vn) 

## Installation

Use [CocoaPods](https://cocoapods.org).

1. Update your cocoapods local repo
```bash
pod repo update
```

2. Add to Podfile
```shell
pod 'IpostMap'
```

## Using

1. Provide access key from Info.plist

```xml
<key>IpostMapAccessKey</key>
<string>{your_key}</string>
```

2. Create map view

```swift
import UIKit
import IpostMap
class ViewController: UIViewController {
  
    override func viewDidLoad() {
        super.viewDidLoad()
        let mapView = MFMapView(frame: self.view.frame)
        view = mapView
    }
}
```