# Changelog

## Version 2.4.4

#### Fixed

- Fixed lỗi MFPOI không cập nhật trong một số trường hợp
- Fixed lỗi đường bị nháy khi nghiêng và di chuyển map ở chế độ vệ tinh
- Fixed lỗi không trả về sự kiện chính xác cho POI và Marker khi Marker có zIndex nhỏ hơn 1
- Fixed lỗi crash khi app id quá dài

#### Changed

- Tối ưu quản lý resources cho nhiều bản đồ
- Tối ưu thread có nhiều bản đồ
- Xoay map theo góc nhỏ hơn khi set giá trị góc xoay

## Version 2.4.3

#### Fixed

- Fixed lỗi xoay marker khi marker icon có tỉ lệ giữa chiều rộng và chiều cao quá lớn
- Fixed lỗi di chuyển camera không đúng khi truyền giá trị float
- Fixed lỗi hiển thị độ trong suốt của icon không chính xác

## Version 2.4.2

#### Fixed

- Fixed lỗi không hiển thị tile overlay nếu không set opacity

## Version 2.4.1

Những thay đổi kể từ version 2.4.0

#### Fixed

- Fixed lỗi build test với thiết bị thật

## Version 2.4.0

Những thay đổi kể từ version 2.3.0

#### Added

- Thêm mới [Image Overlay](guides/image-overlay.md)
- Thêm mới `opacity` property cho [MFURLTileLayer](reference/tile-overlay?id=properties)
- Thêm mới `opacity` property cho [MFGroundOverlay](reference/ground-overlay?id=properties)

<!-- #### Changed -->
<!-- #### Deprecated -->
<!-- #### Removed -->
<!-- #### Fixed -->
<!-- #### Security -->
