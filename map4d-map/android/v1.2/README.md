# IpostMap Android SDK

IpostMap Android SDK for Android, written in C/C++, Java.  

[![IPostMap Android SDK](https://ipostmap.vn/Content/Client/img/Untitled-1_0000_Right-Mockup--phone-demo-copy.png)](https://ipostmap.vn) 

## Installation

Use Gradle
```xml
dependencies {
  implementation 'vn.map4d:Map4dTypes:1.0.5'
  implementation 'vn.map4d:IpostMap:1.2.12'
}
```
Use Maven
```xml
<dependency>
	<groupId>vn.map4d</groupId>
	<artifactId>IpostMap</artifactId>
	<version>1.2.12</version>
	<type>pom</type>
</dependency>
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

2. Create layout

```xml
<vn.ipostmap.Map.core.MFMapView
  android:id="@+id/mapView"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```
3. Working with map view (kotlin)

```kotlin
import vn.ipostmap.Map.core.IPostMap
import vn.ipostmap.Map.core.OnMapReadyCallback

class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        mapView?.getMapAsync(this)
    }

    override fun onMapReady(map4D: IPostMap?) {
        map4D?.enable3DMode(true)
        //TODO
    }
    
     override fun onDestroy() {
        mapView?.onDestroy()
        super.onDestroy()
     }
}
```