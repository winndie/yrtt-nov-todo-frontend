/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/store/index */ \"./src/js/store/index.js\");\n/* harmony import */ var _js_components_App_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/App.js */ \"./src/js/components/App.js\");\n\n\n\n\n\n // if you're in create-react-app import the files as:\n// import store from './js/store/index';\n// import App from './js/components/App.js';\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n  store: _js_store_index__WEBPACK_IMPORTED_MODULE_4__.default\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_js_components_App_js__WEBPACK_IMPORTED_MODULE_5__.default, null)), // The target element might be either root or app,\n// depending on your development environment\n// document.getElementById('app')\ndocument.getElementById('root'));\n\n//# sourceURL=webpack://react-redux-tutorial/./src/index.js?");

/***/ }),

/***/ "./src/js/actions/index.js":
/*!*********************************!*\
  !*** ./src/js/actions/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"searchTask\": () => (/* binding */ searchTask),\n/* harmony export */   \"emptyTasks\": () => (/* binding */ emptyTasks),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks)\n/* harmony export */ });\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ \"./src/js/constants/action-types.js\");\n\nvar url = 'https://winndie.github.io/data/todo.json';\nfunction addTask(payload) {\n  console.log('actions addTask>>>' + payload[0].task);\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK,\n    payload: payload\n  };\n}\nfunction searchTask(payload) {\n  console.log('actions searchTask>>>' + payload.filter);\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.SEARCH_TASK,\n    payload: payload\n  };\n}\nfunction emptyTasks() {\n  console.log('actions emptyTasks>>>');\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.EMPTY_TASKS\n  };\n}\nfunction getTasks() {\n  return function (dispatch) {\n    try {\n      fetch(url).then(function (response) {\n        if (!response.ok) throw Error(response.statusText);\n        return response.json();\n      }).then(function (json) {\n        console.log('actions getTasks>>>' + json[0]);\n        return dispatch({\n          type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.LOADED_TASKS,\n          payload: json\n        });\n      });\n    } catch (error) {\n      return dispatch({\n        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.ENDPOINT_ERROR,\n        payload: []\n      });\n    }\n  };\n}\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/actions/index.js?");

/***/ }),

/***/ "./src/js/components/App.js":
/*!**********************************!*\
  !*** ./src/js/components/App.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/js/components/App.css\");\n/* harmony import */ var _Tasks_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks/List */ \"./src/js/components/Tasks/List.js\");\n/* harmony import */ var _Tasks_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tasks/Form */ \"./src/js/components/Tasks/Form.js\");\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"container container-margin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tasks_Form__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tasks_List__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/components/App.js?");

/***/ }),

/***/ "./src/js/components/Buttons/RefreshButton.js":
/*!****************************************************!*\
  !*** ./src/js/components/Buttons/RefreshButton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RefreshButton\": () => (/* binding */ RefreshButton),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index */ \"./src/js/actions/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable no-useless-constructor */\n\n\n\n\nfunction mapStateToProps(state) {\n  return {\n    tasks: state.tasks,\n    type: state.type\n  };\n}\n\nvar RefreshButton = /*#__PURE__*/function (_Component) {\n  _inherits(RefreshButton, _Component);\n\n  var _super = _createSuper(RefreshButton);\n\n  function RefreshButton(props) {\n    _classCallCheck(this, RefreshButton);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(RefreshButton, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        className: \"btn btn-primary\",\n        type: \"button\",\n        onClick: function onClick() {\n          _this.props.emptyTasks();\n\n          _this.props.getTasks();\n        }\n      }, \"REFRESH\");\n    }\n  }]);\n\n  return RefreshButton;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  emptyTasks: _actions_index__WEBPACK_IMPORTED_MODULE_2__.emptyTasks,\n  getTasks: _actions_index__WEBPACK_IMPORTED_MODULE_2__.getTasks\n})(RefreshButton));\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/components/Buttons/RefreshButton.js?");

/***/ }),

