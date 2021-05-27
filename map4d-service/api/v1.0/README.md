# Map4dService API
[![map4d](https://img.shields.io/badge/map4d-service-success)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-api-blueviolet.svg)](https://map.map4d.vn/)

Map4D API Service cung cấp nền tảng cho Web, iOS, Android,

Để sử dụng được các API này thì yêu cầu phải có key (Đăng nhập và đăng ký key [tại đây](https://map.map4d.vn/))

## Danh sách API
1. Tìm đường đi giữa các địa điểm [Route](api_route.md)
2. Tự động đề xuất chuỗi tìm kiếm [AutoSuggest](api_autosuggest.md)
3. Tìm kiếm dạng văn bản [TextSearch](api_text_search.md)
4. Tìm kiếm lân cận [NearbySearch](api_nearby_search.md)
5. Tìm kiếm trong hộp chữ nhật [ViewboxSearch](api_viewbox_search.md)

## Call API
API có thể được gọi bằng đường dẫn

`
https://api.map4d.vn/sdk/map/{API_FUNCTION}?{PARAMETER1}={VALUE1}&{PARAMETER2}={VALUE2}&{PARAMETER(n)}={VALUE(n)}&key=`[{Your_Api_Key}](https://map.map4d.vn/user/access-key/add) 

Trong đó:
- **API_FUNCTION**: là tên hàm muốn gọi
- **PARAMETER1, PARAMETER2, PARAMETER(n)**: là tham số truyền vào tương ứng với API_FUNCTION
- **VALUE1, VALUE2, PARAMETER(n)**: là giá trị truyền vào cho từng tham số tương ứng
- **YOUR_API_KEY**: là key - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán (Đăng nhập và đăng ký key [tại đây](https://map.map4d.vn/user/access-key/add))
