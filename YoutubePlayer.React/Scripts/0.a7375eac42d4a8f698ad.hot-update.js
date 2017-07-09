webpackHotUpdate(0,{

/***/ 130:
/*!*********************************************************!*\
  !*** ./app/components/youtubePlayer/video_list_item.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 22), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 23), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 18), React = __webpack_require__(/*! react */ 7); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var VideoListItem = function VideoListItem(propsObj) {
	
	    //destruct propsObj param
	    var dataId = propsObj.dataId,
	        dataVideo = propsObj.dataVideo,
	        onVideoSelect = propsObj.onVideoSelect;
	
	    //local vars
	
	    var title = dataVideo.snippet.title;
	    var imgURL = dataVideo.snippet.thumbnails.default.url;
	
	    //return HTML
	    return React.createElement(
	        "li",
	        { className: "list-group-item",
	            onClick: function onClick() {
	                return onVideoSelect(dataVideo);
	            } },
	        React.createElement(
	            "div",
	            { className: "video-list media" },
	            React.createElement(
	                "div",
	                { className: "media-left" },
	                React.createElement("img", { className: "media-object", src: imgURL })
	            ),
	            React.createElement(
	                "div",
	                { className: "media-body" },
	                React.createElement(
	                    "div",
	                    { className: "media-heading" },
	                    dataId,
	                    ".",
	                    title
	                )
	            )
	        )
	    );
	};
	
	exports.default = VideoListItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 24); if (makeExportsHot(module, __webpack_require__(/*! react */ 7))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "video_list_item.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 28)(module)))

/***/ }

})
//# sourceMappingURL=0.a7375eac42d4a8f698ad.hot-update.js.map