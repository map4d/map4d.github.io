# Route Restriction Component

`MFRouteRestriction` type

```js
export type MFRouteRestriction = {
  location?: MFLocationComponent,
  radius?: number,
  viewbox?: MFViewboxComponent,
  path?: MFLocationComponent[],
  types?: MFRouteType[] | string[]
}
```

### Properties

| Name        | Type                                                       | Description                                                                        |
|-------------|------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](components/location-component.md)    |                                                                                    |
| radius      | number                                                     |                                                                                    |
| viewbox     | [MFViewboxComponent](components/viewbox-component.md)      |                                                                                    |
| path        | [MFLocationComponent](components/location-component.md)[]  |                                                                                    |
| types       | [MFRouteType](components/route-type.md)[] \| string[]      |                                                                                    |
