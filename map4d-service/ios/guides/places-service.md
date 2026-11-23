# Place Service :id=api-places-service

`MFPlacesService` class

### Types :id=api-places-service-types

#### MFSuggestionCallback :id=api-places-service-mfsuggestioncallback

```objc
typedef void(^MFSuggestionCallback)(NSArray<id<MFSuggestionResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```
#### MFPlaceDetailCallback :id=api-places-service-mfplacedetailcallback

```objc
typedef void(^MFPlaceDetailCallback)(id<MFPlaceDetailResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFTextSearchCallback :id=api-places-service-mftextsearchcallback

```objc
typedef void(^MFTextSearchCallback)(NSArray<id<MFPlaceResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFNearbySearchCallback :id=api-places-service-mfnearbysearchcallback

```objc
typedef void(^MFNearbySearchCallback)(NSArray<id<MFPlaceResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFViewboxSearchCallback :id=api-places-service-mfviewboxsearchcallback

```objc
typedef void(^MFViewboxSearchCallback)(NSArray<id<MFPlaceResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFGeocodeCallback :id=api-places-service-mfgeocodecallback

```objc
typedef void(^MFGeocodeCallback)(NSArray<id<MFGeocodeResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

### Public Member Functions :id=api-places-service-public-member-functions

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler

```objc
- (id<MFServiceTask>)fetchSuggestionWithParams:(MFSuggestionParams *)params
                             completionHandler:(MFSuggestionCallback)completionHandler;
```

Lấy gợi ý tìm kiếm địa điểm.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-1

```objc
- (id<MFServiceTask>)fetchPlaceDetailWithPlaceId:(NSString *)placeId
                               completionHandler:(MFPlaceDetailCallback)completionHandler;
```

Lấy thông tin chi tiết của địa điểm.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-2

```objc
- (id<MFServiceTask>)searchTextWithParams:(MFTextSearchParams *)params
                        completionHandler:(MFTextSearchCallback)completionHandler;
```

Tìm kiếm địa điểm bằng chuỗi ký tự.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-3

```objc
- (id<MFServiceTask>)searchNearbyWithParams:(MFNearbySearchParams *)params
                          completionHandler:(MFNearbySearchCallback)completionHandler;
```

Tìm kiếm địa điểm lân cận vị trí nào đó.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-4

```objc
- (id<MFServiceTask>)searchViewboxWithParams:(MFViewboxSearchParams *)params
                           completionHandler:(MFViewboxSearchCallback)completionHandler;
```

Tìm kiếm địa điểm trong một khu vực xác định.

#### fetchSuggestionWithParams: completionHandler: :id=api-places-service-fetchsuggestionwithparams-completionhandler-5

```objc
- (id<MFServiceTask>)geocodingWithParams:(MFGeocodeParams *)params
                       completionHandler:(MFGeocodeCallback)completionHandler;
```

Phân giải địa chỉ của địa điểm.
