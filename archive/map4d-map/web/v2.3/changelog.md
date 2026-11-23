# Changelog

## Version 2.3.0

Những thay đổi kể từ version 2.2.x

#### Added

- Hỗ trợ cooperative gestures khi tạo map với [MapOptions](/guides/map-options?id=map-options) `cooperativeGestures`

#### Changed

- Hỗ trợ vẽ polygon có holes nằm bên ngoài
- Hỗ trợ set directions từ api bằng `routes` options ([DirectionsRendererOptions](/reference/directions-renderer?id=directionsrenderer-options)) và method `setRoutes` ([Directions Renderer](reference/directions-renderer.md))

<!-- #### Deprecated -->

#### Removed

- Deprecated `directions` options trong [DirectionsRendererOptions](/reference/directions-renderer?id=directionsrenderer-options)
- Deprecated `setDirections` method trong [Directions Renderer](reference/directions-renderer.md)

#### Fixed

- Fixed lỗi request js sdk lại trong một số trường hợp
- Fixed lỗi sự kiện map idle không gọi khi di kéo map di chuyển quá ngắn
- Fixed lỗi không nhận sự kiện đối với data layer ở mức zoom không phải số nguyên
- Fixed lỗi crash nếu tiếp tục gọi hàm sau khi destroy map
- Fixed warning texure unit


<!-- #### Security -->
