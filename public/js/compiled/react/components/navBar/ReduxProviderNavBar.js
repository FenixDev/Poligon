"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reg = _interopRequireDefault(require("../../reg.js"));

var _TextItemEdit = _interopRequireDefault(require("../TextItemEdit.js"));

var _actionCreators = require("../../redux/actions/actionCreators.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NewCategoryEdit(_ref) {
  var onSave = _ref.onSave,
      onCancel = _ref.onCancel;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      txt = _React$useState2[0],
      setTxt = _React$useState2[1];

  var onSaveClk = function onSaveClk(txt) {
    var action = onSave({
      name: txt
    });

    if (!action.error) {
      onCancel();
    }
  };

  var onCancelClk = function onCancelClk() {
    setTxt("");
    onCancel();
  };

  return /*#__PURE__*/React.createElement(_TextItemEdit["default"], {
    txt: txt,
    onSave: onSaveClk,
    onCancel: onCancelClk
  });
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSave: function onSave(it) {
      return dispatch((0, _actionCreators.createAddCategoryAction)(it));
    }
  };
};

var NewCategory = ReactRedux.connect(null, mapDispatchToProps)(NewCategoryEdit);

function ReduxProviderNavBar(store) {
  return function () {
    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        addNewCatCss = _React$useState4[0],
        setAddNewCatCss = _React$useState4[1];

    var onSwitchNewCat = function onSwitchNewCat() {
      var css = addNewCatCss ? '' : ' show';
      setAddNewCatCss(css);
    };

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("h3", null, _reg["default"].categoryList), /*#__PURE__*/React.createElement("button", {
      onClick: onSwitchNewCat
    }, _reg["default"].new_category)), /*#__PURE__*/React.createElement("div", {
      className: "new-category-add-area" + addNewCatCss
    }, /*#__PURE__*/React.createElement(ReactRedux.Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(NewCategory, {
      onCancel: onSwitchNewCat
    }))));
  };
}

var _default = ReduxProviderNavBar;
exports["default"] = _default;