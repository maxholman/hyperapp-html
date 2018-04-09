import { h } from "hyperapp"

function isVnode(obj) {
  return typeof obj === 'object' &&
    'nodeName' in obj &&
    'attributes' in obj &&
    'key' in obj &&
    'children' in obj && (!obj.children || Array.isArray(obj.children));
}

export function smartVnode(tag, args = []) {
  const [propsOrChild, ...children] = args;
  return typeof propsOrChild === 'object' && !isVnode(propsOrChild) && !Array.isArray(propsOrChild)
    ? h(tag, propsOrChild, children)
    : h(tag, {}, ([propsOrChild]).concat(children));
}

{% for tag in htmlTags %}
export function {{ tag }}() { return smartVnode('{{ tag }}', arguments); }
{% endfor %}
