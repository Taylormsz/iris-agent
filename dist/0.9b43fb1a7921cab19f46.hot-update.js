webpackHotUpdate(0,{

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(402);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _types = __webpack_require__(61);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(73);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(dispatch, active, text) {\n  var onlyOne = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  return function () {\n    if (active === true) {\n      var stripText = text.replace(/{/g, '').replace(/}/g, '');\n      if (onlyOne === true) {\n        _InputBox.input.value = text;\n      } else if (_InputBox.input.value.includes(text)) {\n        var items = _InputBox.input.value.split(\",\").map(function (x) {\n          return x.replace(/^\\s+|\\s+$/g, '');\n        });\n        var findIndex = items.indexOf(text);\n        if (findIndex > -1) {\n          items.splice(findIndex, 1);\n        }\n        _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n      } else {\n        if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n      }\n      dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n      (0, _python.updateHint)(_InputBox.input.value);\n    }\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.colMap = {};\n      for (var i = 0; i < _this.testColumns.length; i++) {\n        _this.colMap[i] = _this.testColumns[i].name;\n      }\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                var newColStyle = {};\n                if (column.type === \"Text\") {\n                  newColStyle['width'] = 350;\n                  // newColStyle['height'] = '4em';\n                }\n                if (singleColumn || i == 0) {\n                  newColStyle['border-left'] = 'none';\n                };\n                if (i < 50) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', onClick: setInput(_this.props.dispatch, _this.props.active, column.name, _this.props.onlyOne), style: newColStyle },\n                    column.name\n                  );\n                }\n              })\n            ),\n            _this.testRows.map(function (row, i) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                  }\n                  if (containsText) {\n                    newColStyle['height'] = '4em';\n                  }\n                  if (_this.props.active && _this.props.currentInput.includes(_this.colMap[i])) {\n                    newColStyle['background-color'] = '#eee';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  if (i < 50) {\n                    return _react2.default.createElement(\n                      'span',\n                      { className: 'data_column', style: newColStyle },\n                      row[column.name]\n                    );\n                  }\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput.input\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsImRpc3BhdGNoIiwiYWN0aXZlIiwidGV4dCIsIm9ubHlPbmUiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJpbmNsdWRlcyIsIml0ZW1zIiwic3BsaXQiLCJtYXAiLCJ4IiwiZmluZEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImpvaW4iLCJUYWJsZVNlbGVjdE1lc3NhZ2UiLCJyZW5kZXIiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicHJvcHMiLCJ0ZXN0Q29sdW1ucyIsImNvbE1hcCIsImkiLCJsZW5ndGgiLCJuYW1lIiwidGVzdFJvd3MiLCJzbGljZSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SW5wdXQiLCJvcmlnaW4iLCJoaWRkZW4iLCJkaXNwbGF5Iiwid2lkdGgiLCJjb2x1bW4iLCJuZXdDb2xTdHlsZSIsInR5cGUiLCJyb3ciLCJuZXdSb3dTdHlsZSIsInByb3BUeXBlcyIsIm1lc3NhZ2VUeXBlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxTOztBQUNaOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLEVBQW1CQyxJQUFuQixFQUE2QztBQUFBLE1BQXBCQyxPQUFvQix1RUFBVixLQUFVOztBQUMxRCxTQUFPLFlBQU07QUFDVCxRQUFHRixXQUFXLElBQWQsRUFBbUI7QUFDakIsVUFBSUcsWUFBWUYsS0FBS0csT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENB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SUFBNkIsTUFBN0I7QUFBcUM7QUFDbEUsc0JBQUlmLElBQUksRUFBUixFQUFXO0FBQ1QsMkJBQU87QUFBQTtBQUFBLHdCQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBT2UsV0FBckM7QUFBbURFLDBCQUFJSCxPQUFPWixJQUFYO0FBQW5ELHFCQUFQO0FBQ0Q7QUFDRixpQkFmQTtBQURLLGVBQVI7QUFrQkQsYUFyQkE7QUFkSDtBQURBO0FBREksT0FBUjtBQXlDRCxLOzs7Ozs7QUFJSFYsbUJBQW1CMkIsU0FBbkIsR0FBK0I3QyxVQUFVOEMsV0FBekM7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ2Isa0JBQWNhLE1BQU1iLFlBQU4sQ0FBbUJjO0FBREQsR0FBWjtBQUFBLENBQXhCOztBQUlBL0IscUJBQXFCLHlCQUFRNkIsZUFBUixFQUF5QjdCLGtCQUF6QixDQUFyQjs7a0JBRWVBLGtCIiwiZmlsZSI6IjUwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERhdGFHcmlkIGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi4vY29udGFpbmVycy9JbnB1dEJveCc7XG5pbXBvcnQgeyBzdG9yZUN1cnJlbnRJbnB1dCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbmNvbnN0IHNldElucHV0ID0gKGRpc3BhdGNoLCBhY3RpdmUsIHRleHQsIG9ubHlPbmUgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmKGFjdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgICAgaWYob25seU9uZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpe1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKTtcbiAgICAgICAgICAgIGxldCBmaW5kSW5kZXggPSBpdGVtcy5pbmRleE9mKHRleHQpO1xuICAgICAgICAgICAgaWYoZmluZEluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGZpbmRJbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbXMuam9pbihcIiwgXCIpOy8vIGlucHV0LnZhbHVlLnJlcGxhY2UoUmVnRXhwKHRlc3QrXCIsfFwidGVzdCksICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlICsgXCIsIFwiICsgc3RyaXBUZXh0O1xuICAgICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5jbGFzcyBUYWJsZVNlbGVjdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnRleHQpO1xuICAgIHRoaXMudGVzdENvbHVtbnMgPSBkYXRhW1wiY29sdW1uX2RhdGFcIl07XG4gICAgdGhpcy5jb2xNYXAgPSB7fTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbE1hcFtpXSA9IHRoaXMudGVzdENvbHVtbnNbaV0ubmFtZTtcbiAgICB9XG4gICAgdGhpcy50ZXN0Um93cyA9IGRhdGFbXCJyb3dfZGF0YVwiXS5zbGljZSgwLDMpO1xuICAgIGxldCBjb250YWluc1RleHQgPSBmYWxzZTtcbiAgICBsZXQgc2luZ2xlQ29sdW1uID0gdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggPT09IDE7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50SW5wdXQpO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWUgPSB7dGhpcy5wcm9wcy5vcmlnaW4gPT09ICdpcmlzJyA/ICdtZXNzYWdlIGxlZnQnIDogJ21lc3NhZ2UgcmlnaHQnfSBzdHlsZT17dGhpcy5wcm9wcy5oaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGUgdGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhX3RhYmxlXCIgc3R5bGU9e3t3aWR0aDogdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggKiAoMzUwKzEwKzEpfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbixpKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Q29sU3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgIG5ld0NvbFN0eWxlWyd3aWR0aCddID0gMzUwO1xuICAgICAgICAgICAgICAvLyBuZXdDb2xTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaW5nbGVDb2x1bW4gfHwgaSA9PSAwKXsgbmV3Q29sU3R5bGVbJ2JvcmRlci1sZWZ0J10gPSAnbm9uZScgfTtcbiAgICAgICAgICAgIGlmIChpIDwgNTApe1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0YV9jb2x1bW5cIiBvbkNsaWNrPXtzZXRJbnB1dCh0aGlzLnByb3BzLmRpc3BhdGNoLCB0aGlzLnByb3BzLmFjdGl2ZSwgY29sdW1uLm5hbWUsIHRoaXMucHJvcHMub25seU9uZSl9IHN0eWxlPXtuZXdDb2xTdHlsZX0+e2NvbHVtbi5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMudGVzdFJvd3MubWFwKChyb3csaSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1Jvd1N0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoY29udGFpbnNUZXh0KXsgbmV3Um93U3R5bGVbJ2hlaWdodCddID0gJzRlbSd9O1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImRhdGFfcm93XCIgc3R5bGU9e25ld1Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29sU3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGNvbnRhaW5zVGV4dCl7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5jdXJyZW50SW5wdXQuaW5jbHVkZXModGhpcy5jb2xNYXBbaV0pKXtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSAnI2VlZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW5nbGVDb2x1bW4gfHwgaSA9PSAwKXsgbmV3Q29sU3R5bGVbJ2JvcmRlci1sZWZ0J10gPSAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDUwKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIHN0eWxlPXtuZXdDb2xTdHlsZX0+e3Jvd1tjb2x1bW4ubmFtZV19PC9zcGFuPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxuXG59XG5cblRhYmxlU2VsZWN0TWVzc2FnZS5wcm9wVHlwZXMgPSBwcm9wdHlwZXMubWVzc2FnZVR5cGU7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBjdXJyZW50SW5wdXQ6IHN0YXRlLmN1cnJlbnRJbnB1dC5pbnB1dFxufSk7XG5cblRhYmxlU2VsZWN0TWVzc2FnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUYWJsZVNlbGVjdE1lc3NhZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNlbGVjdE1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})