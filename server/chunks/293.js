exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 4411:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__CwMWk",
	"textLink": "footer_textLink__O75YX",
	"terminal": "footer_terminal__ql1GR",
	"privacy": "footer_privacy__aZogs",
	"divider": "footer_divider__5ZcXj",
	"shapeFill": "footer_shapeFill__zXGwu",
	"clap": "footer_clap___wyi6"
};


/***/ }),

/***/ 1268:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "header_container__N1yMF",
	"myName": "header_myName__MTc1q",
	"firstName": "header_firstName__J2WCP",
	"lastName": "header_lastName__SJt_Z",
	"holder": "header_holder__S6SWd",
	"iconHolder": "header_iconHolder__Ppu83",
	"text": "header_text__IDNaw",
	"nameBgHolder": "header_nameBgHolder__a0T89",
	"nameBg": "header_nameBg__RxPpx",
	"namesHidden": "header_namesHidden__9s4YX"
};


/***/ }),

/***/ 9750:
/***/ ((module) => {

// Exports
module.exports = {
	"home": "home_home__8efGy",
	"bg": "home_bg__mrC1g",
	"linkBarHolder": "home_linkBarHolder____ohH",
	"body": "home_body__10iCE",
	"bodyFull": "home_bodyFull__N4bhg",
	"buttonHolder": "home_buttonHolder__tPhFe",
	"content": "home_content__yvE8i",
	"buttons": "home_buttons__If6s_",
	"sideToggle": "home_sideToggle__31tYa",
	"sideOpen": "home_sideOpen__2RH2U"
};


/***/ }),

/***/ 5978:
/***/ ((module) => {

// Exports
module.exports = {
	"previewTransition": "homePreviews_previewTransition__lKwyf",
	"previews": "homePreviews_previews__AIJ_4",
	"previewSide": "homePreviews_previewSide__5bEtj",
	"previewSideHidden": "homePreviews_previewSideHidden__xDp9a",
	"container": "homePreviews_container__HoVLC",
	"holder": "homePreviews_holder__4Q_CU",
	"column": "homePreviews_column___3f0M",
	"link": "homePreviews_link__FoMF1",
	"clickable": "homePreviews_clickable___BQAT",
	"backImage": "homePreviews_backImage__blWJY",
	"frontholder": "homePreviews_frontholder__OUBXT",
	"iconHolder": "homePreviews_iconHolder__DoPTV"
};


/***/ }),

/***/ 4219:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "parallax_container__p3eBD",
	"parallax": "parallax_parallax__czqWe",
	"sphere": "parallax_sphere__bwjDN",
	"mask": "parallax_mask__1GQHP"
};


/***/ }),

/***/ 4665:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "icons_icon__w8_mU"
};


/***/ }),

/***/ 7159:
/***/ ((module) => {

// Exports
module.exports = {
	"stickyBar": "linkBar_stickyBar__YF3OO",
	"container": "linkBar_container__i4tha",
	"holder": "linkBar_holder__zOYni",
	"sticking": "linkBar_sticking__y2bJv",
	"start": "linkBar_start__5oKWa",
	"end": "linkBar_end__hM1Gy"
};


/***/ }),

/***/ 3389:
/***/ ((module) => {

// Exports
module.exports = {
	"clickableText": "shared_clickableText__kXEtF"
};


/***/ }),

/***/ 8321:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "themeToggle_container___hndm",
	"inBar": "themeToggle_inBar__zLbnA",
	"sun": "themeToggle_sun__vFc9z",
	"moon": "themeToggle_moon__nj3ai"
};


/***/ }),

/***/ 8293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Auth),
  "aC": () => (/* binding */ useAuth)
});

// UNUSED EXPORTS: AuthContext, Screens

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(3599);
// EXTERNAL MODULE: ./utils/constants.ts
var constants = __webpack_require__(9830);
;// CONCATENATED MODULE: ./utils/network.ts

