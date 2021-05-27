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
        [10.772431, 106.699380],
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
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
        [10.772431, 106.699380],
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
    ])
```

#### 3. Thêm một danh sách tọa độ vào danh sách tọa độ hiện tại của đối tượng CoordinateTransformer 

```javascript
    addCoordinates(coordinates: ILatLng[]): void
```

Ví dụ

```javascript
    let coordinateTransformer = new map4d.CoordinateTransformer([
        [10.772431, 106.699380],
        [10.773201, 106.700147]
    ])
    coordinateTransformer.addCoordinates([
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
    ])
```

#### 4. Lấy tâm của đối tượng CoordinateTransformer.

```javascript
    get center(): LatLng
```

Ví dụ

```javascript
    let coordinateTransformer = new map4d.CoordinateTransformer([
        [10.772431, 106.699380],
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
    ])
    let center = coordinateTransformer.center
```

#### 5. Xoay đối tượng CoordinateTransformer một góc degree (tính bằng độ). Kết quả trả về một LatLng[]

```javascript
    rotate(degree: number): LatLng[]
```

Ví dụ

```javascript
    let coordinateTransformer = new map4d.CoordinateTransformer([
        [10.772431, 106.699380],
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
    ])
    let degree = 90
    let latLngRotate = coordinateTransformer.rotate(degree)
```

#### 6. Dịch chuyển đối tượng CoordinateTransformer tới một điểm target (LatLng hoặc ILatLng), điểm target này sẽ được đặt thành tâm của đối tượng. Kết quả trả về là một LatLng[]

```javascript
    translate(target: ILatLng): LatLng[]
```

Ví dụ

```javascript
    let coordinateTransformer = new map4d.CoordinateTransformer([
        [10.772431, 106.699380],
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
    ])
    let target = new LatLng(10.6, 106.75)
    let latLngRotated = coordinateTransformer.translate(target)
```

#### 7. Thay đổi tỉ lệ đối tượng CoordinateTransformer theo tâm.

```javascript
    scale(scale: number): LatLng[]
```

Ví dụ

```javascript
    let coordinateTransformer = new map4d.CoordinateTransformer([
        [10.772431, 106.699380],
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
        [10.773599, 106.702835]
    ])
    let scale = 1.5
    let latLngScaled = coordinateTransformer.scale(scale)
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
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
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
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
    ])
```

#### 3. Thêm danh sách tọa độ cho đối tượng Measure

```javascript
    addPath(path: ILatLng[]): void
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [10.773201, 106.700147],
        [10.771783, 106.700763]
    ])
    measure.addPath([
        [10.772302, 106.701901],
        [10.773267, 106.701493],
    ])
```

#### 4. Tính tổng độ dài của các đoạn thẳng tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét

```javascript
    get length(): number
```

Ví dụ

```javascript
    let measure = new map4d.Measure([
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
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
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
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
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
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
        [10.773201, 106.700147],
        [10.771783, 106.700763],
        [10.772302, 106.701901],
        [10.773267, 106.701493],
    ])
    let center = measure.center
```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
