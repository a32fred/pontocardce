(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_dcbc66._.js", {

"[project]/components/Navbar/navbar.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// navbar.config.ts
__turbopack_esm__({
    "APP_NAV_LINKS": (()=>APP_NAV_LINKS),
    "NAV_ANIMATION_VARIANTS": (()=>NAV_ANIMATION_VARIANTS)
});
const APP_NAV_LINKS = [
    {
        href: "/",
        label: "Início"
    },
    {
        href: "/controle-de-ponto",
        label: "Controle de Ponto",
        subItems: [
            {
                href: "/relogio-de-ponto",
                label: "Relógio de Ponto"
            },
            {
                href: "/leitor-facial",
                label: "Leitor Facial"
            },
            {
                href: "/sistema-de-ponto",
                label: "Sistema de Ponto"
            }
        ]
    },
    {
        href: "/controle-de-acesso",
        label: "Controle de Acesso",
        subItems: [
            {
                href: "/catracas",
                label: "Catracas"
            },
            {
                href: "/inners-acessos",
                label: "Inners Acessos"
            },
            {
                href: "/cancelas",
                label: "Cancelas"
            }
        ]
    },
    {
        href: "/suporte",
        label: "Suporte"
    },
    {
        href: "/contato",
        label: "Contato"
    },
    {
        href: "/sobre-nos",
        label: "Sobre"
    }
];
const NAV_ANIMATION_VARIANTS = {
    menu: {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    },
    icon: {
        closed: {
            rotate: 0
        },
        open: {
            rotate: 45
        }
    },
    subMenu: {
        closed: {
            height: 0,
            opacity: 0
        },
        open: {
            height: "auto",
            opacity: 1
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Navbar/DesktopNav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// DesktopNav.tsx
__turbopack_esm__({
    "DesktopNav": (()=>DesktopNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$navbar$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Navbar/navbar.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const DesktopNav = ()=>{
    _s();
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden md:flex items-center gap-8 relative",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$navbar$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                onMouseEnter: ()=>setHoveredItem(link.href),
                onMouseLeave: ()=>setHoveredItem(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "text-white hover:text-[#125f0b] transition-colors text-sm font-medium relative py-2",
                        children: [
                            link.label,
                            link.subItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-xs",
                                children: "▾"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/DesktopNav.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar/DesktopNav.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    link.subItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "closed",
                        animate: hoveredItem === link.href ? "open" : "closed",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$navbar$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_ANIMATION_VARIANTS"].menu,
                        className: "absolute top-full left-0 bg-[#32313e]/90 backdrop-blur-sm shadow-lg rounded-lg p-4 min-w-[200px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: link.subItems.map((subLink)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: subLink.href,
                                    className: "text-white hover:text-[#125f0b] transition-colors text-sm whitespace-nowrap",
                                    children: subLink.label
                                }, subLink.href, false, {
                                    fileName: "[project]/components/Navbar/DesktopNav.tsx",
                                    lineNumber: 40,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar/DesktopNav.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar/DesktopNav.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                ]
            }, link.href, true, {
                fileName: "[project]/components/Navbar/DesktopNav.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Navbar/DesktopNav.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_s(DesktopNav, "1uXs46A7iQzBzVzkML5IJ5VwsdI=");
_c = DesktopNav;
var _c;
__turbopack_refresh__.register(_c, "DesktopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Navbar/MenuToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// components/MenuToggle.tsx
__turbopack_esm__({
    "MenuToggle": (()=>MenuToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const Path = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
        fill: "transparent",
        strokeWidth: "3",
        stroke: "currentColor",
        strokeLinecap: "round",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/Navbar/MenuToggle.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
_c = Path;
const MenuToggle = ({ isOpen, toggle, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        className: `${className} outline-none focus:outline-none`,
        "aria-label": isOpen ? 'Fechar menu' : 'Abrir menu',
        "aria-expanded": isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "23",
            height: "23",
            viewBox: "0 0 23 23",
            className: "text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Path, {
                    variants: {
                        closed: {
                            d: 'M 2 2.5 L 20 2.5',
                            stroke: 'currentColor'
                        },
                        open: {
                            d: 'M 3 16.5 L 17 2.5',
                            stroke: 'currentColor'
                        }
                    },
                    animate: isOpen ? 'open' : 'closed',
                    transition: {
                        duration: 0.3
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Navbar/MenuToggle.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Path, {
                    d: "M 2 9.423 L 20 9.423",
                    variants: {
                        closed: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    },
                    animate: isOpen ? 'open' : 'closed',
                    transition: {
                        duration: 0.1
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Navbar/MenuToggle.tsx",
                    lineNumber: 38,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Path, {
                    variants: {
                        closed: {
                            d: 'M 2 16.346 L 20 16.346',
                            stroke: 'currentColor'
                        },
                        open: {
                            d: 'M 3 2.5 L 17 16.346',
                            stroke: 'currentColor'
                        }
                    },
                    animate: isOpen ? 'open' : 'closed',
                    transition: {
                        duration: 0.3
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Navbar/MenuToggle.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar/MenuToggle.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar/MenuToggle.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
_c1 = MenuToggle;
var _c, _c1;
__turbopack_refresh__.register(_c, "Path");
__turbopack_refresh__.register(_c1, "MenuToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_dcbc66._.js.map