webpackHotUpdate(0,{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// References to arg components, indexed by id (position of arg in list)\nvar arg_name = {},\n    arg_type = {},\n    arg_string = {};\n\n// Helper to update arg state using reference to components\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  var new_values = {\n    arg_name: arg_name[id].value,\n    arg_type: arg_type[id].value,\n    arg_string: arg_string[id].value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\n// Helper to update arg state to delete arg by id\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\n// Function that defines the set of arguments\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      args = _ref.args;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'label' },\n      'Arguments:'\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'arguments' },\n      args.map(function (arg, i) {\n        var name = arg.arg_name;\n        var string = arg.arg_string;\n        var arg_t = arg.arg_type;\n        return _react2.default.createElement(\n          'div',\n          { className: 'arg_annotation' },\n          _react2.default.createElement('input', { type: 'text', className: 'arg_name', placeholder: 'name of arg', onChange: function onChange() {\n              return onChangeInput(dispatch, id);\n            }, ref: function ref(node) {\n              arg_name[id] = node;\n            }, value: name }),\n          _react2.default.createElement(\n            'select',\n            { className: 'arg_type', value: arg_t, onChange: function onChange() {\n                return onChangeInput(dispatch, id);\n              }, ref: function ref(node) {\n                arg_type[id] = node;\n              } },\n            _react2.default.createElement(\n              'option',\n              null,\n              'Int'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'String'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Array'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Float'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Any'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Dataframe'\n            )\n          ),\n          _react2.default.createElement('input', { type: 'text', className: 'arg_string', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n              return onChangeInput(dispatch, id);\n            }, ref: function ref(node) {\n              arg_string[id] = node;\n            }, value: string }),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return onClickDelete(dispatch, id);\n              } },\n            'Delete'\n          )\n        );\n      })\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: addArgument(undefined.props.dispatch) },\n      'Add Argument'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    args: state.commandEditPane.args\n  };\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwibmV3X3ZhbHVlcyIsInZhbHVlIiwib25DbGlja0RlbGV0ZSIsIkFyZ3VtZW50QW5ub3RhdGlvbiIsImFyZ3MiLCJtYXAiLCJhcmciLCJpIiwibmFtZSIsInN0cmluZyIsImFyZ190Iiwibm9kZSIsImFkZEFyZ3VtZW50IiwicHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1hbmRFZGl0UGFuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBSUEsV0FBVyxFQUFmO0FBQUEsSUFBbUJDLFdBQVcsRUFBOUI7QUFBQSxJQUFrQ0MsYUFBYSxFQUEvQzs7QUFFQTtBQUNBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDLE1BQU1DLGFBQWE7QUFDakJOLGNBQVVBLFNBQVNLLEVBQVQsRUFBYUUsS0FETjtBQUVqQk4sY0FBVUEsU0FBU0ksRUFBVCxFQUFhRSxLQUZOO0FBR2pCTCxnQkFBWUEsV0FBV0csRUFBWCxFQUFlRTtBQUhWLEdBQW5CO0FBS0FILFdBQVMsNkJBQWlCQyxFQUFqQixFQUFxQkMsVUFBckIsQ0FBVDtBQUNELENBUEQ7O0FBU0E7QUFDQSxJQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUN0Q0QsV0FBUyw2QkFBaUJDLEVBQWpCLENBQVQ7QUFDRCxDQUZEOztBQUlBO0FBQ0EsSUFBSUkscUJBQXFCO0FBQUEsTUFBR0wsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYU0sSUFBYixRQUFhQSxJQUFiO0FBQUEsU0FDckI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0dBLFdBQUtDLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQUtDLENBQUwsRUFBVztBQUNuQixZQUFNQyxPQUFPRixJQUFJWixRQUFqQjtBQUNBLFlBQU1lLFNBQVNILElBQUlWLFVBQW5CO0FBQ0EsWUFBTWMsUUFBUUosSUFBSVgsUUFBbEI7QUFDQSxlQUFRO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0JBQWY7QUFDSixtREFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxVQUE3QixFQUF3QyxhQUFZLGFBQXBELEVBQWtFLFVBQVU7QUFBQSxxQkFBTUUsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLGFBQTVFLEVBQStHLEtBQUssbUJBQVE7QUFBQ0wsdUJBQVNLLEVBQVQsSUFBZVksSUFBZjtBQUFxQixhQUFsSixFQUFvSixPQUFPSCxJQUEzSixHQURJO0FBRUo7QUFBQTtBQUFBLGNBQVEsV0FBVSxVQUFsQixFQUE2QixPQUFPRSxLQUFwQyxFQUEyQyxVQUFVO0FBQUEsdUJBQU1iLGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxlQUFyRCxFQUF3RixLQUFLLG1CQUFRO0FBQUNKLHlCQUFTSSxFQUFULElBQWVZLElBQWY7QUFBcUIsZUFBM0g7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsV0FGSTtBQVVKLG1EQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLFlBQTdCLEVBQTBDLGFBQVksK0NBQXRELEVBQXNHLFVBQVU7QUFBQSxxQkFBTWQsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLGFBQWhILEVBQW1KLEtBQUssbUJBQVE7QUFBQ0gseUJBQVdHLEVBQVgsSUFBaUJZLElBQWpCO0FBQXVCLGFBQXhMLEVBQTBMLE9BQU9GLE1BQWpNLEdBVkk7QUFXSjtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU1QLGNBQWNKLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUE7QUFYSSxTQUFSO0FBYUQsT0FqQkE7QUFESCxLQUZGO0FBc0JFO0FBQUE7QUFBQSxRQUFRLFNBQVNhLFlBQVksVUFBS0MsS0FBTCxDQUFXZixRQUF2QixDQUFqQjtBQUFBO0FBQUE7QUF0QkYsR0FEcUI7QUFBQSxDQUF6Qjs7QUE0QkEsSUFBTWdCLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENYLFVBQU1XLE1BQU1DLGVBQU4sQ0FBc0JaO0FBRE0sR0FBWjtBQUFBLENBQXhCOztBQUlBRCxxQkFBcUIseUJBQVFXLGVBQVIsRUFBeUJYLGtCQUF6QixDQUFyQjs7a0JBRWVBLGtCIiwiZmlsZSI6IjQ5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlQ29tbWFuZEFyZywgZGVsZXRlQ29tbWFuZEFyZyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG4vLyBSZWZlcmVuY2VzIHRvIGFyZyBjb21wb25lbnRzLCBpbmRleGVkIGJ5IGlkIChwb3NpdGlvbiBvZiBhcmcgaW4gbGlzdClcbmxldCBhcmdfbmFtZSA9IHt9LCBhcmdfdHlwZSA9IHt9LCBhcmdfc3RyaW5nID0ge307XG5cbi8vIEhlbHBlciB0byB1cGRhdGUgYXJnIHN0YXRlIHVzaW5nIHJlZmVyZW5jZSB0byBjb21wb25lbnRzXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoLCBpZCkgPT4ge1xuICBjb25zdCBuZXdfdmFsdWVzID0ge1xuICAgIGFyZ19uYW1lOiBhcmdfbmFtZVtpZF0udmFsdWUsXG4gICAgYXJnX3R5cGU6IGFyZ190eXBlW2lkXS52YWx1ZSxcbiAgICBhcmdfc3RyaW5nOiBhcmdfc3RyaW5nW2lkXS52YWx1ZVxuICB9O1xuICBkaXNwYXRjaCh1cGRhdGVDb21tYW5kQXJnKGlkLCBuZXdfdmFsdWVzKSk7XG59O1xuXG4vLyBIZWxwZXIgdG8gdXBkYXRlIGFyZyBzdGF0ZSB0byBkZWxldGUgYXJnIGJ5IGlkXG5jb25zdCBvbkNsaWNrRGVsZXRlID0gKGRpc3BhdGNoLCBpZCkgPT4ge1xuICBkaXNwYXRjaChkZWxldGVDb21tYW5kQXJnKGlkKSk7XG59O1xuXG4vLyBGdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNldCBvZiBhcmd1bWVudHNcbmxldCBBcmd1bWVudEFubm90YXRpb24gPSAoeyBkaXNwYXRjaCwgYXJncyB9KSA9PlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+QXJndW1lbnRzOjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHNcIj5cbiAgICAgICAge2FyZ3MubWFwKChhcmcsaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhcmcuYXJnX25hbWU7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gYXJnLmFyZ19zdHJpbmc7XG4gICAgICAgICAgY29uc3QgYXJnX3QgPSBhcmcuYXJnX3R5cGU7XG4gICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImFyZ19hbm5vdGF0aW9uXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFyZ19uYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lIG9mIGFyZ1wiIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX25hbWVbaWRdID0gbm9kZTt9fSB2YWx1ZT17bmFtZX0vPlxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImFyZ190eXBlXCIgdmFsdWU9e2FyZ190fSBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ190eXBlW2lkXSA9IG5vZGU7fX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5JbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlN0cmluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+QXJyYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkZsb2F0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Bbnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGFmcmFtZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXJnX3N0cmluZ1wiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0byByZXF1ZXN0IHRoaXMgYXJndW1lbnQgZnJvbSB1c2VyLi4uXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfc3RyaW5nW2lkXSA9IG5vZGU7fX0gdmFsdWU9e3N0cmluZ30vPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRBcmd1bWVudCh0aGlzLnByb3BzLmRpc3BhdGNoKX0+QWRkIEFyZ3VtZW50PC9idXR0b24+XG4gICAgPC9kaXY+O1xuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBhcmdzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuYXJncyxcbn0pO1xuXG5Bcmd1bWVudEFubm90YXRpb24gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXJndW1lbnRBbm5vdGF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQXJndW1lbnRBbm5vdGF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQXJndW1lbnRBbm5vdGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})