"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
* octSlider.js 0.1.1
* 0.0.1 prototype
* 0.1.0 重构
* 0.1.1 更改执行方式为Promise
* 一个简单的图片滚动的javascript组件
* last update 2016-09-12 By@pcwow
*/

var template = {
	content: "<div class=\"octs-outter\" aria-live=\"polite\" >\n\t\t\t\t\t<ul class=\"octs-item-list\" ></ul>\n\t\t\t\t\t<ul class=\"octs-navigator-list\" ></ul>\n\t\t\t\t\t<div class=\"octs-button-group\" >\n\t\t\t\t\t\t<button class=\"octs-button octs-button-prev\" role=\"button\" ></button>\n\t\t\t\t\t\t<button class=\"octs-button octs-button-next\" role=\"button\" ></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>",
	item: "<li class=\"octs-item\" >\n\t\t\t\t<section class=\"octs-item-main\" >\n\t\t\t\t\t<img src=\"\" alt=\"\" />\n\t\t\t\t</section>\n\t\t\t\t<footer class=\"octs-item-footer\" >\n\t\t\t\t\t<a href=\"#\"></a>\n\t\t\t\t</footer>\n\t\t\t</li>",
	navigator: "<li class=\"octs-navigator-item\" role=\"button\" ></li>" //octs-navigator-item-active
};
var parseDom = function parseDom(html) {
	var div = document.createElement("div");
	div.innerHTML = html;
	return div.childNodes;
};

