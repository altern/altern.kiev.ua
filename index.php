<?php require_once('config.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <title>[ALT]ern: home page</title>
        <meta name="description" content="Personal home page of web-developer Sergey Shmarkatyuk (altern)">
        <meta name="keywords" content="altern, Sergey Shmarkatyuk, Sergii Shmarkatiuk, Сергей Шмаркатюк, Сергій Шмаркатюк, SCM, software configuration management, configuration management, конфигурационный менеджмент, конфігураційний менеджмент">
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <!-- add your meta tags here -->

        <link href="css/my_layout.css" rel="stylesheet" type="text/css" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/tipsy.css" rel="stylesheet" type="text/css" />
        <link href="css/interests.css" rel="stylesheet" type="text/css" />
        <!--[if lte IE 7]>
        <link href="css/patches/patch_my_layout.css" rel="stylesheet" type="text/css" />
        <![endif]-->
        <script type="text/javascript" src="js/ganalytics.js"></script>
        <script type="text/javascript" src="js/jquery/jquery-1.5.1.min.js"></script>
        <script type="text/javascript" src="js/jquery/jquery.accordion.js"></script>
        <script type="text/javascript" src="js/jquery/jquery.tipsy.js"></script>
        <script type="text/javascript" src="js/jquery/jquery.url.js"></script>
        <script type="text/javascript" src="js/jit.js"></script>
        <script type="text/javascript" src="js/lang.js"></script>
        <script type="text/javascript" src="js/interests.js"></script>
        <script type="text/javascript">

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
                }).bind('change.ui-accordion', function(event) {
                    interests.init('aboutme');
                });

                // tipsy tips
                jQuery.each($.map($('.socialNetwork'), function(item) { return item.id}),
                function(number, id) {
                    $('li#' + id).tipsy({
                        title: function() {return this.id.localize();},
                        gravity:  $.fn.tipsy.autoWE
                    });
                }
            );
                /*jQuery.each($.map($('.scmSession'), function(item) { return item.id}),
                function(number, id) {
                    $('#' + id).tipsy({
                        title: function() {return this.id.localize();},
                        gravity: 's',
                        html: true,
                        width: '200px'
                    });
                }
            );*/
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
                        <h1><a href="<?= $_SERVER['HOSTNAME']; ?>"><span class="i18n" id="Title" /></a></h1>
                    </div>

                </div>
                <div id="main">
                    <div id="accordion" class="basic">
                        <div id="main_section">
                            <span class="i18n" id="SCMF" />
                        </div>
                        <h2><a href="?p=findmeonline"><span class="i18n" id="Findme" /></a></h2>
                        <div id="findmeonline" class="accordion_block">
                            <div id="col1">
                                <div id="col1_content" class="clearfix">
                                    <ul>
                                        <li id="email" class="socialNetwork"><a href="mailto:sergey.shmarkatyuk@gmail.com"><img src="images/social_networks/email_32.png"/>sergey.shmarkatyuk@gmail.com</a></li>
                                        <!--<li id="icq" class="socialNetwork"><a href="http://www.icq.com/224128122"><img src="images/social_networks/icq_32.png"/>224128122</a></li>-->
                                        <li id="github" class="socialNetwork"><a href="http://github.com/altern"><img src="images/social_networks/git_32.png"/>altern</a></li>
                                        <li id="linkedin" class="socialNetwork"><a href="http://www.linkedin.com/in/shmarkatyuk"><img src="images/social_networks/linkedin_32.png"/>shmarkatyuk</a></li>
                                        <!--<li id="moikrug" class="socialNetwork"><a href="http://shmarkatyuk.moikrug.ru/"><img src="images/social_networks/moikrug_32.png"/>shmarkatyuk</a></li>-->
                                        <li id="quotica" class="socialNetwork"><a href="http://www.quoti.ca/altern/"><img src="images/social_networks/quotica_32.png"/>altern</a></li>
                                        <li id="facebook" class="socialNetwork"><a href="http://www.facebook.com/people/Sergey-Shmarkatyuk/1753009147"><img src="images/social_networks/facebook_32.png"/>Sergey Shmarkatyuk</a></li>
                                        <li id="wordpress" class="socialNetwork"><a href="http://scm.altern.kiev.ua"><img src="images/social_networks/wordpress_32.png"/>scm.altern.kiev.ua</a></li>
                                        <li id="twitter" class="socialNetwork"><a href="http://twitter.com/altern"><img src="images/social_networks/twitter_32.png"/>altern</a></li>