const __DEV__ = "production" === "development";
const pageUrl = __DEV__ ? "http://localhost:3000" : constants/* URL */.Jx;
const processResponse = async (response)=>{
    let returnData = {};
    if (response.ok) {
        returnData = await response.json();
    } else {
        returnData = {
            error: response.statusText
        };
    }
    returnData.status = response.status;
    return returnData;
};
const internal_apiGet = async (path, uid = "", options = {})=>{
    try {
        const response = await fetch(pageUrl + path, {
            ...options,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: uid
            }
        });
        return await processResponse(response);
    } catch (error) {
        return {
            error: "Connection error",
            status: 500
        };
    }
};
const internal_apiPost = async (path, body, uid = "", options = {})=>{
    try {
        const response = await fetch(pageUrl + path, {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: uid
            }
        });
        return await processResponse(response);
    } catch (error) {
        return {
            error: "Connection error",
            status: 500
        };
    }
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/shared/linkBar.module.css
var linkBar_module = __webpack_require__(7159);
var linkBar_module_default = /*#__PURE__*/__webpack_require__.n(linkBar_module);
// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__(8297);
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);
// EXTERNAL MODULE: ./src/shared/Icons.tsx
var Icons = __webpack_require__(1082);
// EXTERNAL MODULE: ./src/shared/themeToggle.module.css
var themeToggle_module = __webpack_require__(8321);
var themeToggle_module_default = /*#__PURE__*/__webpack_require__.n(themeToggle_module);
;// CONCATENATED MODULE: ./src/shared/ThemeToggle.tsx



function ThemeToggle(props) {
    const { isDark , toggleTheme  } = useAuth();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(themeToggle_module_default()).container} ${props.inBar ? (themeToggle_module_default()).inBar : ""} ${!isDark ? (themeToggle_module_default()).sun : (themeToggle_module_default()).moon}`,
        onClick: ()=>toggleTheme()
    });
};

// EXTERNAL MODULE: ./src/shared/shared.module.css
var shared_module = __webpack_require__(3389);
var shared_module_default = /*#__PURE__*/__webpack_require__.n(shared_module);
;// CONCATENATED MODULE: ./src/shared/ClickableText.tsx


function ClickableText({ onclick , className , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: onclick,
        className: `clickableText ${(shared_module_default()).clickableText} ${className || ""}`,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/shared/LinkBar.tsx






function LinkBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_stickynode_default()), {
        enabled: true,
        top: 0,
        className: (linkBar_module_default()).stickyBar,
        innerActiveClass: (linkBar_module_default()).sticking,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (linkBar_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (linkBar_module_default()).holder,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (linkBar_module_default()).start,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* YouTube */._F, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Instagram */.mr, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GitHub */.Tf, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* LinkedIn */.yh, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(ClickableText, {
                                children: "Resume"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {
                        inBar: true
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "@mui/icons-material/Terminal"
var Terminal_ = __webpack_require__(4205);
var Terminal_default = /*#__PURE__*/__webpack_require__.n(Terminal_);
// EXTERNAL MODULE: ./src/homepage/footer.module.css
var footer_module = __webpack_require__(4411);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/homepage/Footer.tsx






function Footer() {
    const { switchScreen  } = useAuth();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footer_module_default()).divider,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                            opacity: ".25",
                            className: (footer_module_default()).shapeFill
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
                            opacity: ".5",
                            className: (footer_module_default()).shapeFill
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
                            className: (footer_module_default()).shapeFill
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/privacy",
                scroll: false,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ClickableText, {
                    className: (footer_module_default()).privacy,
                    children: "Privacy"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footer_module_default()).terminal,
                onClick: ()=>switchScreen(1),
                children: /*#__PURE__*/ jsx_runtime_.jsx((Terminal_default()), {})
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/homepage/home.module.css
var home_module = __webpack_require__(9750);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./src/homepage/homePreviews.module.css
var homePreviews_module = __webpack_require__(5978);
var homePreviews_module_default = /*#__PURE__*/__webpack_require__.n(homePreviews_module);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./utils/helpers.ts
const toCamelcase = (str)=>{
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, "");
};

;// CONCATENATED MODULE: ./src/homepage/Preview.tsx







const CATEGORY_ICONS = {
    web: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.ComputerOutlined, {}),
    professional: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.School, {}),
    games: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.SportsEsports, {}),
    art: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Palette, {}),
    film: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Movie, {}),
    code: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Code, {})
};
function Preview({ component  }) {
    const { backgroundColors , endDate , icon , image , link , name , startDate , width ,  } = component;
    const url = link || "/" + toCamelcase(name);
    const selected =  false && 0;
    const router = (0,router_.useRouter)();
    const openPreview = ()=>{
        if (selected) return;
        router.push(url, undefined, {
            scroll: false
        });
    };
    let date = "";
    if (endDate || startDate) {
        if (!endDate) date = startDate;
        else if (!startDate) date = endDate;
        else date = `${startDate} - ${endDate}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: openPreview,
        "data-name": name,
        "data-date": date,
        className: `${(homePreviews_module_default()).holder} ${!selected ? (homePreviews_module_default()).clickable : ""} ${icon ? (homePreviews_module_default()).iconHolder : ""}`,
        style: width && !selected ? {
            width: width + "%",
            backgroundImage: !image ? `linear-gradient(to right, ${backgroundColors || "blue, black"})` : "",
            color: component.color || "white"
        } : {},
        children: [
            image && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: image,
                className: (homePreviews_module_default()).backImage,
                layout: "fill",
                objectFit: "cover"
            }),
            icon && CATEGORY_ICONS[icon]
        ]
    }, name);
};

