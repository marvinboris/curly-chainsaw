(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/src/components/Backend/Dashboard/Card/Card.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/Backend/Dashboard/Card/Card.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var card = function card(_ref) {
  var title = _ref.title,
      _ref$titleColor = _ref.titleColor,
      titleColor = _ref$titleColor === void 0 ? 'white' : _ref$titleColor,
      details = _ref.details,
      children = _ref.children,
      link = _ref.link,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light,
      icon = _ref.icon,
      color = _ref.color,
      _ref$circleBorder = _ref.circleBorder,
      circleBorder = _ref$circleBorder === void 0 ? 'orange' : _ref$circleBorder,
      _ref$circleColor = _ref.circleColor,
      circleColor = _ref$circleColor === void 0 ? 'white' : _ref$circleColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    md: 12,
    lg: 6,
    xl: 3,
    className: "pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "h-100 rounded overflow-hidden position-relative bg-".concat(color)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "py-3 border-bottom border-show position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-large text-700 text-".concat(titleColor)
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle position-absolute bg-".concat(color, " border border-2 border-").concat(circleBorder),
    style: {
      width: 20,
      height: 20,
      bottom: 0,
      left: 16,
      transform: 'translateY(50%)',
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle w-100 h-100 bg-".concat(circleColor)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "py-3 pl-5 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      zIndex: 0,
      top: 16,
      right: 16
    },
    className: "position-absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    style: {
      zIndex: 0
    },
    className: "text-" + (light ? "black" : "white") + "-20",
    size: "4x"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      zIndex: 10
    },
    className: "text-white text-montserrat text-700"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      zIndex: 10
    },
    className: "text-white text-300"
  }, details)))));
};

/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Table/Table.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Table/Table.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var fields = _ref.fields,
      array = _ref.array,
      limit = _ref.limit,
      bordered = _ref.bordered,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      icon = _ref.icon,
      dark = _ref.dark,
      borderless = _ref.borderless,
      _ref$innerClassName = _ref.innerClassName,
      innerClassName = _ref$innerClassName === void 0 ? '' : _ref$innerClassName,
      _ref$outerClassName = _ref.outerClassName,
      outerClassName = _ref$outerClassName === void 0 ? '' : _ref$outerClassName,
      p0 = _ref.p0,
      select = _ref.select,
      children = _ref.children,
      selectHandler = _ref.selectHandler,
      style = _ref.style,
      searchable = _ref.searchable,
      draggable = _ref.draggable,
      closable = _ref.closable;
  var titles = fields.map(function (_ref2) {
    var name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "align-middle text-nowrap",
      key: name
    }, name);
  });
  titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center align-middle",
    key: "#"
  }, "SL"));
  if (select) titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "align-middle text-center",
    key: "select_all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    onClick: selectHandler,
    className: "select_all"
  })));
  var content = array.map(function (item, index) {
    if (limit && index >= limit) return null;
    var inside = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'primary' + index
    }, index + 1)];
    if (select) inside.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'secondary' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      value: item._id
    })));
    fields.forEach(function (_ref3) {
      var key = _ref3.key,
          minWidth = _ref3.minWidth;
      inside.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "align-middle text-nowrap",
        style: {
          minWidth: minWidth
        },
        key: key
      }, item[key]));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "align-middle",
      key: index + 1
    }, inside);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    className: outerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column h-100 " + (dark ? "text-secondary " : " ") + className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 border-bottom border-soft text-700 text-brokenblue d-flex position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-inline-flex align-items-center"
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    fixedWidth: true,
    className: "mr-2 text-orange",
    icon: icon,
    size: "lg"
  }) : null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute",
    style: {
      top: '50%',
      right: 16,
      transform: 'translateY(-50%)'
    }
  }, searchable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "search",
    placeholder: "Search here...",
    className: "small bg-soft rounded-0 border-0 text-secondary mr-3"
  }) : null, draggable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowsAlt"],
    size: "lg",
    className: "mr-3"
  }) : null, closable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
    size: "2x"
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-fill d-flex flex-column " + (!p0 ? "p-3" : "p-0")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dark: dark,
    bordered: bordered,
    borderless: borderless,
    className: innerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "bg-soft text-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, titles)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: "bg-soft-50 text-secondary"
  }, content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3"
  }, children))));
});

