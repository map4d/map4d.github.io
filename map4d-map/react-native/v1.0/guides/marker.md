# Marker

**Marker** dùng để xác định một vị trí đơn lẻ trên bản đồ. 

> Cho phép người dùng đánh dấu lên các vị trí trên bản đồ bằng các biểu tượng chung được cung cấp bởi **Map4dMap React Native** 
hoặc bạn có thể tuỳ chỉnh bằng một hình ảnh khác hoặc tuỳ chỉnh các thuộc tính của **Marker**

### Các thuộc tính của **Marker**:

| Name                   | Type          |Description                                                                                                              |
|------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
| **coordinate**         | {latitude: number,longitude: number} | Vị trí của Marker trên bản đồ. |
| **draggable**          | bool          | Marker có thể kéo để di chuyển vị trí trên bản đồ hay không. Giá trị mặc định là **false** |
| **anchor**             | {x: number,y: number} | Anchor của marker.                                                                  |
| **elevation**          | number        | Độ cao của Marker so với mực nước biển, đơn vị là mét                                                               |
| **rotation**           | number        | Góc quay của Marker trên bản đồ theo đơn vị là Độ                                                              |
| **infoWindowAnchor**   | number        | Anchor info window của Marker                                                                         |
| **title**              | string        | Tiêu đề của Marker, sẽ được hiển thị trong info window                                                                          |
| **snippet**            | string        | Snippet của Marker, sẽ được hiển thị trong info window                                                             |
| **icon**               | {uri: any, width: number, height: number} | tùy chỉnh icon của Marker                                                                          |
| **zIndex**             | number        | Chỉ định thứ tự hiển thị giữa các **Marker** với nhau hoặc giữa **Marker** với các đối tượng khác trên bản đồ. Giá trị mặc định là **0**.  |
| **visible**            | bool          | Xác định **Marker** có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                       |
| **userData**           | object        | Dữ liệu bất kỳ mà người dùng muốn lưu cùng với **Marker**.                                       |
| **onPress**            | func          | Callbacks để nhận sự kiện khi người dùng press Marker trên map.                                                                          |
| **onPressInfoWindow**  | func          | Callbacks để nhận sự kiện khi người dùng press lên info window của Marker.                                                                          |
| **onDragStart**        | func          | Callbacks để nhận sự kiện khi người dùng bắt đầu drag Marker trên map.                                                                          |
| **onDrag**             | func          | Callbacks để nhận sự kiện khi người dùng đang kéo Marker trên map.                                                                          |
| **onDragEnd**          | func          | Callbacks để nhận sự kiện khi người dùng kết thúc việc kéo Marker trên map.                                                                          |

### 1. Thêm một Marker

![Marker](../../resources/add-marker.png)

```javascript
render() {
  return (
    <MFMapView ref={ref => this.map = ref} >
      <MFMarker
        coordinate={{latitude: 10.7881732, longitude: 106.7000933}}
        draggable={true}
        anchor={{x: 0.5, y: 1.0}}
        userData={{name: "Marker 1", arr:[1, 5, 9], obj:{x:10, y:11}}}
        onPress={(event) => {console.log('on press marker:', event.nativeEvent)}}
        zIndex={20}
      />
    </MFMapView>
  );
}
```

### 2. Render Marker với icon tùy chỉnh

Để tùy chỉnh icon cho Marker, bạn có thể dùng thuộc tính icon để thực hiện điều đó

![IconMarker](../../resources/icon-marker.png)

```javascript
render() {
  return (
    <MFMapView ref={ref => this.map = ref} >
      <MFMarker
        icon={{uri: 'https://b.thumbs.redditmedia.com/F82n9T2HtoYxNmxbe1CL0RKxBdeUEw-HVyd-F-Lb91o.png', width: 32, height: 32}}
        coordinate={{latitude: 16.071364, longitude: 108.224487}}
        zIndex={3.0}
        visible={true}
      />
    </MFMapView>
  );
}
```

### Methods

| Name                   | Parameters                           | Description                                                                            |
|------------------------|:------------------------------------:|----------------------------------------------------------------------------------------|
| **setCoordinate**      | {latitude: number,longitude: number} | Set vị trí cho marker.                                                              |
| **setRotation**        | number                               | Set góc quay cho marker theo đơn vị là Độ                                             |
| **setTitle**           | string                               | Set tiêu đề cho marker                                     |
| **setSnippet**         | string                               | Set snippet cho marker                                |
| **setDraggable**       | bool                                 | Set marker có thể drag trên bản đồ hay không                                                      |
| **setZIndex**          | number                               | Set giá trị zIndex cho marker                                                          |
| **setVisible**         | bool                                 | Ẩn/hiện marker trên map                                                                |
| **setInfoWindowAnchor**| {x: number, y: number}               | Set anchor cho info window của marker                                                             |
| **setElevation**       | number                               | Set độ cao của marker so với mực nước biển, đơn vị là mét                             |
| **setUserData**        | object                               | Set dữ liệu bất kỳ cho marker                                                          |

