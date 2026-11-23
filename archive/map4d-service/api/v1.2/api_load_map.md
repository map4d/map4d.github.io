#  Load map theo version (Bản đồ 2D trên web)
Thông tin về file javascript để init map.

Cho phép nhà phát triển tích hợp Map4D SDK vào ứng dụng web với đầy đủ tính năng điều khiển. 

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/map/js?key={key}&version={version}&callback={callback}&mapId={mapId}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       |  **Yes** | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key. |
| version   |  **Yes** | Phiên bản nội dung "javascript" Map4D. Chỉ hỗ trợ dạng x.y.z hoặc x.y. Ví dụ: 2.1.0                                                                                               |
| callback  |    No    | Gọi lại một function sẽ được thực thi sau khi một function khác đã được thực thi xong. Ví dụ: callback                                                                            |
| mapId     |    No    | `mapId` để lấy style.<br>Nếu không tồn tại hoặc sai thì sẽ lấy mặc định style public của user.<br>Nếu không có thì lấy mặc định.                                                  |
## 2. Output (Đầu ra)
```text
Trả về nội dung tập tin "javascript " gồm các function liên quan đến bản đồ 2D trên web.
```
[Chức năng nội dung tập tin javascript](https://github.com/map4d/map4d-web-sdk)