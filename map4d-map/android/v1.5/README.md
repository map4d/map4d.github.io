# IpostMap Android SDK
[![ipostmap](https://img.shields.io/badge/ipostmap-map-orange)](https://ipostmap.vn/)
[![platform](https://img.shields.io/badge/platform-android-brightgreen.svg)](https://www.android.com/)

IpostMap Android SDK for Android, written in C/C++, Java.  

> IPostMap Android SDK cho phép bạn tùy chỉnh bản đồ với nội dung để hiển thị trên thiết bị android hỗ trợ opengl 2.0   
IPostMap Android SDK không chỉ mang hình ảnh thực tế lên trên bản đồ 3D, ngoài ra còn cho phép tương tác và điều chỉnh các đối tượng 3D của bạn  

[![IPostMap Android SDK](../resources/overView.png)](https://ipostmap.vn) 

## Installation

<!-- tabs:start -->
#### ** Gradle **

```xml
dependencies {
  implementation 'vn.map4d:Map4dTypes:1.0.6'
  implementation 'vn.map4d:IpostMap:1.5.0'
}
```

#### ** Maven **

```xml
<dependency>
	<groupId>vn.map4d</groupId>
	<artifactId>IpostMap</artifactId>
	<version>1.5.0</version>
	<type>pom</type>
</dependency>
```
<!-- tabs:end -->

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

2. Create layout

```xml
<vn.ipostmap.Map.core.MFMapView
  android:id="@+id/mapView"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```
3. Working với map view

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
}
```
<!-- tabs:end -->

> **Chú ý:** Khi dùng MFMapView thì cần phải destroy view để tránh trường hợp leak memory