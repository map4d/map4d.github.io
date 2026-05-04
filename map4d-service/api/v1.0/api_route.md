#  Route (Tìm đường đi nhanh nhất giữa các địa điểm)
## 1. Input (Đầu vào)
```
https://api-sdk-cdtqg.map4d.vn/sdk/route?key={key}&origin={origin}&destination={destination}&points={points}&mode={mode}&language={language}&weighting={weighting}
```
| Parameter  |Required| Description                                                                                                           |
|------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| key        |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map4d-web-cdtqg.map4d.vn/user/access-key/add để tạo key |
| origin     |Yes      | vị trí lat, lng của địa điểm bắt đầu. VD:16.024634,108.209217                                                      |
| destination|Yes      | vị trí lat,lng của địa điểm kết thúc. VD:16.020179,108.211212                                                      |
| points     |No      | danh sách các điểm trung gian muốn đi qua. VD:16.039173,108.210912;16.044597,108.217263                                 |
| mode       |Yes     | phương tiện đi qua, hiện tại hỗ trợ 4 loại phương tiện: car (xe hơi), bike (xe đạp), foot (đi bộ), motorcycle (xe máy) |
| language   |No      | ngôn ngữ dùng chỉ đường, hiện tại hỗ trợ Tiếng Việt (vi) hoặc Tiếng Anh (en), mặc định sẽ là Tiếng Việt              |
| weighting  |No      | thuộc tính tìm theo đường đi ngắn nhất hay đường đi nhanh nhất hay đường đi cần bằng giữa ngắn nhất và nhanh nhất mặc định là nhanh nhất. Nếu weighting=0 là tìm đường đi ngắn nhất, nếu weighting=1 là tìm đường đi nhanh nhất, nếu weighting=2 là cân bằng giữa ngắn nhất và nhanh nhất.|
| avoid   |No      | điểm/khu vực bị chặn, tuyến đường sẽ không đi qua đây. Hỗ trợ các định dạng: 1. lat,lng ; 2. lat,lng,radius - Radius là mét, nhỏ hơn 50 và lớn hơn 0 ; 3   lat1,lng1,lat2,lng2 ; 4 lat1,lng1,lat2,lng2,...,latN,lngN   |
| avoidRoad   |No      | danh sách loại đường cấm đi qua, hỗ trợ: motorway,trunk,ferry,bridge,tunnel. Format: `motorway,trunk` |

## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "status": "string",
    "routes": [
      {
        "legs": [
          {
            "distance": {
              "text": "string",
              "value": 0
            },
            "duration": {
              "text": "string",
              "value": 0
            },
            "endAddress": "string",
            "startAddress": "string",
            "endLocation": {
              "lng": 0,
              "lat": 0
            },
            "startLocation": {
              "lng": 0,
              "lat": 0
            },
            "steps": [
              {
                "distance": {
                  "text": "string",
                  "value": 0
                },
                "duration": {
                  "text": "string",
                  "value": 0
                },
                "endLocation": {
                  "lng": 0,
                  "lat": 0
                },
                "startLocation": {
                  "lng": 0,
                  "lat": 0
                },
                "htmlInstructions": "string",
                "maneuver": "string",
                "polyline": "string",
                "travelMode": "string",
                "streetName": "string"
              }
            ]
          }
        ],
        "overviewPolyline": "string",
        "summary": "string",
        "distance": {
          "text": "string",
          "value": 0
        },
        "duration": {
          "text": "string",
          "value": 0
        },
        "snappedWaypoints": [
          {
            "lng": 0,
            "lat": 0
          }
        ]
      }
    ]
  }
}
```
| Parameter     |Notnull| Description                                                                                           |
|---------------|-------|-------------------------------------------------------------------------------------------------------|
| code          |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi                               |
| message       |No     | nội dung của mã lỗi(nếu có)                                                                        |
| result        |No     | đường đi                                                                                           |
| routes        |No    | danh sách các đường đi                                                                             |
| legs          |Yes    | danh sách đoạn đường để đi qua điểm trung gian `points`  |
| distance      |Yes    | khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)|
| duration      |Yes    | khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây)|
| endAddress    |No    | địa chỉ kết thúc mỗi điểm                                                                          |
| startAddress  |No    | địa chỉ bắt đầu mỗi điểm                                                                           |
| startLocation |Yes    | điểm lat, lng bắt đầu                                                                              |
| steps         |Yes    | Danh sách các bước cần thực hiện                                                |
| htmlInstructions|Yes  | mô tả bước cần thực hiện dạng html                                                                                  |
| maneuver      |Yes    | hướng chuyển đổi                                                                                   |
| polyline      |Yes    | đường đi từng điểm dưới dạng mã hóa polyline làm tròn 5 ký tự                                      |
| travelMode    |Yes    | phương tiện đi                                                                                     |
| streetName    |Yes    | đường đi                                                                                           |
| overviewPolyline|Yes  | thông tin dạng mã hóa các điểm đi, dưới dạng tổng quát polyline                                  |
| summary       |Yes    | tóm lược đường đi                                                                                  |
| snappedWaypoints|Yes  | danh sách các điểm đi qua trên đường, từ địa điểm bắt đầu và điểm đi qua tới điểm kết thúc          |

[![Route](../resources/route.png)](https://map4d.vn)

**Ví dụ**
<iframe src="./examples/v1.0/route.html" height="600px"> </iframe>

## 3. Code sample

Dưới đây là ví dụ về decode polyline
<iframe src="//jsfiddle.net/thanhnghiacntt/9w3uq0ry/embedded/" style="min-width: 960px;" height="540px"></iframe>


