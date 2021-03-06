# API Documentation
<a name="ClickSelection"></a>

## ClickSelection
Mixin which maps a click (actually, a mousedown) to a selection.

This simple mixin is useful in list box-like elements, where a click on a
list item implicitly selects it.

This mixin expects the component to provide an `items` property. You can
provide that property yourself, or use
[ContentItemsMixin](ContentItemsMixin.md). This mixin also expects the
component to define a `selectedIndex` property. You can provide that
yourself, or use [SingleSelectionMixin](SingleSelectionMixin.md).

  **Kind**: global class
