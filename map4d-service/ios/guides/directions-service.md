# Directions Service :id=api-directions-service

`MFDirectionsService` class

### Types :id=api-directions-service-types

#### MFDirectionsCallback :id=api-directions-service-mfdirectionscallback

```objc
typedef void(^MFDirectionsCallback)(id<MFDirectionsResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFDistanceMatrixCallback :id=api-directions-service-mfdistancematrixcallback

```objc
typedef void(^MFDistanceMatrixCallback)(id<MFDistanceMatrixResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFGraphRouteCallback :id=api-directions-service-mfgraphroutecallback

```objc
typedef void(^MFGraphRouteCallback)(NSArray<id<MFGraphRouteResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFRouteETACallback :id=api-directions-service-mfrouteetacallback

```objc
typedef void(^MFRouteETACallback)(NSArray<id<MFRouteETAResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

### Public Member Functions :id=api-directions-service-public-member-functions

#### fetchDirectionsWithParams: completionHandler: :id=api-directions-service-fetchdirectionswithparams-completionhandler

```objc
- (id<MFServiceTask>)fetchDirectionsWithParams:(MFDirectionsParams *)params
                             completionHandler:(MFDirectionsCallback)completionHandler;
```

Tìm kiếm chỉ đường giữa các địa điểm.

#### fetchRouteETAWithParams: completionHandler: :id=api-directions-service-fetchrouteetawithparams-completionhandler

```objc
- (id<MFServiceTask>)fetchRouteETAWithParams:(MFRouteETAParams *)params
                           completionHandler:(MFRouteETACallback)completionHandler;
```

Tính toán thời gian di chuyển giữa các địa điểm.

#### fetchDistanceMatrixWithParams: completionHandler: :id=api-directions-service-fetchdistancematrixwithparams-completionhandler

```objc
- (id<MFServiceTask>)fetchDistanceMatrixWithParams:(MFDistanceMatrixParams *)params
                                 completionHandler:(MFDistanceMatrixCallback)completionHandler;
```

Tính toán ma trận khoảng cách giữa các địa điểm.

#### fetchGraphRouteWithParams: completionHandler: :id=api-directions-service-fetchgraphroutewithparams-completionhandler

```objc
- (id<MFServiceTask>)fetchGraphRouteWithParams:(MFGraphRouteParams *)params
                             completionHandler:(MFGraphRouteCallback)completionHandler;
```

Tính toán biểu đồ giữa các địa điểm.