;// CONCATENATED MODULE: ./src/homepage/HomePreviews.tsx




function HomePreviews({ onSide  }) {
    const { PAGE_DATA  } = usePageData();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (homePreviews_module_default()).container,
        children: PAGE_DATA && PAGE_DATA.components.map((column, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (homePreviews_module_default()).column,
                style: {
                    height: onSide ? column.sideHeight || "8rem" : column.height || "18rem"
                },
                children: column.components.map((component)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Preview, {
                        component: component
                    }, component.name);
                })
            }, index + "-" + column.components.length))
    });
};

// EXTERNAL MODULE: ./src/homepage/header.module.css
var header_module = __webpack_require__(1268);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/homepage/Header.tsx






const NAMES = Array(60).fill(0).map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: constants/* FULL_NAME */.O_
    }, i));
function NameBG({ className  }) {
    const { pageHasContent  } = useAuth();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(header_module_default()).nameBgHolder} ${pageHasContent ? (header_module_default()).namesHidden : ""} ${className || ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (header_module_default()).nameBg,
            children: NAMES
        })
    });
}
function Header() {
    const name = constants/* FULL_NAME.split */.O_.split(" ");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).holder,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).iconHolder,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* YouTube */._F, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Instagram */.mr, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).myName,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).firstName,
                        children: name[0]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).lastName,
                        children: name[1]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).holder,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        scroll: false,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (header_module_default()).text,
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).iconHolder,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GitHub */.Tf, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* LinkedIn */.yh, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/resume",
                        scroll: false,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (header_module_default()).text,
                            children: "Resume"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NameBG, {})
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBackIosNew"
var ArrowBackIosNew_ = __webpack_require__(5780);
var ArrowBackIosNew_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIosNew_);
;// CONCATENATED MODULE: ./src/homepage/SideToggle.tsx






