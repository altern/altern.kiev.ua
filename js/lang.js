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
document.lang = getParam('lang', 'en');
var i18n = {
    'en': {
        'Title' : '[ALT]ern: home page',
        'Layout' : 'Layout based on',
        'Version' : 'Version',
        'Findme' : 'Meet me online',
        'Aboutme' : 'About me',
        'Portfolio' : 'Portfolio',
        'ComingSoon' : 'Coming soon',
        'Band': '"Germanov" band',
        'SCMF': 'Please take a look at the <a href="http://scmfviz.altern.kiev.ua/docs/SCMF_specification.pdf">SCMF</a> (Software Configuration Management Framework), maybe you will find it interesting and useful for your projects. There is also <a href="http://scmfviz.altern.kiev.ua">SCMFViz</a> (SCMF visualizer) application that might help to understand where you are with your versions if you have eventually decided to apply SCMF principles for your beloved software project. Even though there might be not enough information about SCMF (I am still working on it), I consider it to be a great invention that will eventually revolutionize the way software (and not only software) is being developed, managed and supported. I hope you could help me revolutionize the software industry by spreading the word about SCMF and how great it is.',
        'Duration': 'Duration',
        'Format': 'Format',
        'Participants': 'Participants',
        'IntructionalMethods': 'Instructional methods',
        'Description': 'Description',
        'FormatTraining': 'training',
        'FormatExpressTraining': 'express-training',
        'FormatMasterClass': 'master-class',
        
        'TrainingDuration': '6 sessions, 1.5 hours each',
        'ExpressTrainingDuration': '2 sessions, 4 hours each',
        'MasterClassDuration': 'single 8-hour session',
        'TrainingInstructionalMethods': 'presentation, polls, quizes, demos, homeworks, literature review',
        'ExpressTrainingInstructionalMethods': 'presentation, polls, use-case analysis, homework, literature review',
        'MasterClassInstructionalMethods': 'presentation, polls, use-case analysis',
        'TrainingDescription': "The most intensive and effective training format. It is focused both on theoretical and practical aspects of configuration management. " +
                                "The main feature of this format is that the most wide range of instructional methods is used. " +
                                "Each attendee gets individual approach. Adoption of given material is maintained via successful homework completion. " +
                                "Participants are evaluated using 300-point scale (attendance, homework completion, quizes completion, participation) after training is completed. ",
        'ExpressTrainingDescription': "The main feature of express-training format is the intense flow of information. " +
                                "It is focused on theoretical aspects of configuration management. " +
                                "Adoption of given material is maintained through use-cases analysis",
        'MasterClassDescription': "Master-class format is concetrated primarily on exhibition of general principles and practices of configuration management" +
                                "Adoption of given material is maintained through the detailed analysis of real-world case which " +
                                "requires application of configuration management practices",

        'TrainingSCM': '"Software configuration management" training',
        'TrainingBlocks': 'Training structure',
        'TrainingFormats': 'Training formats',
        'IntroductionToSCM': 'Introduction to software configuration management',
        'IntroductionToVersionControl': 'Introduction to version control',
        'BuildAndDeploymentManagement': 'Build and deployment management',
        'ContinuousIntegration': 'Continuous integration',
        'MergeManagement': 'Merge management',
        'AgileSoftwareConfigurationManagement': 'Agile software configuration management',

//        'icq': 'ICQ: chat with me',
        'github': 'github: source code of my projects',
        'email': 'E-mail: you can write a letter to me',
        'linkedin': 'Linkedin: about my professional skills for those who wants to hire me',
//        'moikrug': 'Moikrug: about my professional skills in russian',
        'quotica': 'Quotica: collection of favorite quotes',
        'facebook': 'Facebook: it\'s difficult to avoid social networking',
        'delicious': 'Delicious: I share my bookmarks with the whole world',
        'wordpress': 'My blog about Software Configuration Management',
        'twitter': 'Twitter: microblogging comes in handy sometimes',
        'ilovecinema': 'Ilovecinema: place where I publish my movies reviews',
        'foursquare': 'Foursquare: places I have been to',
        'instagram': 'Instagram: daily photos',
        'stackoverflow': 'Stackoverflow: place for programmers to hang out',
        'flavors': 'Flavors.me: another one personal web space',

        'skype': 'Skype: chat with me',
        'yahoo': 'Yahoo: delicious, flickr, pipes and other services',
        'flickr': 'Flickr: my pictures and photos',
        'youtube': 'Youtube: videos and online streaming',
        'lj': 'LiveJournal: my blog',
        'lastfm': 'LastFM: music I like',
//        'wakoopa': 'Wakoopa: software I use',
        'xmind': 'Xmind: mindmaps I have shared',
        'habr': 'Habr: professional news I read',
        'slideshare': 'Slideshare: my presentation slides',
        'germanov': 'germanov.com.ua: the link to the website of the rock band I played with',
        'badoo': 'Badoo: meeting new people',
        'amazon': 'Amazon: my wish list',
    },
    'ru': {
        'Title' : '[ALT]ern: домашняя страница',
        'Layout' : 'Для верстки был использован',
        'Version' : 'Версия',
        'Findme' : 'Ищите меня в сети',
        'Aboutme' : 'Обо мне',
        'Portfolio' : 'Портфолио',
        'ComingSoon' : 'Вскоре появится',
        'Band': 'группа "Германов"',
        'SCMF': 'Хочу предложить вашему вниманию <a href="http://scmfviz.altern.kiev.ua/docs/SCMF_specification.pdf">SCMF</a> (Software Configuration Management Framework, фреймворк для управления конфигурациями), так как существует большая вероятность, что вы найдете предлагаемый набор практик интересным и полезным для вашей разработки. Также вы можете ознакомиться с <a href="http://scmfviz.altern.kiev.ua">SCMFViz</a> (SCMF visualizer) - приложением, которое иллюстрирует основные принципы и практики SCMF на примере простейших проектов, а также понять текущее положение дел с версиями если вы таки решились использовать принципы SCMF для вашей разработки. Несмотря на то, что информации о SCMF может быть не так много, как хотелось бы (я все еще работаю над этим), я считаю, что фреймворк для управления конфигурациями - это значимое изобретение, которое поможет изменить подход к разработке, управлению и поддержке программных (и не только программных) проектов. Надеюсь на вашу помощь в распространении информации о значимости правильной нумерации версий в целом и о SCMF в частности.',
        'Duration': 'Длительность',
        'Format': 'Формат',
        'Participants': 'Количество учатсников',
        'IntructionalMethods': 'Обучающие средства',
        'Description': 'Описание',
        'FormatTraining': 'тренинг',
        'FormatExpressTraining': 'экспресс-тренинг',
        'FormatMasterClass': 'мастер-класс',

        'TrainingDuration': '6 сессий по 1.5 часа',
        'ExpressTrainingDuration': '2 сессии по 4 часа',
        'MasterClassDuration': '8-часовая сессия',
        'TrainingInstructionalMethods': 'презентация, опросы, тесты, демонстрации, домашние задания, обзор литературы',
        'ExpressTrainingInstructionalMethods': 'презентация, опросы, разбор типичных случаев, домашнее задание, обзор литературы',
        'MasterClassInstructionalMethods': 'презентация, опросы, разбор типичных случаев',
        'TrainingDescription': "Оптимальный и наиболее эффективный формат тренинга, в котором соблюден баланс между теорией и практикой. " +
                                "Отличается использованием максимально доступного количества обучающих средств и методов, а также " +
                                "индивидуальным подходом. Материал закрепляется путем выполнения домашних заданий. После окончания " +
                                "тренинга участники оцениваются по 300-бальной шкале (посещение, выполнение домашних заданий, " +
                                "прохождение тестов, активность участия)",
        'ExpressTrainingDescription': "Данный вариант проведения отличается интенсивной подачей информации, " +
                                "а также концентрацией на теоретических аспектах конфигурационного менеджмента. " +
                                "Материал закрепляется путем разбора типичных случаев во время тренинга. ",
        'MasterClassDescription': "Мастер-класс сконцентрирован на изложении основных принципов," +
                                    "подходов и практик конфигурационного менеджмента. Материал закрепляется путем разбора " +
                                    "примера из реальной жизни, который нуждается в применении практик конфигурационного менеджмента. ",

        'TrainingSCM': 'Тренинг "Управление конфигурациями программного обеспечения"',
        'TrainingBlocks': 'Структура тренинга',
        'TrainingFormats': 'Форматы тренинга',
        'IntroductionToSCM': 'Введение в конфигурационное управление',
        'IntroductionToVersionControl': 'Введение в контроль версий',
        'BuildAndDeploymentManagement': 'Управление сборками и развертываниями',
        'ContinuousIntegration': 'Непрерывная интеграция',
        'MergeManagement': 'Управление слияниями',
        'AgileSoftwareConfigurationManagement': 'Гибкое управление конфигурациями',

//        'icq': 'ICQ: со мной можно початиться',
        'github': 'Github: исходный код моих проектов',
        'email': 'E-mail: мне можно написать письмо',
        'linkedin': 'Linkedin: о моих профессиональных навыках для тех, кто хочет меня нанять',
//        'moikrug': 'Moikrug: о моих профессиональных навыках на русском',
        'quotica': 'Quotica: коллекция любимых цитат',
        'facebook': 'Facebook: трудно избежать социальных сетей',
        'delicious': 'Delicious: мои закладки доступны для всего мира',
        'wordpress': 'Мой блог с записями на тему конфигурационного менеджмента',
        'twitter': 'Twitter: микроблоггинг иногда оказывается полезен тоже',
        'ilovecinema': 'Ilovecinema: место, где я публикую отзывы о кинофильмах',
        'foursquare': 'Foursquare: места, где мне удалось побывать',
        'instagram': 'Instagram: фото-моменты из жизни',
        'stackoverflow': 'Stackoverflow: место, где тусуются программисты',
        'flavors': 'Flavors.me: очередное персональное веб-пространство',

        'skype': 'Skype: можно со мной початиться',
        'yahoo': 'Yahoo: delicious, flickr, pipes и другие сервисы',
        'flickr': 'Flickr: мои изображения и фото',
        'youtube': 'Youtube: видеоролики и потоковое видео',
        'lj': 'LiveJournal: мой блог',
        'lastfm': 'LastFM: музыка, которую я люблю',
//        'wakoopa': 'Wakoopa: программное обеспечение, которое я использую',
        'xmind': 'Xmind: опубликованные мной майндмапы',
        'habr': 'Habr: профессиональные новости, которые я читаю',
        'slideshare': 'Slideshare: мои презентации',
        'germanov': 'germanov.com.ua: ссылка на сайт рок-коллектива, с которым мне посчастливилось играть',
        'badoo': 'Badoo: сайт знакомств',
        'amazon': 'Amazon: моя доска желаний'
    },
    'ua': {
        'Title' : '[ALT]ern: домашня сторінка',
        'Layout' : 'Верстування виконано за допомогою',
        'Version' : 'Версія',
        'Findme' : 'Шукайте мене в мережі',
        'Aboutme' : 'Про мене',
        'Portfolio' : 'Портфоліо',
        'Band': 'гурт "Германов"',
        'ComingSoon' : 'З\'явиться незабаром',
        'SCMF': 'Хочу запропонувати вашій увазі <a href="http://scmfviz.altern.kiev.ua/docs/SCMF_specification.pdf">SCMF</a> (Software Configuration Management Framework, фреймворк для управління конфігураціями), оскільки існує велика ймовірність того, що ви знайдете запропонований набір практик цікавим та корисним для вашої розробки. Також ви можете ознайомитися з <a href="http://scmfviz.altern.kiev.ua">SCMFViz</a> (SCMF visualizer) - програмний продукт, ціль якого полягає в ілюстрації основних принципів та практик SCMF на прикладі найпростіших проектів, а також в окресленні поточної ситуації з версіями в проектах, які використовують принципи SCMF. Незважаючи на те, що інформації про SCMF може бути не так багато, як того хотілося б (я все ще над цим працюю), я вважаю, що фреймворк для управління конфигураціями - це вагомий винахід, котрий допоможе суттєво змінити підходи до розробки, менеджменту та підтримки програмних (і не тільки програмних) проектів. Сподіваюсь на вашу підтримку та допомогу в розповсюдженні інформації щодо значимості правильної нумерації версій згідно практик SCMF.',
        'Duration': 'Тривалість',
        'Format': 'Формат',
        'Participants': 'Кількість учасників',
        'IntructionalMethods': 'Навчальні засоби',
        'Description': 'Опис',
        'FormatTraining': 'тренінг',
        'FormatExpressTraining': 'експрес-тренінг',
        'FormatMasterClass': 'майстер-клас',

        'TrainingDuration': '6 сесій по 1.5 години',
        'ExpressTrainingDuration': '2 сесії по 4 години',
        'MasterClassDuration': '8-годинна сесія',
        'TrainingInstructionalMethods': 'презентація, опитування, тести, демо, домашні завдання, огляд літератури',
        'ExpressTrainingInstructionalMethods': 'презентація, опитування, розгляд типових випадків, домашнє завдання, огляд літератури',
        'MasterClassInstructionalMethods': 'презентація, опитування, розгляд типових випадків',
        'TrainingDescription': "Оптимальный та найбільш ефективний формат тренінгу, в якому витриманий баланс між теорією та практикою. " +
                                "Вирізняється використанням максимально доступної кількості навчальних методів, а також " +
                                "індивідуальним підходом. Матеріал закріплюється шляхом виконання домашніх завдань. Після закінчення " +
                                "тренінгу учасники оцінюються за 300-бальною шкалою (відвідування, виконання домашніх завдань, " +
                                "проходження тестів, активність)",
        'ExpressTrainingDescription': "Даний формат тренінгу вирізняється інтенсивною подачею інформації, " +
                                "а також конфентрацією на теоретичних аспектах конфигураційного менеджменту. " +
                                "Матеріал закріплюється шляхом розбору типових випадків під час тренінгу. ",
        'MasterClassDescription': "Майстер-клас сконцентрований на викладенні основних принципів, " +
                                    "підходів та практик конфігураційного менеджменту. Матеріал закріплюється шляхом розбору " +
                                    "реальної ситуації, що потребує застосування практик конфігураційного менеджменту. ",

        'TrainingSCM': 'Тренінг "Конфігураційний менеджмент програмного забезпечення"',
        'TrainingBlocks': 'Структура тренінгу',
        'TrainingFormats': 'Формати тренінгу',
        'IntroductionToSCM': 'Вступ до конфигураційного менеджменту',
        'IntroductionToVersionControl': 'Вступ до контролю версій',
        'BuildAndDeploymentManagement': 'Керування збірками та розгортуваннями',
        'ContinuousIntegration': 'Неперервна інтеграція',
        'MergeManagement': 'Керування злиттями',
        'AgileSoftwareConfigurationManagement': 'Гнучкий конфігураційний менеджмент',

//        'icq': 'ICQ: зі мною можна початитись',
        'github': 'Github: вихідний код моїх проектів',
        'email': 'E-mail: мені можна написати листа',
        'linkedin': 'Linkedin: про мої професійні навички для тих, хто хоче мене найняти',
//        'moikrug': 'Moikrug: про мої професійні навички російською',
        'quotica': 'Quotica: колекція улюблених цитат',
        'facebook': 'Facebook: важко уникнути соціальні мережі',
        'delicious': 'Delicious: мої закладинки доступні для всього світу',
        'wordpress': 'Мій блог на тему конфігураційного менеджменту',
        'twitter': 'Twitter: мікроблоги інколи стають у нагоді',
        'ilovecinema': 'Ilovecinema: місце, де я розміщую огляди кінофільмів',
        'foursquare': 'Foursquare: місця, до яких мені пощастило завітати',
        'instagram': 'Instagram: фото-миттєвості мого життя',
        'stackoverflow': 'Stackoverflow: місце спілкування програмістів',
        'flavors': 'Flavors.me: ще один персональний веб-простір',

        'skype': 'Skype: зі мною можна початитись',
        'yahoo': 'Yahoo: delicious, flickr, pipes та інші сервіси',
        'flickr': 'Flickr: мої зображення та фото',
        'youtube': 'Youtube: онлайн-відео',
        'lj': 'LiveJournal: мій блог',
        'lastfm': 'LastFM: музика, яку я люблю',
//        'wakoopa': 'Wakoopa: програмне забезпечення, яке я використовую',
        'xmind': 'Xmind: опубліковані мною "мозгові карти"',
        'habr': 'Habr: професійні новини, які я читаю',
        'slideshare': 'Slideshare: слайди моїх презентацій',
        'germanov': 'germanov.com.ua: лінк на сайт гурту, з яким мені пощастило грати',
        'badoo': 'Badoo: портал знайомств',
        'amazon': 'Amazon: моя дошка бажань'
    }
}

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
    
    interests.reload();
}
