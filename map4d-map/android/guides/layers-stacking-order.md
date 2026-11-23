# Thứ tự hiển thị các lớp trên bản đồ

Trong Map4D, mỗi đối tượng hiển thị trên bản đồ (nền, đường sá, ranh giới, địa điểm, marker, polyline, polygon, circle, …) nằm trong mỗi lớp (layer) khác nhau.  
Mỗi layer được gán một zIndex để xác định thứ tự hiển thị theo trục Z.  
Map4D cung cấp một tập hợp mốc zIndex chuẩn để phân chia không gian hiển thị, giúp nhà phát triển dễ dàng kiểm soát và tránh xung đột khi thêm dữ liệu người dùng

## 1. Các mốc zIndex chuẩn

| Mốc zIndex | Lớp                             | Ghi chú |
|:----------:|---------------------------------|---------|
| Thấp nhất  | Nền bản đồ<br>Đường sá<br>ranh giới | Lớp hiển thị dưới cùng của bàn đồ, người dùng không thể tùy chỉnh zIndex để hiển thị đối tượng bên dưới các lớp này được |
| -1         | Nhãn (tên đường, tên đơn vị hành chính)<br>Raster Overlay<br>Image Overlay | Nhãn dữ liệu và các raster tile hoặc image của người dùng thêm vào. Nhãn sẽ luôn nằm dưới dữ liệu overlay của người dùng.<br>Nếu muốn hiển thị đối tượng tùy chỉnh (ví dụ polyline) bên dưới nhãn thì set zIndex của đối tượng đó < -1 |
| 0          | Bầu trời<br>Đối tượng 3D | Bao gồm đối tượng 3D của Map4D và đối tượng 3D tùy chỉnh được thêm bởi người dùng |
| 1          | Địa điểm | Các lớp địa điểm, bao gồm địa điểm của Map4D và địa điểm tùy chỉnh được thêm bởi người dùng |

## 2. Cách sử dụng zIndex

Bạn có thể tự điều chỉnh zIndex cho các đối tượng tùy chỉnh (marker, polyline, polygon, circle, geojson, directions renderer) để quyết định hiển thị phía trên hay phía dưới các lớp khác.

Ví dụ:
- Muốn marker nằm trên tất cả POI mặc định => đặt zIndex > 1.0.
- Muốn polygon nằm dưới nhãn (label) nhưng trên đường => đặt zIndex < -1.0.
