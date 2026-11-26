# VRP (Tối ưu hóa lộ trình phương tiện)

Phân bổ các nhiệm vụ giao/nhận hàng cho nhiều phương tiện và xác định thứ tự phục vụ trên từng tuyến. API nhận danh sách phương tiện, nhiệm vụ, mục tiêu tối ưu, ca làm việc và khung thời gian phục vụ.

Phương thức: **POST**

## 1. Input (Đầu vào)

```text
https://api.ipostmap.vn/sdk/route/vrp?key={key}
```

```http
Content-Type: application/json
```

Tên miền trong ví dụ lấy theo file mẫu; thay bằng tên miền API của môi trường triển khai nếu cần. Truyền API key trên query string hoặc header `key`, các tham số còn lại trong JSON body.

**Ví dụ request body:**

```json
{
  "planId": "plan-demo-001",
  "vehicles": [
    {
      "vehicleId": "Xe-01",
      "typeVehicle": "car",
      "startLocation": {
        "lat": 16.024634,
        "lng": 108.209217
      },
      "endLocation": {
        "lat": 16.024634,
        "lng": 108.209217
      },
      "capacity": {
        "weightKg": 500,
        "volume": 3.5
      },
      "shift": {
        "startTime": "2026-11-21T08:00:00+07:00",
        "endTime": "2026-11-21T18:00:00+07:00"
      }
    }
  ],
  "tasks": [
    {
      "taskId": "Don-01",
      "type": "DELIVERY",
      "location": {
        "lat": 16.020179,
        "lng": 108.211212
      },
      "demand": {
        "weightKg": 20,
        "volume": 0.1
      },
      "timeWindows": [
        {
          "startTime": "2026-11-21T09:00:00+07:00",
          "endTime": "2026-11-21T12:00:00+07:00"
        }
      ],
      "serviceDurationSeconds": 300,
      "priority": 1
    },
    {
      "taskId": "Don-02",
      "type": "DELIVERY",
      "location": {
        "lat": 16.039173,
        "lng": 108.210912
      },
      "serviceDurationSeconds": 180,
      "priority": 2
    }
  ],
  "objectives": [
    "MIN_DISTANCE"
  ],
  "useRealTimeTraffic": true,
  "constraints": {
    "avoidRoads": "motorway,toll"
  },
  "language": "vi"
}
```

Các mốc ngày giờ trong ví dụ là dữ liệu minh họa; thay bằng lịch thực tế khi gửi request.

### 1.1. Tham số chung

| Parameter | Required | Description |
|-----------|----------|-------------|
| key | **Yes** | API key dùng để xác thực và tính hạn mức sử dụng dịch vụ dẫn đường. Truy cập https://map.ipostmap.vn/developer/key/add để tạo key. Truyền bằng query `key` hoặc header `key`. |
| planId | **Yes** | Mã định danh kế hoạch, không được `null`, rỗng hoặc chỉ gồm khoảng trắng. Dùng để đối chiếu kế hoạch và kết quả trả về. |
| vehicles | **Yes** | Mảng phương tiện, phải có ít nhất 1 phần tử. Tất cả phương tiện trong một request phải có cùng `typeVehicle`. |
| tasks | **Yes** | Mảng nhiệm vụ, phải có ít nhất 1 phần tử. |
| objectives | No | Mảng mục tiêu tối ưu. Mỗi giá trị phải là `MIN_DISTANCE` (giảm tổng quãng đường), `MIN_DURATION` (giảm thời gian di chuyển) hoặc `MIN_COMPLETION_TIME` (giảm thời gian hoàn thành). Cần truyền đúng chữ hoa. |
| useRealTimeTraffic | No | Cờ yêu cầu sử dụng dữ liệu giao thông thời gian thực, mặc định `true`. **Hiện trường này chưa được chuyển tiếp tới bộ giải**, nên chưa có tác dụng bật/tắt dữ liệu giao thông. |
| constraints | No | Đối tượng tùy chọn tránh khu vực và loại đường; gồm `avoid` và `avoidRoads`. |
| language | No | Ngôn ngữ `vi` hoặc `en`. Mặc định: `vi`. |

### 1.2. Phương tiện: `vehicles[]`

