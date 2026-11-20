# Map events

>IPostMap Android SDK cung cấp các sự kiện của map hay tương tác của người dùng giúp cho nhà phát triển có thể lắng nghe và xử lý.

## Giới thiệu chung

**IPostMap** cung cấp các interface cho phép người dùng thao tác với các sự kiện trên map.

### Các sự kiện thao tác trên Map:

| No | Event Name       | Description                                                                                                             |
|:--:|------------------|-------------------------------------------------------------------------------------------------------------------------|
| 1  | OnCameraMoveStartedListener | Được gọi khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map chuẩn bị thay đổi  |
| 2  | OnCameraMoveListener        | Được gọi khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map đang thay đổi      |
| 3  | OnCameraIdleListener        | Được gọi khi các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map kết thúc sự thay đổi         |
| 4  | OnMapModeChangeListener     | Được gọi khi map chuyển từ 2D sang 3D và ngược lại                                                           |
| 5  | OnMyLocationClickListener   | Được gọi khi icon My Location trên Map được touch                                                            |
| 6  | OnMyLocationButtonClickListener| Được gọi khi người dùng touch lên nút My Location                                                         |
| 7  | OnMapClickListener          | Được gọi khi có sự kiện touch trên map                                                                       |
| 8  | OnInfoWindowClickListener   | Được gọi khi có sự kiện touch trên info window của Marker                                                    |
| 9  | OnPlaceClickListener        | Được gọi khi có sự kiện touch trên place text khi Map ở chế độ ROADMAP (vector)                              |

## Hướng dẫn chi tiết

### OnCameraMoveStartedListener

Để lắng nghe sự kiện `OnCameraMoveStartedListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnCameraMoveStartedListener(new IPostMap.OnCameraMoveStartedListener() {
    @Override
    public void onCameraMoveStarted(int reason) {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnCameraMoveStartedListener(object : IPostMap.OnCameraMoveStartedListener {
    override fun onCameraMoveStarted(reason: Int) {

    }
})
```
<!-- tabs:end -->

Tham số `reason` sẽ cho chúng ta biết lý do mà Map thay đổi.

- REASON_GESTURE = 1 : Map thay đổi do người dùng tác động thông qua Gesture.
- REASON_API_ANIMATION = 2 : Map thay đổi do dữ liệu từ API, GPS, ...
- REASON_DEVELOPER_ANIMATION = 3 : Map thay đổi do chúng ta gọi phương thức `animateCamera()` hoặc `moveCamera()`

### OnCameraMoveListener

Để lắng nghe sự kiện `OnCameraMoveListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnCameraMoveListener(new IPostMap.OnCameraMoveListener() {
    @Override
    public void onCameraMove() {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnCameraMoveListener(object : IPostMap.OnCameraMoveListener {
    override fun onCameraMove() {

    }
})
```
<!-- tabs:end -->

### OnCameraIdleListener

Để lắng nghe sự kiện `OnCameraIdleListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnCameraIdleListener(new IPostMap.OnCameraIdleListener() {
    @Override
    public void onCameraIdle() {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnCameraIdleListener(object : IPostMap.OnCameraIdleListener {
    override fun onCameraIdle() {

    }
})
```
<!-- tabs:end -->

### OnMapModeChangeListener

Để lắng nghe sự kiện `OnMapModeChangeListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnMapModeChange(new IPostMap.OnMapModeChangeListener() {
    @Override
    public void onMapModeChange(boolean is3DMode) {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnMapModeChange(object : IPostMap.OnMapModeChangeListener {
    override fun onMapModeChange(is3DMode: Boolean) {

    }
})
```
<!-- tabs:end -->

Tham số `is3DMode` sẽ cho chúng ta biết mode của Map sau khi được chuyển

### OnMyLocationClickListener

Để lắng nghe sự kiện `OnMyLocationClickListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnMyLocationClickListener(new IPostMap.OnMyLocationClickListener() {
    @Override
    public void onMyLocationClick(Location location) {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnMyLocationClickListener(object: IPostMap.OnMyLocationClickListener {
    override fun onMyLocationClick(location: Location) {

    }
})
```
<!-- tabs:end -->

Tham số `location` sẽ trả về vị trí của marker My Location hiện tại.

### OnMyLocationButtonClickListener

Để lắng nghe sự kiện `OnMyLocationButtonClickListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnMyLocationButtonClickListener(new IPostMap.OnMyLocationButtonClickListener() {
    @Override
    public boolean onMyLocationButtonClick() {
        return false;
    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnMyLocationButtonClickListener(object: IPostMap.OnMyLocationButtonClickListener {
    override fun onMyLocationButtonClick(): Boolean {
        return false
    }
})
```
<!-- tabs:end -->

Phương thức `onMyLocationButtonClick()` trả về là `false` thì My Location marker sẽ được cập nhật lại vị trí mới nhất từ
dữ liệu GPS và ngược lại, giá trị trả về là `true` thì My Location marker sẽ không cập nhật lại vị trí mới nhất.

### OnMapClickListener

Để lắng nghe sự kiện `OnMapClickListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnMapClickListener(new IPostMap.OnMapClickListener() {
    @Override
    public void onMapClick(MFLocationCoordinate latLng) {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnMapClickListener(object: IPostMap.OnMapClickListener {
    override fun onMapClick(latLng: MFLocationCoordinate) {

    }
})
```
<!-- tabs:end -->

Tham số `MFLocationCoordinate` sẽ trả về tọa độ của Map mà chúng ta touch.

### OnInfoWindowClickListener

Để lắng nghe sự kiện `OnInfoWindowClickListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnInfoWindowClickListener(new IPostMap.OnInfoWindowClickListener() {
    @Override
    public void onInfoWindowClick(@NonNull MFMarker marker) {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnInfoWindowClickListener(object: IPostMap.OnInfoWindowClickListener {
    override fun onInfoWindowClick(marker: MFMarker) {

    }
})
```
<!-- tabs:end -->

Tham số `MFMarker` sẽ trả về Marker có InfoWindow mà chúng ta touch.

### OnPlaceClickListener

Để lắng nghe sự kiện `OnPlaceClickListener` chúng ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setOnPlaceClickListener(new IPostMap.OnPlaceClickListener() {
    @Override
    public void onPlaceClick(@NonNull String name, @NonNull MFLocationCoordinate location) {

    }
});
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setOnPlaceClickListener(object: IPostMap.OnPlaceClickListener {
    override fun onPlaceClick(name: String, location: MFLocationCoordinate) {

    }
})
```
<!-- tabs:end -->

Tham số `String` sẽ trả về tên của place.

Tham số `MFLocationCoordinate` sẽ trả về tọa độ của place.
