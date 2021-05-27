# Coordinate Transformer

Lớp [CoordinateTransformer](/reference/coordinates?id=coordinatetransformer) dùng để lưu trữ một danh sách các vị trí tọa độ địa lý. Nó cho phép thực hiện
các phép biến đổi danh sách các vị trí tọa độ địa lý đó như: Xoay, Dịch chuyển và thay đổi tỷ lệ.

## 1. Khởi tạo đối tượng CoordinateTransformer

```javascript
constructor(coordinates: ILatLng[])
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
```

## 2. Đặt lại danh sách tọa độ cho đối tượng CoordinateTransformer

```javascript
setCoordinates(coordinates: ILatLng[]): void
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([])
coordinateTransformer.setCoordinates([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
```

## 3. Thêm một danh sách tọa độ vào danh sách tọa độ hiện tại của đối tượng CoordinateTransformer 

```javascript
addCoordinates(coordinates: ILatLng[]): void
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([
    [106.699380, 10.772431],
    [106.700147, 10.773201]
])
coordinateTransformer.addCoordinates([
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
```

## 4. Lấy tâm của đối tượng CoordinateTransformer.

```javascript
get center(): LatLng
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
let center = coordinateTransformer.center
```

## 5. Xoay đối tượng CoordinateTransformer một góc degree (tính bằng độ). Kết quả trả về một LatLng[]

Xoay đối tượng CoordinateTransformer một góc so với điểm neo. Nếu anchor = null thì tâm đối tượng chính là điểm neo

```javascript
rotate(degree: number, anchor?: ILatLng): LatLng[]
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
let degree = 90
let latLngRotate = coordinateTransformer.rotate(degree, [106.702835, 10.773599]) // xoay đối tượng quay quanh điểm neo
```

## 6. Dịch chuyển đối tượng CoordinateTransformer tới một điểm target (LatLng hoặc ILatLng). Kết quả trả về là một LatLng[]

Dịch chuyển đối tượng CoordinateTransformer tới 1 điểm so với điểm neo.

Nếu anchor = null thì tâm đối tượng chính là điểm neo.

```javascript
translate(target: ILatLng, anchor?: ILatLng): LatLng[]
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
let target = new LatLng(10.6, 106.75)
let latLngRotated = coordinateTransformer.translate(target,[106.702835, 10.773599])
```

## 7. Thay đổi tỉ lệ đối tượng CoordinateTransformer theo tâm.

Thay đổi tỷ lệ của đối tượng CoordinateTransformer so với điểm neo. Nếu anchor = null thì tâm đối tượng chính là điểm neo

```javascript
scale(scale: number, anchor?: ILatLng): LatLng[]
```

Ví dụ

```javascript
let coordinateTransformer = new map4d.CoordinateTransformer([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
])
let scale = 1.5
let latLngScaled = coordinateTransformer.scale(scale,[106.702835, 10.773599])
```