<!--                                        <li id="ilovecinema" class="socialNetwork"><a href="http://ilovecinema.ru/users/altern"><img src="images/social_networks/ilovecinema.png" width="30" height="30"/>altern</a></li>-->
                                        <li id="foursquare" class="socialNetwork"><a href="https://foursquare.com/user/17214657"><img src="images/social_networks/foursquare_32.png" width="30" height="30"/>altern</a></li>
                                        <li id="stackoverflow" class="socialNetwork"><a href="http://stackoverflow.com/users/50962/altern"><img src="images/social_networks/stackoverflow_32.png"/>altern</a></li>
                                        <li id="flavors" class="socialNetwork"><a href="http://flavors.me/altern"><img src="images/social_networks/flavors.me_32.png"/>altern</a></li>
<!--                                        <li id="badoo" class="socialNetwork"><a href="http://badoo.com/shmarkatyuk"><img src="images/social_networks/badoo_32.png"/>shmarkatyuk</a></li>-->
                                        <li id="instagram" class="socialNetwork"><a href="http://instagram.com/a1tern"><img src="images/social_networks/instagram_32.png"/>a1tern</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col2">
                                <div id="col2_content" class="clearfix">
                                    <ul>
                                        <li id="skype" class="socialNetwork"><a href="skype:sergey.shmarkatyuk?add"><img src="images/social_networks/skype_32.png"/>sergey.shmarkatyuk</a></li>
