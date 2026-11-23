# Geocode Result

`MFGeocodeResult` protocol

### Properties

| Name              | Type                                                                                   | Description                           |
|-------------------|----------------------------------------------------------------------------------------|---------------------------------------|
| id                | NSString                                                                               | Mã id của địa điểm.                   |
| location          | [MFLocationComponent](reference/location-component.md)                                 | Ví trí của địa điểm                   |
| name              | NSString                                                                               | Tên của địa điểm.                     |
| address           | NSString                                                                               | Địa chỉ địa điểm.                     |
| types             | NSArray\<NSString\>                                                                    | Loại đối tượng của địa điểm.          |
| addressComponents | NSArray<[MFPlaceAddressComponentResult](reference/place-address-component-result.md)>  | Danh sách các thành phần của địa chỉ. |
