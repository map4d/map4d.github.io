# Map Effects

## Hiệu ứng mặt nước

>Hiệu ứng mặt nước sẽ tạo mặt nước với các gợn sóng chuyển động lăn tăn tại những nơi là sông hoặc biển. Hiệu ứng mặt nước chỉ xuất hiện ở chế độ 3D.

Để kích hoạt hiệu ứng mặt nước sử dụng phương thức `IPostMap.setWaterEffectEnabled()`

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setWaterEffectEnabled(false)
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setWaterEffectEnabled(false)
```
<!-- tabs:end -->

Giá trị mặc định của Water Effect sẽ là `true`
