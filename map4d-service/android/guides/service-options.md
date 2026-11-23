# Service Options :id=api-service-options

## MFServicesOptions :id=api-service-options-mfservicesoptions

Để tạo đối tượng `MFServicesOptions` thì ta tạo thông qua class [MFServicesOptions.Builder](/guides/service-options.md?id=api-service-options-mfservicesoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin ** :id=api-service-options-kotlin-
```kotlin
val context = this
val serviceOptions = MFServicesOptions.Builder(context).build()
```
#### ** Java ** :id=api-service-options-java-
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

## MFServicesOptions.Builder :id=api-service-options-mfservicesoptionsbuilder

**Constructor**

Tạo đối tượng `MFServicesOptions.Builder` với đối tượng `Context`

```
MFServicesOptions.Builder(Context context)
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **accessKey** *optional*| String          | Builder      | Set giá trị access key cho Builder                                 |
| **build**               | `none`          |[MFServicesOptions](/guides/service-options.md?id=api-service-options-mfservicesoptions)| Tạo đối tượng MFServicesOptions từ Builder |
