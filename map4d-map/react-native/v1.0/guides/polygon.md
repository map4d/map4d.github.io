# Polygon

> Để vẽ các đa giác trên bản đồ thì ta sử dụng đối tượng MFPolygon.  
> Một đối tượng MFPolygon bao gồm một mảng các điểm tọa độ và tạo ra các đoạn thẳng nối các vị trí đó theo một trình tự có thứ tự.


## MFPolygon

### View props

| No. | Name        | Type                                                 | Description                                                                                                                              |
|:---:|-------------|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | coordinates | array[[CoordinateData](#CoordinateData)]             | Mảng các tọa độ để tạo ra polygon                                                                                                        |
|  2  | holes       | array[array[[CoordinateData](#CoordinateData)]]      | Mảng các hole, hole là mảng các tọa độ                                                                                                   |
|  3  | fillColor   | [ColorPropType](https://reactnative.dev/docs/colors) | Màu của polygon                                                                                                                          |
| 4   | strokeColor | [ColorPropType](https://reactnative.dev/docs/colors) | Màu đường bao của polygon                                                                                                                |
| 5   | strokeWidth | number                                               | Độ rộng đường bao của polygon theo đơn vị point                                                                                          |
| 6   | zIndex      | number                                               | Chỉ định thứ tự hiển thị giữa các Polygon với nhau hoặc giữa Polygon với các đối tượng anotation khác trên bản đồ. Giá trị mặc định là 0 |
| 7   | visible     | bool                                                 | Xác định Polygon có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là true.                                                               |
| 8   | userData    | object                                               | Dữ liệu bất kỳ mà người dùng muốn lưu cùng với polygon                                                                                   |
| 9   | onPress     | func                                                 | Callbacks để nhận sự kiện khi người dùng tap vào polygon                                                                                 |

### Methods

| No. | Name           | Parameters                                           | Description                                                                                                                              |
|:---:|----------------|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | setCoordinates | array[[CoordinateData](#CoordinateData)]             | Set mảng các tọa độ mới cho polygon                                                                                                      |
|  2  | setHoles       | array[array[[CoordinateData](#CoordinateData)]]      | Set lại các holes cho polygon                                                                                                            |
|  3  | setFillColor   | [ColorPropType](https://reactnative.dev/docs/colors) | Set màu mới cho polygon                                                                                                                  |
| 4   | setStrokeColor | [ColorPropType](https://reactnative.dev/docs/colors) | Set màu đường bao mới cho polygon                                                                                                        |
| 5   | setStrokeWidth | number                                               | Thay đổi độ rộng đường bao của polygon theo đơn vị point                                                                                 |
| 6   | setZIndex      | number                                               | Chỉ định thứ tự hiển thị giữa các Polygon với nhau hoặc giữa Polygon với các đối tượng anotation khác trên bản đồ. Giá trị mặc định là 0 |
| 7   | setVisible     | bool                                                 | Xác định Polygon có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là true.                                                               |
| 8   | setUserData    | object                                               | Thay đổi dữ liệu lưu cùng với polygon                                                                                                    |

### Object Types

#### CoordinateData

Thông tin tọa độ theo kinh độ, vĩ độ

```js
let coordinate = {latitude: 10.7881732, longitude: 106.7000933}
```


### Example

Thêm một Polygon

```javascript
render() {
  <MFMapView ref={ref => this.map = ref}
    camera={{
      center: {latitude: 10.7881732, longitude: 106.7000933},
      zoom: 16,
      bearing: 0,
      tilt: 0,
    }}
    >
    <MFPolygon
      coordinates={[
        { longitude: 106.70058667659760, latitude: 10.789113181961360 },
        { longitude: 106.70086562633514, latitude: 10.787869556069147 },
        { longitude: 106.70188486576080, latitude: 10.787816859943165 },
        { longitude: 106.70218527317047, latitude: 10.788417595231817 },
        { longitude: 106.70169711112976, latitude: 10.789234382514742 },
        { longitude: 106.70058667659760, latitude: 10.789113181961360 }
      ]}
      holes={[
        [
          { longitude: 106.70073151588440, latitude: 10.788754849604677 },
          { longitude: 106.70108020305634, latitude: 10.788754849604677 },
          { longitude: 106.70108020305634, latitude: 10.789055216462020 },
          { longitude: 106.70073151588440, latitude: 10.789055216462020 },
          { longitude: 106.70073151588440, latitude: 10.788754849604677 }
        ],
        [
          { longitude: 106.70157909393310, latitude: 10.788449212845343 },
          { longitude: 106.70140743255614, latitude: 10.788127766952915 },
          { longitude: 106.70179367065430, latitude: 10.788059262046180 },
          { longitude: 106.70190095901489, latitude: 10.788375438408615 },
          { longitude: 106.70157909393310, latitude: 10.788449212845343 }
        ]
      ]}
      fillColor="#00FF00FF"
      strokeColor="#FF0000FF"
      strokeWidth={5}
      visible={true}
      zIndex={7}
      userData={{data: 1}}
      onPress={(e) => { console.log('Press Polygon:', e.nativeEvent) }}
    />
  </MFMapView>
}
```