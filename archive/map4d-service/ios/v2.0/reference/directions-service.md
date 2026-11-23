# Directions Service

`MFDirectionsService` class

### Types

#### MFDirectionsCallback

```objc
typedef void(^MFDirectionsCallback)(id<MFDirectionsResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFDistanceMatrixCallback

```objc
typedef void(^MFDistanceMatrixCallback)(id<MFDistanceMatrixResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFGraphRouteCallback

```objc
typedef void(^MFGraphRouteCallback)(NSArray<id<MFGraphRouteResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFRouteETACallback

```objc
typedef void(^MFRouteETACallback)(NSArray<id<MFRouteETAResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

### Public Member Functions

#### fetchDirectionsWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchDirectionsWithParams:(MFDirectionsParams *)params
                             completionHandler:(MFDirectionsCallback)completionHandler;
```

Tìm kiếm chỉ đường giữa các địa điểm.

#### fetchRouteETAWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchRouteETAWithParams:(MFRouteETAParams *)params
                           completionHandler:(MFRouteETACallback)completionHandler;
```

Tính toán thời gian di chuyển giữa các địa điểm.

#### fetchDistanceMatrixWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchDistanceMatrixWithParams:(MFDistanceMatrixParams *)params
                                 completionHandler:(MFDistanceMatrixCallback)completionHandler;
```

Tính toán ma trận khoảng cách giữa các địa điểm.

#### fetchGraphRouteWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchGraphRouteWithParams:(MFGraphRouteParams *)params
                             completionHandler:(MFGraphRouteCallback)completionHandler;
```

Tính toán biểu đồ giữa các địa điểm.