# Map4D SDK document

Documentation website được tạo bằng [docsify](https://docsify.js.org/)

## Setup

```bash
npm install --global serve
```

## Preview

Tại thư mục gốc của map4d.github.io, chạy lệnh sau:

```bash
serve .
```

### Map4dMap SDK

#### Android

<http://localhost:3000/map4d-map/android/>

#### iOS

<http://localhost:3000/map4d-map/ios/>

#### Web

<http://localhost:3000/map4d-map/web/>

#### Flutter

<http://localhost:3000/map4d-map/flutter/>

#### React Native

<http://localhost:3000/map4d-map/react-native/>


### Map4D Service

#### API

<http://localhost:3000/map4d-service/api/>


### Map4dMapUtils Library

### Flutter

<http://localhost:3000/map4d-map-utils/flutter/>
## Documentation versions

Current documentation lives directly under each product/platform directory. Archived versions live under `archive/<product>/<platform>/<version>/`.

Before replacing current documentation, snapshot it into the archive. Keep shared `resources/` paths stable. Register old version URL prefixes in `archive/redirects.json`; the root `404.html` uses this manifest to forward browser navigation while preserving query strings and Docsify hash routes. GitHub Pages serves this fallback automatically; the local static server must be configured separately to serve the custom 404 page. This fallback does not redirect asset fetches or return HTTP 301.
