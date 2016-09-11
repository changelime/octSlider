# OctSlider.js 0.1.0
A simple image slider library 

[Demo](http://github.czli.me/octSlider/dist/demo/ "Demo")

-----------------


## 安装

```sh
jspm install github:changelime/octSlider
```

## 使用

```html
<link rel="stylesheet" type="text/css" href="/css/octSlider.css" />
```


```js
import octSlider from "changelime/octSlider";
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
octSlider(document.querySelector("selector"), data, {
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




