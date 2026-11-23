# Coordinates References

## LatLng

`map4d.LatLng` class

**Constructor**

Tạo đối tượng LatLng vớ latitude and longitude

```js
LatLng(latitude, longitude)
```

- Parameters
  - latitude: number *required*
  - longitude: number *required*

**Properties**

|   Name   | Type   | Description |
|----------|--------|-------------|
| **lat**  | number | latitude    |
| **lng**  | number | longitude   |

**Methods**

| Name          | Parameters        | Return Value | Description                                                             |
|---------------|-------------------|--------------|-------------------------------------------------------------------------|
| **equals**    | [LatLng](#latlng) | boolean      | So sánh bằng với một LatLng khác                                        |
| **toString**  | `none`            | string       |                                                                         |
| **normalize** | `none`            | LatLng       |                                                                         |
| **valid**     | `none`            | boolean      | Kiểm tra xem đối tượng LatLng đó có phải là một tọa độ hợp lệ hay không |

## ILatLng

`map4d.ILatLng` type

```js
type ILatLng = LatLng | {lat: number, lng: number} | [number, number]
```

- Trường hợp **ILatLng** là **array** thì giá trị ở vị trí `0` của mảng sẽ là ***longitude***, còn giá trị ở vị trí `1` sẽ là ***latitude***

## LatLngBounds

`map4d.LatLngBounds` class

**Constructor**

Tạo đối tượng LatLngBounds với 2 tham số [ILatLng](#ilatlng)

```js
LatLngBounds(southwest, northeast)
```
- Parameters
  - southwest: [ILatLng](#ilatlng) *required*
  - northeast: [ILatLng](#ilatlng) *required*

**Methods**

| Name         | Parameters | Return Value | Description                         |
|--------------|------------|--------------|-------------------------------------|
| getCenter    | `none`     | LatLng       | Get vị trí trung tâm của bounds     |
| getNortheast | `none`     | LatLng       | Get vị trí phía đông bắc của bounds |
| getSouthwest | `none`     | LatLng       | Get vị trí phía tây nam của bounds  |
| extend       | ILatLng    | LatLngBounds | Mở rộng vùng tới vị trí mới         |

## ILatLngBounds

`map4d.ILatLngBounds` type

```js
type ILatLngBounds = LatLngBounds | [ILatLng, ILatLng] | [number, number, number, number]
```

## Point

`map4d.Point` class

**Constructor**

Tạo đối tượng Point với 2 giá trị x, y

```js
Point(x, y)
```

- Parameters
  - x: number *required*
  - y: number *required*

**Properties**

|  Name  | Type   | Description |
|--------|--------|-------------|
| **x**  | number | coordinate  |
| **y**  | number | coordinate  |

**Methods**

| Name          | Parameters      | Return Value | Description                     |
|---------------|-----------------|--------------|---------------------------------|
| **equals**    | [Point](#point) | boolean      | So sánh bằng với một Point khác |
| **toString**  | `none`          | string       |                                 |

## IPoint

`map4d.IPoint` type

```js
type IPoint = Point | {x: number, y: number} | [number, number]
```

## Measure

`map4d.Measure` class

**Constructor** 

Tạo Measure với danh sách các tọa độ lat, lng được chỉ định

```js
Measure(path)
```

- Parameters:
  - path: [ILatLng[]](#ilatlng) *required*

**Properties**

|  Name         | Type              | Description                                                                 |
|---------------|-------------------|-----------------------------------------------------------------------------|
| **length**    | number            | Tổng độ dài của các đoạn thẳng tạo ra bởi danh sách tọa độ. Đơn vị: mét     |
| **perimeter** | number            | Chu vi của hình đa giác tạo ra bởi danh sách tọa độ. Đơn vị: mét            |
| **area**      | number            | Diện tích của hình đa giác tạo ra bởi danh sách tọa độ. Đơn vị: mét vuông   |
| **center**    | [LatLng](#latlng) | Tâm của đối tượng Measure                                                   |

**Methods**

| Name          | Parameters            | Return Value | Description                     |
|---------------|-----------------------|--------------|---------------------------------|
| **setPath**   | [ILatLng[]](#ilatlng) | `none`       | Đặt lại danh sách tọa độ        |
| **addPath**   | [ILatLng[]](#ilatlng) | `none`       | Thêm danh sách tọa độ           |

## CoordinateTransformer

`map4d.CoordinateTransformer` class

**Constructor** 

Tạo CoordinateTransformer với danh sách các tọa độ lat, lng được chỉ định

```js
CoordinateTransformer(coordinates)
```

- Parameters:
  - coordinates: [ILatLng[]](#ilatlng) *required*

**Properties**

|  Name         | Type              | Description       |
|---------------|-------------------|-------------------|
| **center**    | [LatLng](#latlng) | Tâm của đối tượng |

**Methods**

| Name          | Parameters                                                        | Return Value        | Description                                                                   |
|---------------|-------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------|
| **setCoordinates** | [ILatLng[]](#ilatlng)                                        | `none`              | Đặt lại danh sách tọa độ                                                      |
| **addCoordinates** | [ILatLng[]](#ilatlng)                                        | `none`              | Thêm danh sách tọa độ                                                         |
| **rotate**         | degree: number<br>anchor?: [ILatLng](#ilatlng)               | [LatLng[]](#latlng) | Xoay đối tượng một góc degree. Kết quả trả về là một [LatLng[]](#latlng)      |
| **translate**      | target: [ILatLng](#ilatlng)<br> anchor?: [ILatLng](#ilatlng) | [LatLng[]](#latng)  | Dịch chuyển đối tượng đến một điểm. Kết quả trả về là một [LatLng[]](#latlng) |
| **scale**          | scale: number<br> anchor?: [ILatLng](#ilatlng)               | [LatLng[]](#latng)  | Thay đổi tỉ lệ đối tượng theo tâm                                             |
