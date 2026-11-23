# Distance Matrix

> Tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến.

## Usage

Để sử dụng service Distance Matrix ta sử dụng phương thức sau đây của class [MFDirectionsService](reference/directions-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
|**fetchDistanceMatrix** | [MFDistanceMatrixOptions](/guides/api_matrix?id=mfdistancematrixoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFDistanceMatrix](/guides/api_matrix?id=mfdistancematrix)>|[MFServiceTask](types?id=mfservicetask)| Gọi API Distance Matrix với kết quả trả về là đối tượng **MFDistanceMatrix** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val mfDistanceMatrixOptions = MFDistanceMatrixOptions.Builder()
  .origins(listOf(
    MFLocationComponent(16.024634, 108.209217),
    MFLocationComponent(16.0717664, 108.2236151)
  ))
  .destinations(listOf(
    MFLocationComponent(16.0717664, 108.2236151),
    MFLocationComponent(16.06104, 108.2167)
  ))
  .mode(MFTravelMode.CAR)
  .weighting(MFRoute.Weighting.FASTEST)
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      MFLocationComponent(16.080611, 108.218113),
      MFLocationComponent(16.080499, 108.218482),
      listOf(MFRouteRestriction.MFRouteType.MOTORWAY, MFRouteRestriction.MFRouteType.BRIDGE))
  )
  .build()
val serviceOption = MFServicesOptions.Builder(this).build()
val directionServices = MFDirectionsService(serviceOption)
directionServices.fetchDistanceMatrix(mfDistanceMatrixOptions, object: MFServiceCallback<MFDistanceMatrix>{
  override fun onSuccess(data: MFDistanceMatrix?) {
    data?.let {
      Log.e("Route Row", "Route Rows:  ${it.rows?.contentToString()}")
    }
  }

  override fun onError(code: String, message: String) {
    Log.e("DistanceMatrix", "Error:  $code , message: $message")
  }
})
```
#### ** Java **
```java
MFDistanceMatrixOptions mfDistanceMatrixOptions = new MFDistanceMatrixOptions.Builder()
  .origins(Arrays.asList(
    new MFLocationComponent(16.024634, 108.209217),
    new MFLocationComponent(16.0717664, 108.2236151)
  ))
  .destinations(Arrays.asList(
    new MFLocationComponent(16.0717664, 108.2236151),
    new MFLocationComponent(16.06104, 108.2167)
  ))
  .mode(MFTravelMode.CAR)
  .weighting(MFWeighting.FASTEST)
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      new MFLocationComponent(16.080611, 108.218113),
      new MFLocationComponent(16.080499, 108.218482),
      Arrays.asList(MFRouteRestriction.MFRouteType.MOTORWAY, MFRouteRestriction.MFRouteType.BRIDGE))
  )
  .build();

MFServicesOptions options = new MFServicesOptions.Builder(this).build();
MFDirectionsService directionServices = new MFDirectionsService(options);
directionServices.fetchDistanceMatrix(mfDistanceMatrixOptions, new MFServiceCallback<MFDistanceMatrix>() {
  @Override
  public void onSuccess(@Nullable MFDistanceMatrix data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Distance Matrix Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFDistanceMatrixOptions

Đối tượng `MFDistanceMatrixOptions` dùng để xác định các thuộc tính dùng cho [MFDirectionsService](reference/directions-service?id=mfplacesservice)

Để tạo đối tượng `MFDistanceMatrixOptions` thì ta tạo thông qua class [MFDistanceMatrixOptions.Builder](/guides/api_matrix?id=mfdistancematrixoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val mfDistanceMatrixOptions = MFDistanceMatrixOptions.Builder()
  .origins(listOf(
    MFLocationComponent(16.024634, 108.209217),
    MFLocationComponent(16.0717664, 108.2236151)
  ))
  .destinations(listOf(
    MFLocationComponent(16.0717664, 108.2236151),
    MFLocationComponent(16.06104, 108.2167)
  ))
  .mode(MFTravelMode.CAR)
  .weighting(MFRoute.Weighting.FASTEST)
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      MFLocationComponent(16.080611, 108.218113),
      MFLocationComponent(16.080499, 108.218482),
      listOf(MFRouteRestriction.MFRouteType.MOTORWAY, MFRouteRestriction.MFRouteType.BRIDGE))
  )
  .build()
```
#### ** Java **
```java
MFDistanceMatrixOptions mfDistanceMatrixOptions = new MFDistanceMatrixOptions.Builder()
  .origins(Arrays.asList(
    new MFLocationComponent(16.024634, 108.209217),
    new MFLocationComponent(16.0717664, 108.2236151)
  ))
  .destinations(Arrays.asList(
    new MFLocationComponent(16.0717664, 108.2236151),
    new MFLocationComponent(16.06104, 108.2167)
  ))
  .mode(MFTravelMode.CAR)
  .weighting(MFWeighting.FASTEST)
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      new MFLocationComponent(16.080611, 108.218113),
      new MFLocationComponent(16.080499, 108.218482),
      Arrays.asList(MFRouteRestriction.MFRouteType.MOTORWAY, MFRouteRestriction.MFRouteType.BRIDGE))
  )
  .build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getOrigins**                | `none` | List<[MFLocationComponent](/types?id=mflocationcomponent)>  | Lấy danh sách vị trí các điểm xuất phát                     |
