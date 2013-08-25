<?php require_once('config.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<title>[ALT]ern: home page</title>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<!-- add your meta tags here -->

<link href="css/my_layout.css" rel="stylesheet" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<!--[if lte IE 7]>
<link href="css/patches/patch_my_layout.css" rel="stylesheet" type="text/css" />
<![endif]-->
<script type="text/javascript" src="js/jquery/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/jquery/jquery.accordion.js"></script>
<script type="text/javascript">
function getParam(key, value) {
    var s = document.location.search;
    if (!s) {
        return value;
    }
    s = s.substr(1);
    var re = new RegExp('(^|\&)(' + key + ')\=([^\&]*)(\&|$)', 'gi');
    var res = re.exec(s);
    return (res != null) ? decodeURIComponent(res[3]) : value;
}
var i18n = {
    'en': {
        'Title' : '[ALT]ern: home page',
        'Layout' : 'Layout based on',
        'Version' : 'Version',
        'Findme' : 'Meet me online',
        'Aboutme' : 'About me',
        'Portfolio' : 'Portfolio',
        'ComingSoon' : 'Coming soon',
        'Band': '"Germanov" band'
    },
    'ru': {
        'Title' : '[ALT]ern: домашняя страница',
        'Layout' : 'Для верстки был использован',
        'Version' : 'Версия',
        'Findme' : 'Ищите меня в сети',
        'Aboutme' : 'Обо мне',
        'Portfolio' : 'Портфолио',
        'ComingSoon' : 'Вскоре появится',
        'Band': 'группа "Германов"'
    },
    'ua': {
        'Title' : '[ALT]ern: домашня сторінка',
        'Layout' : 'Верстування виконано за допомогою',
        'Version' : 'Версія',
        'Findme' : 'Шукайте мене в мережі',
        'Aboutme' : 'Про мене',
        'Portfolio' : 'Портфоліо',
        'ComingSoon' : 'З\'явиться незабаром',
        'Band': 'гурт "Германов"'
    }
}
document.lang = getParam('lang', 'en');

String.prototype.localize = function(){
    var cReturnValue = (i18n) ? i18n[document.lang][this] : this;

    if(!cReturnValue){
        cReturnValue = "§§§" + this + "§§§";
    } else {
        for (var i = 0; i < arguments.length; i++){
                cReturnValue = cReturnValue.replace("{" + i + "}", arguments[i]);
        }
    }
    return cReturnValue;
};
function setLanguage(language) {
    if(typeof language == 'string') {
        document.lang = language;
    } else {
        document.lang = this.id;
    }
    $('.i18n').each(function(i) {
        $(this).html(this.id.localize());
        if(this.id == 'Title') {
            document.title = this.id.localize();
        }
    });

    $('.lang').each(function(i) {
        $(this).removeClass('current');
    });
    
    $('#' + document.lang).addClass('current');
}
$(document).ready(function(){
    $('.lang').each(function(i){
        if(this.id == document.lang){
            setLanguage(document.lang);
        }
        this.onclick = setLanguage;
    });
    if (window.location.hash) {
        setLanguage(window.location.hash.substr(1));
    }
    jQuery('#accordion').accordion({
        navigation: true,
        autoheight: true,
        collapsible: false,
        header: 'h2'
    });
});
</script>
</head>
<body>
  <div class="page_margins">
    <!-- start: skip link navigation -->
    <!-- end: skip link navigation -->
    <div id="border-top">
      <div id="edge-tl"></div>
      <div id="edge-tr"></div>
    </div>
    <div class="page">
      <div id="topnav">
        <!-- start: skip link navigation -->
        <!-- end: skip link navigation -->
        <a id="en" class="lang" href="#en"><img src="images/flags/en.png" />English</a> |
        <a id="ru" class="lang" href="#ru"><img src="images/flags/ru.png" />Русский</a> |
        <a id="ua" class="lang" href="#ua"><img src="images/flags/ua.png" />Українська</a>
      </div>
      <div id="header">
          <div style="float:left;" >
              <img src="images/logos/home.png" alt="logo"/>
          </div>
          <div>
            <h1><a href="http://<?=$_SERVER['HTTP_HOST'];?>"><span class="i18n" id="Title" /></a></h1>
          </div>
      </div>
      <div id="main" style="text-align: center">
          <iframe align="center" src="http://www.flickr.com/slideShow/index.gne?group_id=&user_id=66622046@N00&set_id=72157624689973888&tags=birthday,celebration,fun,cinema,movies" frameBorder="0" width="500" height="500" scrolling="no"></iframe>
       
      </div>
      <!-- begin: #footer -->
      <div id="footer">
          <span class="i18n" id="Layout"> </span> <a href="http://www.yaml.de/">YAML</a>

          <!--<img src="images/logos/jQuery-logo.png" align="top"/>-->
          <span id="logos">
            <img src="images/logos/php5.png" align="top"/>
            <img src="images/logos/w3c_xhtml.png" align="top"/>
            <img src="images/logos/w3c_css.png" align="top"/>
          </span>
          <span style="float:right"><span class="i18n" id="Version"> </span> <?=$GLOBALS['options']['version']?></span>
      </div>
    </div>
    <div id="border-bottom">
      <div id="edge-bl"></div>
      <div id="edge-br"></div>
    </div>
  </div>
</body>
</html>
