export as namespace hyperappHtml

import { VNode } from "hyperapp"

{% for name in htmlTags %}
/** Utility function that calls `h` and returns a {{ name }} VNode
 * @param attributes Any valid HTML atributes, events, styles, and meta data
 * @param children   The VNode children
 */
export function {{ tag }}<Props = {}>(
  props: Props,
  ...children: Array<string | VNode<{}>>
): VNode<Props>
export function {{ tag }}(
  ...children: Array<string | VNode<{}>>
): VNode<{}>
{% endfor %}
