# Place
Lớp Place dùng để nhận dạng 1 địa điểm xác định trên bản đồ. Place bao gồm các place có sẵn trên bản đồ.

## 1. Place
```java
public class MFPlace {
  private String id;

  private String name;

  private String address;

  private MFLocationCoordinate location;

  private String iconColor;

  private String iconType;
  }
```

## 2. Enable Place

- Cho phép hoặc ko cho phép hiển thị Place trên bản đồ

```java
public final class IPostMap {
public void setPlacesEnabled(boolean enabled);
public boolean isPlacesEnabled();
}
```
- Ví dụ: 

```java
// enable or disable place
ipostmap.setPlacesEnabled(true) // cho phép vẽ place
ipostmap.setPlacesEnabled(false) // ko hiển thị place

// kiểm tra hiện tại place được cho phép vẽ hoặc ko
boolean isPlaceEnabled = ipostmap.isPlacesEnabled()
```

## 3. Filter Place

- Bộ lọc hiển thị những type của place được vẽ trên map. 

- Lệnh setFilterPlaces cuối cũng sẽ lọc những type ở lệnh cuối đc vẽ.

```java
public final class IPostMap {
   public void setFilterPlaces(List<String> placeTypes);
   public List<String> getFilterPlaces();
}
```
- Ví dụ: 

```java
// bộ lọc hiển thị cho type cafe. 
List<String> list = Arrays.asList("cafe", "bank");
ipostmap.setFilterPlaces(list);

List<String> palcesType = ipostmap.getFilterPlaces() // mảng danh sách các type của place đang được hiển thị
```

Set lại empty list để tắt bộ lọc và hiển thị lại tất cả các place.

## 4. Selected Place

- HighLight place được chợn.

```java
public final class IPostMap {
   setSelectedPlace(id: string): void
   getSelectedPlace(): string
}
```
- Ví dụ: 

```java
ipostmap.setSelectedPlace("your_id") // highlight place với id của place.
String placeId = ipostmap.getSelectedPlace() // get place ID của place đang được chọn.
```

## 5. Các sự kiện trên place

Sự kiện click phát sinh khi người dùng click vào place

```java
ipostmap.setOnPlaceClickListener(new IPostMap.OnPlaceClickListener() {
            @Override
            public void onPlaceClick(MFPlace place) {
                ipostmap.setSelectedPlace(place.getId());
            }
        });
```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
