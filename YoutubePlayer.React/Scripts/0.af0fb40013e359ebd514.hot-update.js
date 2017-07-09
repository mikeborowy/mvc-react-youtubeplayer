webpackHotUpdate(0,{

/***/ 129:
/*!****************************************************!*\
  !*** ./app/components/youtubePlayer/video_list.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 22), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 23), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 18), React = __webpack_require__(/*! react */ 7); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var React = _interopRequireWildcard(_react);
	
	var _video_list_item = __webpack_require__(/*! ./video_list_item */ 130);
	
	var _video_list_item2 = _interopRequireDefault(_video_list_item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var VideosList = function VideosList(propsObj) {
	
	    //destruct propsObj param
	    var dataVideos = propsObj.dataVideos;
	
	    //return HTML
	
	    return React.createElement(
	        'ul',
	        { className: 'col-md-4 list-group' },
	        dataVideos.map(function (videoDataItem, i) {
	
	            return React.createElement(_video_list_item2.default, {
	                key: videoDataItem.etag,
	                dataId: i,
	                dataVideo: videoDataItem });
	        })
	    );
	};
	
	exports.default = VideosList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 24); if (makeExportsHot(module, __webpack_require__(/*! react */ 7))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "video_list.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 28)(module)))

/***/ }

})
//# sourceMappingURL=0.af0fb40013e359ebd514.hot-update.js.map