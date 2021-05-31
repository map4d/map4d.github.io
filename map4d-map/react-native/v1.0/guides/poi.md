# POI

> Hiện tại trên bản đồ đã có những điểm đánh dấu địa điểm có sẵn (như địa danh công cộng, quán cà phê, nhà hàng, bến xe, ...) và chúng chỉ hiển thị khi bản đồ ở **chế độ 2D**.  
> Khi bạn cần một đối tượng để đánh dấu một địa điểm trên bản đồ tương tự như những điểm có sẵn đó thì bạn có thể dùng **React component** `MFPOI`.  
> Các đối tượng **POI** bạn thêm vào bản đồ có thể hiện thị ở **cả 2 chế độ 2D và 3D**.

## MFPOI

### React view props

| No. | Name       | Type                                                 | Description                                                                                          |
|:---:|------------|------------------------------------------------------|------------------------------------------------------------------------------------------------------|
|  1  | coordinate | [CoordinateData](#CoordinateData)                    | Vị trí ban đầu của POI                                                                               |
|  2  | title      | string                                               | Chỉ định tiêu đề của POI. Tiêu đề sẽ hiển thị thông tin của POI mà bạn muốn hiển thị cho người dùng. |
|  3  | titleColor | [ColorPropType](https://reactnative.dev/docs/colors) | Chỉ định màu tiêu đề                                                                                 |
|  4  | poiType    | string                                               | Chỉ định kiểu của POI, tùy thuộc vào kiểu mà icon của POI sẽ có hình ảnh tương ứng.                  |
|  5  | icon       |                                                      | Tùy chỉnh icon cho POI. **MFPOI** sẽ ưu tiên hiển thị `icon` hơn so với `type`.                      |
|  6  | onPress    | func                                                 | Được gọi khi người dùng tap vào POI                                                                  |

### Object Types

#### CoordinateData

Thông tin tọa độ theo kinh độ, vĩ độ

```js
let coordinate = {latitude: 10.7881732, longitude: 106.7000933}
```

###  Thêm 1 POI

```js
class Map4dScreen extends React.Component {
  constructor(props){
    super(props)
  }

  onPressPOI(event) {
    let e = event.nativeEvent;
    console.log('press POI:', e.title, ',coordinate:', e.coordinate);
  }

  render() {
    return (
      <MFMapView style={styles.container} ref={ref => this.map = ref}
        camera={{
          center: {latitude: 16.075671439786362, longitude: 108.22427988052367},
          zoom: 16,
          bearing: 0,
          tilt: 0,
        }}
      >
        <MFPOI ref={ref => this.poi = ref}
          coordinate={{latitude: 16.075671439786362, longitude: 108.22427988052367}}
          title="Map4D React-Native"
          titleColor="#FFFF00"
          poiType="park"
          onPress={this.onPressPOI}
        />
      </MFMapView>
    )
  }
}
```