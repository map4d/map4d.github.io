# Service Types

> Các kiểu dữ liệu để giao tiếp với với Services.

## MFServiceTask

> Là một interface dùng để hủy request API

```java
public interface MFServiceTask {
  void abort();
}
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **abort**               | `none`          | `none`       | Hủy quest API sau khi đã được gọi                                  |

## MFServiceCallback

> Là một callback được gọi trả về sau khi request API thành công.

```java
public interface MFServiceCallback<T> {
  void onSuccess(@Nullable T data);
  void onError(String code, String message);
}
```
## MFTravelMode

> Định nghĩa loại phương tiện

```java
public enum MFTravelMode {
  CAR("car"),
  BIKE("bike"),
  FOOT("foot"),
  MOTORCYCLE("motorcycle");
}
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getRawValue**         | `none`          | String       | Chuyển loại phương tiện thành String                               |
| **fromValue**           | String          | MFTravelMode | Chuyển loại phương tiện từ String thành MFTravelMode               |

## MFLocationComponent

> Là kiểu dữ liệu lưu trữ thông tin của địa điểm.

**Constructor**

Tạo đối tượng `MFLocationComponent` với tọa độ latitude và longitude.

```
MFLocationComponent(@NonNull double latitude, @NonNull double longitude)
```

Tạo đối tượng `MFLocationComponent` với tọa độ latitude, longitude và alias.

```
MFLocationComponent(@NonNull double latitude, @NonNull double longitude, @NonNull String alias)
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getLatitude**         | `none`          | double       | Get giá trị latitude của địa điểm                                  |
| **getLongitude**        | `none`          | double       | Get giá trị longitude của địa điểm                                 |
| **getAlias**            | `none`          | String       | Get giá trị alias của địa điểm                                     |

## MFRouteRestriction

> Định nghĩa điểm, khu vực, hoặc loại đường mà tuyến đường không được đi qua.

Định nghĩa đối tượng `MFRouteRestriction` theo 4 kiểu như sau:

1. Một điểm point.
2. Một điểm point và radius để định nghĩa một vùng giới hạn hình tròn. **0 <= radius <= 50**
3. Hai điểm point tương ứng với một viewbox giới hạn.
4. Nhiều điểm point tương ứng với một đa giác giới hạn.

Ngoài ra ta còn thêm được danh sách các loại đường giới hạn [MFRouteType](types?id=mfrouterestrictionmfroutetype) vào mỗi kiểu ở trên.

- Tạo đối tượng `MFRouteRestriction` với vị trí cần giới hạn:

```
static MFRouteRestriction restrictLocation(@NonNull MFLocationComponent point)
```
và có thêm danh sách các loại đường cần giới hạn:
```
static MFRouteRestriction restrictLocation(@NonNull MFLocationComponent point, @Nullable List<MFRouteType> types)
```

- Tạo đối tượng `MFRouteRestriction` với vị trí và bán kính cần giới hạn (vùng giới hạn tròn):

```
static MFRouteRestriction restrictCircleArea(@NonNull MFLocationComponent point, @NonNull Integer radius)
```
và có thêm danh sách các loại đường cần giới hạn:
```
static MFRouteRestriction restrictCircleArea(@NonNull MFLocationComponent point, @NonNull Integer radius, @Nullable List<MFRouteType> types)
```

- Tạo đối tượng `MFRouteRestriction` với khu vực hình chữ nhật cần giới hạn:

```
static MFRouteRestriction restrictCoordinateBounds(@NonNull MFLocationComponent southWest, @NonNull MFLocationComponent northEast)
```
và có thêm danh sách các loại đường cần giới hạn:
```
static MFRouteRestriction restrictCoordinateBounds(@NonNull MFLocationComponent southWest, @NonNull MFLocationComponent northEast, @Nullable List<MFRouteType> types)
```

- Tạo đối tượng `MFRouteRestriction` với đa giác cần giới hạn:

```
static MFRouteRestriction restrictPolygonArea(@NonNull List<MFLocationComponent> points)
```
và có thêm danh sách các loại đường cần giới hạn:
```
static MFRouteRestriction restrictPolygonArea(@NonNull List<MFLocationComponent> points, @Nullable List<MFRouteType> types)
```

- Tạo đối tượng `MFRouteRestriction` với danh sách các loại đường cần giới hạn:

```
static MFRouteRestriction restrictRouteTypes(@NonNull List<MFRouteType> types)
```

## MFRouteRestriction.MFRouteType

> Định nghĩa các loại đường cấm đi qua.

```java
public enum MFAvoidRoad {
  MOTORWAY("motorway"),
  TRUNK("trunk"),
  FERRY("ferry"),
  BRIDGE("bridge"),
  TUNNEL("tunnel");
}
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getRawValue**         | `none`          | String       | Chuyển loại đường thành String                                     |
| **fromValue**           | String          | MFTravelMode | Chuyển loại đường từ String thành MFAvoidRoad                      |

## MFRoute