<!--                                        <li id="yahoo" class="socialNetwork"><a href="http://profiles.yahoo.com/a1tern"><img src="images/social_networks/yahoo_32.png"/>a1tern</a></li>-->
                                        <li id="delicious" class="socialNetwork"><a href="http://delicious.com/a1tern"><img src="images/social_networks/delicious_32.png"/>a1tern</a></li>
                                        <li id="flickr" class="socialNetwork"><a href="http://flickr.com/photos/a1tern/"><img src="images/social_networks/flickr_32.png"/>a1tern</a></li>
                                        <li id="youtube" class="socialNetwork"><a href="http://youtube.com/a1tern/"><img src="images/social_networks/youtube_32.png"/>a1tern</a></li>
                                        <li id="lj" class="socialNetwork"><a href="http://alt-ern.livejournal.com"><img src="images/social_networks/lj_32.png"/>alt_ern</a></li>
                                        <li id="lastfm" class="socialNetwork"><a href="http://last.fm/user/altern"><img src="images/social_networks/lastfm_32.png"/>altern</a></li>
                                        <!--<li id="wakoopa" class="socialNetwork"><a href="http://wakoopa.com/altern"><img src="images/social_networks/wakoopa_32.png"/>altern</a></li>-->
                                        <li id="xmind" class="socialNetwork"><a href="http://www.xmind.net/share/altern"><img src="images/social_networks/xmind_32.png"/>altern</a></li>
                                        <li id="habr" class="socialNetwork"><a href="http://altern.habrahabr.ru"><img src="images/social_networks/habr_32.png"/>altern</a></li>
                                        <li id="slideshare" class="socialNetwork"><a href="http://www.slideshare.net/altern"><img src="images/social_networks/slideshare_32.png"/>altern</a></li>
                                        <li id="germanov" class="socialNetwork"><a href="http://germanov.com.ua/about.php#sergiy"><img src="images/logos/bass.png"/><span class="i18n" id="Band" /></a></li>
                                        <li id="amazon" class="socialNetwork"><a href="http://amzn.com/w/3KUY2CHZUGXAV"><img src="images/social_networks/amazon_32.png"/>Sergey Shmarkatyuk</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h2><a href="?p=aboutme" id="aboutmelink"><span class="i18n" id="Aboutme" /></a></h2>
                        <div id="aboutme" class="accordion_block">
                            <div id="aboutme-details"></div>
                        </div>
                        <h2><a href="?p=portfolio"><span class="i18n" id="Portfolio" /></a></h2>
                        <div id="portfolio" class="accordion_block">
                            <p>
                                <div>
                                    <h3><span class="i18n" id="TrainingSCM" /></h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th colspan="5" class="caption"><h4><span class="i18n" id="TrainingFormats" /></h4></th>
                                            </tr>
                                            <tr>
                                                <th><span class="i18n" id="Format" /></th>
                                                <th><span class="i18n" id="Duration" /></th>
                                                <th><span class="i18n" id="Participants" /></th>
                                                <th><span class="i18n" id="IntructionalMethods" /></th>
                                                <th><span class="i18n" id="Description" /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span class="i18n" id="FormatTraining" /></td>
                                                <td><span class="i18n" id="TrainingDuration" /></td>
                                                <td>8-12</td>
                                                <td><span class="i18n" id="TrainingInstructionalMethods" /></td>
                                                <td><span class="i18n" id="TrainingDescription" />
                                                </td></tr>
                                            <tr>
                                                <td><span class="i18n" id="FormatExpressTraining" /></td>
                                                <td><span class="i18n" id="ExpressTrainingDuration" /></td>
                                                <td>10-20</td>
                                                <td><span class="i18n" id="ExpressTrainingInstructionalMethods" /></td>
                                                <td><span class="i18n" id="ExpressTrainingDescription" /></td>
                                            </tr>
                                            <tr>
                                                <td><span class="i18n" id="FormatMasterClass" /></td>
                                                <td><span class="i18n" id="MasterClassDuration" /></td>
                                                <td>10-30</td>
                                                <td><span class="i18n" id="MasterClassInstructionalMethods" /></td>
                                                <td><span class="i18n" id="MasterClassDescription" /></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table id="sessions">
                                        <thead>
                                            <tr>
                                                <th class="caption" colspan="3"><h4><span class="i18n" id="TrainingBlocks" /></h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><?= ++$td ?>.</td>
                                                <td id="scm_intro" class="scmSession"><span class="i18n" id="IntroductionToSCM" /></td>
                                                <td align="center" style="width: 0px"><img src="images/scm/cm.png" width="50"/></td>
                                            </tr>

                                            <tr>
                                                <td><?= ++$td ?>.</td>
                                                <td id="vc_intro" class="scmSession" onclick="window.open('http://www.slideshare.net/altern/2-introduction-to-vc', '_blank')"><span class="i18n" id="IntroductionToVersionControl" /></td>
                                                <td align="center"><img src="images/scm/vc.png" /></td>
                                            </tr>

                                            <tr>
                                                <td><?= ++$td ?>.</td>
                                                <td id="build_management" class="scmSession" onclick="window.open('http://www.slideshare.net/altern/build-and-deployment-management', '_blank')"><span class="i18n" id="BuildAndDeploymentManagement" /></td>
                                                <td align="center"><img src="images/scm/build.png" /></td>
                                            </tr>

                                            <tr>
                                                <td><?= ++$td ?>.</td>
                                                <td id="ci" class="scmSession" onclick="window.open('http://www.slideshare.net/altern/continuous-integration-10042536', '_blank')"><span class="i18n" id="ContinuousIntegration" /></td>
                                                <td align="center"><img src="images/scm/ci.png" width="50"/></td>
                                            </tr>

                                            <tr>
                                                <td><?= ++$td ?>.</td>
                                                <td id="merge_management" class="scmSession" onclick="window.open('http://www.slideshare.net/altern/merge-management', '_blank')"><span class="i18n" id="MergeManagement" /></td>
                                                <td align="center"><img src="images/scm/merge.png" width="50"/></td>
                                            </tr>

                                            <tr>
                                                <td><?= ++$td ?>.</td>
                                                <td id="agile_scm" class="scmSession" onclick="window.open('http://www.slideshare.net/altern/agile-software-configuration-management-10042528', '_blank')"><span class="i18n" id="AgileSoftwareConfigurationManagement" /></td>
                                                <td align="center"><img src="images/scm/agile.png" /></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </p>
                        </div>
                    </div>

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
                    <span style="float:right">
                        <span class="i18n" id="Version"> </span> 
                        <a target="_blank" href="http://scmfviz.altern.kiev.ua?version=<?= $GLOBALS['options']['version'] ?>&platform=<?= $GLOBALS['options']['platform'] ?>"> 
                            <?= $GLOBALS['options']['version'] ?>
                        </a>
                    </span>
                </div>
            </div>
            <div id="border-bottom">
                <div id="edge-bl"></div>
                <div id="edge-br"></div>
            </div>

        </div>
    </body>
</html>
