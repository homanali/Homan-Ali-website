document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("dropdown-menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    const languageButton = document.getElementById("language-button");
    const languageMenu = document.getElementById("language-menu");

    languageButton.addEventListener("click", function () {
        languageMenu.classList.toggle("show");
    });

    window.changeLanguage = function (lang) {
        const translations = {
            en: {
                welcome: "Welcome ",
                whoAmI: " “Build a mind that seeks knowledge, a heart that values truth, and hands that create a better world.” ",
                expertise: "I Have Worked On These Programs",
                programmingLanguages:" C++  | C#  | Python | HTML | CSS | JavaScript ",
                backgroundColor: "linear-gradient(185deg, #dc143c, #444)" // English background color
            },

            ku: {
                welcome: "بناڤێ خودێ مەزن و دلوڤان ",
                whoAmI:"عەقڵێک دروست بکە کە بەدوای زانستدا بگەڕێت، دڵێک کە بەهای حەقیقەت بدات، دەستێک دروست بکە کە جیهانێکی باشتر دروست بکات’",
                expertise: "پروگرامی من كار لسەر كری",
                programmingLanguages: "سی پلاس پلاس | سی شارپ | پايثون | ئچ تی ئم ئل | سی ئس ئس | جاڤا سكيرپت ",
                backgroundColor: "linear-gradient(185deg, #ff6347, #444)" // Kurdish background color
            },
            ar: {
                welcome: "مرحباً",
                whoAmI: "بناء عقل يسعى إلى المعرفة، وقلب يقدر الحقيقة، وأيدي تخلق عالماً أفضل.",
                expertise: "البرنامج الذي عملت عليه",
                programmingLanguages: "سی پلاس پلاس | سی شارپ | پايثون | ئچ تی ئم ئل | سی ئس ئس | جاڤا سكيرپت ",
                backgroundColor: "linear-gradient(185deg, #daa520, #444)" // Arabic background color
            }
        };document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("dropdown-menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    const languageButton = document.getElementById("language-button");
    const languageMenu = document.getElementById("language-menu");

    languageButton.addEventListener("click", function () {
        languageMenu.classList.toggle("show");
    });

    window.changeLanguage = function (lang) {
        const translations = {
            ku: {
                welcome: "بناڤێ خودێ مەزن و دلوڤان ",
                whoAmI: "عەقڵێک دروست بکە کە بەدوای زانستدا بگەڕێت، دڵێک کە بەهای حەقیقەت بدات، دەستێک دروست بکە کە جیهانێکی باشتر دروست بکات.",
                expertise: "پروگرامی من كار لسەر كری",
                programmingLanguages: "سی پلاس پلاس | سی شارپ | پايثون | ئچ تی ئم ئل | سی ئس ئس | جاڤا سكيرپت ",
                aboutMe: "",
                backgroundColor: "linear-gradient(135deg, #ff6347, #444)" // Kurdish background
            },
            ar: {
                welcome: "مرحباً",
                whoAmI: "عەقڵێک دروست بکە کە بەدوای زانستدا بگەڕێت، دڵێک کە بەهای حەقیقەت بدات، دەستێک دروست بکە کە جیهانێکی باشتر دروست بکات.",
                expertise: "مهاراتي",
                programmingLanguages: "لغات البرمجة",
                aboutMe:"",
                backgroundColor: "linear-gradient(135deg, #4682b4, #444)" // Arabic background
            }
        };

        if (translations[lang]) {
            document.querySelector('#S1 h1').textContent = translations[lang].welcome;
            document.getElementById('S1').style.background = translations[lang].backgroundColor;
            document.querySelector('.section h2').textContent = translations[lang].whoAmI;
            document.querySelectorAll('.section h3')[1].textContent = translations[lang].expertise;
            document.querySelectorAll('.section h3')[1].textContent = translations[lang].programmingLanguages;
            document.querySelector('.section p').innerHTML = translations[lang].aboutMe;
        }
    };
});

        // Change the welcome section text
        document.querySelector('#S1 h1').textContent = translations[lang].welcome;
        
        // Change the background color of the welcome section
        document.getElementById('S1').style.background = translations[lang].backgroundColor;
        
        // Update other sections similarly
        document.querySelector('.section h2').textContent = translations[lang].whoAmI;
        document.querySelector('.section h3').textContent = translations[lang].expertise;
        document.querySelector('.section p').textContent = translations[lang].programmingLanguages;
        
        alert("Language changed to: " + lang);
    };
});