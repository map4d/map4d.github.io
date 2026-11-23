#  Graph (Ma trận khoảng cách graph)
Cung cấp khoảng cách và thời gian di chuyển cho một ma trận gồm nhiều điểm.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
http://api.map4d.vn/sdk/route/graph?key={key}&points={points}&mode={mode}&language={language}&weighting={weighting}&avoid={avoid}&avoidRoads={avoidRoads}
```
| Parameter  | Required | Description                                                                                                                                                                                                                                                                                                    |
|------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key        | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/my-access-key/add để tạo key.                                                                                                                              |
| points     | **Yes**  | Danh sách các điểm muốn đi qua.<br>Gởi request từ 1 địa điểm trở lên. Nếu nhập từ 2 địa điểm trở lên thì phân cách giữa các địa điểm bởi dấu chấm phẩy ";". Ví dụ: 16.039173,108.210912;16.044597,108.217263;16.0825981,108.2219887<br>Số điểm tối đa là 13 điểm.                                              |
| mode       | **Yes**  | Phương tiện đi qua, hiện tại hỗ trợ 4 loại phương tiện: car (xe hơi), bike (xe đạp), foot (đi bộ), motorcycle (xe máy).<br>Đối với 2 loại phương tiện là bike (xe đạp) và foot (đi bộ) thì thuộc tính tìm theo đường đi "ngắn nhất".                                                                           |
| language   | No       | Ngôn ngữ dùng chỉ đường, hiện tại hỗ trợ Tiếng Việt (vi) hoặc Tiếng Anh (en), mặc định sẽ là Tiếng Việt.                                                                                                                                                                                                       |
| weighting  | No       | Thuộc tính tìm theo đường đi "ngắn nhất" hay đường đi "nhanh nhất" hay đường đi "cân bằng giữa ngắn nhất và nhanh nhất",  mặc định là "nhanh nhất". <br>Nếu weighting = 0 là tìm đường đi ngắn nhất, nếu weighting = 1 là tìm đường đi nhanh nhất, nếu weighting = 2 là cân bằng giữa ngắn nhất và nhanh nhất. |
| avoid      | No       | Điểm/khu vực bị chặn, tuyến đường sẽ không đi qua đây. <br>Hỗ trợ các định dạng: <br> 1. lat,lng<br> 2. lat,lng,radius - Radius có đơn vị là mét, nhỏ hơn 50m và lớn hơn 0m <br> 3. lat1,lng1,lat2,lng2<br> 4. lat1,lng1,lat2,lng2,...,latN,lngN                                                               |
| avoidRoads | No       | Danh sách loại đường cấm đi qua.<br>Hỗ trợ các loại đường: motorway,trunk,ferry,bridge,tunnel. Ví dụ: `motorway,trunk` hoặc `motorway,trunk,ferry,bridge,tunnel`<br>Nếu truyền param này thì sẽ bỏ qua 2 param `weighting` và `avoid`.                                                                         |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": [
    {
      "id": "string",
      "distance": {
        "text": "string",
        "value": 0
      },
      "duration": {
        "text": "string",
        "value": 0
      },
      "polyline": "string",
      "status": "string"
    }
  ]
}
```
| Parameter | Notnull | Description                                                                                                                                                                                        |
|-----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code      | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng.                                                                  |
| message   |    No   | Nội dung của mã lỗi (nếu có).                                                                                                                                                                      |
| result    |    No   | Trả về khoảng cách và thời gian di chuyển cho một ma trận graph gồm nhiều điểm tương ứng với các params truyền vào, nếu lỗi thì result là "null".<br>Nếu chỉ nhập 1 địa điểm thì result là "null". |
| id        | **Yes** | Từ điểm -> điểm, Ví dụ: điểm AB hoặc BA hoặc AC hoặc CA …                                                                                                                                          |
| distance  | **Yes** | Khoảng cách về "km" mỗi địa điểm đi qua (khoảng cách dưới dạng `text`, còn `value` là giá trị - đơn vị là mét).                                                                                    |
| duration  | **Yes** | Khoảng cách về "thời gian" mỗi địa điểm đi qua (thời gian dưới dạng `text`, còn `value` là thời gian khi đi trên đoạn đường đó - đơn vị là giây).                                                  |
| polyline  | **Yes** | Đường đi từng điểm dưới dạng mã hóa polyline làm tròn 5 ký tự.                                                                                                                                     |
| status    | **Yes** | Mã trạng thái "ok" nghĩa là thành công.                                                                                                                                                            |                            