function SideToggle({ sideOpen , setSideOpen  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (home_module_default()).buttonHolder,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_stickynode_default()), {
            enabled: true,
            top: 90,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (home_module_default()).buttons,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIosNew_default()), {
                        onClick: ()=>setSideOpen(!sideOpen),
                        className: `${(home_module_default()).sideToggle} ${sideOpen ? (home_module_default()).sideOpen : ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        scroll: false,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./src/homepage/parallax.module.css
var parallax_module = __webpack_require__(4219);
var parallax_module_default = /*#__PURE__*/__webpack_require__.n(parallax_module);
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
;// CONCATENATED MODULE: ./src/homepage/ParallaxBG.tsx




function Sphere({ angle =0 , className , size ="16rem" , speed =-50 , x ="auto" , y ="auto"  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_parallax_.Parallax, {
        className: (parallax_module_default()).parallax,
        style: {
            left: x,
            top: y
        },
        speed: speed,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(parallax_module_default()).sphere} ${className || ""}`,
                style: {
                    height: size,
                    width: size
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (parallax_module_default()).mask,
                style: {
                    rotate: -angle + "deg"
                }
            })
        ]
    });
}
function Names({ className , speed =-50 , x ="auto" , y ="auto"  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
        className: `${(parallax_module_default()).parallax} ${className || ""}`,
        style: {
            left: x,
            top: y
        },
        speed: speed,
        children: /*#__PURE__*/ jsx_runtime_.jsx(NameBG, {
            className: "h-0 scale-75"
        })
    });
}
function ParallaxBG() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (parallax_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sphere, {
                x: "80vw",
                y: "65vh",
                speed: -100,
                size: "12rem",
                angle: 23
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Names, {
                x: "90vw",
                speed: -90,
                y: "-80vh"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sphere, {
                x: "20vw",
                y: "200vh",
                size: "20rem",
                speed: -80,
                angle: 297
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sphere, {
                x: "-10vw",
                y: "20%",
                speed: -40,
                size: "24rem",
                angle: 240
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sphere, {
                x: "50vw",
                y: "120vh",
                speed: -20,
                angle: 180
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/homepage/Home.tsx











function Home({ children  }) {
    const { 0: onSide , 1: setOnSide  } = (0,external_react_.useState)(Boolean(children));
    const { 0: sideOpen , 1: setSideOpen  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setOnSide(Boolean(children));
        setSideOpen(true);
    }, [
        children
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (home_module_default()).home,
        id: "home",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (home_module_default()).bg
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ParallaxBG, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LinkBar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(home_module_default()).body} ${onSide ? (home_module_default()).bodyFull : ""}`,
                id: "homeBody",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (home_module_default()).content,
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(SideToggle, {
                                sideOpen: sideOpen,
                                setSideOpen: setSideOpen
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(homePreviews_module_default()).previews} ${onSide ? (homePreviews_module_default()).previewSide : ""} ${!sideOpen ? (homePreviews_module_default()).previewSideHidden : ""} ${ true && (homePreviews_module_default()).previewTransition}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HomePreviews, {
                            onSide: onSide
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/Cube.tsx



function Cube(props) {
    const { screen , screenAnimating  } = useAuth();
    const classes = `cube cube-${screen}` + (screenAnimating ? ` cube-${screen}-animating` : "");
    if (!screenAnimating) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.children[screen]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cubeHolder",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes,
            children: props.children.map((child, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `screen screen-${index}`,
                    children: child
                }, index))
        })
    });
};

;// CONCATENATED MODULE: ./src/Terminal.tsx




function Terminal() {
    const { intro , switchScreen  } = useAuth();
    (0,external_react_.useEffect)(()=>{
        console.log("Intro", intro);
    }, [
        intro
    ]);
    const { 0: commands , 1: setCommands  } = (0,external_react_.useState)(intro ? [
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "text-6xl lowercase",
                    children: [
                        constants/* FULL_NAME.replace */.O_.replace(" ", ""),
                        ".com"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Game Dev, Programming, Art, Writing, Assorted Bogglery"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Press any key to continue"
                })
            ]
        }), 
    ] : []);
    const { 0: text , 1: setText  } = (0,external_react_.useState)("");
    const processCommand = (e)=>{
        e.preventDefault();
        const command = text.trim();
        if (!command) return;
        const commandParts = command.split(" ");
        const commandName = commandParts[0].toLowerCase();
        const commandArgs = commandParts.slice(1);
        let result = "";
        switch(commandName){
            case "clear":
                setCommands([]);
                break;
            case "echo":
                result = commandArgs.join(" ");
                break;
            case "neofetch":
                result = "hi";
                break;
            case "exit":
            case "close":
            case "switch":
                const num = Number(commandArgs[0]);
                if (Number.isInteger(num)) {
                    switchScreen(num);
                    result = `Switched to screen ${commandArgs[0]}`;
                } else {
                    switchScreen(0);
                    result = "Switched to screen 0";
                }
                break;
            default:
                result = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-red-600 text-3xl m-0",
                    children: [
                        "'",
                        commandName,
                        "' not found"
                    ]
                });
                break;
        }
        if (result) {
            if (typeof result === "string") setCommands([
                ...commands,
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-3xl m-0",
                    children: result
                }), 
            ]);
            else setCommands([
                ...commands,
                result
            ]);
        }
        setText("");
    };
    const inputChange = (e)=>{
        if (intro) {
            switchScreen(0);
            setTimeout(()=>{
                localStorage.screen = 0;
                localStorage.finishedIntro = true;
            }, 1000);
        } else setText(e.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-black flex-col text-green-400 text-md p-4 flex h-[100vh] justify-end overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-full flex-col",
                children: commands.map((command, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-2 text-3xl m-0",
                        children: command
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center w-full h-fit text-bold text-4xl mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "m-0 text-6xl mr-4",
                        children: "$"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: processCommand,
                        className: "w-full flex items-center h-fit",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "invisible block h-0 w-0",
                                htmlFor: "commandInput",
                                children: "Enter shell command"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "commandInput",
                                autoFocus: true,
                                type: "text",
                                value: text,
                                onChange: inputChange,
                                className: "focus:outline-none bg-transparent flex m-0 w-full h-fit border-b-2 border-solid border-green-400 text-green-400 p-4 text-4xl"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./utils/pageData.tsx
const B_P_GRAD = "#4bf2f6, #7e32de";
const PAGE_DATA = {
    components: [
        {
            height: "fit-content",
            sideHeight: "fit-content",
            components: [
                {
                    name: "Games",
                    startDate: "2022",
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: "games"
                },
                {
                    name: "Art",
                    startDate: "2022",
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: "art"
                },
                {
                    name: "Web",
                    startDate: "2022",
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: "web"
                },
                {
                    name: "Film",
                    startDate: "2022",
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: "film"
                },
                {
                    name: "Code",
                    startDate: "2022",
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: "code"
                },
                {
                    name: "Professional",
                    startDate: "2022",
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: "professional"
                }, 
            ]
        },
        {
            height: "24rem",
            components: [
                {
                    name: "Outset",
                    startDate: "2017-2022",
                    image: "/outset/outsetSplash.png",
                    width: 70
                }, 
            ]
        },
        {
            height: "24rem",
            components: [
                {
                    name: "Inc Life",
                    startDate: "2020",
                    image: "/incLife/incLifeSplash.png",
                    width: 35
                },
                {
                    name: "Tiny Headed Game",
                    startDate: "2020",
                    image: "/thk/thkSplash.png",
                    width: 65
                }, 
            ]
        }, 
    ]
};

;// CONCATENATED MODULE: ./src/Wrapper.tsx









const PageDataContext = /*#__PURE__*/ (0,external_react_.createContext)({});
function Wrapper({ children =null  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageDataContext.Provider, {
        value: {
            PAGE_DATA: PAGE_DATA
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: constants/* FULL_NAME */.O_
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Personal site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cube, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Home, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Terminal, {})
                ]
            })
        ]
    });
};
const usePageData = ()=>{
    const context = (0,external_react_.useContext)(PageDataContext);
    if (context === undefined) {
        throw new Error("usePageData must be used within a PageDataContextProvider");
    }
    return context;
};

;// CONCATENATED MODULE: ./src/Auth.tsx






const setTheme = (isDark)=>{
    if (constants/* IS_SERVER */.W6) return;
    if (isDark !== undefined) {
        localStorage.theme = isDark ? "dark" : "light";
        document.documentElement.classList.toggle("dark", isDark);
    } else if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
    } else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
    }
};
setTheme();
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)({});
var Screens;
(function(Screens) {
    Screens[Screens["Home"] = 0] = "Home";
    Screens[Screens["Terminal"] = 1] = "Terminal";
})(Screens || (Screens = {}));
function Auth(props) {
    const { 0: renderedChildren , 1: setRenderedChildren  } = (0,external_react_.useState)(undefined);
    const pageHasContent = Boolean(renderedChildren);
    const { 0: token , 1: setToken  } = (0,external_react_.useState)(!constants/* IS_SERVER */.W6 && localStorage.getItem("chadminSession") || "");
    const { 0: screen , 1: setScreen  } = (0,external_react_.useState)(Screens.Home);
    const { 0: intro , 1: setIntro  } = (0,external_react_.useState)(true);
    const switchScreen = (screen)=>{
        setScreen(screen);
        setScreenAnimating(true);
        localStorage.screen = screen;
        setTimeout(()=>setScreenAnimating(false), 1200);
    };
    const { 0: screenAnimating , 1: setScreenAnimating  } = (0,external_react_.useState)(false);
    const { 0: isDark , 1: setIsDark  } = (0,external_react_.useState)(false);
    const toggleTheme = (dark)=>{
        const newIsDark = dark !== undefined ? dark : !isDark;
        setIsDark(newIsDark);
        setTheme(newIsDark);
    };
    const { 0: loggedIn , 1: setLoggedIn  } = (0,external_react_.useState)(false);
    const logIn = async ()=>{
        if (loggedIn) return;
        const response = await apiGet("/api/auth/login");
        if (response.status === 200) {
            setLoggedIn(true);
        }
    };
    const { 0: initialLoading , 1: setInitialLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        if (!constants/* IS_SERVER */.W6) {
            let initialScreen = Screens.Home;
            if (localStorage.screen) initialScreen = Number(localStorage.screen);
            else if (!external_react_device_detect_.isMobile) initialScreen = Screens.Terminal;
            setScreen(initialScreen);
            toggleTheme(localStorage.theme === "dark");
        }
        setInitialLoading(false);
        setIntro(!Boolean(localStorage.finishedIntro));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (token) logIn();
    }, [
        token
    ]);
    const apiGet = async (path, options = {})=>{
        const response = await internal_apiGet(path, token, options);
        return response;
    };
    const apiPost = async (path, data, options = {})=>{
        const response = await internal_apiPost(path, data, token, options);
        return response;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AuthContext.Provider, {
        value: {
            apiGet,
            apiPost,
            intro,
            isDark,
            initialLoading,
            loggedIn,
            pageHasContent,
            screen,
            screenAnimating,
            setRenderedChildren,
            switchScreen,
            toggleTheme
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `shade${!initialLoading ? " shadeHidden" : ""}`
            }),
            renderedChildren !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    props.children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                        children: renderedChildren
                    })
                ]
            }) : props.children
        ]
    });
};
const useAuth = ()=>{
    const context = (0,external_react_.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};


/***/ }),

/***/ 1082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tf": () => (/* binding */ GitHub),
/* harmony export */   "_F": () => (/* binding */ YouTube),
/* harmony export */   "mr": () => (/* binding */ Instagram),
/* harmony export */   "yh": () => (/* binding */ LinkedIn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9254);
/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(375);
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3281);
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5939);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4665);
/* harmony import */ var _icons_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icons_module_css__WEBPACK_IMPORTED_MODULE_5__);






function IconWrapper(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: props.url,
        target: "_blank",
        className: `${(_icons_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)} ${props.className || ""}`,
        children: props.children
    }, props.alt);
}
function GitHub(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
        url: process.env.NEXT_PUBLIC_GITHUB || "",
        alt: "Github",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_1___default()), {
            fontSize: "inherit"
        })
    });
}
function YouTube(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
        url: process.env.NEXT_PUBLIC_YOUTUBE || "",
        alt: "YouTube",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_2___default()), {
            fontSize: "inherit"
        })
    });
}
function Instagram(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
        url: process.env.NEXT_PUBLIC_INSTAGRAM || "",
        alt: "Instagram",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_3___default()), {
            fontSize: "inherit"
        })
    });
}
function LinkedIn(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
        url: process.env.NEXT_PUBLIC_LINKEDIN || "",
        alt: "Linkedin",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default()), {
            fontSize: "inherit"
        })
    });
}


/***/ }),

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jx": () => (/* binding */ URL),
/* harmony export */   "O_": () => (/* binding */ FULL_NAME),
/* harmony export */   "W6": () => (/* binding */ IS_SERVER),
/* harmony export */   "tO": () => (/* binding */ INITIALS)
/* harmony export */ });
const FULL_NAME = process.env.NEXT_PUBLIC_NAME || "";
const INITIALS = FULL_NAME.split(" ").map((name)=>name[0]).join("");
const URL = `https://${FULL_NAME.replaceAll(" ", "").toLowerCase()}.com`;
const IS_SERVER = "undefined" === "undefined";


/***/ })

};
;