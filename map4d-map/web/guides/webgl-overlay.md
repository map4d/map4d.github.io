# WebGL Overlay View

Với WebGL Overlay View chúng ta có thể thêm đối tượng vào Map bằng các thư viện đồ họa phổ biến như Three.js. WebGL Overlay View cung cấp quyền truy cập trực tiếp vào cùng một WebGL context
mà Map4D Map SDK sử dụng để render base map. Việc sử dụng chung WebGL context này cung cấp các lợi ích như vẽ chung các đối tượng 3D từ thư viện với các đối tượng 3D có sẵn trên map với các
hiệu ứng chiều sâu và che lấp của hình học không gian, và khả năng đồng bộ các đối tượng 2D/3D với base map. Các đối tượng được render WebGL Overlay View cũng có thể được gắn với tạo độ kinh
độ / vĩ độ, vì vậy chúng sẽ di chuyển khi chúng ta kéo, phóng to, xoay hoặc nghiêng map.

<iframe src="./html/webgl-overlay-threejs-animation/index.html" class="is-fullwidth" height="600px"></iframe>

## Add WebGL Overlay View

Để thêm 1 WebGL Overlay View vào map cần tạo mới 1 đối tượng của lớp [WebGLOverlayView](reference/webgl-overlay?id=webgloverlayview-class) sau đó set `map` cho WebGL Overlay View đó.  
Hàm khởi tạo của lớp [WebGLOverlayView](reference/webgl-overlay?id=webgloverlayview-class) nhận vào một đối tượng [WebGLOverlayViewOptions](reference/building-overlay?id=buildingoverlayoptions-interface)

### Tạo mới WebGL Overlay View

```js
let options = {
  onAdd: (map, gl) => {
      // Thiết lập các đối tượng cần thiết để chuẩn bị render.
  },
  onDraw: (gl) => {
      // Render tất cả các object
  },
  onRemove: () => {
      // Remove tất cả các object
  }
}
let overlay = new map4d.WebGLOverlayView(options)
```

### Add WebGL Overlay View lên Map

Để add WebGL Overlay View lên map, ta set map cho WebGL Overlay View bằng hàm `setMap`

```js
overlay.setMap(map)
```

### Remove WebGL Overlay View

Để xóa WebGL Overlay View khỏi map, ta gọi hàm `setMap` và truyền vào giá trị `null`

```js
overlay.setMap(null)
```

## Lifecycle callback

WebGL Overlay View cung cấp 3 callback được gọi vào các thời điểm khác nhau trong lifecycle của đối tượng. Các lifecycle callback này là nơi chúng ta thiết lập, render và hủy bỏ
bất cứ thứ gì chúng ta muốn hiển thị trong WebGL Overlay View.
- **onAdd(map, gl)** được gọi 1 lần khi overlay được thêm vào Map. Sử dụng callback này để khởi tạo các đối tượng cần thiết hoặc các dữ liệu trung gian trước khi overlay được render.
Callback `onAdd()` có 2 parameters như sau:
    - **map** là đối tượng `Map4D`
    - **gl** là đối tượng **WebGLRenderingContext** được sử dụng bởi base map của `Map4D`
    
- **onDraw(gl)**: được gọi sau callback **onAdd()**. Nó sẽ được gọi liên tục và đồng bộ với renderer của `Map4D` để render đối tượng `WebGLOverlayView` lên trên base map. Parameters duy
nhất của callback **onDraw()** là đối tượng **WebGLRenderingContext** được sử dụng chung với base map của `Map4D`

- **onRemove()** được gọi khi overlay bị xóa khỏi bản đồ với **WebGLOverlayView.setMap(null)**, và đây là nơi chúng ta nên xóa tất cả các đối tượng trung gian.

## Reset trạng thái của GL