/***/ }),

/***/ "./resources/js/src/components/Feedback/Feedback.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Feedback/Feedback.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    color: message.type
  }, message.content) : null;
});

/***/ }),

/***/ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      color = _ref.color,
      icon = _ref.icon,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === void 0 ? 'reset' : _ref$iconColor,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      size = _ref.size,
      _ref$pill = _ref.pill,
      pill = _ref$pill === void 0 ? false : _ref$pill,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    color: color,
    size: size,
    className: "d-inline-flex justify-content-center align-items-center " + (pill ? ' rounded-pill ' : '') + className
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: "lg",
    icon: icon,
    className: "ml-3 text-" + iconColor
  }));
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Dashboard/Dashboard.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Dashboard/Dashboard.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
/* harmony import */ var _WorkTimeTracker_WorkTimeTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WorkTimeTracker/WorkTimeTracker */ "./resources/js/src/containers/Backend/User/Dashboard/WorkTimeTracker/WorkTimeTracker.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/Backend/Dashboard/Card/Card */ "./resources/js/src/components/Backend/Dashboard/Card/Card.js");
/* harmony import */ var _components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/Backend/UI/Table/Table */ "./resources/js/src/components/Backend/UI/Table/Table.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_Backend_UI_Counter_Counter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/Backend/UI/Counter/Counter */ "./resources/js/src/components/Backend/UI/Counter/Counter.js");
/* harmony import */ var _components_UI_WithTooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/UI/WithTooltip/WithTooltip */ "./resources/js/src/components/UI/WithTooltip/WithTooltip.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_23__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Components



















var twoDigits = function twoDigits(number) {
  return number < 10 ? '0' + number : number;
};

