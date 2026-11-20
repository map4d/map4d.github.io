# IpostMap Android SDK
[![ipostmap](https://img.shields.io/badge/ipostmap-map-orange)](https://ipostmap.vn/)
[![platform](https://img.shields.io/badge/platform-android-brightgreen.svg)](https://www.android.com/)
[![maven](https://img.shields.io/maven-metadata/v?metadataUrl=https%3A%2F%2Fpackages.ipostmap.vn%2Frepository%2Fmaven-public%2Fvn%2Fmap4d%2FIpostMap%2Fmaven-metadata.xml)](https://ipostmap.vn/)

IpostMap Android SDK for Android, written in C/C++, Java.  

> IPostMap Android SDK cho phép bạn tùy chỉnh bản đồ với nội dung để hiển thị trên thiết bị android hỗ trợ opengl 2.0   
IPostMap Android SDK không chỉ mang hình ảnh thực tế lên trên bản đồ 3D, ngoài ra còn cho phép tương tác và điều chỉnh các đối tượng 3D của bạn  

[![IPostMap Android SDK](../resources/overView.png)](https://ipostmap.vn) 

## Installation

Nếu dự án của bạn dùng Gradle thì trước hết cần khai báo url cho maven trong file gradle project.

```xml
allprojects {
    repositories {
        maven {
            url = "https://packages.ipostmap.vn/repository/maven-public"
        }
    }
}
```

Thêm vào dependencies:

```xml
dependencies {
  implementation 'vn.map4d:Map4dTypes:1.1.0'
  implementation 'vn.map4d:IpostMap:2.0.0'
}
```

## Using

1. Provide access key

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="vn.ipostmap.simplemap">
  <application
    android:theme="@style/AppTheme">
    <meta-data
      android:name="vn.ipostmap.Map.ACCESS_KEY"
      android:value="TYPE_YOUR_KEY_HERE"/>
  </application>
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>

```

2. Create layout sử dụng MFMapView

```xml
<vn.ipostmap.Map.core.MFMapView
  android:id="@+id/mapView"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```
3. Working với map view

> **Chú ý:** <span style="color:red">Khi dùng MFMapView thì chúng ta cần override các phương thức lifecycle sau của Activity hoặc Fragment chứa nó và gọi tới
các hàm tương ứng của đối tượng MFMapView (như code ví dụ ở bên dưới).</span>
 
- **onCreate(Bundle)**
- **onDestroy()**
- **onSaveInstanceState(Bundle)**
- **onStart()** (Override phương thức này nếu sử dụng phiên bản SDK >= **2.0.11**)
- **onStop()** (Override phương thức này nếu sử dụng phiên bản SDK >= **2.0.11**)

<!-- tabs:start -->
#### ** Java **

```java
public class MainActivity extends AppCompatActivity implements OnMapReadyCallback{ 
    
    private MFMapView mapView;
    private IPostMap map4D;
  
    @Override
    protected void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState);
        setContentView(R.layout.simple3d_map_activity);
        mapView = findViewById(R.id.map3D);
        mapView.onCreate(savedInstanceState);
        mapView.getMapAsync(this); 
    }
  
    @Override
    public void onMapReady(IPostMap map4D) { 
        ipostmap.enable3DMode(true);
        // Your code
    }
      
    @Override
    protected void onDestroy() { 
        mapView.onDestroy(); 
        super.onDestroy();
    }
    
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        mapView.onSaveInstanceState(outState);
    }
    
    // Override phương thức này nếu sử dụng phiên bản SDK >= 2.0.11
    @Override
    protected void onStart() {
        super.onStart();
        mapView.onStart();
    }

    // Override phương thức này nếu sử dụng phiên bản SDK >= 2.0.11
    @Override
    protected void onStop() {
        mapView.onStop();
        super.onStop();
    }
}
```

#### ** Kotlin **

```kotlin
import vn.ipostmap.Map.core.IPostMap
import vn.ipostmap.Map.core.OnMapReadyCallback

class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private var map4D: IPostMap? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        mapView?.onCreate(savedInstanceState)
        mapView?.getMapAsync(this)
    }

    override fun onMapReady(map4D: IPostMap?) {
        map4D?.enable3DMode(true)
        // Your code
    }
    
    override fun onDestroy() {
        mapView?.onDestroy()
        super.onDestroy()
    }
    
    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        mapView?.onSaveInstanceState(outState)
    }

    // Override phương thức này nếu sử dụng phiên bản SDK >= 2.0.11
    override fun onStart() {
        super.onStart()
        mapView?.onStart()
    }

    // Override phương thức này nếu sử dụng phiên bản SDK >= 2.0.11
    override fun onStop() {
        mapView?.onStop()
        super.onStop()
    }
}
```
<!-- tabs:end -->
