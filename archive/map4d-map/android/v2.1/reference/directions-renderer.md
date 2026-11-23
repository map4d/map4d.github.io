# Directions Renderer reference

### Directions Renderer Class

`MFDirectionsRenderer` class

- Tạo Directions Renderer với các options được chỉ định

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
    directionsRendererOptions.startIconAnchor(1.0f, 1.0f)
    directionsRendererOptions.endLocation(MFLocationCoordinate(16.071523, 108.222960))
    directionsRendererOptions.endLabel("End")
    directionsRendererOptions.endIconAnchor(0.0f, 0.0f)
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
    directionsRendererOptions.startIconAnchor(1.0f, 1.0f);
    directionsRendererOptions.endLocation(new MFLocationCoordinate(16.071523, 108.222960));
    directionsRendererOptions.endLabel("End");
    directionsRendererOptions.endIconAnchor(0.0f, 0.0f);
    directionsRenderer = map4D.addDirectionsRenderer(directionsRendererOptions);
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setPaths**                 | List<List<[MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)>>|`none`| Set list các route cho Directions Renderer           |
| **getPaths**                 |`none`|List<List<[MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)>>| Get list các route của Directions Renderer            |
| **setStartLocation**         | [MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)| `none`       | Set tọa độ của điểm bắt đầu                              |
| **getStartLocation**         | `none` | [MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)       | Get tọa độ của điểm bắt đầu                             |
| **setEndLocation**           | [MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)| `none`       | Set tọa độ của điểm kết thúc                             |
| **getEndLocation**           | `none` | [MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)       | Get tọa độ của điểm kết thúc                            |
| **setWidth**                 | float                                   | `none`       | Set độ rộng line của Directions Renderer                                               |
| **getWidth**                 | `none`                                  | float        | Get độ rộng line của Directions Renderer                                               |
| **setJsonData**              | String                                  | `none`       | Set dữ liệu các route cho Directions Renderer bằng JSON                                |
| **setBinaryData**            | byte[][]                                | `none`       | Set dữ liệu các route cho Directions Renderer bằng dữ liệu nhị phân                    |
| **setActivedIndex**          | int                                     | `none`       | Set index của route chính trong Directions Renderer                                    |
| **getActivedIndex**          | `none`                                  | int          | Get index của route chính trong Directions Renderer                                    |
| **getActiveStrokeColor**     | `none`                                  | @ColorInt int| Get màu của line được active                                                           |
| **getActiveOutlineColor**    | `none`                                  | @ColorInt int| Get màu viền của line được active                                                      |
| **getInactiveStrokeColor**   | `none`                                  | @ColorInt int| Get màu của line không được active                                                     |
| **getInactiveOutlineColor**  | `none`                                  | @ColorInt int| Get màu viền của line không được active                                                |
| **getTitleColor**            | `none`                                  | @ColorInt int| Get màu chữ của điểm bắt đầu và điểm kết thúc                                          |
| **getStartLabel**            | `none`                                  | String       | Get tên của điểm bắt đầu                                                               |
| **getEndLabel**              | `none`                                  | String       | Get tên của điểm kết thúc                                                              |
| **getStartIcon**             | `none`                                  |MFBitmapDescriptor| Get icon của điểm bắt đầu                                                          |
| **setStartIcon**             | MFBitmapDescriptor                      | `none`       | Set icon của điểm bắt đầu                                                              |
| **getEndIcon**               | `none`                                  |MFBitmapDescriptor| Get icon của điểm kết thúc                                                         |
| **setEndIcon**               | MFBitmapDescriptor                      | `none`       | Set icon của điểm kết thúc                                                             |
| **setStartIconAnchor**       | float, float                            | `none`       | Set anchor cho icon của điểm bắt đầu                                                   |
| **setEndIconAnchor**         | float, float                            | `none`       | Set anchor cho icon của điểm kết thúc                                                  |
| **getStartIconAnchorU**      | `none`                                  | float        | Get anchor icon của điểm bắt đầu theo chiều x                                          |
| **getStartIconAnchorV**      | `none`                                  | float        | Get anchor icon của điểm bắt đầu theo chiều y                                          |
| **getEndIconAnchorU**        | `none`                                  | float        | Get anchor icon của điểm kết thúc theo chiều x                                         |
| **getEndIconAnchorV**        | `none`                                  | float        | Get anchor icon của điểm kết thúc theo chiều y                                         |


### Directions Renderer Options

`MFDirectionsRendererOptions` class

Đối tượng MFDirectionsRendererOptions dùng để xác định các thuộc tính dùng cho Directions Renderer.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **paths**                    |List<List<[MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)>>| truyền vào một list các list tọa độ **MFLocationCoordinate** để tạo Directions Render.                   |
| **startLocation**            |[MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)| truyền vào một điểm **MFLocationCoordinate** cho điểm bắt đầu.                                                       |
| **endLocation**              |[MFLocationCoordinate](/reference/coordinates?id=MFLocationCoordinate)| truyền vào một điểm **MFLocationCoordinate** cho điểm kết thúc.                                                      |
| **jsonData**                 | String              | truyền vào dữ liệu JSON để vẽ các route cho Directions Renderer                                                            |
| **binaryData**               | String              | truyền vào dữ liệu theo dạng nhị phân để vẽ các route cho Directions Renderer                                              |
| **activedIndex**             | int                 | chỉ định index cho route được active trong Directions Renderer                                                             |
| **activeStrokeColor**        | @ColorInt int       | chỉ định màu sắc của route được active theo kiểu ColorInt. Giá trị màu mặc định là **Color.BLUE**.                         |
| **activeOutlineColor**       | @ColorInt int       | chỉ định màu sắc outline của route được active theo kiểu ColorInt. Giá trị màu mặc định là **Color.TRANSPARENT**.          |
| **inactiveStrokeColor**      | @ColorInt int       | chỉ định màu sắc của route không được active theo kiểu ColorInt. Giá trị màu mặc định là **Color.BLACK**.                  |
| **inactiveOutlineColor**     | @ColorInt int       | chỉ định màu sắc outline của route không được active theo kiểu ColorInt. Giá trị màu mặc định là **Color.TRANSPARENT**.    |
| **titleColor**               | @ColorInt int       | chỉ định màu sắc của tên điểm bắt đầu và điểm kết thúc theo kiểu @ColorInt int. Giá trị mặc định là **"Color.BLACK"**.     |
| **width**                    | float               | chỉ định độ rộng của line theo đơn vị point (dp).                                                                          |
| **startIcon**                | MFBitmapDescriptor  | chỉ định icon của điểm bắt đầu.                                                                                            |
| **endIcon**                  | MFBitmapDescriptor  | chỉ định icon của điểm kết thúc.                                                                                           |
| **startIconAnchor**          | float, float        | chỉ định anchor của icon bắt đầu.                                                                                          |
| **endIconAnchor**            | float, float        | chỉ định anchor của icon kết thúc.                                                                                         |
| **startLabel**               | String              | chỉ định tên của điểm bắt đầu.                                                                                             |
| **endLabel**                 | String              | chỉ định tên của điểm kết thúc.                                                                                            |
