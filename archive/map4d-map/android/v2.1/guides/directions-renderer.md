# Directions Renderer

Để vẽ chỉ đường giữa các địa điểm trên Map thì ta sử dụng đối tượng `Directions Renderer` thay cho việc vẽ nhiều `Polyline` một cách thủ công.

## 1. DirectionsRenderer & DirectionsRendererOptions
```java
public class MFDirectionsRendererOptions {
  public MFDirectionsRendererOptions()
  public MFDirectionsRendererOptions paths(List<List<MFLocationCoordinate>> paths)
  public MFDirectionsRendererOptions startLocation(@NonNull MFLocationCoordinate position)
  public MFDirectionsRendererOptions endLocation(@NonNull MFLocationCoordinate position)
  public MFDirectionsRendererOptions jsonData(@NonNull String jsonData)
  public MFDirectionsRendererOptions binaryData(@NonNull byte[][] binaryData)
  public MFDirectionsRendererOptions activedIndex(int activedIndex)
  public MFDirectionsRendererOptions activeStrokeColor(@ColorInt int color)
  public MFDirectionsRendererOptions activeOutlineColor(@ColorInt int color)
  public MFDirectionsRendererOptions inactiveStrokeColor(@ColorInt int color)
  public MFDirectionsRendererOptions inactiveOutlineColor(@ColorInt int color)
  public MFDirectionsRendererOptions titleColor(@ColorInt int color)
  public MFDirectionsRendererOptions width(float width)
  public MFDirectionsRendererOptions startIcon(@Nullable MFBitmapDescriptor iconDescriptor)
  public MFDirectionsRendererOptions endIcon(@Nullable MFBitmapDescriptor iconDescriptor)
  public MFDirectionsRendererOptions startIconAnchor(float anchorU, float anchorV)
  public MFDirectionsRendererOptions endIconAnchor(float anchorU, float anchorV)
  public MFDirectionsRendererOptions startLabel(@NonNull String startLabel)
  public MFDirectionsRendererOptions endLabel(@NonNull String endLabel)
  public List<List<MFLocationCoordinate>> getPaths()
  public MFLocationCoordinate getStartLocation()
  public MFLocationCoordinate getEndLocation()
  public String getJsonData()
  public byte[][] getBinaryData()
  public int getActivedIndex()
  @ColorInt
  public int getActiveStrokeColor()
  @ColorInt
  public int getActiveOutlineColor()
  @ColorInt
  public int getInactiveStrokeColor()
  @ColorInt
  public int getInactiveOutlineColor()
  @ColorInt
  public int getTitleColor()
  public float getWidth()
  public MFBitmapDescriptor getStartIcon()
  public MFBitmapDescriptor getEndIcon()
  public float getStartIconAnchorU()
  public float getStartIconAnchorV()
  public float getEndIconAnchorU()
  public float getEndIconAnchorV()
  public String getStartLabel()
  public String getEndLabel()
}

public final class MFDirectionsRenderer {
  public List<List<MFLocationCoordinate>> getPaths()
  public MFLocationCoordinate getStartLocation()
  public MFLocationCoordinate getEndLocation()
  public int getActivedIndex()
  @ColorInt
  public int getActiveStrokeColor()
  @ColorInt
  public int getActiveOutlineColor()
  @ColorInt
  public int getInactiveStrokeColor()
  @ColorInt
  public int getInactiveOutlineColor()
  @ColorInt
  public int getTitleColor()
  public float getWidth()
  public MFBitmapDescriptor getStartIcon()
  public MFBitmapDescriptor getEndIcon()
  public float getStartIconAnchorU()
  public float getStartIconAnchorV()
  public float getEndIconAnchorU()
  public float getEndIconAnchorV()
  public String getStartLabel()
  public String getEndLabel()
  public void setPaths(@NonNull List<List<MFLocationCoordinate>> paths)
  public void setStartLocation(@NonNull MFLocationCoordinate startLocation)
  public void setEndLocation(@NonNull MFLocationCoordinate endLocation)
  public void setStartIconAnchor(float anchorU, float anchorV)
  public void setEndIconAnchor(float anchorU, float anchorV)
  public void setJsonData(@NonNull String jsonData)
  public void setBinaryData(@NonNull byte[][] binaryData)
  public void setWidth(float width)
  public void setActivedIndex(int activedIndex)
  public void setId(long id)
  public long getId()
  public void remove()
}
```

### 2. Tạo Directions Renderer

![Directions Renderer](/map4d-map/android/resources/7-directions-renderer.png)

> Tạo đối tượng Directions Renderer từ **MFDirectionsRendererOptions**