| Parameter | Required | Description |
|-----------|----------|-------------|
| vehicleId | **Yes** | Mã phương tiện. Giá trị phải duy nhất trong danh sách `vehicles`. |
| typeVehicle | No | `car` (ô tô), `bike` (xe đạp), `truck` (xe tải) hoặc `motorcycle` (xe máy). Mặc định: `car`. Cần truyền đúng chữ thường. Một request chỉ được dùng một loại phương tiện. |
| startLocation | **Yes** | Tọa độ xuất phát dạng đối tượng `{"lat":16.024634,"lng":108.209217}`. |
| endLocation | No | Tọa độ kết thúc dạng đối tượng `{lat,lng}`. Để yêu cầu quay về kho, truyền tọa độ giống `startLocation`. Nếu bỏ qua, cách kết thúc tuyến phụ thuộc bộ giải. |
| capacity | No | Sức chứa phương tiện, gồm `weightKg` và/hoặc `volume`. |
| capacity.weightKg | No | Tải trọng theo kg, kiểu số nguyên. |
| capacity.volume | No | Dung tích theo m³, kiểu số. |
| shift | No | Ca làm việc, gồm `startTime` và `endTime`. |
| shift.startTime | **Yes, khi có shift** | Bắt đầu ca, là chuỗi ISO 8601 có múi giờ. Ví dụ: `2026-11-21T08:00:00+07:00`. |
| shift.endTime | **Yes, khi có shift** | Kết thúc ca, cùng định dạng với `startTime`. Nên lớn hơn thời điểm bắt đầu. |

### 1.3. Nhiệm vụ: `tasks[]`

| Parameter | Required | Description |
|-----------|----------|-------------|
| taskId | **Yes** | Mã nhiệm vụ. Giá trị phải duy nhất trong danh sách `tasks`. |
| type | No | `PICKUP` (nhận hàng) hoặc `DELIVERY` (giao hàng). Mặc định: `DELIVERY`. Cần truyền đúng chữ hoa. |
| location | **Yes** | Vị trí thực hiện nhiệm vụ, dạng đối tượng `{lat,lng}`. |
| demand | No | Nhu cầu tải của nhiệm vụ, gồm `weightKg` và/hoặc `volume`. **Hiện chưa được ánh xạ tới bộ giải**; xem lưu ý bên dưới. |
| demand.weightKg | No | Khối lượng hàng theo kg, kiểu số nguyên. |
| demand.volume | No | Thể tích hàng theo m³, kiểu số. |
| timeWindows | No | Mảng khung thời gian cho phép phục vụ. Mỗi phần tử gồm `startTime` và `endTime`. |
| timeWindows[].startTime | **Yes, khi có khung thời gian** | Bắt đầu khung phục vụ, là chuỗi ISO 8601 có múi giờ. |
| timeWindows[].endTime | **Yes, khi có khung thời gian** | Kết thúc khung phục vụ, là chuỗi ISO 8601 có múi giờ. Nên lớn hơn thời điểm bắt đầu. |
| serviceDurationSeconds | No | Thời gian phục vụ tại điểm, đơn vị giây, kiểu số nguyên. Ví dụ: `300` tương ứng 5 phút. |
| priority | No | Mức ưu tiên trong khoảng **1 đến 10**, mặc định: `1`. |

### 1.4. Ràng buộc tuyến đường: `constraints`

| Parameter | Required | Description |
|-----------|----------|-------------|
| avoid | No | Khu vực cần tránh, tối đa 256 ký tự. Đa giác polygon: lat1,lng1,lat2,lng2,...,latN,lngN,lat1,lng1. |
| avoidRoads | No | Loại đường cần tránh, phân cách bằng dấu phẩy: `motorway`, `trunk`, `ferry`, `bridge`, `tunnel`, `toll`. Tối đa 50 ký tự. Ví dụ: `motorway,toll`. Có thể kết hợp với `avoid`. |

**Quy ước và lưu ý theo mã nguồn hiện tại:**

