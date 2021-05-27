# Cài đặt Hiệu Ứng Map4D-SDK

# 5. Các hiệu ứng 3D

## 5.1. Hiệu ứng đổ bóng
Hiệu ứng đổ bóng sẽ vẽ thêm bóng của các đối tượng 3D, vị trí đổ bóng sẽ phụ thuộc vào vị trí của mặt trời. (Ví trị của mặt trời sẽ được dựa trên thời gian mà người dùng set trên map hoặc là lấy tự động)

Để bật/ tắt hiệu ứng đồ bóng

```javascript
setShadowEffect(enabled: boolean): void
```

Mặc định sẽ là tắt.
## 5.2. Hiệu ứng mặt nước
Hiệu ứng mặt nước sẽ tạo các gợn sóng lăn tăn tại những nơi là sông hoặc biển. 

Để bật/ tắt hiệu ứng mặt nước

```javascript
setWaterEffect(enabled: boolean): void
```

Mặc định sẽ là tắt.

## 5.3. Hiệu ứng phản chiếu mặt nước
Chưa hỗ trợ

## 5.4. Hiệu ứng thời gian trong ngày 
Bạn có thể thay đổi thời gian trong ngày của bản đồ thành sáng, trưa, chiều, tối... Tùy thuộc thời gian trong ngày mà vị trí đổ bóng sẽ khác nhau và màu sắc của ánh sáng sẽ khác nhau.

```javascript
enum TimeEffect {
    Live,
    Morning,
    Noon,
    Afternoon,
    Evening,
    None
  }
```

```javascript
  setTimeEffect(timeEffect : TimeEffect): void
  setShadowEffect(enabled: boolean): void
```

- **TimeEffect**:
	- **Live**: thời gian sẽ được lấy tự động
	- **Morning**: thời gian sẽ là buổi sáng 6h sáng
	- **Noon**: thời gian sẽ là buổi trưa 12h trưa
	- **Afternoon**: thời gian sẽ là buổi chiều 4h chiều
	- **Evening**: Thời gian sẽ là buổi tối 6h tối 
	- **None**: Hiệu ứng thời gian không được kích hoạt

## 5.5. Hiệu ứng thời tiết
Map4D SDK cho phép người dùng cài đặt các hiệu ứng theo thời gian thực hoặc thủ công.
```javascript
enum Weather {
    Rainy = 0,
    Snowy,
    Sunny,
    Cloudy,
    Live,
    None
  }

setWeather(weather: Weather): void
getWeather(): Weather
```

Ví dụ cài đặt thời tiết mưa cho bản đồ.

```javascript
map.setWeather(Weather.Rain)
```

- **setWeather**: Cài đặt hiệu ứng thời tiết
  - *Weather.None* : Tắt hiệu ứng thời tiết
  - *Weather.Rainy* : Hiệu ứng thời tiết trời đang mưa
  - *Weather.Snowy* : Hiệu ứng thời tiết tuyết đang rơi
  - *Weather.Sunny* : Hiệu ứng thời tiết trời nắng
  - *Weather.Cloudy* : Hiệu ứng thời tiết trời có mây
  - *Weather.Live*  : Hiệu ứng thời tiết tự động cập nhật theo thời gian thực bằng hệ thống cảm biến đã có ở một số nơi.

> Các hiệu ứng thời tiết chỉ hoạt động khi ở mode 3D


License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
