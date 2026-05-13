# Service Options

## MFServicesOptions

Để tạo đối tượng `MFServicesOptions` thì ta tạo thông qua class [MFServicesOptions.Builder](reference/service-options?id=mfservicesoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val context = this
val serviceOptions = MFServicesOptions.Builder(context).build()
```
#### ** Java **
```java
Context context = this;
MFServicesOptions serviceOptions = MFServicesOptions.Builder(context).build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getAccessKey**             | `none`          | String       | Lấy giá trị access key của                                         |
| **getContext**               | `none`          | String       | Lấy đối tượng context                                              |

## MFServicesOptions.Builder

**Constructor**

Tạo đối tượng `MFServicesOptions.Builder` với đối tượng `Context`

```
MFServicesOptions.Builder(Context context)
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **accessKey** *optional*| String          | Builder      | Set giá trị access key cho Builder                                 |
| **build**               | `none`          |[MFServicesOptions](reference/service-options?id=mfservicesoptions)| Tạo đối tượng MFServicesOptions từ Builder |
