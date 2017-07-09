webpackHotUpdate(0,{

/***/ 128:
/*!*******************************************************!*\
  !*** ./app/components/youtubePlayer/video_details.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 22), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 23), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 18), React = __webpack_require__(/*! react */ 7); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var VideoDetails = function VideoDetails(propsObj) {
	    var dataSelectedVideo = propsObj.dataSelectedVideo;
	
	
	    if (!dataSelectedVideo) {
	        return React.createElement(
	            "div",
	            null,
	            "Loading..."
	        );
	    }
	
	    var videoId = data_video.id.videoId;
	    var title = data_video.snippet.title;
	    var desc = data_video.snippet.description;
	    var videoURL = "http://www.youtube.com/embed/" + videoId;
	
	    return React.createElement(
	        "div",
	        { className: "video-detail col-md-8" },
	        React.createElement(
	            "div",
	            { className: "embed-responsive embed-responsive-16by9" },
	            React.createElement("iframe", { className: "embed-responsive-item", src: videoURL })
	        ),
	        React.createElement(
	            "div",
	            { className: "details" },
	            React.createElement(
	                "div",
	                null,
	                title
	            ),
	            React.createElement(
	                "div",
	                null,
	                desc
	            )
	        )
	    );
	};
	
	exports.default = VideoDetails;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 24); if (makeExportsHot(module, __webpack_require__(/*! react */ 7))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "video_details.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 28)(module)))

/***/ }

})
//# sourceMappingURL=0.c07d7cc6660760608d62.hot-update.js.map