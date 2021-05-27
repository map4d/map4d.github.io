# Overview

Map4D API Service cung cấp nền tảng cho Web, iOS, Android,

Để sử dụng được các API này thì yêu cầu phải có key (Đăng nhập và đăng ký key [tại đây](https://map.map4d.vn/))

## Danh sách API
1. Tự động đề xuất chuỗi tìm kiếm [AutoSuggest](api_autosuggest.md)
2. Tìm kiếm dạng văn bản [TextSearch](api_text_search.md)
3. Phân giải địa điểm ra tọa độ địa lý [GeoCode](api_geocode.md)
4. Phân giải địa điểm ra tọa độ địa lý 2 [GeoCode V2](api_geocode_v2.md)

## Call API
API có thể được gọi bằng đường dẫn:

`
https://api-test.map4d.vn/sdk/map/{API_FUNCTION}?{PARAMETER1}={VALUE1}&{PARAMETER2}={VALUE2}&{PARAMETER(n)}={VALUE(n)}&key=`[{Your_Api_Key}](https://map.map4d.vn/user/access-key/add) 

Trong đó:
- **API_FUNCTION**: là tên hàm muốn gọi
- **PARAMETER1, PARAMETER2, PARAMETER(n)**: là tham số truyền vào tương ứng với API_FUNCTION
- **VALUE1, VALUE2, PARAMETER(n)**: là giá trị truyền vào cho từng tham số tương ứng
- **YOUR_API_KEY**: là key - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán (Đăng nhập và đăng ký key [tại đây](https://map.map4d.vn/user/access-key/add))
