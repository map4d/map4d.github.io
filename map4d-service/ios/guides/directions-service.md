# Directions Service :id=api-directions-service

`MFDirectionsService` class

### Types :id=api-directions-service-types

#### MFDirectionsCallback :id=api-directions-service-mfdirectionscallback

```swift
typealias MFDirectionsCallback = (MFDirectionsResult?, MFServiceError?) -> Void
```

#### MFDistanceMatrixCallback :id=api-directions-service-mfdistancematrixcallback

```swift
typealias MFDistanceMatrixCallback = (MFDistanceMatrixResult?, MFServiceError?) -> Void
```

#### MFGraphRouteCallback :id=api-directions-service-mfgraphroutecallback

```swift
typealias MFGraphRouteCallback = ([MFGraphRouteResult]?, MFServiceError?) -> Void
```

#### MFRouteETACallback :id=api-directions-service-mfrouteetacallback

```swift
typealias MFRouteETACallback = ([MFRouteETAResult]?, MFServiceError?) -> Void
```

### Public Member Functions :id=api-directions-service-public-member-functions

#### fetchDirectionsWithParams: completionHandler: :id=api-directions-service-fetchdirectionswithparams-completionhandler

```swift
func fetchDirections(with params: MFDirectionsParams,
                     completionHandler: @escaping MFDirectionsCallback) -> MFServiceTask
```

Tìm kiếm chỉ đường giữa các địa điểm.

#### fetchRouteETAWithParams: completionHandler: :id=api-directions-service-fetchrouteetawithparams-completionhandler

```swift
func fetchRouteETA(with params: MFRouteETAParams,
                   completionHandler: @escaping MFRouteETACallback) -> MFServiceTask
```

Tính toán thời gian di chuyển giữa các địa điểm.

#### fetchDistanceMatrixWithParams: completionHandler: :id=api-directions-service-fetchdistancematrixwithparams-completionhandler

```swift
func fetchDistanceMatrix(with params: MFDistanceMatrixParams,
                         completionHandler: @escaping MFDistanceMatrixCallback) -> MFServiceTask
```

Tính toán ma trận khoảng cách giữa các địa điểm.

#### fetchGraphRouteWithParams: completionHandler: :id=api-directions-service-fetchgraphroutewithparams-completionhandler

```swift
func fetchGraphRoute(with params: MFGraphRouteParams,
                     completionHandler: @escaping MFGraphRouteCallback) -> MFServiceTask
```

Tính toán biểu đồ giữa các địa điểm.