/***/ "./src/js/components/Tasks/Form.js":
/*!*****************************************!*\
  !*** ./src/js/components/Tasks/Form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index */ \"./src/js/actions/index.js\");\n/* harmony import */ var _Buttons_RefreshButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buttons/RefreshButton */ \"./src/js/components/Buttons/RefreshButton.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    // addTask: tasks => dispatch(actions.addTask(tasks))\n    searchTask: function searchTask(tasks) {\n      return dispatch(_actions_index__WEBPACK_IMPORTED_MODULE_2__.searchTask(tasks));\n    }\n  };\n}\n\nfunction mapStateToProps(state) {\n  return {\n    tasks: state.tasks,\n    type: state.type\n  };\n}\n\nvar ConnectedForm = /*#__PURE__*/function (_Component) {\n  _inherits(ConnectedForm, _Component);\n\n  var _super = _createSuper(ConnectedForm);\n\n  function ConnectedForm(props) {\n    var _this;\n\n    _classCallCheck(this, ConnectedForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      filter: ''\n    };\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ConnectedForm, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      console.log('Form handleChange this.props.tasks>>>' + this.props.tasks[0].task);\n      console.log('Form handleChange this.state.filter>>>' + this.state.filter);\n      this.setState(_defineProperty({}, event.target.id, event.target.value));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      console.log('Form handleSubmit>>>' + event.target.tagName);\n      var filter = this.state.filter;\n      this.props.searchTask({\n        filter: filter\n      });\n      this.setState({\n        filter: ''\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var filter = this.state.filter;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n        htmlFor: \"filter\"\n      }, \"Search Tasks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        className: \"form-control\",\n        type: \"text\",\n        id: \"filter\",\n        value: filter,\n        onChange: this.handleChange\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        className: \"btn btn-primary\",\n        type: \"submit\"\n      }, \"SEARCH\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Buttons_RefreshButton__WEBPACK_IMPORTED_MODULE_3__.default, null));\n    }\n  }]);\n\n  return ConnectedForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar Form = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ConnectedForm);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/components/Tasks/Form.js?");

/***/ }),

/***/ "./src/js/components/Tasks/List.js":
/*!*****************************************!*\
  !*** ./src/js/components/Tasks/List.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tasks\": () => (/* binding */ Tasks),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index */ \"./src/js/actions/index.js\");\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/action-types */ \"./src/js/constants/action-types.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable no-useless-constructor */\n\n\n\n\n\nfunction mapStateToProps(state) {\n  return {\n    tasks: state.tasks,\n    type: state.type\n  };\n}\n\nvar Tasks = /*#__PURE__*/function (_Component) {\n  _inherits(Tasks, _Component);\n\n  var _super = _createSuper(Tasks);\n\n  function Tasks(props) {\n    _classCallCheck(this, Tasks);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Tasks, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.emptyTasks();\n      this.props.getTasks();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log('List this.props.type>>>' + this.props.type);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ol\", null, this.props.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_3__.EMPTY_TASKS ? 'Loading...' : this.props.tasks.length === 0 ? 'No task found!' : this.props.tasks.map(function (v) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n          \"data-testid\": \"taskIndex\",\n          key: v.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"row\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col-4\",\n          \"data-testid\": \"task\"\n        }, v.task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col-4\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Rating : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, v.averageUserRating.toLocaleString('en', {\n          style: 'percent'\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col-4\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Guest: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          \"data-testid\": \"guest\"\n        }, v.guest))), v.tags.map(function (t) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n            className: \"badge\",\n            key: t,\n            \"data-testid\": \"tag\"\n          }, '・' + t);\n        }));\n      }));\n    }\n  }]);\n\n  return Tasks;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  emptyTasks: _actions_index__WEBPACK_IMPORTED_MODULE_2__.emptyTasks,\n  getTasks: _actions_index__WEBPACK_IMPORTED_MODULE_2__.getTasks\n})(Tasks));\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/components/Tasks/List.js?");

/***/ }),

/***/ "./src/js/constants/action-types.js":
/*!******************************************!*\
  !*** ./src/js/constants/action-types.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_TASK\": () => (/* binding */ ADD_TASK),\n/* harmony export */   \"DELETE_TASK\": () => (/* binding */ DELETE_TASK),\n/* harmony export */   \"SEARCH_TASK\": () => (/* binding */ SEARCH_TASK),\n/* harmony export */   \"EMPTY_TASKS\": () => (/* binding */ EMPTY_TASKS),\n/* harmony export */   \"LOADING_TASKS\": () => (/* binding */ LOADING_TASKS),\n/* harmony export */   \"LOADED_TASKS\": () => (/* binding */ LOADED_TASKS),\n/* harmony export */   \"ENDPOINT_ERROR\": () => (/* binding */ ENDPOINT_ERROR)\n/* harmony export */ });\nvar ADD_TASK = 'ADD_TASK';\nvar DELETE_TASK = 'DELETE_TASK';\nvar SEARCH_TASK = 'SEARCH_TASK';\nvar EMPTY_TASKS = 'EMPTY_TASKS';\nvar LOADING_TASKS = 'LOADING_TASKS';\nvar LOADED_TASKS = 'LOADED_TASKS';\nvar ENDPOINT_ERROR = 'ENDPOINT_ERROR';\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/constants/action-types.js?");

/***/ }),

/***/ "./src/js/functions/scrubParam.js":
/*!****************************************!*\
  !*** ./src/js/functions/scrubParam.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lower\": () => (/* binding */ lower),\n/* harmony export */   \"includes\": () => (/* binding */ includes)\n/* harmony export */ });\nfunction lower(param) {\n  return param.replace(/([^a-zA-z]+)/g, ' ').toLowerCase();\n}\nfunction includes(base, input) {\n  return lower(base).includes(input.toLowerCase());\n}\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/functions/scrubParam.js?");