- Tọa độ VRP là đối tượng có hai trường số `lat` và `lng`; không dùng chuỗi `"lat,lng"`. `lat` trong khoảng `[-90,90]`, `lng` trong khoảng `[-180,180]`.
- `shift` và `timeWindows` nhận chuỗi ISO 8601 có múi giờ. API chuyển các mốc này thành Unix timestamp tính bằng giây trước khi gửi tới bộ giải.
- Nên cung cấp đầy đủ mã định danh, vị trí và hai đầu mút của mỗi khung thời gian. Bảng trên mô tả dữ liệu cần thiết cho bài toán hợp lệ; không phải mọi điều kiện đều được kiểm tra riêng ở tầng API.
- `tasks[].demand` hiện chưa được ánh xạ sang trường nhu cầu tải của bộ giải. Vì vậy, chưa nên dựa vào tham số này để bảo đảm ràng buộc sức chứa theo từng nhiệm vụ.
- Mã nguồn đang có mô tả không thống nhất về chiều ưu tiên của `priority`. API kiểm tra khoảng `1..10` và chuyển nguyên giá trị; cần xác nhận quy ước của bộ giải trước khi dùng mức ưu tiên để phân bổ đơn hàng.
- Controller chưa quy định giới hạn số lượng phương tiện hoặc nhiệm vụ như giới hạn 120 cặp điểm của Matrix; khả năng xử lý thực tế phụ thuộc bộ giải và cấu hình triển khai.

## 2. Output (Đầu ra)

Cấu trúc phản hồi thành công dưới đây dùng giá trị minh họa. `polyline` là chuỗi thay thế, không phải hình học tuyến đường thực tế.

```json
{
  "code": "ok",
  "result": {
    "planId": "plan-demo-001",
    "routes": [
      {
        "vehicleId": "Xe-01",
        "stops": [
          {
            "sequence": 1,
            "taskId": "Don-01",
            "type": "DELIVERY",
            "arrivalTime": 0,
            "departureTime": 300
          },
          {
            "sequence": 2,
            "taskId": "Don-02",
            "type": "DELIVERY",
            "arrivalTime": 900,
            "departureTime": 1080
          }
        ],
        "distanceMeters": 8500,
        "durationSeconds": 1500,
        "polyline": "string"
      }
    ],
    "unassignedTaskIds": [],
    "summary": {
      "totalDistanceMeters": 8500,
      "totalDurationSeconds": 1500,
      "vehicleCount": 1,
      "taskCount": 2,
      "assignedTaskCount": 2,
      "unassignedTaskCount": 0
    }
  }
}
```

| Parameter | Required | Description |
|-----------|----------|-------------|
| code | **Yes** | `ok` nghĩa là thành công; giá trị khác là mã lỗi. |
| message | No | Thông báo lỗi. Không xuất hiện nếu giá trị là `null`. |
| result | No | Kế hoạch sau tối ưu khi thành công. Khi lỗi và không có kết quả, trường này được lược bỏ khỏi JSON. |
| result.planId | **Yes** | Mã kế hoạch tương ứng với request. |
| result.routes | **Yes** | Danh sách tuyến đường theo phương tiện. |
| routes[].vehicleId | **Yes** | Mã phương tiện được gán tuyến. |
| routes[].stops | **Yes** | Các điểm phục vụ theo thứ tự của tuyến. |
| stops[].sequence | **Yes** | Số thứ tự điểm dừng do bộ giải trả về. |
| stops[].taskId | **Yes** | Mã nhiệm vụ được phục vụ tại điểm dừng. |
| stops[].type | **Yes** | Loại nhiệm vụ, `PICKUP` hoặc `DELIVERY`. |
| stops[].arrivalTime | **Yes** | Mốc thời gian đến điểm dừng do bộ giải trả về, đơn vị giây. |
| stops[].departureTime | **Yes** | Mốc thời gian rời điểm dừng do bộ giải trả về, đơn vị giây. |
| routes[].distanceMeters | **Yes** | Tổng quãng đường của phương tiện, đơn vị mét. |
| routes[].durationSeconds | **Yes** | Tổng thời gian của tuyến do bộ giải trả về, đơn vị giây. |
| routes[].polyline | **Yes** | Hình học toàn tuyến dưới dạng encoded polyline; có thể là chuỗi rỗng khi không có hình học. |
| result.unassignedTaskIds | **Yes** | Danh sách mã nhiệm vụ chưa thể phân bổ. Mảng rỗng nghĩa là không có nhiệm vụ chưa được gán. |
| result.summary | No | Thống kê tổng hợp; có thể là `null`. |
| summary.totalDistanceMeters | **Yes, khi có summary** | Tổng quãng đường của các tuyến, đơn vị mét. |
| summary.totalDurationSeconds | **Yes, khi có summary** | Tổng thời gian của các tuyến, đơn vị giây. |
| summary.vehicleCount | **Yes, khi có summary** | Số phương tiện được sử dụng. |
| summary.taskCount | **Yes, khi có summary** | Tổng số nhiệm vụ. |
| summary.assignedTaskCount | **Yes, khi có summary** | Số nhiệm vụ đã được gán. |
| summary.unassignedTaskCount | **Yes, khi có summary** | Số nhiệm vụ chưa được gán. |

