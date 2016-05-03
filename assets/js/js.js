$(function () {

    $('.menu ul li').mouseover(function () {
        var box = $(this).attr('class').split("-");
        $('.' + box[0]).addClass('displayBlock');
    })
    $('.menu ul li').mouseleave(function () {
        var box = $(this).attr('class').split("-");
        $('.' + box[0]).removeClass('displayBlock');
    });

    $('.bars').click(function () {
        $('.sideNavMenu, .sideMenu').slideToggle();

    })

    //Market Tab Menü

    $(".marketWrap .marketBody").hide();
    $(".marketWrap .marketBody:first").show();
    $(".butonlar div.devam").hide();
    $(".butonlar div.devam:first").show();

    $(".marketKategori ul li").click(function () {
        var indis = $(this).index();
        $(".marketKategori ul li a").removeClass('aktif');
        $(this).find('a').addClass('aktif');
        $(".marketWrap .marketBody").stop().fadeOut(0);
        $('.marketWrap .marketBody:eq(' + indis + ')').stop().fadeIn(0);
        $(".butonlar div.devam").stop().fadeOut(0);
        $('.butonlar div.devam:eq(' + indis + ')').stop().fadeIn(0);
    })

    //Oyun Tab Menü

    $(".oyunWrap .oyunBody").hide();
    $(".oyunWrap .oyunBody:first").show();
    $(".butonlar2 div.devam2").hide();
    $(".butonlar2 div.devam2:first").show();

    $(".oyunKategori ul li").click(function () {
        var indis = $(this).index();
        $(".oyunKategori ul li a").removeClass('aktif');
        $(this).find('a').addClass('aktif');
        $(".oyunWrap .oyunBody").stop().fadeOut(0);
        $('.oyunWrap .oyunBody:eq(' + indis + ')').stop().fadeIn(0);
        $(".butonlar2 div.devam2").stop().fadeOut(0);
        $('.butonlar2 div.devam2:eq(' + indis + ')').stop().fadeIn(0);
    })


    /*
    
        $('.urunKucukResimler ul li').click(function() {
            var index = $(this).index();
    
            // Büyük Ekranda Gösterilecek Kısım 
            var buyukYol = $('.urunBuyukResim').find('img').attr('src');
            // var buyukYolDizi = buyukYol.split("/");
            // var buyukYolDiziUzunluk = buyukYolDizi.length -1;
            // Büyük Ekranda Gösterilecek Kısım 
            var kucukYol = $(this).find('img').attr('src');
            
            // var kucukYolDizi = kucukYol.split("/");
            // var kucukYolDiziUzunluk = kucukYolDizi.length -1;
    
            //  var temp = kucukYolDizi[kucukYolDiziUzunluk];
            //  kucukYolDizi[kucukYolDiziUzunluk] =  buyukYolDizi[buyukYolDiziUzunluk];
            //  buyukYolDizi[buyukYolDiziUzunluk] = temp;
     
            var temp = kucukYol;
            kucukYol = buyukYol;
            buyukYol = temp;
     
    
            $(this).find('img').attr('src', kucukYol);
            $('.urunBuyukResim').find('img').stop().fadeOut(0).attr('src', buyukYol).fadeIn(600);
    
    
    
        })
    */


    $('.urunKucukResimler ul li').click(function () {
        var index = $(this).index();
        var kucukYol = $(this).find('img').attr('src');

        $('.urunBuyukResim').find('img').stop().fadeOut(0).attr('src', kucukYol).fadeIn(600);

    })


    //Resim ayarlama

    var buyukResim = $('.urunDetayResim .urunBuyukResim');
    var anaSayfaOnemli = $('.onemli .imgWrap');
    oran_177(buyukResim);
    oran_177(anaSayfaOnemli);
    function oran_177(e) {

        var oranHeight = e.width() / 1.77;
        e.height(oranHeight);
    }

    $(window).resize(function () {
        oran_177(buyukResim);
        oran_177(anaSayfaOnemli);
    });
    
    
    
    var takvimResim = $('.takvimWrap .takvimBody .mehmetCol');
     oran_133(takvimResim);
   
  
    function oran_133(e){
        var oranHeight = e.width() / 1.33;
        e.height(oranHeight);  
    }
    
    
    
    
     $(window).resize(function () {
        oran_133(takvimResim);
    });
    
    
    //Son eklenen Alan   
    var sonEklenen = $('.sonEklenenAlan .eklenenResim .imgWrap');
    var satisResim = $('.satisAlan .urunSatis .satisResim a .imgWrap');
    var market = $('.marketWrap .marketBody .row .col-lg-3 .arkaPlan');
    var oyun = $('.oyunWrap .oyunBody .row .col-lg-3 .arkaPlan');
    oran_7(sonEklenen);
    oran_7(satisResim);
    oran_7(market);
    oran_7(oyun);
    function oran_7(e){
        var oranHeight = e.width()/0.7;
        e.height(oranHeight);
    }
    
     $(window).resize(function () {
        oran_7(sonEklenen);
        oran_7(satisResim);
        oran_7(market);
         oran_7(oyun);
    });
    
          var mc = document.getElementById("full-slider-wrapper");
        var hammer = new Hammer(mc);
        hammer.on("swipeleft", function(e) {
            stop();
            $('.slider').find('.prev').click();

        });
        hammer.on("swiperight", function(e) {
            stop();
            $('.slider').find('.next').click();
        
        });
   
 
});