WebGL Overlay View dùng chung WebGL rendering context của base map. Vì thế, điều cực kỳ quan trọng là chúng ta phải reset lại trạng thái GL về trạng thái ban đầu của nó khi bạn hoàn
thành việc render các đối tượng. Việc không reset trạng thái GL có khả năng dẫn đến xung đột trạng thái GL, điều này sẽ gây ra lỗi khi render Map hay bất kể đối tượng nào.

Reset lại trạng thái GL thường được xử lý trong hàm `onDraw()` callback. Ví dụ, `Three.js` sẽ cung cấp một chức năng giúp xóa mọi thay đổi đối với trạng thái GL:

```js
onDraw: (gl) => {
  // Chỉ định một đối tượng để render.
  renderer.render(scene, camera);
  renderer.resetState();
}
```

Nếu base map hoặc các đối tượng bị lỗi khi render hoặc không render, rất có khả năng trạng thái GL chưa được reset.

## Biến đổi hệ tọa độ

Vị trí của một đối tượng trên bản đồ được chỉ định bằng cách cung cấp một bộ data kết hợp giữa vĩ độ và kinh độ, độ cao, góc quay cũng như tỉ lệ scale của đối tượng đó. Tuy nhiên, trong
đồ họa 3D vị trí đó được chỉ định bởi world space, camera space hoặc screen space. Để dễ dàng chuyển đổi tọa độ bản đồ thành các space được sử dụng phổ biến này, thì chúng ta có hàm
`calculateProjectMatrixForWebGL(webGLPositionData)` cung cấp bởi đối tượng [Map](/reference/map?id=map-class) với param truyền vào là đối tượng [WebGLPositionData](/reference/webgl-overlay?id=webglpositiondata-interface)
và trả về là một Float32Array.

Khi đối tượng overlay không nằm trong camera của base map `Map4D` thì hàm `calculateProjectMatrixForWebGL(webGLPositionData)` sẽ trả về một Float32Array rỗng.

Ví dụ sau đây sử dụng hàm `calculateProjectMatrixForWebGL()` để tạo projection matrix cho camera trong `Three.js`:

```js
const camera = new THREE.PerspectiveCamera();
let matrix = this.map.calculateProjectMatrixForWebGL({
    position: [106.704497, 10.769589],
    elevation: 20,
    scale: 0.1,
    bearing: 22
  })
camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
```

## Ví dụ

Sau đây là một ví dụ về việc sử dụng `Three.js`, một thư viện WebGL mã nguồn mở phổ biến, để đặt một đối tượng 3D lên map.

```js
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

let scene, renderer, camera, loader;

let webGLOverlay = new map4d.WebGLOverlayView({
  onAdd: (map, gl) => {
    // Set up the Three.js scene.
    camera = new THREE.PerspectiveCamera()
    scene = new THREE.Scene()

    // create two three.js lights to illuminate the model
    let directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    scene.add(directionalLight);

    let directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    scene.add(directionalLight2);

    // Load the 3D model with GLTF Loader from Three.js.
    let loader = new GLTFLoader()
    loader.load(
      'model.gltf',
      gltf => {
        scene.add(gltf.scene)
        map.requestRender()
      }
    )

    renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true
    })
    renderer.autoClear = false
  },
  onDraw: (gl) => {
    if (this.map.getMapType() != map4d.MapType.satellite) {
      // Update camera matrix to ensure the model is georeferenced correctly on the map.
      let projectMatrix = this.map.calculateProjectMatrixForWebGL({
        position: [106.704497, 10.769589],
      })
      let m = new THREE.Matrix4().fromArray(projectMatrix)
      camera.projectionMatrix = m
      
      renderer.render(scene, camera)
      
      // Request a redraw and render the scene.
      // Call this method when no need limit FPS by Map4D.
      webGLOverlay.requestRedraw()
    }
    
    // Always reset the GL state.
    renderer.resetState()
  }
})

// Add the overlay to the map.
webGLOverlay.setMap(this.map)
```

### Samples

Xem thêm các ví dụ sử dụng WebGL Overlay View tại: https://github.com/map4d/js-samples
