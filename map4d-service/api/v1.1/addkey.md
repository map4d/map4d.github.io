## Cách tạo key trên IPostMap
**B1:** Chọn vào nút chức năng "ĐĂNG NHẬP" ![Key](../resources/btndangnhap.PNG) ngay trên góc phải màn hình chính của bản đồ IPostMap để đăng nhập.

![Key](../resources/steplogin.PNG)

![Key](../resources/dangnhap.PNG)

Nếu chưa có tài khoản, chọn “ĐĂNG KÝ TÀI KHOẢN” để vào chức năng đăng ký tài khoản người dùng hoặc đăng ký tài khoản bằng cách login vào tài khoản Google/Apple ID/Facebook.

![Key](../resources/dangki.PNG)

**B2:** Sau khi đăng nhập thành công vào IPostMap, bấm vào nút "Menu" ![Key](../resources/menu.PNG) ở góc trái màn hình bên cạnh ô “Tìm kiếm IPostMap” tại màn hình chính IPostMap để mở bảng Menu. 

![Key](../resources/btnmenu.PNG)

**B3:** Trên Menu chức năng, chọn "Access key của tôi" tại màn hình IPostMap User để vào chức năng quản lý tất cả các Access key. 

Trường hợp user mới và chưa có key nào được tạo, bảng Access key của tôi sẽ trống.

![Key](../resources/taskbar.PNG)

![Key](../resources/acckey.PNG)

**B4:** Chọn nút lệnh ![Key](../resources/add.PNG) ngay trên góc phải màn hình danh sách Access key của tôi để gọi chức năng tạo mới một key.

![Key](../resources/addkey.PNG)

**Nhập các thông tin key của tôi:**
 - Tên: Là tên key (Tên gợi nhớ vào mục đích sử dụng riêng của user).
 - Ngày kết thúc: Ngày cuối cùng key có thể sử dụng được trên hệ thống IPostMap. 
 
 Trường hợp không chọn ngày, key sẽ hết hạn khi đạt mức request tối đa cho phép.
 - Loại dịch vụ: Là loại dịch vụ cho phép key người dùng sử dụng. 
 
 Có thể chọn một hoặc nhiều loại dịch vụ cùng lúc:

    Địa điểm: Cho phép key có quyền sử dụng các dịch vụ nhóm loại dịch vụ địa điểm.

    Bản đồ: Cho phép key có quyền truy cập các dịch vụ nhóm loại dịch vụ bản đồ.

    Tìm đường: Cho phép key có quyền truy cập nhóm dịch vụ tuyến đường.

- Chế độ: Là môi trường cho phép sử dụng key của người dùng, IPostMap hỗ trợ các môi trường chính: Development, Apple Store/Google Play Store và không xác định.
- Giới hạn ứng dụng: Là các hạn chế ứng dụng: kiểm soát các trang web, địa chỉ Ips, …

    Không giới hạn

    AndroidApps: Hạn chế sử dụng cho các ứng dụng Android của user theo Android package name.

    HttpReferrers: Hạn chế các yêu cầu sử dụng chính đối với các trang web được chỉ định.

    IPs: Chấp nhận yêu cầu từ các địa chỉ IP của máy chủ này. 
    
    Chỉ định một IPv4 hoặc IPv6 hoặc mạng con sử dụng ký hiệu CIDR (ví dụ: 192.168.0.0/22). Ví dụ: 192.168.0.1, 172.16.0.0/12
    
    IosApps: Chấp nhận yêu cầu từ các ứng dụng IOS với một trong các "bundle identifiers".

**B5:** Chọn vào nút chức năng “LƯU” key khi đã hoàn thành các thông tin cần thiết. 

Hệ thống tự động trở về màn hình danh sách Access key của tôi.