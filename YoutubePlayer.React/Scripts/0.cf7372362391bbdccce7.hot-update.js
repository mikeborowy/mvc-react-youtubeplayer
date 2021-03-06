webpackHotUpdate(0,[
/* 0 */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 22), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 23), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 18), React = __webpack_require__(/*! react */ 7); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 118);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _youtubeApiSearch = __webpack_require__(/*! youtube-api-search */ 199);
	
	var _youtubeApiSearch2 = _interopRequireDefault(_youtubeApiSearch);
	
	var _search_bar = __webpack_require__(/*! ./components/youtubePlayer/search_bar */ 127);
	
	var _search_bar2 = _interopRequireDefault(_search_bar);
	
	var _video_list = __webpack_require__(/*! ./components/youtubePlayer/video_list */ 129);
	
	var _video_list2 = _interopRequireDefault(_video_list);
	
	var _video_details = __webpack_require__(/*! ./components/youtubePlayer/video_details */ 128);
	
	var _video_details2 = _interopRequireDefault(_video_details);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//YoutUbe Components
	
	
	//global vars
	var API_KEY = 'AIzaSyD4UO4mm5j3jLFFapyCeR79sUV8hYORq64';
	var DEBUG_MODE = true;
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            st_videos: [],
	            st_selectedVideo: null
	
	            //component functions bindings
	        };_this.selectVideoFn = _this.selectVideoFn.bind(_this);
	        _this.videoSearchFn = _this.videoSearchFn.bind(_this);
	
	        _this.videoSearchFn('terminator');
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'selectVideoFn',
	        value: function selectVideoFn(selectedVideo) {
	            this.setState({ st_selectedVideo: selectedVideo });
	        }
	    }, {
	        key: 'videoSearchFn',
	        value: function videoSearchFn(term) {
	            var _this2 = this;
	
	            //yt ajax call
	            (0, _youtubeApiSearch2.default)({ key: API_KEY, term: term }, function (videos) {
	
	                if (DEBUG_MODE) console.log(_this2.state.st_videos);
	
	                _this2.setState({
	                    st_videos: videos,
	                    st_selectedVideo: videos[0]
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_search_bar2.default, {
	                    onSearchTermChange: function onSearchTermChange(term) {
	                        return _this3.videoSearchFn(term);
	                    } }),
	                React.createElement(_video_details2.default, {
	                    dataSelectedVideo: this.state.st_selectedVideo }),
	                React.createElement(_video_list2.default, {
	                    dataVideos: this.state.st_videos,
	                    onVideoSelect: function onVideoSelect(st_selectedVideo) {
	                        return _this3.selectVideoFn(st_selectedVideo);
	                    } })
	            );
	        }
	    }]);
	
	    return App;
	}(React.Component);
	
	;
	
	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 24); if (makeExportsHot(module, __webpack_require__(/*! react */ 7))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 28)(module)))

/***/ }
])
//# sourceMappingURL=0.cf7372362391bbdccce7.hot-update.js.map