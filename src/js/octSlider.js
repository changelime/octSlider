/*
* octSlider.js 0.01
* 一个简单的图片滚动的jq插件
* 2014-10-28 By@pcwow
*/
(function($){
	var setting = {};
	var dom = {};
	var reset = function()
 	{
 		if(setting.length != 0)
  			clearTimeout(setting.run);
		setting = {
			height : 0,
			width : 0,
			sliderSpeed : 1000,
			time : 5000,
			linkSize : 0,
			length : 0,
			size : 0,
			index : 0,
			run : 0,
			flag : true,
			selectBar : true,
			sliderBtn : true,
			showLink : true,
			SelectorLayer : true,
			that : null
		};
		dom = {
			octSliderBox:{
				box : null,
				ul : null,
				li : [],
				a : [],
				imgs : []
			},
			SelectorLayer:{
				box : null,
				ul : null,
				li : [],
				prev : null,
				next : null
			}
		};
 	};
	var initSetting = function(data, set, that){
		setting.length = data.length;
		if(typeof set === "object")
 		{
 			if(set.sliderSpeed)
 				setting.sliderSpeed = set.sliderSpeed;
 			if(set.time)
 				setting.time = set.time;
 			if(typeof set.selectBar == "boolean")
 				setting.selectBar = set.selectBar;
 			if(typeof set.sliderBtn == "boolean")
 				setting.sliderBtn = set.sliderBtn;
 			if(typeof set.showLink == "boolean")
 				setting.showLink = set.showLink;
 			if(set.selectBar == false && set.sliderBtn == false)
 				setting.SelectorLayer = false;
 		}
 		setting.that = that;
		setting.width = that[0].offsetWidth;
		setting.height = setting.size * setting.width;
		setting.linkSize = parseInt(setting.height / 10);
	};
	var initCss = function(data){
		if(!$(dom.octSliderBox.box).hasClass("octSliderBox"))
			$(dom.octSliderBox.box).addClass("octSliderBox");
		$(dom.octSliderBox.box).css({"height" : setting.height+"px","width" : setting.width + "px"});
		
		if(setting.SelectorLayer)
		{
			if(!$(dom.SelectorLayer.box).hasClass("SelectorLayer"))
				$(dom.SelectorLayer.box).addClass("SelectorLayer");
			$(dom.SelectorLayer.box).css({"height" : (setting.height-(setting.linkSize*2))+"px", "width" : setting.width + "px"});
			if(setting.selectBar)
			{
				if(!$(dom.SelectorLayer.ul).hasClass("selectorUl"))
				{
					$(dom.SelectorLayer.ul).addClass("selectorUl");
					$(dom.SelectorLayer.ul).css({"height":"9px", "width" : setting.width/4+"px"});
				}
			}
		}
		if(setting.showLink)
		{
			dom.octSliderBox.a.forEach(function(item, index){
				$(item).css({
					"margin-top" : (setting.height-(setting.linkSize*2)) + "px",
					"font-size" : setting.linkSize + "px"
				});
				item.href = data[index].link;
				$(item).text(data[index].title);
			});
		}
		dom.octSliderBox.li.forEach(function(item, index){
			if(!$(item).hasClass("pic"))
				$(item).addClass("pic");
			$(item).css({"height":setting.height});
		});
		if(setting.selectBar)
		{
			dom.SelectorLayer.li.forEach(function(item, index){
				if(!$(item).hasClass("selectorli"))
				{
					var margin = parseInt((($(dom.SelectorLayer.ul)[0].offsetWidth/setting.length)-9)/2);
					$(item).addClass("selectorli");
					$(item).css({"margin":"0px "+margin+"px"});
				}
			});
		}
		if(setting.sliderBtn)
		{
			var offsetHeight = $(dom.SelectorLayer.ul)[0] ? $(dom.SelectorLayer.ul)[0].offsetHeight : 0;
			var height = (setting.height-(setting.linkSize*2))-offsetHeight;
			var width = (setting.width/6);
			var marginTop = (height-(width*2))/2;
			if(!$(dom.SelectorLayer.prev).hasClass("prev"))
				$(dom.SelectorLayer.prev).addClass("prev");
			if(!$(dom.SelectorLayer.next).hasClass("next"))
				$(dom.SelectorLayer.next).addClass("next");
			$(dom.SelectorLayer.prev).css({"border-width" :width+"px "+width+"px "+width + "px "+"0px","margin-top":marginTop+"px"});
			$(dom.SelectorLayer.next).css({"border-width" :width+"px "+"0px "+width + "px "+width+"px","margin-top":marginTop+"px"});
		}
	};
	var initDom = function(data){
		dom.octSliderBox.box = document.createElement("div");
		dom.octSliderBox.ul = document.createElement("ul");
		if(setting.SelectorLayer)
		{
			dom.SelectorLayer.box = document.createElement("div");
			if(setting.selectBar)
				dom.SelectorLayer.ul = document.createElement("ul");
			if(setting.sliderBtn)
			{
				dom.SelectorLayer.prev = document.createElement("div");
				dom.SelectorLayer.next = document.createElement("div");
			}
		}
		data.forEach(function(item, index){
 			var li = document.createElement("li");
 			
 				dom.octSliderBox.li.push(li);
 			if(setting.selectBar)
 			{
 				var selectorli = document.createElement("li");
 				dom.SelectorLayer.li.push(selectorli);
 				selectorli.index = index;
 				$(dom.SelectorLayer.ul).append(selectorli);
 			}
 			if(setting.showLink)
 			{
 				var a = document.createElement("a");
 				dom.octSliderBox.a.push(a);
 				$(li).append(a);
 			}
			$(li).append(dom.octSliderBox.imgs[index]);
			$(dom.octSliderBox.ul).append(li);
 		});
 		$(dom.octSliderBox.box).append(dom.octSliderBox.ul);
 		if(setting.SelectorLayer)
 		{
 			if(setting.selectBar)
 				$(dom.SelectorLayer.box).append(dom.SelectorLayer.ul);
 			if(setting.sliderBtn)
 			{
 				$(dom.SelectorLayer.box).append(dom.SelectorLayer.prev);
	 			$(dom.SelectorLayer.box).append(dom.SelectorLayer.next);
 			}
			setting.that.append(dom.SelectorLayer.box);
 		}
		setting.that.append(dom.octSliderBox.box);
	};
	var initPic = function(data, set, that, callback){
		if( !(data instanceof Array) || (data.length <= 0) )
			throw new Error("data must be an array and length must > 0");
		if( !data[0].img || !data[0].title || !data[0].link )
			throw new Error("object must contains title, link and img");
		var now = 0;
		var imgs = [];
		imgs.length = data.length;
		data.forEach(function(item, index){
			var img = new Image();
			img.src = item.img;
			img.onload = function(){
				imgs[index] = img;
				if((now++) == 0 || img.height/img.width < setting.size)
					setting.size = img.height/img.width;
				if(data.length == now)
				{
					dom.octSliderBox.imgs = imgs;
					callback();
				}
			};
			img.onerror = function(){
				throw new Error("img must be an url");
			};
		});
	};
	var init = function(data, set, that, callback){
		reset();
		initPic(data, set, that, function(){
			initSetting(data, set, that);
			initDom(data);
			initCss(data);
			callback();
		});
	};
	var slider = function(){
		setting.flag = false;
		setting.index = ((setting.index)%(setting.length));
		$(".selectorli").removeClass("select");
		$(".selectorli").eq(setting.index).addClass("select");
		$(".pic").animate({"top":-(setting.index++)*setting.height},setting.sliderSpeed,function(){
			setting.flag = true;
		});
		setting.run = setTimeout(arguments.callee,setting.time);
 	};
    $.fn.octSlider = function(data,set){
 		init(data, set, this, function(){
 			$(window).resize(function(){
 				initSetting(data, set, setting.that);
 				initCss(data);
 				if(setting.flag)
				{
					setting.run = clearTimeout(setting.run);
					slider();
				}
 			});
 			$(".selectorli").click(function(){
				if(setting.flag)
				{
					setting.run = clearTimeout(setting.run);
		 			setting.index = this.index;
		 			slider();
				}
	 		});
	 		$(dom.SelectorLayer.prev).click(function(){
	 			if(setting.flag)
				{
					setting.run = clearTimeout(setting.run);
		 			setting.index = (setting.index >=2 ) ? setting.index-2 : setting.length-1;
		 			slider(); 
				}			
	 		});
	 		$(dom.SelectorLayer.next).click(function(){
	 			if(setting.flag)
				{
					setting.run = clearTimeout(setting.run);
		 			slider();
				}
	 		});
 			slider();
 		});
    };
})(jQuery);