`code="ok"` chỉ cho biết yêu cầu tối ưu đã được xử lý thành công. Cần kiểm tra thêm `unassignedTaskIds` để biết có nhiệm vụ chưa được phân bổ hay không.

## 3. Code sample

Ví dụ JavaScript gửi một phương tiện và hai nhiệm vụ:

```javascript
async function optimizeVrp(apiKey) {
  const body = {
    planId: "plan-demo-001",
    vehicles: [
      {
        vehicleId: "Xe-01",
        typeVehicle: "car",
        startLocation: { lat: 16.024634, lng: 108.209217 },
        endLocation: { lat: 16.024634, lng: 108.209217 }
      }
    ],
    tasks: [
      {
        taskId: "Don-01",
        type: "DELIVERY",
        location: { lat: 16.020179, lng: 108.211212 },
        serviceDurationSeconds: 300,
        priority: 1
      },
      {
        taskId: "Don-02",
        type: "DELIVERY",
        location: { lat: 16.039173, lng: 108.210912 },
        serviceDurationSeconds: 180,
        priority: 1
      }
    ],
    objectives: ["MIN_DISTANCE"],
    language: "vi"
  };
  const params = new URLSearchParams({ key: apiKey });
  const response = await fetch(
    "https://api.ipostmap.vn/sdk/route/vrp?" + params.toString(),
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );
  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }

  const data = await response.json();
  if (data.code !== "ok") {
    throw new Error(data.message || data.code);
  }

  console.log("Các tuyến:", data.result.routes);
  console.log("Nhiệm vụ chưa được gán:", data.result.unassignedTaskIds);
  return data.result;
}
```

## 4. Mã lỗi thường gặp

| Code | Description |
|------|-------------|
| access_key_not_found | Chưa cung cấp API key. |
| access_key_invalid | API key không hợp lệ. |
| key_not_access_service | API key không được phép sử dụng dịch vụ dẫn đường. |
| vehicles_empty | Danh sách phương tiện rỗng. |
| vehicles_type_miss_type | Có loại phương tiện ngoài `car`, `bike`, `truck`, `motorcycle`. |
| vehicles_type_only_type | Một request có nhiều loại phương tiện khác nhau. |
| tasks_empty | Danh sách nhiệm vụ rỗng. |
| priority_invalid | Có `priority` ngoài khoảng 1 đến 10. |
| vehicle_id_unique | Có mã phương tiện bị trùng. |
| task_id_unique | Có mã nhiệm vụ bị trùng. |
| tasks_type_invalid | Loại nhiệm vụ khác `PICKUP` hoặc `DELIVERY`. |
| objectives_invalid | Mục tiêu tối ưu không nằm trong danh sách được chấp nhận. |
| plan_id_empty | `planId` không có giá trị hợp lệ. |
| lat_empty / lng_empty | Đối tượng tọa độ đã được cung cấp nhưng thiếu vĩ độ hoặc kinh độ. |
| min_lat / max_lat / min_lng / max_lng | Tọa độ nằm ngoài miền giá trị hợp lệ. |
| maximum_length | Một chuỗi tham số vượt độ dài cho phép. |
| incorrect_format | Định dạng `constraints.avoid` hoặc `constraints.avoidRoads` không hợp lệ. |
| vrp_exception | Có lỗi khi chuyển đổi dữ liệu hoặc gọi bộ giải tối ưu. |

Tài liệu liên quan: [Route](api_route.md), [Matrix](api_matrix.md), [ETA](api_eta.md).
