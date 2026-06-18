// Asma al Husna - Gestion des langues (Français / Turc)
// Fournit les traductions de l'interface, le choix de langue persistant
// et des helpers utilisés par toutes les pages.

const I18N = {
    fr: {
        langName: "Français",
        // Commun
        appTitle: "Asma al Husna",
        numero: "N°",
        detailedSearch: "Recherche détaillée",
        fullList: "Liste complète",
        memoMode: "Mode mémorisation",
        meaningLabel: "Signification",
        detailLabel: "Explication",
        vertuLabel: "Vertus",
        close: "Fermer",
        // index.html
        docTitleIndex: "Asma al Husna - Recherche des Noms d'Allah",
        indexSubtitle: "Recherchez l'un des 99 Noms d'Allah par son numéro ou son nom",
        searchPlaceholder: "Ex. : 2, Rahman, Miséricordieux…",
        searchAria: "Rechercher un nom d'Allah",
        hint: "Tapez pour rechercher, ou parcourez avec les flèches ci-dessous",
        listen: "Écouter",
        share: "Partager",
        prev: "Précédent",
        next: "Suivant",
        themeDark: "Sombre",
        themeLight: "Clair",
        audioUnavailable: "La lecture audio n'est pas disponible sur ce navigateur.",
        noArabicVoice: "Aucune voix arabe installée : la prononciation peut être approximative.",
        linkCopied: "Lien copié dans le presse-papiers",
        // nombres_allah.html
        docTitleList: "Asma al Husna - Les 99 Noms d'Allah",
        listSubtitle: "Les 99 Noms d'Allah — cliquez sur un nom pour le voir en détail",
        filterPlaceholder: "Filtrer par numéro, nom ou attribut…",
        filterAria: "Filtrer les noms",
        noResult: "Aucun nom ne correspond à votre recherche.",
        // quiz.html
        docTitleQuiz: "Asma al Husna - Mode mémorisation",
        quizSubtitle: "Retrouvez la signification de chaque nom",
        question: "Question",
        goodAnswers: "bonne(s) réponse(s)",
        quizConsigne: "Quelle est la signification de ce nom ?",
        nextQuestion: "Question suivante",
        seeResult: "Voir le résultat",
        replay: "Rejouer",
        msgPerfect: "Excellent ! Vous maîtrisez ces noms parfaitement.",
        msgGreat: "Très bien ! Encore un peu de révision et ce sera parfait.",
        msgGood: "Bon début, continuez à réviser la liste complète.",
        msgLow: "Consultez la liste complète pour réviser, puis réessayez."
    },
    tr: {
        langName: "Türkçe",
        // Commun
        appTitle: "Esmâ-ül Hüsnâ",
        numero: "No",
        detailedSearch: "Ayrıntılı arama",
        fullList: "Tam liste",
        memoMode: "Ezber modu",
        meaningLabel: "Anlamı",
        detailLabel: "Açıklama",
        vertuLabel: "Faziletleri",
        close: "Kapat",
        // index.html
        docTitleIndex: "Esmâ-ül Hüsnâ - Allah'ın İsimleri Araması",
        indexSubtitle: "Allah'ın 99 isminden birini numarasıyla veya adıyla arayın",
        searchPlaceholder: "Örn.: 2, Rahman, Esirgeyen…",
        searchAria: "Allah'ın bir ismini ara",
        hint: "Aramak için yazın veya aşağıdaki oklarla gezinin",
        listen: "Dinle",
        share: "Paylaş",
        prev: "Önceki",
        next: "Sonraki",
        themeDark: "Koyu",
        themeLight: "Açık",
        audioUnavailable: "Sesli okuma bu tarayıcıda kullanılamıyor.",
        noArabicVoice: "Yüklü Arapça ses yok: telaffuz yaklaşık olabilir.",
        linkCopied: "Bağlantı panoya kopyalandı",
        // nombres_allah.html
        docTitleList: "Esmâ-ül Hüsnâ - Allah'ın 99 İsmi",
        listSubtitle: "Allah'ın 99 ismi — ayrıntı için bir isme tıklayın",
        filterPlaceholder: "Numara, isim veya anlama göre süz…",
        filterAria: "İsimleri süz",
        noResult: "Aramanızla eşleşen bir isim bulunamadı.",
        // quiz.html
        docTitleQuiz: "Esmâ-ül Hüsnâ - Ezber modu",
        quizSubtitle: "Her ismin anlamını bulun",
        question: "Soru",
        goodAnswers: "doğru cevap",
        quizConsigne: "Bu ismin anlamı nedir?",
        nextQuestion: "Sonraki soru",
        seeResult: "Sonucu gör",
        replay: "Tekrar oyna",
        msgPerfect: "Mükemmel! Bu isimlere tam anlamıyla hâkimsiniz.",
        msgGreat: "Çok iyi! Biraz daha tekrar ederseniz kusursuz olacak.",
        msgGood: "İyi bir başlangıç, tam listeyi tekrar etmeye devam edin.",
        msgLow: "Tekrar için tam listeye göz atın, sonra yeniden deneyin."
    }
};

