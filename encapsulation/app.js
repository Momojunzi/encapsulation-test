/**
 * Created by rentalnet on 7/8/2016.
 */
var pageFunctions = {
    header:{
        img: function(){
            $("#header-img-link").attr("href", "#");
            $("#header-img").attr("src", "images/IMG_0446.JPG");
        },
        nav: {
            links:["#1","#2","#3"],
            linkText: ["link1", "link2", "link3"],
            linkFormat: function(){
                for (var i = 0; i < pageFunctions.header.nav.links.length; i++){
                    $("#nav-link" + i).attr("href", pageFunctions.header.nav.links[i]);
                    $("#link-text"+i).text(pageFunctions.header.nav.linkText[i]);
                }
            }
        }
    },
    run: function(){
        pageFunctions.header.img();
        pageFunctions.header.nav.linkFormat();
    }
};

pageFunctions.run();