| **getDestinations**           | `none` | List<[MFLocationComponent](/types?id=mflocationcomponent)>  | Lấy danh sách vị trí các điểm kết thúc                      |
| **getMode**                  | `none` |[MFTravelMode](/types?id=mftravelmode)| Lấy mode (loại phương tiện) di chuyển của route     |
| **getLanguage**              | `none`          | String       | Lấy ngôn ngữ chỉ đường của options                                 |
| **getWeighting**             | `none` |[MFWeighting](/types?id=mfweighting)| Lấy giá trị thuộc tính đường đi            |
| **getRestriction**           | `none` |[MFRouteRestriction](/types?id=mfrouterestriction)| Lấy điểm / khu vực / danh sách các loại đường mà tuyến đường không đi qua    |
| **getAvoidRoads**            | `none` |List<[MFRouteRestriction.MFRouteType](/types?id=mfrouterestrictionmfroutetype)>| Lấy danh sách các loại đường cấm đi qua         |

## MFDistanceMatrixOptions.Builder

**Constructor**

Tạo đối tượng `MFDistanceMatrixOptions.Builder`

```
MFDistanceMatrixOptions.Builder()
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **origins** *required*     | List<[MFLocationComponent](/types?id=mflocationcomponent)>  | Builder      | Set danh sách các vị trí xuất phát cho Builder      |
| **destinations** *required*| List<[MFLocationComponent](/types?id=mflocationcomponent)> | Builder | Set danh sách các vị trí kết thúc cho Builder            |
| **mode** *optional* |[MFTravelMode](/types?id=mftravelmode)| Builder | Set loại phương tiện cho Builder. Mặc định là MFTravelMode.CAR|
| **language** *optional* | String | Builder | Set ngôn ngữ chỉ đường cho Builder                                               |
| **weighting** *optional* |[MFWeighting](/types?id=mfweighting)| Builder | Set thuộc tính đường đi cho Builder      |
| **restriction** *optional*  |[MFRouteRestriction](/types?id=mfrouterestriction)| Builder      | Set điểm / khu vực / danh sách các loại đường mà tuyến đường không đi qua cho Builder|
| **build**               | `none` |[MFDistanceMatrixOptions](/guides/api_matrix?id=mfdistancematrixoptions)| Tạo đối tượng MFDistanceMatrixOptions từ Builder|

## MFDistanceMatrix

> Là đối tượng được trả về từ callback khi gọi API Distance Matrix.

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getRows**                  | `none`          | [MFRow](/guides/api_matrix?id=mfrow)[]  | Lấy thông tin các hàng                  |

## MFRow

> Là đối tượng lưu giữ thông tin của từng hàng khi gọi API Distance Matrix.

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getElements**                  | `none`          | [MFElement](/guides/api_matrix?id=mfelement)[]  | Lấy thông tin các phần tử   |

## MFElement

> Là đối tượng lưu giữ thông tin từng phần tử khi gọi API Distance Matrix.

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getDistance**              | `none` | [MFDistanceMatrix.Info](/guides/api_matrix?id=mfdistancematrixinfo) | Lấy thông tin khoảng cách   |
| **getDuration**              | `none` | [MFDistanceMatrix.Info](/guides/api_matrix?id=mfdistancematrixinfo) | Lấy thông tin khoảng thời gian   |
| **getStatus**                | `none`          | String  | Lấy thông tin trạng thái   |

## MFDistanceMatrix.Info

> Thông tin chi tiết của MFElement

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getText**                  | `none`          | String       | Lấy thông tin dưới dạng text                                       |
| **getValue**                 | `none`          | Double       | Lấy thông tin dưới dạng số double                                  |