const LANGUES_DISPONIBLES = ["fr", "tr"];
const LANG_STORAGE_KEY = "asma_lang";

function getLangue() {
    let lang;
    try {
        lang = localStorage.getItem(LANG_STORAGE_KEY);
    } catch (e) {
        lang = null;
    }
    if (!lang) {
        const navLang = (navigator.language || "fr").slice(0, 2).toLowerCase();
        lang = LANGUES_DISPONIBLES.includes(navLang) ? navLang : "fr";
    }
    return LANGUES_DISPONIBLES.includes(lang) ? lang : "fr";
}

function setLangue(lang) {
    if (!LANGUES_DISPONIBLES.includes(lang)) return;
    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
        // Indisponible (ex. ouverture en file://) : on continue sans persistance.
    }
}

function t(cle) {
    const lang = getLangue();
    return (I18N[lang] && I18N[lang][cle]) || I18N.fr[cle] || cle;
}

// Renvoie la signification d'un nom dans la langue courante (repli sur le français).
function attributLocalise(item) {
    if (getLangue() === "tr" && item.attribut_tr) {
        return item.attribut_tr;
    }
    return item.attribut;
}

// Construit le sélecteur de langue et l'insère dans l'élément cible.
// onChange est appelé après le changement de langue.
function initSelecteurLangue(conteneur, onChange) {
    if (!conteneur) return;
    conteneur.innerHTML = "";
    conteneur.classList.add("lang-switch");

    LANGUES_DISPONIBLES.forEach(function (lang) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-btn" + (getLangue() === lang ? " active" : "");
        btn.textContent = lang.toUpperCase();
        btn.setAttribute("aria-label", I18N[lang].langName);
        btn.addEventListener("click", function () {
            if (getLangue() === lang) return;
            setLangue(lang);
            conteneur.querySelectorAll(".lang-btn").forEach(function (b) {
                b.classList.toggle("active", b.textContent === lang.toUpperCase());
            });
            if (typeof onChange === "function") onChange(lang);
        });
        conteneur.appendChild(btn);
    });
}

// Applique la langue au document (attribut lang + titre de l'onglet).
function appliquerLangueDocument(docTitleKey) {
    document.documentElement.lang = getLangue();
    if (docTitleKey) {
        document.title = t(docTitleKey);
    }
}

/* ----- Thème clair / sombre ----- */
const THEME_STORAGE_KEY = "asma_theme";
let _themeBtn = null;

function getTheme() {
    let theme;
    try {
        theme = localStorage.getItem(THEME_STORAGE_KEY);
    } catch (e) {
        theme = null;
    }
    if (!theme) {
        theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? "dark" : "light";
    }
    return theme === "dark" ? "dark" : "light";
}

function setTheme(theme) {
    const valeur = theme === "dark" ? "dark" : "light";
    try {
        localStorage.setItem(THEME_STORAGE_KEY, valeur);
    } catch (e) {
        // Indisponible (ex. ouverture en file://) : on continue sans persistance.
    }
    document.documentElement.setAttribute("data-theme", valeur);
}

function appliquerTheme() {
    document.documentElement.setAttribute("data-theme", getTheme());
}

// Libellé de l'action proposée par le bouton (en mode clair il propose le sombre).
function libelleTheme() {
    return getTheme() === "dark" ? t("themeLight") : t("themeDark");
}

// À rappeler après un changement de langue pour traduire le bouton.
function rafraichirThemeToggle() {
    if (!_themeBtn) return;
    _themeBtn.textContent = libelleTheme();
    _themeBtn.setAttribute("aria-label", libelleTheme());
}

function initThemeToggle(btn, onChange) {
    _themeBtn = btn;
    if (!btn) return;
    appliquerTheme();
    rafraichirThemeToggle();
    btn.addEventListener("click", function () {
        setTheme(getTheme() === "dark" ? "light" : "dark");
        rafraichirThemeToggle();
        if (typeof onChange === "function") onChange();
    });
}
