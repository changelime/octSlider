/*
* octSlider.js 0.10
* 一个简单的图片滚动的javascript组件
* 2014-10-28 By@pcwow
*/

var template = {
	content: `<div class="octs-outter" aria-live="polite" >
					<ul class="octs-item-list" ></ul>
					<ul class="octs-navigator-list" ></ul>
					<div class="octs-button-group" >
						<button class="octs-button octs-button-prev" role="button" ></button>
						<button class="octs-button octs-button-next" role="button" ></button>
					</div>
				</div>`,
	item: `<li class="octs-item" >
				<section class="octs-item-main" >
					<img src="" alt="" />
				</section>
				<footer class="octs-item-footer" >
					<a href="#"></a>
				</footer>
			</li>`,
	navigator: `<li class="octs-navigator-item" role="button" ></li>`//octs-navigator-item-active
};
var parseDom = function parseDom(html) {
　　 var div = document.createElement("div");
　　 div.innerHTML = html;
　　 return div.childNodes;
};

var genItemDom = function genItemDom(data){
	var dom = parseDom(template.item)[0];
	var img = dom.children[0].children[0];
	var link = dom.children[1].children[0];
	img.src = data.img;
	img.alt = data.title;
	link.href = data.link;
	link.innerText = data.title;
	console.log(img);
	return dom;
};
var genNavigatorDom = function genNavigatorDom(data){
	var dom = parseDom(template.navigator)[0];
	return dom;
};
var insertItemDom = function insertItemDom(sliderDom, data){
	var list = sliderDom.children[0];
	for( let [index, item] of data.entries() )
	{
		console.log(index, item);
		let itemDom = genItemDom(item);
		list.appendChild(itemDom);
	}
	return sliderDom;
};
var insertNavigatorDom = function insertNavigatorDom(sliderDom, data){
	var list = sliderDom.children[1];
	for( let [index, item] of data.entries() )
	{
		console.log(index, item);
		let navigatorDom = genNavigatorDom(item);
		if(index === 0)
		{
			navigatorDom.classList.add("octs-navigator-item-active");
		}
		list.appendChild(navigatorDom);
	}
	return sliderDom;
};
var removeNavigatorStatus = function removeNavigatorStatus(sliderDom){
	var list = sliderDom.children[1].children;
	for( let [index, item] of [].entries.call(list) )
	{
		item.classList.remove("octs-navigator-item-active");
	}
};
var slidePrev = function slidePrev(sliderDom, index, side){
	var ul = sliderDom.children[0];
	var navigatorUl = sliderDom.children[1];
	var navigator = navigatorUl.children[index];
	var transition = ul.style.transition;
	var nowIndex = getIndex(navigatorUl, null, item=>item.classList.contains("octs-navigator-item-active"));
	var time = side ? 1 : (nowIndex - index);
	var els = [].map.call(ul.children, item=>item);
	var maxIndex = els.length - 1;
	var first = els[0];
	for(let i = 0; i < time; i++)
	{
		let nowEl = els[ maxIndex - i ];
		ul.insertBefore(nowEl, first);
		first = nowEl;
	}
	ul.style.cssText = `transition: none;
						margin-left: -${time}00%;`;
	setTimeout(function(){
		ul.style.cssText = `transition: ${transition};
						  	margin-left: 0%;`;
		let listener = function (){
			removeNavigatorStatus(sliderDom);
			navigator.classList.add("octs-navigator-item-active");
			sliderDom.slideOver = true;
			ul.removeEventListener("transitionend", listener, false);	
			console.log("remove slidePrev transitionend");
		};
		ul.addEventListener("transitionend", listener, false);
		console.log("add slidePrev transitionend");
	}, 0);
	sliderDom.slideOver = false;
	console.log("slidePrev", nowIndex, time);
};
var slideNext = function slideNext(sliderDom, index, side){
	var ul = sliderDom.children[0];
	var navigatorUl = sliderDom.children[1];
	var navigator = navigatorUl.children[index];
	var transition = ul.style.transition;
	var nowIndex = getIndex(navigatorUl, null, item=>item.classList.contains("octs-navigator-item-active"));
	var time = side ? 1 : (index - nowIndex);
	var els = [].map.call(ul.children, item=>item);
	ul.style.marginLeft = `-${time}00%`;
	var listener = function (){
		for(let i = 0; i < time; i++)
		{
			ul.appendChild(els[i]);
		}
		ul.style.cssText = `transition: none;
							margin-left: 0%;`;
		setTimeout(function(){
			ul.style.transition = transition;
			removeNavigatorStatus(sliderDom);
			navigator.classList.add("octs-navigator-item-active");
			sliderDom.slideOver = true;
			ul.removeEventListener("transitionend", listener, false);
			console.log("remove slideNext transitionend");
		}, 0);
	};
	ul.addEventListener("transitionend", listener, false);
	console.log("add slideNext transitionend");
	sliderDom.slideOver = false;
	console.log("slideNext", nowIndex, time);
};
var getIndex = function getIndex(parent, child, callback){
	var children = parent.children;
	for( let [index, item] of [].entries.call(children) )
	{
		if( child === item  )
		{
			return index;
		}
		else if( callback && callback(item) )
		{
			return index;
		}
	}
};
var addEventListener = function addEventListener(sliderDom, setting){
	var index = 0;
	var total = sliderDom.children[0].children.length;
	sliderDom.slideOver = true;
	var prevBtn = sliderDom.children[2].children[0];
	var nextBtn = sliderDom.children[2].children[1];
	var navigators = sliderDom.children[1];
	var mouseover = false;
	var timeoutId = 0;
	prevBtn.addEventListener("click", function(event){
		console.log("prevBtn", index, sliderDom.slideOver);
		if( !sliderDom.slideOver )
			return;
		index = (index - 1)  < 0 ? (total - 1) : (index - 1);
		if( index === (total - 1) )
		{
			slidePrev(sliderDom, index, true);
		}
		else
		{
			slidePrev(sliderDom, index, false);
		}
	}, false);
	nextBtn.addEventListener("click", function(event){
		console.log("nextBtn", index, sliderDom.slideOver);
		if( !sliderDom.slideOver )
			return;
		index = (index + 1) % total;
		if( index === 0 )
		{
			slideNext(sliderDom, index, true);
		}
		else
		{
			slideNext(sliderDom, index, false);
		}
	}, false);
	navigators.addEventListener("click", function(event){
		var target = event.target;
		if( !(sliderDom.slideOver) || (target.tagName.toLowerCase() != "li") )
			return;
		var targetIndex = getIndex(navigators, target);
		if( targetIndex > index )
		{
			index = targetIndex;
			slideNext(sliderDom, index, false);
			console.log("click navigators next");
		}
		else if(targetIndex < index)
		{
			index = targetIndex;
			slidePrev(sliderDom, index, false);
			console.log("click navigators prev");
		}
		console.log(target, targetIndex);
	}, false);
	sliderDom.addEventListener("mouseover", function(event){
			mouseover = true;
	}, false);
	sliderDom.addEventListener("mouseout", function(event){
			mouseover = false;
	}, false);
	if( setting.autoRun )
	{
		var autoRun = function autoRun(){
			if( !mouseover )
			{
				if( setting.reverse )
				{
					prevBtn.click();
				}
				else
				{
					nextBtn.click();
				}
			}
			timeoutId = setTimeout(autoRun, setting.time);
		};
		timeoutId = setTimeout(autoRun, setting.time);
	}
	console.log(prevBtn, nextBtn);
	return sliderDom;
};
var defaultSetting = {
    autoRun: false,
    reverse: false,
    time: 3000
};
var octSlider = function octSlider(dom, data, setting){
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
	console.log("octSlider", sliderDom, setting);
};

export default octSlider;