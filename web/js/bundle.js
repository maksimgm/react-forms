(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _formComponent = require('./form-component');

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_formComponent2.default, null), document.getElementById('app'));

},{"./form-component":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this.state = { value: '' };
    // will need to be altered to hash table in order to store a various
    // values, by date, time, username, group, etc.
    _this.input = [];
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NameForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      this.input.push(this.state.value);

      console.log(this.setState({ value: this.state.value }));
      console.log(this.state.value);
      return (
        //somehow use flex box display
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            this.state.value
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'label',
          null,
          'Name:',
          _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
        ),
        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return NameForm;
}(_react2.default.Component);

exports.default = NameForm;

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2Zvcm0tY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLG1CQUFTLE1BQVQsQ0FBaUIsNERBQWpCLEVBQ2dCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQURoQjs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7O0lBRU0sUTs7O0FBQ0osb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQUMsT0FBTyxFQUFSLEVBQWI7QUFDQTtBQUNBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEI7QUFDQSxVQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCO0FBUGlCO0FBUWxCOzs7O2lDQUVZLEssRUFBTztBQUNsQixXQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQU8sTUFBTSxNQUFOLENBQWEsS0FBckIsRUFBZDtBQUNEOzs7aUNBRVksSyxFQUFPO0FBQ2xCLFlBQU0sY0FBTjs7QUFFQSxXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQUssS0FBTCxDQUFXLEtBQTNCOztBQUVBLGNBQVEsR0FBUixDQUFZLEtBQUssUUFBTCxDQUFjLEVBQUMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFuQixFQUFkLENBQVo7QUFDQSxjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUF2QjtBQUNBO0FBQ0U7QUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBTyxpQkFBSyxLQUFMLENBQVc7QUFBbEI7QUFERjtBQUZGO0FBTUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sVUFBVSxLQUFLLFlBQXJCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFyQyxFQUE0QyxVQUFVLEtBQUssWUFBM0Q7QUFGRixTQURGO0FBS0UsaURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFMRixPQURGO0FBU0Q7Ozs7RUF4Q29CLGdCQUFNLFM7O2tCQTJDZCxRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9mb3JtLWNvbXBvbmVudCc7XG4gXG5cblJlYWN0RE9NLnJlbmRlciggPEZvcm1Db21wb25lbnQvPiwgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgICAgICAgICAgKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBOYW1lRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfTtcbiAgICAvLyB3aWxsIG5lZWQgdG8gYmUgYWx0ZXJlZCB0byBoYXNoIHRhYmxlIGluIG9yZGVyIHRvIHN0b3JlIGEgdmFyaW91c1xuICAgIC8vIHZhbHVlcywgYnkgZGF0ZSwgdGltZSwgdXNlcm5hbWUsIGdyb3VwLCBldGMuXG4gICAgdGhpcy5pbnB1dCA9IFtdO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIHRoaXMuaW5wdXQucHVzaCh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNldFN0YXRlKHt2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZX0pKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICByZXR1cm4gKFxuICAgICAgLy9zb21laG93IHVzZSBmbGV4IGJveCBkaXNwbGF5XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS52YWx1ZX08L3NwYW4+ICBcbiAgICAgIDwvZGl2PlxuICAgICk7IFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVGb3JtOyJdfQ==
