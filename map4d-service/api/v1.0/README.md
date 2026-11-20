# IpostMapService API
[![ipostmap](https://img.shields.io/badge/ipostmap-service-orange)](https://ipostmap.vn/)
[![platform](https://img.shields.io/badge/platform-api-blueviolet.svg)](https://ipostmap.vn/)

IPostMap API Service cung cấp nền tảng cho Web, iOS, Android,

Để sử dụng được các API này thì yêu cầu phải có key 

Đăng nhập hoặc đăng kí vào IPostMap để tạo và quản lý key [tại đây](https://map.ipostmap.vn/) ([Xem hướng dẫn tạo key](addkey.md))


## 2. Danh sách API
1. Tìm đường đi giữa các địa điểm [Route](api_route.md)
2. Tự động đề xuất chuỗi tìm kiếm [AutoSuggest](api_autosuggest.md)
3. Tìm kiếm dạng văn bản [TextSearch](api_text_search.md)
4. Tìm kiếm lân cận [NearbySearch](api_nearby_search.md)
5. Tìm kiếm trong hộp chữ nhật [ViewboxSearch](api_viewbox_search.md)

## 3. Call API
API có thể được gọi bằng đường dẫn

`
https://api.ipostmap.vn/sdk/map/{API_FUNCTION}?{PARAMETER1}={VALUE1}&{PARAMETER2}={VALUE2}&{PARAMETER(n)}={VALUE(n)}&key=`[{Your_Api_Key}](https://map.ipostmap.vn/user/access-key/add) 

Trong đó:
- **API_FUNCTION**: là tên hàm muốn gọi
- **PARAMETER1, PARAMETER2, PARAMETER(n)**: là tham số truyền vào tương ứng với API_FUNCTION
- **VALUE1, VALUE2, PARAMETER(n)**: là giá trị truyền vào cho từng tham số tương ứng
- **YOUR_API_KEY**: là key - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán (Đăng nhập và đăng ký key [tại đây](https://map.ipostmap.vn/user/access-key/add))
