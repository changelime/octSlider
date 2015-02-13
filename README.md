#octSlider.js 0.01
A simple image slider plugin for jQuery 

[Demo](http://blog.czli.me/octSlider/example/ "Demo")

-----------------

##Installation

##Step 1: Link required files

    <!-- jQuery library (served from bootcdn) -->
	<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <!-- octSlider Javascript file -->
    <script src="/js/octSlider.js"></script>
    <!-- octSlider CSS file -->
    <link href="/css/octSlider.css" rel="stylesheet" />

##Step 2: Create HTML markup
    <div id="octSlider"></div>

##Step 3: Call the octSlider
data is a json array,each object must containing  `title` , `link` and `img` members

    $(document).ready(function(){
        var data = [
			{
				title : "1111111",
				link : "111",
				img : "image/1.jpg"
			},
			{
				title : "222",
				link : "222",
				img : "image/2.jpg"
			},
			{
				title : "333",
				link : "333",
				img : "image/3.jpg"
			},
			{
				title : "444",
				link : "444",
				img : "image/4.jpg"
			},
			{
				title : "555",
				link : "55555",
				img : "image/5.jpg"
			}
		];
        $('#octSlider').octSlider(data,{
            selectBar : true,
			sliderBtn : true,
			showLink : true,
			sliderSpeed : 1000,
			time : 5000
        });
        //or just  $('#octSlider').octSlider(data);
    });