/***/ }),

/***/ "./src/js/functions/searchForTasks.js":
/*!********************************************!*\
  !*** ./src/js/functions/searchForTasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchForTasks\": () => (/* binding */ searchForTasks)\n/* harmony export */ });\n/* harmony import */ var _scrubParam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrubParam */ \"./src/js/functions/scrubParam.js\");\n\nfunction searchForTasks(tasks, filter) {\n  return tasks.filter(function (v) {\n    return v.tags.some(function (t) {\n      return (0,_scrubParam__WEBPACK_IMPORTED_MODULE_0__.includes)(filter, t);\n    }) || (0,_scrubParam__WEBPACK_IMPORTED_MODULE_0__.includes)(filter, v.guest) || v.task.split(': ').some(function (t) {\n      return (0,_scrubParam__WEBPACK_IMPORTED_MODULE_0__.includes)(filter, t);\n    });\n  });\n}\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/functions/searchForTasks.js?");

/***/ }),

/***/ "./src/js/middleware/index.js":
/*!************************************!*\
  !*** ./src/js/middleware/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forbiddenWordsMiddleware\": () => (/* binding */ forbiddenWordsMiddleware)\n/* harmony export */ });\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ \"./src/js/constants/action-types.js\");\n\nvar forbiddenWords = ['spam', 'money'];\nfunction forbiddenWordsMiddleware(_ref) {\n  var dispatch = _ref.dispatch;\n  return function (next) {\n    return function (action) {\n      if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK) {\n        console.log('middleware ADD_TASK>>>' + action.payload[0].task);\n        var foundWord = forbiddenWords.filter(function (word) {\n          return action.payload.title.includes(word);\n        });\n\n        if (foundWord.length) {\n          return dispatch({\n            type: 'FOUND_BAD_WORD'\n          });\n        }\n      }\n\n      return next(action);\n    };\n  };\n}\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/middleware/index.js?");

/***/ }),

/***/ "./src/js/reducers/index.js":
/*!**********************************!*\
  !*** ./src/js/reducers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ \"./src/js/constants/action-types.js\");\n/* harmony import */ var _functions_searchForTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/searchForTasks */ \"./src/js/functions/searchForTasks.js\");\n\n\nvar initialState = {\n  tasks: []\n};\n\nfunction rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK) {\n    console.log('rootReducer ADD_TASK>>>' + action.payload[0].task);\n    console.log('rootReducer ADD_TASK state>>>' + state.tasks[0].task);\n    return Object.assign({}, state, {\n      tasks: state.tasks.concat(action.payload)\n    });\n  }\n\n  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.SEARCH_TASK) {\n    console.log('rootReducer SEARCH_TASK payload.filter>>>' + action.payload.filter);\n    console.log('rootReducer SEARCH_TASK state>>>' + state.tasks[0].task);\n    return Object.assign({}, state, {\n      tasks: (0,_functions_searchForTasks__WEBPACK_IMPORTED_MODULE_1__.searchForTasks)(state.tasks, action.payload.filter)\n    });\n  }\n\n  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.EMPTY_TASKS) {\n    console.log('rootReducer EMPTY_TASKS>>>');\n    return Object.assign({}, state, {\n      tasks: [],\n      type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.EMPTY_TASKS\n    });\n  }\n\n  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.LOADED_TASKS) {\n    console.log('rootReducer LOADED_TASK>>>' + action.payload[0].task);\n    return Object.assign({}, state, {\n      tasks: state.tasks.concat(action.payload),\n      type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.LOADED_TASKS\n    });\n  }\n\n  return state;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/reducers/index.js?");

/***/ }),

/***/ "./src/js/store/index.js":
/*!*******************************!*\
  !*** ./src/js/store/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/index */ \"./src/js/reducers/index.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware */ \"./src/js/middleware/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\n\nvar storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__.compose;\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.default, storeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(_middleware__WEBPACK_IMPORTED_MODULE_1__.forbiddenWordsMiddleware, redux_thunk__WEBPACK_IMPORTED_MODULE_2__.default)));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/App.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/App.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container-margin {\\n    margin-top: 1%;\\n}\\n.form-control{\\n    margin-bottom: 1%;\\n}\\nol {\\n    list-style-type: decimal-leading-zero;\\n  }\\nli {\\n    background-color: #dddddd;\\n    padding: 1%;\\n    margin-bottom: 1%;\\n}\\n.btn {\\n    background-color: #008000;\\n    border-spacing: 1%;\\n    margin-bottom: 1%;\\n}    \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/components/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/js/components/App.css":
/*!***********************************!*\
  !*** ./src/js/components/App.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/js/components/App.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://react-redux-tutorial/./src/js/components/App.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_redux_tutorial"] = self["webpackChunkreact_redux_tutorial"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-redux_es_index_js-node_modules_redux-thunk_es_index_js-node_module-ddeb5e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;