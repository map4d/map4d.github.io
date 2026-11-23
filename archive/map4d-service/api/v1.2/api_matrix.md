#  Matrix (Ma trận khoảng cách)
Cung cấp khoảng cách và thời gian di chuyển cho một ma trận gồm nhiều điểm. 

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/route/matrix?key={key}&origins={origins}&destinations={destinations}&mode={mode}&language={language}&weighting={weighting}&avoid={avoid}&avoidRoads={avoidRoads}&departureTime={departureTime}
```
| Parameter   | Required | Description                                                                                                                                                                                                                                                                                                    |
|-------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key         | **Yes**      | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key.                                                                                                                              |
| origins     | **Yes**      | Danh sách các điểm bắt đầu lat,lng;lat,lng... hoặc là danh sách các địa chỉ hoặc là danh sách các placeId của địa điểm. <br>Gởi request từ 1 địa điểm trở lên. Nếu nhập từ 2 địa điểm trở lên thì phân cách giữa các địa điểm bởi dấu chấm phẩy ";". <br>Ví dụ: 16.024634,108.209217;16.0717664,108.2236151 hoặc 271 Trần Hưng Đạo, phường An Hải Bắc, quận Sơn Trà, TP Đà Nẵng; 31 Lê Văn Duyệt, Đà Nẵng hoặc placeId:5d1ea748fda98a4e5cbb6ab4;placeId:62134224ff455bdb14355563<br>Số điểm đi của "orgins" x Số điểm đến của "destinations" không được vượt quá 120. Độ dài tối đa là 4096 ký tự.                          |
| destinations | **Yes**      | Danh sách các điểm đến lat,lng;lat,lng... hoặc là danh sách các địa chỉ hoặc là danh sách các placeId của địa điểm.<br>Gởi request từ 1 địa điểm trở lên. Nếu nhập từ 2 địa điểm trở lên thì phân cách giữa các địa điểm bởi dấu chấm phẩy ";". <br>Ví dụ: 16.024634,108.209217;16.0717664,108.2236151 hoặc 271 Trần Hưng Đạo, phường An Hải Bắc, quận Sơn Trà, TP Đà Nẵng; 31 Lê Văn Duyệt, Đà Nẵng hoặc placeId:5d1ea748fda98a4e5cbb6ab4;placeId:62134224ff455bdb14355563<br>Số điểm đi của "orgins" x Số điểm đến của "destinations" không được vượt quá 120. Độ dài tối đa là 4096 ký tự.           |
| mode        | **Yes**      | Phương tiện đi qua, hiện tại hỗ trợ 4 loại phương tiện: car (xe hơi), bike (xe đạp), foot (đi bộ), motorcycle (xe máy).<br>Đối với 2 loại phương tiện là bike (xe đạp) và foot (đi bộ) thì thuộc tính tìm theo đường đi "ngắn nhất".                                                                           |
| language    | No       | Ngôn ngữ dùng chỉ đường, hiện tại hỗ trợ Tiếng Việt (vi) hoặc Tiếng Anh (en), mặc định sẽ là Tiếng Việt.                                                                                                                                                                                                       |
| weighting   | No       | Thuộc tính tìm theo đường đi "ngắn nhất" hay đường đi "nhanh nhất" hay đường đi "cân bằng giữa ngắn nhất và nhanh nhất",  mặc định là "nhanh nhất". <br>Chỉ hỗ trợ trên car hoặc motorcycle:<br>weighting = 0 là tìm đường đi ngắn nhất. <br>weighting = 1 là tìm đường đi nhanh nhất. <br>weighting = 2 là tìm đường đi cân bằng giữa ngắn nhất và nhanh nhất. |
| avoid       | No       | Điểm/khu vực bị chặn, tuyến đường sẽ không đi qua đây. <br>Hỗ trợ các định dạng: <br> 1. lat,lng<br> 2. lat,lng,radius - Radius đơn vị là mét từ 0 đến 50 mét <br> 3. lat1,lng1,lat2,lng2<br> 4. lat1,lng1,lat2,lng2,...,latN,lngN. <br>Độ dài tối đa là 256 ký tự                                                               |
| avoidRoads  | No       | Danh sách loại đường cấm đi qua.<br>Hỗ trợ các loại đường: motorway(cao tốc), trunk(xa lộ), ferry(phà), bridge(cầu), tunnel(hầm), toll(trạm thu phí). <br>Ví dụ: `motorway,trunk` hoặc `motorway,trunk,ferry,bridge,tunnel,toll`<br>Nếu truyền param này thì sẽ bỏ qua 2 param `weighting` và `avoid`. <br>Độ dài tối đa là 50 ký tự      
| departureTime  | No       | Thời gian dự kiến khởi hành. <br>Đơn vị tính là giây tính từ 1970-01-01T00:00:00 UTC.                                                                                                                                           |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "destinationAddresses": [
      "string"
    ],
    "originAddresses": [
      "string"
    ],
    "routeRows": [
      {
        "elements": [
          {
            "distance": {
              "text": "string",
              "value": 0
            },
            "duration": {
              "text": "string",
              "value": 0
            },
            "status": "string"
          }
        ]
      }
    ]
  }
}
```
| Parameter            | Notnull | Description                                                                                                                                                                        |
|----------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code                 | **Yes**     | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng.                                                  |
| message              | No      | Nội dung của mã lỗi (nếu có).                                                                                                                                                      |
| result               | No      | Trả về khoảng cách và thời gian di chuyển cho một ma trận gồm nhiều điểm.<br>Thực hiện chia nhỏ số request/ lần tương ứng với các params truyền vào, nếu lỗi thì result là "null". |
| destinationAddresses | **Yes**     | Danh sách các điểm kết thúc tương ứng với các params truyền vào.                                                                                                                   |
| originAddresses      | **Yes**     | Danh sách các điểm bắt đầu tương ứng với các params truyền vào.                                                                                                                    |
| routeRows            | **Yes**     | Danh sách các `elements` liên quan đến khoảng cách và thời gian di chuyển cho một ma trận gồm nhiều điểm.                                                                          |
| distance             | **Yes**     | Khoảng cách về "km" mỗi địa điểm đi qua (khoảng cách dưới dạng `text`, còn `value` là giá trị - đơn vị là mét).                                                                    |
| duration             | **Yes**     | Khoảng cách về "thời gian" mỗi địa điểm đi qua (thời gian dưới dạng `text`, còn `value` là thời gian khi đi trên đoạn đường đó - đơn vị là giây).                                  |
| status               | **Yes**     | Mã trạng thái "ok" nghĩa là thành công.                                                                                                                                            |