<!-- tabs:start -->
#### ** Kotlin **
```kotlin
  val directionsRendererOptions = MFDirectionsRendererOptions()
  
  val paths: MutableList<List<MFLocationCoordinate>> = ArrayList()
  val path1: MutableList<MFLocationCoordinate> = ArrayList()
  path1.add(MFLocationCoordinate(16.070508, 108.221204))
  path1.add(MFLocationCoordinate(16.071449, 108.221124))
  path1.add(MFLocationCoordinate(16.071606, 108.222706))

  val path2: MutableList<MFLocationCoordinate> = ArrayList()
  path2.add(MFLocationCoordinate(16.070508, 108.221204))
  path2.add(MFLocationCoordinate(16.070369, 108.222870))
  path2.add(MFLocationCoordinate(16.071606, 108.222706))

  paths.add(path1)
  paths.add(path2)

  directionsRendererOptions.paths(paths)
  directionsRendererOptions.activeStrokeColor(resources.getColor(android.R.color.colorActiveStroke))
  directionsRendererOptions.inactiveStrokeColor(resources.getColor(android.R.color.colorInactiveStroke))
  directionsRendererOptions.activeOutlineColor(Color.BLUE)
  directionsRendererOptions.inactiveOutlineColor(Color.BLACK)
  directionsRendererOptions.width(10f)
  directionsRendererOptions.startLocation(MFLocationCoordinate(16.070526, 108.220990))
  directionsRendererOptions.startLabel("Start")
  directionsRendererOptions.endLocation(MFLocationCoordinate(16.071523, 108.222960))
  directionsRendererOptions.endLabel("End")
  val directionsRenderer = map4D?.addDirectionsRenderer(directionsRendererOptions)
```

#### ** Java **
```java
  MFDirectionsRendererOptions directionsRendererOptions = new MFDirectionsRendererOptions();
  
  List<List<MFLocationCoordinate>> paths = new ArrayList<>();
  List<MFLocationCoordinate> path1 = new ArrayList<>();
  path1.add(new MFLocationCoordinate(16.070508, 108.221204));
  path1.add(new MFLocationCoordinate(16.071449, 108.221124));
  path1.add(new MFLocationCoordinate(16.071606, 108.222706));

  List<MFLocationCoordinate> path2 = new ArrayList<>();
  path2.add(new MFLocationCoordinate(16.070508, 108.221204));
  path2.add(new MFLocationCoordinate(16.070369, 108.222870));
  path2.add(new MFLocationCoordinate(16.071606, 108.222706));

  paths.add(path1);
  paths.add(path2);

  directionsRendererOptions.paths(paths);
  directionsRendererOptions.activeStrokeColor(getResources().getColor(R.color.colorActiveStroke));
  directionsRendererOptions.inactiveStrokeColor(getResources().getColor(R.color.colorInactiveStroke));
  directionsRendererOptions.activeOutlineColor(Color.BLUE);
  directionsRendererOptions.inactiveOutlineColor(Color.BLACK);
  directionsRendererOptions.width(10.f);
  directionsRendererOptions.startLocation(new MFLocationCoordinate(16.070526, 108.220990));
  directionsRendererOptions.startLabel("Start");
  directionsRendererOptions.endLocation(new MFLocationCoordinate(16.071523, 108.222960));
  directionsRendererOptions.endLabel("End");
  directionsRenderer = map4D.addDirectionsRenderer(directionsRendererOptions);
```
<!-- tabs:end -->

Ví dụ trên thì chúng ta tạo một directions Renderer từ 2 danh sách các tọa độ `path1` và `path2` tương ứng với 2 đường đi
với các tùy chỉnh cơ bản.


### 3. Xóa Directions Renderer

> Để xóa Directions Renderer ra khỏi bản đồ ta sử dụng hàm `remove()`

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
  directionsRenderer.remove()
```
#### ** Java **
```java
  directionsRenderer.remove();
```
<!-- tabs:end -->

### 4. Sự kiện click Directions Renderer

- Phát sinh khi người dùng click lên đối tượng `Directions Renderer`

<!-- tabs:start -->

#### ** Kotlin **
```kotlin
    map4D?.setOnDirectionsClickListener { directionsRenderer, index ->
      Log.e("Events", "Click on directions renderer index: $index")
    }
```
#### ** Java **
```java
  map4D.setOnDirectionsClickListener(new Map4D.OnDirectionsClickListener() {
      @Override
      public void onDirectionsClick(MFDirectionsRenderer directionsRenderer, int index) {
          Log.e("Events", "Click on directions renderer index: " + index);
      }
  });
```
<!-- tabs:end -->
* Tham số directionsRenderer sẽ trả về đối tượng directionsRenderer mà người dùng click.
* Tham số index sẽ trả về chỉ số index của list các đường đi mà người dùng click lên.

