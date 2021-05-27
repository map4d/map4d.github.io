# Map Utils

## I. Projection
Lớp Projection được dùng để chuyển đổi giữa vị trí trên màn hình và tọa độ địa lý trên bề mặt trái đất
và ngược lại

#### 1. Khởi tạo lớp Projection
```javascript
    let projection = new map4d.Projection(map)
```

#### 2. Chuyển đổi từ toạ độ LatLng sang toạ độ Screen

```javascript
    let screenCoordinate = projection.fromLatLngToScreen(new LatLng(10.771783, 106.700763))
```

#### 3. Chuyển đổi từ toạ độ LatLng sang toạ độ Screen với elevation (meter)

```javascript
    let target = new LatLng(10.771783, 106.700763)
    let elevation = 10
    let screenCoordinate = projection.fromLatLngToScreen(target, elevation)
```

#### 4. Chuyển đổi từ toạ độ Screen sang toạ độ LatLng

```javascript
    let latLngCoordinate = projection.fromScreenToLatLng({x: 100, y: 100})
```

#### 5. Chuyển đổi từ toạ độ Screen sang toạ độ LatLng với elevation (meter)

```javascript
    let screenCoordinate = {x: 100, y: 100}
    let elevation = 20
    let latLngCoordinate = projection.fromScreenToLatLng(screenCoordinate, elevation)
```

## II. CoordinateTransformer
Lớp CoordinateTransformer dùng để lưu trữ một danh sách các vị trí tọa độ địa lý. Nó cho phép thực hiện
các phép biến đổi danh sách các vị trí tọa độ địa lý đó như: Xoay, Dịch chuyển và thay đổi tỷ lệ.

#### 1. Khởi tạo đối tượng CoordinateTransformer

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

#### 2. Đặt lại danh sách tọa độ cho đối tượng CoordinateTransformer

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

#### 3. Thêm một danh sách tọa độ vào danh sách tọa độ hiện tại của đối tượng CoordinateTransformer 

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

#### 4. Lấy tâm của đối tượng CoordinateTransformer.

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

#### 5. Xoay đối tượng CoordinateTransformer một góc degree (tính bằng độ). Kết quả trả về một LatLng[]

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

#### 6. Dịch chuyển đối tượng CoordinateTransformer tới một điểm target (LatLng hoặc ILatLng). Kết quả trả về là một LatLng[]

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

#### 7. Thay đổi tỉ lệ đối tượng CoordinateTransformer theo tâm.

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

## III. Measure
Lớp Measure dùng để tính toán khoảng cách, chu vi và diện tích theo danh sách tọa độ địa lý

#### 1. Khởi tạo đối tượng Measure (path không cần khép kín)

```javascript
    constructor(path: ILatLng[])
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [106.700147, 10.773201],
        [106.700763, 10.771783],
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
```

#### 2. Đặt lại danh sách tọa độ cho đối tượng Measure.

```javascript
    setPath(path: ILatLng[]): void
```

Ví dụ

```javascript
    let measure = new map4d.Measure([])
    measure.setPath([
        [106.700147, 10.773201],
        [106.700763, 10.771783],
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
```

#### 3. Thêm danh sách tọa độ cho đối tượng Measure

```javascript
    addPath(path: ILatLng[]): void
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [106.700147, 10.773201],
        [106.700763, 10.771783]
    ])
    measure.addPath([
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
```

#### 4. Tính tổng độ dài của các đoạn thẳng tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét

```javascript
    get length(): number
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [106.700147, 10.773201],
        [106.700763, 10.771783],
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
    let length = measure.length
```

#### 5. Tính chu vi của hình đa giác tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét

```javascript
    get perimeter(): number
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [106.700147, 10.773201],
        [106.700763, 10.771783],
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
    let perimeter = measure.perimeter
```

#### 6. Tính diện tích của hình đa giác tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét vuông

```javascript
    get area(): number
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [106.700147, 10.773201],
        [106.700763, 10.771783],
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
    let area = measure.area
```

#### 7. Lấy tâm của đối tượng Measure. Giá trị trả về là một LatLng

```javascript
    get center(): LatLng
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [106.700147, 10.773201],
        [106.700763, 10.771783],
        [106.701901, 10.772302],
        [106.701493, 10.773267],
    ])
    let center = measure.center
```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
