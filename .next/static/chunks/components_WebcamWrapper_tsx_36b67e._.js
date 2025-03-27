(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_WebcamWrapper_tsx_36b67e._.js", {

"[project]/components/WebcamWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WebcamWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$webcam$2f$dist$2f$react$2d$webcam$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-webcam/dist/react-webcam.js [app-client] (ecmascript)");
"use client";
;
;
// Define o valor padrão para o formato de screenshot com uma const assertion.
const defaultScreenshotFormat = "image/jpeg";
// Defina valores padrão para as props que estão faltando.
const defaultProps = {
    disablePictureInPicture: false,
    forceScreenshotSourceSize: false,
    imageSmoothing: true,
    mirrored: false
};
function WebcamWrapper(props) {
    const combinedProps = {
        ...defaultProps,
        ...props,
        screenshotFormat: props.screenshotFormat || defaultScreenshotFormat
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$webcam$2f$dist$2f$react$2d$webcam$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...combinedProps
    }, void 0, false, {
        fileName: "[project]/components/WebcamWrapper.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c = WebcamWrapper;
var _c;
__turbopack_refresh__.register(_c, "WebcamWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_WebcamWrapper_tsx_36b67e._.js.map