# Map4DService API
[![map4d](https://img.shields.io/badge/map4d-service-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-api-blueviolet.svg)](https://map4d.vn/)

Map4D API Service cung cấp nền tảng cho Web, iOS, Android,

Để sử dụng được các API này thì yêu cầu phải có key 

Đăng nhập hoặc đăng kí vào Map4D để tạo và quản lý key [tại đây](https://map.map4d.vn/) ([Xem hướng dẫn tạo key](addkey.md))


## 2. Danh sách API
1. Tìm đường đi giữa các địa điểm [API Get Route](api_route.md)
2. Ma trận khoảng cách [API Get Matrix](api_matrix.md)
3. Tự động đề xuất chuỗi tìm kiếm [API AutoSuggest](api_autosuggest.md)
4. Thông tin chi tiết địa điểm [API Place Detail](api_place_detail.md)
5. Tìm kiếm dạng văn bản [API TextSearch](api_text_search.md)
6. Tìm kiếm lân cận [API NearbySearch](api_nearby_search.md)
7. Tìm kiếm trong hộp chữ nhật [API ViewboxSearch](api_viewbox_search.md)
8. Phân giải địa chỉ phiên bản 2 [API GeoCode V2](api_geocode_v2.md)


## 3. Call API
API có thể được gọi bằng đường dẫn

`
https://api.map4d.vn/sdk/map/{API_FUNCTION}?{PARAMETER1}={VALUE1}&{PARAMETER2}={VALUE2}&{PARAMETER(n)}={VALUE(n)}&key=`[{Your_Api_Key}](https://map.map4d.vn/user/my-access-key/add) 

Trong đó:
- **API_FUNCTION**: là tên hàm muốn gọi
- **PARAMETER1, PARAMETER2, PARAMETER(n)**: là tham số truyền vào tương ứng với API_FUNCTION
- **VALUE1, VALUE2, PARAMETER(n)**: là giá trị truyền vào cho từng tham số tương ứng
- **YOUR_API_KEY**: là key - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán (Đăng nhập và đăng ký key [tại đây](https://map.map4d.vn/user/my-access-key/add))