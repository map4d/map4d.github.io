# Angular Support

Hiện tại, thư viện `Map4D Map Javascript` chỉ hỗ trợ một `Map Component` để quản lý `Lifecycle` cho Map. Khi Map được tạo thành công sự kiện `onMapReady` sẽ được gọi, kèm theo đối số là đối tượng `map` được tạo ra, và `id` của map tương ứng. Chúng ta có thể tương tác với Map thông qua đối tượng `map` như các thư viện Javascript thông thường khác.

Các đối tượng khác như `Marker`, `Polyline`, `Polygon`, `Layer`,… chưa hỗ trợ viết dưới dạng `component`

## Hướng dẫn sử dụng
1. Copy `map4d-map.component.ts` vào dự án của bạn
2. Sử dụng tag `map4d-map` như dưới trong `template` của bạn
```html
<map4d-map 
[options]="__options__" 
id="__id__"
version="__version__"
accessKey="__your_key___"
(onMapReady)="onMapReady($event)"
></map4d-map>
```

3. Trong component của bạn, cần khai báo phương thức `onMapReady` như dưới, để nhận sự kiện sau khi map đã tạo thành công

```Javascript
onMapReady(data: {map: any, id: string}){
    console.log(`map with id = (${data.id}) is ready`)
    console.log(data)
    //https://docs.map4d.vn/map4d-map/web/v2.6/#/guides/marker
    // Tạo đối tượng marker từ MarkerOption    
    let marker = new map4d.Marker({
      position: {lat: 16.068046, lng: 108.192189},
      label: 'Demo marker'
    })
  
    // Thêm marker vào bản đồ
    marker.setMap(data.map)
    console.log(marker)
  }
```

Từ đây bạn có thể tương tác với Map thông qua đối tượng `map` (`data.map`) hoặc lưu đối tượng `map` lại để có thể tương tác ở bất kỳ nơi đâu. 

[More docs here](https://docs.map4d.vn/map4d-map/web/)

## Chú ý
1. `id` của `map4d-map` component cần phải duy nhất, không được trùng `id` với các `map4d-map` component khác, để đảm bảo map hoạt động chính xác.
2. Khi sử dụng với `Typescript` khi sử dụng dạng `let m = new map4d.XXX…` sẽ báo lỗi, thì có thể bỏ qua lỗi bằng cách thêm khai báo `declare var map4d: any` này trước khi tương tác với các thành phần thuộc `map4d`. Các đối tượng khác thì để `type` là `any`.
3. Khi dùng Javascript với `Eslint` bật chế độ `no-undef`, khi sử dụng dạng `let m = new map4d.XXX…` thì sẽ báo lỗi, chúng ta cần tắt chế độ `no-undef` đi, hoặc ghi đầy đủ `let m = new window.map4d.XXX…` để bỏ qua lỗi này.

## [Demo Project](https://github.com/sua8051/map4d-map-angular-support.git)