var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _this;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      blocksData: null,
      tasks: null,
      attendanceReport: null,
      calendar: null,
      chatBox: null,
      messages: null,
      workTimeTracker: null,
      position: null,
      interval: null
    });

    _defineProperty(_assertThisInitialized(_this), "getPosition", function (position) {
      var _position$coords = position.coords,
          latitude = _position$coords.latitude,
          longitude = _position$coords.longitude;

      _this.setState({
        position: {
          latitude: latitude,
          longitude: longitude
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clock", function () {
      var position = _this.state.position;
      if (position) _this.props.onPostClock(_this.state.position);else alert('Please allow geolocation.');
    });

    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.getPosition);
      this.props.get();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props$backend = this.props.backend,
          dashboard = _this$props$backend.dashboard,
          attendanceReport = _this$props$backend.attendanceReport,
          requests = _this$props$backend.requests;

      if (!attendanceReport.loading && prevProps.backend.attendanceReport.loading) {
        var blocksData = this.state.blocksData;
        blocksData.workedTime = attendanceReport.workedTime;
        blocksData.status = attendanceReport.status;
        this.setState({
          blocksData: blocksData
        }, function () {
          var blocksData = _this2.state.blocksData;

          if (blocksData.status) {
            var interval = setInterval(function () {
              blocksData.workedTime++;

              _this2.setState({
                blocksData: blocksData
              });
            }, 1000);

            _this2.setState({
              interval: interval
            });
          } else {
            var _interval = _this2.state.interval;

            if (_interval) {
              clearInterval(_interval);

              _this2.setState({
                interval: null
              });
            }
          }
        });
      }

      if (this.state.blocksData && !prevState.blocksData) {
        if (this.state.blocksData.status) {
          var interval = setInterval(function () {
            var blocksData = _this2.state.blocksData;
            blocksData.workedTime++;

            _this2.setState({
              blocksData: blocksData
            });
          }, 1000);
          this.setState({
            interval: interval
          });
        }
      }

      if (dashboard.blocksData && !prevProps.backend.dashboard.blocksData) {
        var channel = Echo.channel('public');
        channel.listen('UserDashboard', function (_ref) {
          var blocksData = _ref.blocksData,
              tasks = _ref.tasks,
              attendanceReport = _ref.attendanceReport,
              calendar = _ref.calendar,
              chatBox = _ref.chatBox,
              messages = _ref.messages,
              workTimeTracker = _ref.workTimeTracker;
          if (_this2.props.auth.token) _this2.setState({
            blocksData: blocksData,
            tasks: tasks,
            attendanceReport: attendanceReport,
            calendar: calendar,
            chatBox: chatBox,
            messages: messages,
            workTimeTracker: workTimeTracker
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.state.interval);
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          blocksData = _this$state.blocksData,
          tasks = _this$state.tasks,
          attendanceReport = _this$state.attendanceReport,
          calendar = _this$state.calendar,
          chatBox = _this$state.chatBox,
          messages = _this$state.messages,
          workTimeTracker = _this$state.workTimeTracker;
      var _this$props = this.props,
          job = _this$props.auth.data.job,
          _this$props$backend$d = _this$props.backend.dashboard,
          loading = _this$props$backend$d.loading,
          error = _this$props$backend$d.error,
          message = _this$props$backend$d.message;
      var content = null;
      var errors = null;
      var feedback = null;
      var colors = ['orange', 'green'];
      var texts = ['Pending', 'Completed'];
      var icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"]];
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_14__["default"], null));else {
        feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_20__["default"], {
          message: message
        });
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_13__["default"], {
          err: error
        }));

        if (blocksData) {
          var workedTime = blocksData.workedTime,
              leaveTaken = blocksData.leaveTaken,
              unreadMessages = blocksData.unreadMessages,
              status = blocksData.status;
          var data = [{
            title: 'Weekly Worked Time',
            children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex justify-content-center pb-2"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "text-300 text-small d-flex justify-content-center"
            }, "HH", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pl-2 pr-5"
            }), "MM", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pl-2 pr-5"
            }), "SS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "text-700 d-flex justify-content-center",
              style: {
                width: 210
              }
            }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["timeFromTimestamp"])(workedTime)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "bg-brokenblue position-relative overflow-hidden",
              style: {
                height: 15
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "bg-yellow h-100",
              style: {
                width: Math.floor(workedTime * 100 / job.hours_per_week / 3600) + '%'
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "position-absolute text-white text-300 text-xx-small",
              style: {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }
            }, Math.floor(workedTime * 100 / job.hours_per_week / 3600), "% to target"))))),
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faClock"],
            link: '/user/attendance-report/',
            color: 'paleblue',
            details: '',
            titleColor: 'white',
            circleColor: 'white',
            circleBorder: 'orange'
          }, {
            title: 'Total Leave Taken',
            children: leaveTaken + ' Days',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLandmark"],
            link: '/user/attendance-report/',
            color: 'nightblue',
            details: 'You have exceeded',
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }, {
            title: 'Unread Messages',
            children: unreadMessages,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            link: '/user/messages',
            color: 'pink',
            details: 'Unread Messages',
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }, {
            title: 'Clock-in-out Status',
            children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-inline-block text-300 text-small text-blue text-center"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "pb-2"
            }, "You need to Clock ", status ? 'out' : 'in'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
              onClick: this.clock,
              color: status ? "pink" : "green",
              icon: status ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignInAlt"]
            }, "Clock ", status ? 'Out' : 'In'))),
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStopwatch"],
            link: '/user/',
            color: 'white',
            details: '',
            titleColor: 'blue',
            circleColor: 'orange',
            circleBorder: 'orange',
            light: true
          }];
          var cards = data.map(function (_ref2, index) {
            var title = _ref2.title,
                titleColor = _ref2.titleColor,
                icon = _ref2.icon,
                link = _ref2.link,
                color = _ref2.color,
                children = _ref2.children,
                details = _ref2.details,
                circleBorder = _ref2.circleBorder,
                circleColor = _ref2.circleColor,
                light = _ref2.light;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
              color: color,
              key: index,
              title: title,
              titleColor: titleColor,
              details: details,
              circleBorder: circleBorder,
              circleColor: circleColor,
              icon: icon,
              link: link,
              light: light
            }, children);
          });
          var tasksData = tasks.map(function (task) {
            // const viewContent = <RequestView task={task} country={country} />;
            // const editContent = <Edit task={updateObject(task, { page_status: 'dashboard' })} />;
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["updateObject"])(task, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertDate"])(task.created_at),
              date_due: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertDate"])(task.date_due),
              status: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: colors[task.status],
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: icons[task.status],
                className: task.status === 0 ? "fa-spin" : "",
                fixedWidth: true
              }), " ", texts[task.status]),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Task details',
                content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Task edit',
                content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                deleteAction: function deleteAction() {
                  return alert('Deleted');
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })))
            });
          });
          var attendanceReportData = attendanceReport.map(function (day) {
            // const viewContent = <RequestView day={day} country={country} />;
            // const editContent = <Edit day={updateObject(day, { page_status: 'dashboard' })} />;
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["updateObject"])(day, {
              clock_in_date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertDate"])(day.clock_in),
              clock_out_date: day.clock_out_pos ? Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertDate"])(day.clock_out) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                active: true,
                style: {
                  cursor: 'unset'
                },
                size: "sm",
                color: "orange"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"],
                className: "fa-spin"
              })),
              clock_in_time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "position-relative d-flex justify-content-between align-items-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: "mr-2"
              }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertTime"])(day.clock_in)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                active: true,
                style: {
                  cursor: 'unset'
                },
                size: "sm",
                color: day.clock_in_pos["in"] ? 'green' : 'pink'
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: day.clock_in_pos["in"] ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"]
              }))),
              clock_out_time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "position-relative d-flex justify-content-between align-items-center"
              }, day.clock_out && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: "mr-2"
              }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertTime"])(day.clock_out)), day.clock_out_pos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                active: true,
                style: {
                  cursor: 'unset'
                },
                size: "sm",
                color: day.clock_out_pos["in"] ? 'green' : 'pink'
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: day.clock_out_pos["in"] ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"]
              })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                active: true,
                style: {
                  cursor: 'unset'
                },
                size: "sm",
                color: "orange"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"],
                className: "fa-spin"
              }))),
              time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "d-flex justify-content-between align-items-center"
              }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["timeFromTimestamp"])(day.time), !day.clock_out_pos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                active: true,
                style: {
                  cursor: 'unset'
                },
                size: "sm",
                color: "orange"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"],
                className: "fa-spin"
              }))),
              status: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: colors[day.status],
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: icons[day.status],
                className: day.status === 0 ? "fa-spin" : "",
                fixedWidth: true
              }), " ", texts[day.status])
            });
          });
          var messagesData = messages.map(function (message) {
            // const viewContent = <RequestView message={message} country={country} />;
            // const editContent = <Edit message={updateObject(message, { page_status: 'dashboard' })} />;
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["updateObject"])(message, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertDate"])(message.created_at),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                size: "sm",
                color: "orange",
                className: "mr-2"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "mr-2",
                fixedWidth: true
              }), "View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                className: "mr-2",
                to: '/user/messages/' + message.id + '/edit'
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                size: "sm",
                color: "blue"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReply"],
                className: "mr-2",
                fixedWidth: true
              }), "Reply")))
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, cards), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
            array: tasksData,
            draggable: true,
            closable: true,
            title: "Tasks Board",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTasks"],
            bordered: true,
            limit: 5,
            lg: 6,
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Creation Date',
              key: 'created_at'
            }, {
              name: 'Author',
              key: 'author'
            }, {
              name: 'Date Due',
              key: 'date_due'
            }, {
              name: 'Comment',
              key: 'comment'
            }, {
              name: 'Status',
              key: 'status',
              minWidth: 130
            }, {
              name: 'Action',
              key: 'action'
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/user/tasks",
            className: "text-secondary"
          }, 'View full task list | >')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            lg: 6,
            className: "pt-3 pt-lg-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "bg-brokenblue shadow-sm text-soft h-100 d-flex flex-column"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "p-3 border-bottom border-border text-700 position-relative d-flex"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "d-inline-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            size: "lg",
            className: "text-orange mr-2",
            fixedWidth: true,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTasks"]
          }), "Work Time Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-soft position-absolute",
            style: {
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowsAlt"],
            size: "lg",
            className: "mr-3"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
            size: "2x"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "p-3 flex-fill d-flex flex-column justify-content-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            lg: 11,
            style: {
              minHeight: 150
            }
          })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
            array: attendanceReportData,
            draggable: true,
            closable: true,
            title: "Attendance Report Log",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTasks"],
            bordered: true,
            limit: 5,
            lg: 8,
            outerClassName: "pt-3",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Clock In Date',
              key: 'clock_in_date'
            }, {
              name: 'Clock In Time',
              key: 'clock_in_time'
            }, {
              name: 'Clock Out Date',
              key: 'clock_out_date'
            }, {
              name: 'Clock Out Time',
              key: 'clock_out_time'
            }, {
              name: 'Total time',
              key: 'time'
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/user/attendance-report",
            className: "text-secondary"
          }, 'View full list | >')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            lg: 4,
            className: "pt-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "bg-white shadow-sm text-secondary h-100 d-flex flex-column"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "p-3 border-bottom border-soft text-700 position-relative d-flex"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "text-blue d-inline-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            size: "lg",
            className: "mr-2",
            fixedWidth: true,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"]
          }), "My Calendar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute",
            style: {
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowsAlt"],
            size: "lg",
            className: "mr-3"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
            size: "2x"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "flex-fill d-flex flex-column justify-content-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            style: {
              minHeight: 150
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-100 h-100 text-poppins text-700"
          }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            lg: 3,
            className: "pt-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "bg-white shadow-sm text-secondary h-100 d-flex flex-column"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "p-3 border-bottom border-soft text-700 position-relative d-flex"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "text-blue d-inline-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            size: "lg",
            className: "mr-2",
            fixedWidth: true,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faComments"]
          }), "ChatBox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute",
            style: {
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowsAlt"],
            size: "lg",
            className: "mr-3"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
            size: "2x"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "flex-fill d-flex flex-column justify-content-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            lg: 11,
            style: {
              minHeight: 150
            }
          })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
            array: messagesData,
            draggable: true,
            closable: true,
            title: "Recent Messages",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            bordered: true,
            limit: 5,
            lg: 9,
            outerClassName: "pt-3",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Received Date',
              key: 'created_at'
            }, {
              name: 'Sender',
              key: 'sender'
            }, {
              name: 'Object',
              key: 'object'
            }, {
              name: 'Content',
              key: 'content'
            }, {
              name: 'Action',
              key: 'action'
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/user/messages",
            className: "text-secondary"
          }, 'View full list | >'))));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
        main: "Dashboard",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"]
      }, "Employee panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: true
      }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, feedback, content));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
        var _nextProps$backend$da = nextProps.backend.dashboard,
            blocksData = _nextProps$backend$da.blocksData,
            tasks = _nextProps$backend$da.tasks,
            attendanceReport = _nextProps$backend$da.attendanceReport,
            calendar = _nextProps$backend$da.calendar,
            chatBox = _nextProps$backend$da.chatBox,
            messages = _nextProps$backend$da.messages,
            workTimeTracker = _nextProps$backend$da.workTimeTracker;
        return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["updateObject"])(prevState, {
          blocksData: blocksData,
          tasks: tasks,
          attendanceReport: attendanceReport,
          calendar: calendar,
          chatBox: chatBox,
          messages: messages,
          workTimeTracker: workTimeTracker
        });
      } // if (nextProps.backend.requests.requests && !prevState.requestsRequests) return updateObject(prevState, { requestsRequests: nextProps.backend.requests.requests });


      return prevState;
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["getUserDashboard"]());
    },
    reset: function reset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["dashboardReset"]());
    },
    onPostClock: function onPostClock(position) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["postClock"](position));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Dashboard/WorkTimeTracker/WorkTimeTracker.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Dashboard/WorkTimeTracker/WorkTimeTracker.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FinanceTracker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FinanceTracker = /*#__PURE__*/function (_PureComponent) {
  _inherits(FinanceTracker, _PureComponent);

  var _super = _createSuper(FinanceTracker);

  function FinanceTracker() {
    _classCallCheck(this, FinanceTracker);

    return _super.apply(this, arguments);
  }

  _createClass(FinanceTracker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
        data: this.props.data
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "pending",
        fill: "#e79300"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "cancelled",
        fill: "#ff0b33"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "solved",
        fill: "#049d27"
      })));
    }
  }]);

  return FinanceTracker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(FinanceTracker, "jsfiddleUrl", 'https://jsfiddle.net/alidingling/30763kr7/');



/***/ })

}]);