> Định nghĩa đối tượng lưu trữ thông tin tuyến đường đi.

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getSummary**               | `none` | String  | Lấy thông tin tổng quan của tuyến đường                                          |
| **getOverviewCoordinates**   | `none` | MFLocationCoordinate[]| Lấy mảng tọa độ tổng quát của tuyến đường                          |
| **getLegs**                  | `none` |[MFRoute.Leg](/types?id=mfrouteleg)[]| Lấy thông tin đoạn đường                             |
| **getDistance**              | `none` |[MFRoute.Info](/types?id=mfrouteinfo)| Lấy thông tin khoảng cách                            |
| **getDuration**              | `none` |[MFRoute.Info](/types?id=mfrouteinfo)| Lấy thông tin khoảng thời gian                       |
| **getSnappedCoordinates**    | `none` | MFLocationCoordinate[] | Lấy mảng tọa độ các điểm đi qua trên tuyến đường                  |
| **getData**                  | `none` | byte[] | Lấy thông tin tuyến đường ở kiểu dữ liệu binary                                   |

## MFRoute.Leg

> Định nghĩa dữ liệu đoạn đường.

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getDistance**              | `none` |[MFRoute.Info](/types?id=mfrouteinfo)| Lấy thông tin khoảng cách                            |
| **getDuration**              | `none` |[MFRoute.Info](/types?id=mfrouteinfo)| Lấy thông tin khoảng thời gian                       |
| **getStartAddress**          | `none` | String | Lấy địa chỉ bắt đầu của mỗi đoạn                                                  |
| **getEndAddress**            | `none` | String | Lấy địa chỉ kết thúc của mỗi đoạn                                                 |
| **getStartCoordinate**       | `none` | MFLocationCoordinate | Lấy tọa độ điểm bắt đầu của mỗi đoạn                                |
| **getEndCoordinate**         | `none` | MFLocationCoordinate | Lấy tọa độ điểm kết thúc của mỗi đoạn                               |
| **getSteps**                 | `none` | [MFRoute.Step](/types?id=mfroutestep)[]| Lấy mảng các bước đi cần thực hiện trong đoạn đường|

## MFRoute.Info

> Thông tin chi tiết của MFRoute

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getText**                  | `none`          | String       | Lấy thông tin dưới dạng text                                       |
| **getValue**                 | `none`          | Double       | Lấy thông tin dưới dạng số double                                  |

## MFRoute.Step

> Thông tin các bước đi trong mỗi đoạn (Leg).

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getInstruction**           | `none` | String | Lấy thông tin dẫn đường                                                           |
| **getManeuver**              | `none` | [MFManeuver](/types?id=mfmaneuver) | Lấy thông tin chỉ dẫn hướng đi                        |
| **getDistance**              | `none` |[MFRoute.Info](/types?id=mfrouteinfo)| Lấy thông tin khoảng cách                            |
| **getDuration**              | `none` |[MFRoute.Info](/types?id=mfrouteinfo)| Lấy thông tin khoảng thời gian                       |
| **getStartCoordinate**       | `none` | MFLocationCoordinate | Lấy tọa độ điểm bắt đầu của mỗi bước                                |
| **getEndCoordinate**         | `none` | MFLocationCoordinate | Lấy tọa độ điểm kết thúc của mỗi bước                               |
| **getCoordinates**           | `none` | MFLocationCoordinate[] | Lấy mảng tọa độ các điểm của Step                                 |
| **getStreetName**            | `none` | String | Lấy tên đường                                                                     |
| **getMode**                  | `none` | [MFTravelMode](/types?id=mftravelmode)| Lấy loại phương tiện                               |

## MFWeighting

> Định nghĩa các thuộc tính tìm đường đi. Nếu SHORTEST là tìm đường đi ngắn nhất, nếu FASTEST là tìm đường đi nhanh nhất,
nếu BALANCE là cân bằng giữa ngắn nhất và nhanh nhất.

```java
public enum MFRoute.Weighting {
  SHORTEST(0),
  FASTEST(1),
  BALANCE(2);
}
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getRawValue**         | `none`          | int       | Chuyển thuộc tính tìm đường thành kiểu int                            |

## MFManeuver

> Định nghĩa các chỉ dẫn hướng đường đi.

```java
public enum MFManeuver {
  STRAIGHT("straight"),
  KEEP_RIGHT("keep-right"),
  KEEP_LEFT("keep-left"),
  TURN_SHARP_RIGHT("turn-sharp-right"),
  TURN_SHARP_LEFT("turn-sharp-left"),
  TURN_RIGHT("turn-right"),
  TURN_LEFT("turn-left"),
  TURN_SLIGHT_RIGHT("turn-slight-right"),
  TURN_SLIGHT_LEFT("turn-slight-left"),
  ROUND_ABOUT_RIGHT("roundabout-right"),
  ROUND_ABOUT_LEFT("roundabout-left"),
  FINISH("finish"),
  REACHED_VIA("reached-via");
}
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getRawValue**         | `none`          | String       | Chuyển loại chỉ dẫn hướng thành String                             |
| **fromValue**           | String          | MFTravelMode | Chuyển loại chỉ dẫn hướng từ String thành MFAvoidRoad              |

## MFPlace

> Dùng để lưu trữ thông tin địa điểm

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getId**                    | `none`          | String       | Lấy id của địa điểm                                                |
| **getName**                  | `none`          | String       | Lấy tên của địa điểm                                               |
| **getAddress**               | `none`          | String       | Lấy địa chỉ của địa điểm                                           |
| **getLocation**              | `none`          | MFLocationCoordinate | Lấy tọa độ của địa điểm                                    |
| **getTypes**                 | `none`          | String[]     | Lấy mảng các kiểu của địa điểm                                     |
