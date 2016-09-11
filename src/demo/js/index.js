import octSlider from "../../js/octSlider";
var data = [
    {
        title : "11111111111111111111111111111111111111111111111111111222222222222221111111111",
        link : "111",
        img : "http://spnews.qiniudn.com/1.png"
    },
    {
        title : "222",
        link : "222",
        img : "http://spnews.qiniudn.com/2.png"
    },
    {
        title : "333",
        link : "333",
        img : "http://spnews.qiniudn.com/3.png"
    },
    {
        title : "444",
        link : "444",
        img : "http://spnews.qiniudn.com/4.png"
    },
    {
        title : "555",
        link : "55555",
        img : "http://spnews.qiniudn.com/5.png"
    }
];
octSlider(document.querySelector("#octSlider"), data, {
    autoRun: true,
    // reverse: true,
    // time: 3000
});