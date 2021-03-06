"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !== undefined;
function clone(template) {
    return exports.isCEPolyfill ?
        template.content.cloneNode(true) :
        document.importNode(template.content, true);
}
exports.clone = clone;
exports.reparentNodes = function (container, start, end, before) {
    if (end === void 0) { end = null; }
    if (before === void 0) { before = null; }
    var node = start;
    while (node !== end) {
        var n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.removeChild(node);
    }
}
exports.removeNode = removeNode;
exports.removeAllNodes = function (container, startNode, endNode) {
    if (endNode === void 0) { endNode = null; }
    var node = startNode;
    while (node !== endNode) {
        var n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
    endNode && container.removeChild(endNode);
};
exports.removeNodes = function (container, startNode, endNode) {
    if (endNode === void 0) { endNode = null; }
    var node = startNode;
    while (node !== endNode) {
        var n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
function removeAttributes(node, toRemoveAttributes) {
    for (var i = 0; i < toRemoveAttributes.length; i++) {
        node.removeAttribute(toRemoveAttributes[i]);
    }
}
exports.removeAttributes = removeAttributes;