var genItemDom = function genItemDom(data) {
	var dom = parseDom(template.item)[0];
	var img = dom.children[0].children[0];
	var link = dom.children[1].children[0];
	img.src = data.img;
	img.alt = data.title;
	link.href = data.link;
	link.innerText = data.title;
	void 0;
	return dom;
};
var genNavigatorDom = function genNavigatorDom(data) {
	var dom = parseDom(template.navigator)[0];
	return dom;
};
var insertItemDom = function insertItemDom(sliderDom, data) {
	var list = sliderDom.children[0];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = data.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2);

			var index = _step$value[0];
			var item = _step$value[1];

			void 0;
			var itemDom = genItemDom(item);
			list.appendChild(itemDom);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return sliderDom;
};
var insertNavigatorDom = function insertNavigatorDom(sliderDom, data) {
	var list = sliderDom.children[1];
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = data.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _step2$value = _slicedToArray(_step2.value, 2);

			var index = _step2$value[0];
			var item = _step2$value[1];

			void 0;
			var navigatorDom = genNavigatorDom(item);
			if (index === 0) {
				navigatorDom.classList.add("octs-navigator-item-active");
			}
			list.appendChild(navigatorDom);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return sliderDom;
};
var removeNavigatorStatus = function removeNavigatorStatus(sliderDom) {
	var list = sliderDom.children[1].children;
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = [].entries.call(list)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _step3$value = _slicedToArray(_step3.value, 2);

			var index = _step3$value[0];
			var item = _step3$value[1];

			item.classList.remove("octs-navigator-item-active");
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
};
var slidePrev = function slidePrev(sliderDom, index, side) {
	return new Promise(function (resolve, reject) {
		var ul = sliderDom.children[0];
		var navigatorUl = sliderDom.children[1];
		var navigator = navigatorUl.children[index];
		var transition = ul.style.transition;
		var nowIndex = getIndex(navigatorUl, null, function (item) {
			return item.classList.contains("octs-navigator-item-active");
		});
		var time = side ? 1 : nowIndex - index;
		var els = [].map.call(ul.children, function (item) {
			return item;
		});
		var maxIndex = els.length - 1;
		var first = els[0];
		for (var i = 0; i < time; i++) {
			var nowEl = els[maxIndex - i];
			ul.insertBefore(nowEl, first);
			first = nowEl;
		}
		ul.style.cssText = "transition: none;\n\t\t\t\t\t\t\tmargin-left: -" + time + "00%;";
		setTimeout(function () {
			ul.style.cssText = "transition: " + transition + ";\n\t\t\t\t\t\t\t\tmargin-left: 0%;";
			var listener = function listener() {
				removeNavigatorStatus(sliderDom);
				navigator.classList.add("octs-navigator-item-active");
				ul.removeEventListener("transitionend", listener, false);
				void 0;
				resolve();
			};
			ul.addEventListener("transitionend", listener, false);
			void 0;
		}, 0);
		void 0;
	});
};
var slideNext = function slideNext(sliderDom, index, side) {
	return new Promise(function (resolve, reject) {
		var ul = sliderDom.children[0];
		var navigatorUl = sliderDom.children[1];
		var navigator = navigatorUl.children[index];
		var transition = ul.style.transition;
		var nowIndex = getIndex(navigatorUl, null, function (item) {
			return item.classList.contains("octs-navigator-item-active");
		});
		var time = side ? 1 : index - nowIndex;
		var els = [].map.call(ul.children, function (item) {
			return item;
		});
		ul.style.marginLeft = "-" + time + "00%";
		var listener = function listener() {
			for (var i = 0; i < time; i++) {
				ul.appendChild(els[i]);
			}
			ul.style.cssText = "transition: none;\n\t\t\t\t\t\t\t\tmargin-left: 0%;";
			setTimeout(function () {
				ul.style.transition = transition;
				removeNavigatorStatus(sliderDom);
				navigator.classList.add("octs-navigator-item-active");
				ul.removeEventListener("transitionend", listener, false);
				void 0;
				resolve();
			}, 0);
		};
		ul.addEventListener("transitionend", listener, false);
		void 0;
		void 0;
	});
};
var getIndex = function getIndex(parent, child, callback) {
	var children = parent.children;
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = [].entries.call(children)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var _step4$value = _slicedToArray(_step4.value, 2);

			var index = _step4$value[0];
			var item = _step4$value[1];

			if (child === item) {
				return index;
			} else if (callback && callback(item)) {
				return index;
			}
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}
};
var addEventListener = function addEventListener(sliderDom, setting) {
	var total = sliderDom.children[0].children.length;
	var prevBtn = sliderDom.children[2].children[0];
	var nextBtn = sliderDom.children[2].children[1];
	var navigators = sliderDom.children[1];
	var mouseover = false;
	sliderDom.index = 0;
	sliderDom.slide = Promise.resolve();;
	var goPrev = function goPrev(event) {
		sliderDom.slide = sliderDom.slide.then(function () {
			void 0;
			sliderDom.index = sliderDom.index - 1 < 0 ? total - 1 : sliderDom.index - 1;
			if (sliderDom.index === total - 1) {
				return slidePrev(sliderDom, sliderDom.index, true);
			} else {
				return slidePrev(sliderDom, sliderDom.index, false);
			}
		});
	};
	var goNext = function goNext(event) {
		sliderDom.slide = sliderDom.slide.then(function () {
			void 0;
			sliderDom.index = (sliderDom.index + 1) % total;
			if (sliderDom.index === 0) {
				return slideNext(sliderDom, sliderDom.index, true);
			} else {
				return slideNext(sliderDom, sliderDom.index, false);
			}
		});
	};
	prevBtn.addEventListener("click", goPrev, false);
	nextBtn.addEventListener("click", goNext, false);
	navigators.addEventListener("click", function (event) {
		var target = event.target;
		if (target.tagName.toLowerCase() != "li") return;
		sliderDom.slide = sliderDom.slide.then(function () {
			var targetIndex = getIndex(navigators, target);
			if (targetIndex > sliderDom.index) {
				sliderDom.index = targetIndex;
				void 0;
				return slideNext(sliderDom, sliderDom.index, false);
			} else if (targetIndex < sliderDom.index) {
				sliderDom.index = targetIndex;
				void 0;
				return slidePrev(sliderDom, sliderDom.index, false);
			}
		});
	}, false);
	sliderDom.addEventListener("mouseover", function (event) {
		mouseover = true;
	}, false);
	sliderDom.addEventListener("mouseout", function (event) {
		mouseover = false;
	}, false);
	if (setting.autoRun) {
		var autoRun = function autoRun() {
			if (!mouseover) {
				if (setting.reverse) {
					goPrev();
				} else {
					goNext();
				}
				void 0;
			}
			setTimeout(autoRun, setting.time);
		};
		setTimeout(autoRun, setting.time);
	}
	void 0;
	return sliderDom;
};
var defaultSetting = {
	autoRun: false,
	reverse: false,
	time: 3000
};
var octSlider = function octSlider(dom, data, setting) {
	setting = Object.assign(defaultSetting, setting);
	var sliderDom = parseDom(template.content)[0];
	//insert item dom
	sliderDom = insertItemDom(sliderDom, data);
	//insert navigator dom
	sliderDom = insertNavigatorDom(sliderDom, data);
	//add eventLisenner
	sliderDom = addEventListener(sliderDom, setting);
	//inert sliderDom to dom
	dom.appendChild(sliderDom);
	void 0;
};

exports.default = octSlider;
//# sourceMappingURL=octSlider.js.map
