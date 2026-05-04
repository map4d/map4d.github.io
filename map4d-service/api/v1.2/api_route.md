#  Route (Dẫn đường)
Tìm đường đi giữa 2 hoặc nhiều điểm đến theo các tùy chọn ngắn nhất, nhanh nhất và cân đối giữa quãng đường và thời gian. Hỗ trợ 4 loại phương tiện: ô tô, xe đạp, đi bộ và xe máy.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api-sdk-cdtqg.map4d.vn/sdk/route?key={key}&origin={origin}&destination={destination}&points={points}&mode={mode}&language={language}&weighting={weighting}&avoid={avoid}&avoidRoads={avoidRoads}&departureTime={departureTime}&optimize={optimize}
```
| Parameter   | Required | Description                                                                                                                                                                                                                                                                                                    |
|-------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key         | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map4d-web-cdtqg.map4d.vn/developer/key/add để tạo key.                                                                                                                              |
| origin      | **Yes**  | Vị trí điểm đầu lat,lng hoặc địa chỉ hoặc placeId:{place_id} và độ dài tối đa là 1024 ký tự. <br>Ví dụ: 16.024634,108.209217 hoặc 271 Trần Hưng Đạo, phường An Hải Bắc, quận Sơn Trà, TP Đà Nẵng hoặc placeId:5d1ea748fda98a4e5cbb6ab4                                                                                                                                                                                                                                            |
| destination | **Yes**  | Vị trí điểm đến lat,lng hoặc địa chỉ hoặc placeId:{place_id} và độ dài tối đa là 1024 ký tự. <br>Ví dụ: 16.020179,108.211212 hoặc 24 Trần Phú, Thạch Thang, Hải Châu, Đà Nẵng hoặc placeId:6093bca359a2b25f54e2c27e                                                                                                                                                                                                                                                |
| points      | No       | Danh sách địa điểm trung gian mà phương tiện muốn đi qua lat1,lng1;lat2,lng2... hoặc là danh sách các địa chỉ hoặc là danh sách các placeId của địa điểm. <br>Tối đa là 25 điểm và độ dài tối đa là 2048 ký tự. <br> Gởi request từ 1 địa điểm trở lên. Nếu nhập từ 2 địa điểm trở lên thì phân cách giữa các địa điểm bởi dấu chấm phẩy ";". <br>Ví dụ: 16.039173,108.210912;16.044597,108.217263 hoặc 217 Trần Hưng Đạo, Đà Nẵng; 24 Trần Phú, Đà Nẵng hoặc placeId:5d1ea748fda98a4e5cbb6ab4;placeId:6093bca359a2b25f54e2c27e                                                         |
| mode        | **Yes**  | Phương tiện đi qua, hiện tại hỗ trợ 4 loại phương tiện: car (xe hơi), bike (xe đạp), foot (đi bộ), motorcycle (xe máy).<br>Đối với 2 loại phương tiện là bike (xe đạp) và foot (đi bộ) thì thuộc tính tìm theo đường đi "ngắn nhất".                                                                           |
| language    | No       | Ngôn ngữ dùng chỉ đường, hiện tại hỗ trợ Tiếng Việt (vi) hoặc Tiếng Anh (en), mặc định sẽ là Tiếng Việt.                                                                                                                                                                                                       |
| weighting   | No       | Thuộc tính tìm theo đường đi "ngắn nhất" hay đường đi "nhanh nhất" hay đường đi "cân bằng giữa ngắn nhất và nhanh nhất",  mặc định là "nhanh nhất". <br>Chỉ hỗ trợ trên car hoặc motorcycle:<br>weighting = 0 là tìm đường đi ngắn nhất. <br>weighting = 1 là tìm đường đi nhanh nhất. <br>weighting = 2 là tìm đường đi cân bằng giữa ngắn nhất và nhanh nhất. |
| avoid       | No       | Điểm/khu vực bị chặn, tuyến đường sẽ không đi qua đây. <br>Hỗ trợ các định dạng: <br> 1. lat,lng<br> 2. lat,lng,radius - Radius đơn vị là mét từ 0 đến 50 mét <br> 3. lat1,lng1,lat2,lng2<br> 4. lat1,lng1,lat2,lng2,...,latN,lngN. <br>Độ dài tối đa là 256 ký tự                                                           |
| avoidRoads  | No       | Danh sách loại đường cấm đi qua.<br>Hỗ trợ các loại đường: motorway(cao tốc), trunk(xa lộ), ferry(phà), bridge(cầu), tunnel(hầm), toll(trạm thu phí). <br>Ví dụ: `motorway,trunk` hoặc `motorway,trunk,ferry,bridge,tunnel,toll`<br>Nếu truyền param này thì sẽ bỏ qua 2 param `weighting` và `avoid`. <br>Độ dài tối đa là 50 ký tự      
| departureTime  | No       | Thời gian dự kiến khởi hành. <br>Đơn vị tính là giây tính từ 1970-01-01T00:00:00 UTC.                                                                                                                                           |
| optimize  | No       | Có sắp xếp thứ tự của các điểm ở giữa `points` mà phương tiện muốn đi qua hay không. <br>True: Hỗ trợ bài toán người giao hàng, trả về đường đi tối ưu đi qua các điểm ở giữa với thứ tự các điểm ở giữa đã được sắp xếp tối ưu nhất. <br>False: Trả về đường đi qua các điểm ở giữa theo thứ tự được cung cấp, đây là lựa chọn mặc định nếu không truyền giá trị.                                                                                                                                      |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
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
                "travelMode": "car",
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
        ],
        "waypointOrder":[
          0,
          1
        ]
      }
    ]
  }
}
```
| Parameter        | Required | Description                                                                                                                                       |
|------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| code             | **Yes**  | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng.                 |
| message          | No       | Nội dung của mã lỗi (nếu có).                                                                                                                     |
| result           | No       | Đường đi tương ứng với các params truyền vào, nếu lỗi thì result là "null".                                                                       |
| routes           | No       | Danh sách các đường đi.                                                                                                                           |
| legs             | **Yes**  | Danh sách đoạn đường để đi qua điểm trung gian `points`.                                                                                          |
| distance         | **Yes**  | Khoảng cách về "km" mỗi địa điểm đi qua (khoảng cách dưới dạng `text`, còn `value` là giá trị - đơn vị là mét).                                   |
| duration         | **Yes**  | Khoảng cách về "thời gian" mỗi địa điểm đi qua (thời gian dưới dạng `text`, còn `value` là thời gian khi đi trên đoạn đường đó - đơn vị là giây). |
| endAddress       | No       | Địa chỉ kết thúc mỗi điểm.                                                                                                                        |
| startAddress     | No       | Địa chỉ bắt đầu mỗi điểm.                                                                                                                         |
| endLocation      | **Yes**  | Vị trí lat, lng kết thúc tương ứng với địa chỉ kết thúc `endAddress`.                                                                             |
| startLocation    | **Yes**  | Vị trí lat, lng bắt đầu tương ứng với địa chỉ kết thúc `startAddress`.                                                                            |
| steps            | **Yes**  | Danh sách các bước dẫn đường.                                                                                                                     |
| htmlInstructions | No       | Mô tả các bước dẫn đường dạng html.                                                                                                               |
| maneuver         | **Yes**  | Hướng chuyển đổi. Ví dụ: rẽ trái, rẽ phải, đi thẳng,...                                                                                           |
| polyline         | **Yes**  | Đường đi từng điểm dưới dạng mã hóa polyline làm tròn 5 ký tự.                                                                                    |
| travelMode       | **Yes**  | Phương tiện đi tương ứng với phương tiện đã truyền request `mode`.                                                                                |
| streetName       | No       | Tên đường đi.                                                                                                                                     |
| overviewPolyline | **Yes**  | Thông tin dạng mã hóa các điểm đi, dưới dạng tổng quát polyline.                                                                                  |
| summary          | No       | Tóm lược đường đi (khoảng cách `distance` và thời gian di chuyển `duration`).                                                                     |
| snappedWaypoints | No       | Danh sách các điểm đi qua trên đường, từ địa điểm bắt đầu và điểm đi qua tới điểm kết thúc.                                                       |
| waypointOrder    | No       | Danh sách thứ tự đi qua các điểm `points` đã được sắp xếp theo thứ tự tối ưu hóa. Số thứ tự được đếm từ 0 theo thứ tự các điểm `points` tại input.|

[![Route](../resources/route.png)](https://map4d.vn)

**Ví dụ**
<iframe src="./examples/v1.0/route.html" height="600px"> </iframe>

## 3. Code sample

Dưới đây là ví dụ về decode polyline
<iframe src="//jsfiddle.net/thanhnghiacntt/9w3uq0ry/embedded/" style="min-width: 960px;" height="540px"></iframe>

