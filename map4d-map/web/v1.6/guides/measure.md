# Measure

Lớp [Measure](/reference/coordinates?id=measure) dùng để tính toán khoảng cách, chu vi và diện tích theo danh sách tọa độ địa lý

## 1. Khởi tạo đối tượng Measure (path không cần khép kín)

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

## 2. Đặt lại danh sách tọa độ cho đối tượng Measure.

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

## 3. Thêm danh sách tọa độ cho đối tượng Measure

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

## 4. Tính tổng độ dài của các đoạn thẳng tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét

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

## 5. Tính chu vi của hình đa giác tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét

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

## 6. Tính diện tích của hình đa giác tạo ra bởi danh sách tọa độ. Giá trị trả về tính bằng mét vuông

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

## 7. Lấy tâm của đối tượng Measure. Giá trị trả về là một LatLng

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