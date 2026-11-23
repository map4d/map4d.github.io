# Place Service :id=api-places-service

`MFPlacesService` class

### Types :id=api-places-service-types

#### MFSuggestionCallback :id=api-places-service-mfsuggestioncallback

```swift
typealias MFSuggestionCallback = ([MFSuggestionResult]?, MFServiceError?) -> Void
```
#### MFPlaceDetailCallback :id=api-places-service-mfplacedetailcallback

```swift
typealias MFPlaceDetailCallback = (MFPlaceDetailResult?, MFServiceError?) -> Void
```

#### MFTextSearchCallback :id=api-places-service-mftextsearchcallback

```swift
typealias MFTextSearchCallback = ([MFPlaceResult]?, MFServiceError?) -> Void
```

#### MFNearbySearchCallback :id=api-places-service-mfnearbysearchcallback

```swift
typealias MFNearbySearchCallback = ([MFPlaceResult]?, MFServiceError?) -> Void
```

#### MFViewboxSearchCallback :id=api-places-service-mfviewboxsearchcallback

```swift
typealias MFViewboxSearchCallback = ([MFPlaceResult]?, MFServiceError?) -> Void
```

#### MFGeocodeCallback :id=api-places-service-mfgeocodecallback

```swift
typealias MFGeocodeCallback = ([MFGeocodeResult]?, MFServiceError?) -> Void
```

### Public Member Functions :id=api-places-service-public-member-functions

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler

```swift
func fetchSuggestion(with params: MFSuggestionParams,
                     completionHandler: @escaping MFSuggestionCallback) -> MFServiceTask
```

Lấy gợi ý tìm kiếm địa điểm.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-1

```swift
func fetchPlaceDetail(withPlaceId placeId: String,
                      completionHandler: @escaping MFPlaceDetailCallback) -> MFServiceTask
```

Lấy thông tin chi tiết của địa điểm.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-2

```swift
func searchText(with params: MFTextSearchParams,
                completionHandler: @escaping MFTextSearchCallback) -> MFServiceTask
```

Tìm kiếm địa điểm bằng chuỗi ký tự.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-3

```swift
func searchNearby(with params: MFNearbySearchParams,
                  completionHandler: @escaping MFNearbySearchCallback) -> MFServiceTask
```

Tìm kiếm địa điểm lân cận vị trí nào đó.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-4

```swift
func searchViewbox(with params: MFViewboxSearchParams,
                   completionHandler: @escaping MFViewboxSearchCallback) -> MFServiceTask
```

Tìm kiếm địa điểm trong một khu vực xác định.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-5

```swift
func geocoding(with params: MFGeocodeParams,
               completionHandler: @escaping MFGeocodeCallback) -> MFServiceTask
```

Phân giải địa chỉ của địa điểm.
