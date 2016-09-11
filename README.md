# OctSlider.js
A simple image slider library 

[![david-dm][david-dm-badge]][david-dm-link]
[![travis-ci][travis-ci-badge]][travis-ci-link]

[Demo](http://changelime.github.io/octSlider/dist/demo/ "Demo")

-----------------


## 安装

```sh
jspm install github:changelime/octSlider
```

## 使用
```html
<style type="text/css">
	#octSlider
	{
		width: 800vw;
		height: 400px;
		font-size: 2rem;
	}
</style>
<div id="octSlider"></div>
```


```js
import octSlider from "changelime/octSlider";
import "changelime/octSlider/dist/css/octSlider.css!";
var data = [
	{
		title : "title_1",
		link : "/link_1",
		img : "/image_1.png"
	},
	{
		title : "title_2",
		link : "/link_2",
		img : "/image_2.png"
	},
	{
		title : "title_3",
		link : "/link_3",
		img : "/image_3.png"
	},
	{
		title : "title_4",
		link : "/link_4",
		img : "/image_4.png"
	},
	{
		title : "title_5",
		link : "/link_5",
		img : "/image_5.png"
	}
];
octSlider(document.querySelector("#octSlider"), data, {
	autoRun: true,
	reverse: true,
	time: 4000
});
```

## 开发
```sh
git clone https://github.com/changelime/octSlider.git
cd octSlider
npm install -g jspm #if not installed
npm install -g gulp #if not installed
npm install --only=dev && jspm install
npm run built
```


## 许可证
MIT


<!-- Link -->
[david-dm-badge]:     https://david-dm.org/changelime/octSlider/dev-status.svg
[david-dm-link]:      https://david-dm.org/changelime/octSlider?type=dev
[travis-ci-badge]:    https://api.travis-ci.org/changelime/octSlider.svg
[travis-ci-link]:     https://travis-ci.org/changelime/octSlider