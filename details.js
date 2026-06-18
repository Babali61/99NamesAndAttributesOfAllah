// Asma al Husna - Détails par nom (explication + vertus)
// Clé = numéro du nom (n). Chaque entrée fournit le français et le turc.
//   detail / detail_tr : explication plus complète du sens du nom
//   vertu  / vertu_tr  : vertus et bienfaits traditionnellement associés
const DETAILS = {
    1: {
        detail: "Le Nom suprême (Ism al-A'zam) qui rassemble en lui tous les autres noms et attributs divins ; il désigne l'Être divin Lui-même, seul digne d'adoration.",
        vertu: "Le réciter avec présence du cœur renforce la foi, apaise l'âme et resserre le lien direct avec le Créateur.",
        detail_tr: "Bütün isim ve sıfatları kendinde toplayan İsm-i Âzam'dır; yalnızca ibadete lâyık olan Yüce Zât'ın özel adıdır.",
        vertu_tr: "Kalp huzuruyla zikretmek imanı kuvvetlendirir, ruhu huzura kavuşturur ve kulu Rabbine bağlar."
    },
    2: {
        detail: "Sa miséricorde immense englobe toute la création en ce monde, croyants comme non-croyants, sans distinction.",
        vertu: "L'invoquer adoucit le cœur, éloigne la dureté et attire la compassion divine sur celui qui le répète.",
        detail_tr: "Rahmeti, mümin-kâfir ayırmadan dünyadaki bütün yaratılmışları kuşatan sonsuz merhamet sahibidir.",
        vertu_tr: "Zikri kalbi yumuşatır, katılığı giderir ve kişiye ilâhî şefkati celbeder."
    },
    3: {
        detail: "Sa miséricorde particulière est réservée aux croyants, surtout dans l'au-delà, en récompense de leur foi.",
        vertu: "Sa récitation espère la miséricorde divine au Jour du Jugement et renforce la douceur envers autrui.",
        detail_tr: "Hususi rahmeti, imanlarının karşılığı olarak özellikle âhirette müminlere mahsustur.",
        vertu_tr: "Zikri âhiret gününde ilâhî rahmeti umar ve insanlara karşı şefkati artırır."
    },
    4: {
        detail: "Il est le Souverain absolu de tout l'univers, qui règne sans associé et dont l'autorité ne décline jamais.",
        vertu: "L'invoquer aide à se libérer de la dépendance aux créatures et procure dignité et indépendance du cœur.",
        detail_tr: "Bütün kâinatın mutlak hükümdarıdır; ortağı olmadan hükmeder ve saltanatı asla son bulmaz.",
        vertu_tr: "Zikri kişiyi yaratılmışlara muhtaç olmaktan kurtarır, gönle izzet ve istiğnâ verir."
    },
    5: {
        detail: "Il est exempt de tout défaut, de toute imperfection et de tout ce que l'esprit pourrait Lui imaginer de limité.",
        vertu: "Sa récitation purifie le cœur des défauts moraux et des pensées troubles.",
        detail_tr: "Her türlü kusurdan, eksiklikten ve zihnin tasavvur edebileceği sınırlardan münezzehtir.",
        vertu_tr: "Zikri kalbi kötü huylardan ve karanlık düşüncelerden arındırır."
    },
    6: {
        detail: "Il est la source de toute paix et de tout salut ; de Lui vient la sécurité et c'est Lui qui préserve de tout mal.",
        vertu: "L'invoquer apporte la sérénité intérieure et est espéré comme protection contre les épreuves.",
        detail_tr: "Bütün esenliğin kaynağıdır; selâmet O'ndandır ve her kötülükten koruyan O'dur.",
        vertu_tr: "Zikri iç huzuru getirir ve belâlardan korunmaya vesile umulur."
    },
    7: {
        detail: "Il accorde la sécurité à Ses créatures et confirme la véracité de Ses prophètes par des preuves.",
        vertu: "Sa récitation est espérée pour la protection de la foi, des biens et de la personne.",
        detail_tr: "Yarattıklarına güven veren ve peygamberlerini delillerle doğrulayandır.",
        vertu_tr: "Zikri imanın, malın ve canın korunmasına vesile umulur."
    },
    8: {
        detail: "Il veille sur toute chose, en préserve l'existence et en connaît l'état le plus intime.",
        vertu: "L'invoquer aide à la vigilance sur soi-même et procure le sentiment d'être protégé.",
        detail_tr: "Her şeyi gözetip koruyan ve en gizli hâllerini bilendir.",
        vertu_tr: "Zikri kişinin nefsini murakabe etmesine yardım eder ve korunmuşluk hissi verir."
    },
    9: {
        detail: "Il est le Tout-Puissant, invincible et inaccessible, que nul ne peut dominer ni atteindre.",
        vertu: "Sa récitation est espérée pour vaincre la faiblesse, l'humiliation et acquérir une force morale.",
        detail_tr: "Mutlak güç sahibi, mağlup edilemeyen ve kendisine ulaşılamayan yegâne galiptir.",
        vertu_tr: "Zikri zillet ve zayıflığı yenmeye, mânevî güç kazanmaya vesile umulur."
    },
    10: {
        detail: "Il impose Sa volonté à toute chose, répare ce qui est brisé et redresse ce qui est défaillant.",
        vertu: "L'invoquer est espéré pour le réconfort après une épreuve et la réparation des cœurs brisés.",
        detail_tr: "İradesini her şeye geçiren, kırılanı onaran ve bozuğu düzeltendir.",
        vertu_tr: "Zikri musibet sonrası teselliye ve kırık kalplerin onarılmasına vesile umulur."
    },
    11: {
        detail: "Il est le seul à posséder la véritable grandeur et la majesté ; la fierté absolue ne convient qu'à Lui.",
        vertu: "Sa récitation aide à se défaire de l'orgueil et à cultiver l'humilité devant Dieu.",
        detail_tr: "Gerçek büyüklük ve azamet yalnız O'na mahsustur; mutlak ululuk ancak O'na yakışır.",
        vertu_tr: "Zikri kibirden kurtulmaya ve Allah huzurunda tevazuya yardım eder."
    },
    12: {
        detail: "Il crée toute chose à partir du néant, en fixant sa mesure et sa destinée avec sagesse.",
        vertu: "L'invoquer renforce la contemplation de la création et la confiance dans la sagesse divine.",
        detail_tr: "Her şeyi yoktan, ölçüsünü ve kaderini hikmetle takdir ederek yaratandır.",
        vertu_tr: "Zikri yaratılış üzerinde tefekkürü ve ilâhî hikmete güveni artırır."
    },
    13: {
        detail: "Il fait passer les êtres du néant à l'existence dans un ordre parfait, sans modèle préalable.",
        vertu: "Sa récitation est espérée pour la guérison et le bon déroulement des projets entrepris.",
        detail_tr: "Varlıkları, önceden bir örnek olmaksızın yokluktan kusursuz bir düzenle var edendir.",
        vertu_tr: "Zikri şifaya ve girişilen işlerin güzelce yürümesine vesile umulur."
    },
    14: {
        detail: "Il donne à chaque créature sa forme et son apparence distinctes, sans jamais répéter à l'identique.",
        vertu: "L'invoquer développe le goût du beau et la reconnaissance envers le Façonneur.",
        detail_tr: "Her varlığa kendine has şekil ve sureti, hiç birebir tekrarlamadan verendir.",
        vertu_tr: "Zikri güzellik zevkini ve Musavvir'e karşı şükrü geliştirir."
    },
    15: {
        detail: "Il pardonne les fautes encore et encore, couvrant les péchés de Ses serviteurs qui se repentent.",
        vertu: "Sa récitation accompagne le repentir et l'espoir d'effacer ses péchés.",
        detail_tr: "Tövbe eden kullarının günahlarını örterek tekrar tekrar bağışlayandır.",
        vertu_tr: "Zikri tövbeye ve günahların silinmesi ümidine eşlik eder."
    },
    16: {
        detail: "Il domine toute chose par Sa puissance irrésistible ; rien ne peut Lui échapper ni Lui résister.",
        vertu: "L'invoquer aide à maîtriser les passions de l'ego et à se libérer de leur emprise.",
        detail_tr: "Karşı konulamaz kudretiyle her şeye hâkimdir; hiçbir şey O'ndan kaçamaz ve karşı koyamaz.",
        vertu_tr: "Zikri nefsin arzularını dizginlemeye ve onların esaretinden kurtulmaya yardım eder."
    },
    17: {
        detail: "Il donne sans cesse et sans contrepartie, comblant Ses créatures de dons au-delà de leurs mérites.",
        vertu: "Sa récitation est espérée pour l'élargissement de la subsistance et la générosité du cœur.",
        detail_tr: "Karşılık beklemeden durmaksızın verir, kullarını hak ettiklerinin ötesinde nimetlerle donatır.",
        vertu_tr: "Zikri rızkın genişlemesine ve gönül cömertliğine vesile umulur."
    },
    18: {
        detail: "Il pourvoit à la subsistance de toutes les créatures, matérielle comme spirituelle, sans en oublier aucune.",
        vertu: "L'invoquer renforce la confiance (tawakkul) et l'espoir d'une subsistance licite et suffisante.",
        detail_tr: "Bütün canlıların maddî ve mânevî rızkını, hiçbirini unutmadan verendir.",
        vertu_tr: "Zikri tevekkülü güçlendirir ve helâl, yeterli rızık ümidini artırır."
    },
    19: {
        detail: "Il ouvre les portes du bien, de la victoire et de la connaissance, et tranche entre les êtres avec justice.",
        vertu: "Sa récitation est espérée pour dénouer les difficultés et ouvrir les voies fermées.",
        detail_tr: "Hayır, zafer ve ilim kapılarını açan ve kulları arasında adaletle hükmedendir.",
        vertu_tr: "Zikri sıkıntıların çözülmesine ve kapalı yolların açılmasına vesile umulur."
    },
    20: {
        detail: "Sa science embrasse le passé, le présent et l'avenir, le visible et le caché, sans aucune limite.",
        vertu: "L'invoquer accroît l'amour du savoir utile et la conscience d'être toujours observé.",
        detail_tr: "İlmi geçmişi, hâli ve geleceği, görüneni ve gizli olanı sınırsızca kuşatır.",
        vertu_tr: "Zikri faydalı ilme muhabbeti ve dâima gözetildiği şuurunu artırır."
    },
    21: {
        detail: "Il resserre et restreint selon Sa sagesse : la subsistance, les cœurs ou les âmes à l'instant de la mort.",
        vertu: "Sa récitation aide à accepter les périodes de manque avec patience et confiance.",
        detail_tr: "Hikmetince daraltıp tutandır: rızkı, kalpleri ya da ölüm anında ruhları kabzeder.",
        vertu_tr: "Zikri darlık zamanlarını sabır ve teslimiyetle kabule yardım eder."
    },
    22: {
        detail: "Il élargit et prodigue selon Sa sagesse : la subsistance, la joie et l'ouverture des cœurs.",
        vertu: "L'invoquer est espéré pour l'aisance, la dilatation du cœur et la dissipation des soucis.",
        detail_tr: "Hikmetince genişletip bollaştırandır: rızkı, sevinci ve kalplerin ferahlığını verir.",
        vertu_tr: "Zikri bolluğa, gönül ferahlığına ve sıkıntıların dağılmasına vesile umulur."
    },
    23: {
        detail: "Il abaisse les orgueilleux et les tyrans, et rabaisse ce qui s'élève injustement.",
        vertu: "Sa récitation est espérée pour être préservé de l'arrogance et des injustes.",
        detail_tr: "Kibirlileri ve zalimleri alçaltan, haksız yere yükseleni indirendir.",
        vertu_tr: "Zikri kibirden ve zalimlerin şerrinden korunmaya vesile umulur."
    },
    24: {
        detail: "Il élève en degré qui Il veut, par la foi, le savoir ou l'honneur, dans cette vie et l'autre.",
        vertu: "L'invoquer est espéré pour l'élévation spirituelle et une fin honorable.",
        detail_tr: "Dilediğini iman, ilim veya şerefle, dünyada ve âhirette derece derece yükseltendir.",
        vertu_tr: "Zikri mânevî yükselişe ve hayırlı bir âkıbete vesile umulur."
    },
    25: {
        detail: "Il accorde la puissance et l'honneur à qui Il veut, par l'obéissance et la proximité avec Lui.",
        vertu: "Sa récitation est espérée pour la dignité véritable, fondée sur l'obéissance à Dieu.",
        detail_tr: "Dilediğine, kendisine itaat ve yakınlıkla izzet ve şeref verendir.",
        vertu_tr: "Zikri Allah'a itaate dayanan gerçek izzete vesile umulur."
    },
    26: {
        detail: "Il humilie qui Il veut, retirant l'honneur à ceux qui se détournent de Lui et persistent dans l'injustice.",
        vertu: "Sa récitation rappelle que tout honneur vient de Dieu et préserve de l'arrogance.",
        detail_tr: "Dilediğini zelil kılan, kendisinden yüz çevirip zulümde ısrar edenlerden izzeti çekip alandır.",
        vertu_tr: "Zikri bütün izzetin Allah'tan olduğunu hatırlatır ve kibirden korur."
    },
    27: {
        detail: "Il entend toute chose, le murmure le plus secret comme la prière silencieuse du cœur.",
        vertu: "L'invoquer renforce l'assurance que toute invocation est entendue et incite à surveiller ses paroles.",
        detail_tr: "Her şeyi işitir; en gizli fısıltıyı da kalbin sessiz duasını da duyar.",
        vertu_tr: "Zikri her duanın işitildiği güvenini artırır ve sözlere dikkati teşvik eder."
    },
    28: {
        detail: "Il voit toute chose, l'apparent et le caché, jusqu'au plus infime mouvement dans l'obscurité.",
        vertu: "Sa récitation développe la sincérité et la conscience d'agir sous le regard de Dieu.",
        detail_tr: "Her şeyi görür; açığı da gizliyi de, karanlıktaki en küçük hareketi bile görür.",
        vertu_tr: "Zikri ihlâsı ve Allah'ın huzurunda davranma şuurunu geliştirir."
    },
    29: {
        detail: "Il est le Juge suprême dont les décrets sont sans appel ; Il sépare le vrai du faux avec une justice parfaite.",
        vertu: "L'invoquer est espéré pour faire éclater la vérité et obtenir gain de cause dans le juste.",
        detail_tr: "Hükmü temyiz edilemeyen yüce hâkimdir; hakkı bâtıldan kusursuz adaletle ayırır.",
        vertu_tr: "Zikri hakkın ortaya çıkmasına ve haklı davada başarıya vesile umulur."
    },
    30: {
        detail: "Il est la justice absolue ; Il ne lèse personne et place chaque chose exactement à sa juste place.",
        vertu: "Sa récitation incite à l'équité envers tous et apaise le sentiment d'injustice subie.",
        detail_tr: "Mutlak adalet sahibidir; kimseye haksızlık etmez ve her şeyi tam yerli yerine koyar.",
        vertu_tr: "Zikri herkese karşı âdil olmaya teşvik eder ve uğranılan haksızlığın acısını dindirir."
    },
    31: {
        detail: "Il est subtil et bienveillant : Il connaît les secrets les plus fins et dispense Sa grâce avec délicatesse.",
        vertu: "L'invoquer attire la douceur divine dans les épreuves et l'aide là où on l'attend le moins.",
        detail_tr: "Lütufkâr ve en ince şeyleri bilendir; ihsanını sezilmez bir incelikle ulaştırır.",
        vertu_tr: "Zikri sıkıntılarda ilâhî lütfu ve ummadık yerden yardımı celbeder."
    },
    32: {
        detail: "Rien ne Lui échappe : Il connaît la réalité intime de toute chose et le fond des cœurs.",
        vertu: "Sa récitation aiguise la clairvoyance intérieure et la sincérité des intentions.",
        detail_tr: "Hiçbir şey O'na gizli kalmaz; her şeyin iç yüzünü ve kalplerin özünü bilir.",
        vertu_tr: "Zikri basîreti ve niyetlerin samimiyetini keskinleştirir."
    },
    33: {
        detail: "Il est plein de mansuétude : Il ne se hâte pas de punir et accorde du répit malgré les fautes.",
        vertu: "L'invoquer aide à la maîtrise de la colère et à la patience envers autrui.",
        detail_tr: "Hilm sahibidir; cezada acele etmez ve günahlara rağmen mühlet verir.",
        vertu_tr: "Zikri öfke kontrolüne ve insanlara karşı sabra yardım eder."
    },
    34: {
        detail: "Sa grandeur dépasse toute mesure et tout entendement ; nulle pensée ne peut en saisir l'étendue.",
        vertu: "Sa récitation emplit le cœur de révérence et relativise toute grandeur terrestre.",
        detail_tr: "Azameti her ölçüyü ve idraki aşar; hiçbir düşünce büyüklüğünü kavrayamaz.",
        vertu_tr: "Zikri kalbi tâzimle doldurur ve dünyevî büyüklükleri küçültür."
    },
    35: {
        detail: "Il pardonne abondamment et entièrement, effaçant les péchés au point de n'en laisser nulle trace.",
        vertu: "L'invoquer nourrit l'espoir du pardon et soulage le poids de la culpabilité.",
        detail_tr: "Çokça ve tam olarak bağışlar; günahları hiç iz bırakmayacak şekilde siler.",
        vertu_tr: "Zikri bağışlanma ümidini besler ve suçluluk yükünü hafifletir."
    },
    36: {
        detail: "Il récompense avec largesse la moindre bonne action et fait fructifier le peu en abondance.",
        vertu: "Sa récitation encourage la gratitude et l'espoir de voir ses petites œuvres multipliées.",
        detail_tr: "En küçük iyiliği bolca ödüllendirir ve azı bereketle çoğaltır.",
        vertu_tr: "Zikri şükrü teşvik eder ve küçük amellerin kat kat artması ümidini verir."
    },
    37: {
        detail: "Il est infiniment élevé au-dessus de toute chose, par Son essence, Ses attributs et Sa majesté.",
        vertu: "L'invoquer élève les aspirations du cœur vers ce qui est noble et durable.",
        detail_tr: "Zâtı, sıfatları ve azametiyle her şeyin sonsuz üstündedir.",
        vertu_tr: "Zikri gönlün himmetini yüce ve kalıcı olana yükseltir."
    },
    38: {
        detail: "Il est le Plus Grand, dont la grandeur est absolue et devant qui tout n'est qu'infime.",
        vertu: "Sa récitation inspire l'humilité et la juste mesure de soi devant le Créateur.",
        detail_tr: "En büyüktür; büyüklüğü mutlaktır ve O'nun yanında her şey pek küçüktür.",
        vertu_tr: "Zikri tevazuyu ve Yaratan karşısında haddini bilmeyi telkin eder."
    },
    39: {
        detail: "Il préserve toute chose de la disparition et garde les actes de Ses serviteurs jusqu'au Jour du compte.",
        vertu: "L'invoquer est espéré pour la protection de soi, de sa famille et de ses biens.",
        detail_tr: "Her şeyi yok olmaktan koruyan ve kullarının amellerini hesap gününe dek muhafaza edendir.",
        vertu_tr: "Zikri kişinin kendisinin, ailesinin ve malının korunmasına vesile umulur."
    },
    40: {
        detail: "Il pourvoit aux corps leur nourriture et aux âmes leur force, en mesurant la part de chacun.",
        vertu: "Sa récitation est espérée pour la suffisance des besoins et la force dans l'épreuve.",
        detail_tr: "Bedenlere gıdayı, ruhlara kuvveti, herkesin payını takdir ederek verendir.",
        vertu_tr: "Zikri ihtiyaçların karşılanmasına ve zorlukta kuvvete vesile umulur."
    },
    41: {
        detail: "Il tient le compte exact de toute chose et suffit à Son serviteur en toute affaire.",
        vertu: "L'invoquer renforce la confiance que Dieu suffit et libère de la peur du jugement des gens.",
        detail_tr: "Her şeyin hesabını tam tutan ve her işte kuluna kâfi gelendir.",
        vertu_tr: "Zikri Allah'ın yeteceği güvenini artırır ve insanların hükmünden korkmaktan kurtarır."
    },
    42: {
        detail: "Il possède la majesté et la grandeur absolues, qualifiées de toutes les perfections.",
        vertu: "Sa récitation emplit le cœur de vénération et détache des grandeurs illusoires.",
        detail_tr: "Mutlak celâl ve azamet sahibidir; bütün kemâl sıfatlarıyla muttasıftır.",
        vertu_tr: "Zikri kalbi tâzimle doldurur ve aldatıcı büyüklüklerden uzaklaştırır."
    },
    43: {
        detail: "Il est infiniment généreux : Il donne sans qu'on demande, pardonne malgré le pouvoir de punir et ne déçoit pas qui espère en Lui.",
        vertu: "L'invoquer attire la générosité, la noblesse de caractère et la bénédiction dans les dons.",
        detail_tr: "Sonsuz cömerttir; istenmeden verir, cezalandırmaya gücü yettiği hâlde bağışlar ve kendisine umut bağlayanı boşa çıkarmaz.",
        vertu_tr: "Zikri cömertliği, ahlâk güzelliğini ve verilenlerde bereketi celbeder."
    },
    44: {
        detail: "Il observe et surveille toute chose en permanence ; rien de Ses créatures ne Lui est caché.",
        vertu: "Sa récitation développe la vigilance du cœur (murâqaba) et la droiture en secret comme en public.",
        detail_tr: "Her şeyi dâima gözetip kontrol edendir; kullarından hiçbir şey O'na gizli değildir.",
        vertu_tr: "Zikri kalbin murakabesini ve gizli-açık doğruluğu geliştirir."
    },
    45: {
        detail: "Il répond à l'invocation de qui L'appelle et exauce, selon Sa sagesse, les besoins de Ses serviteurs.",
        vertu: "L'invoquer ravive l'espoir dans la prière et la persévérance à demander à Dieu.",
        detail_tr: "Kendisine yalvaranın duasına cevap veren ve hikmetince kullarının ihtiyacını karşılayandır.",
        vertu_tr: "Zikri duada ümidi ve Allah'tan istemekte sebatı diriltir."
    },
    46: {
        detail: "Sa science, Sa miséricorde et Sa générosité sont sans limites et englobent toute la création.",
        vertu: "Sa récitation est espérée pour l'élargissement du cœur, du savoir et de la subsistance.",
        detail_tr: "İlmi, rahmeti ve cömertliği sınırsızdır ve bütün yaratılmışları kuşatır.",
        vertu_tr: "Zikri gönlün, ilmin ve rızkın genişlemesine vesile umulur."
    },
    47: {
        detail: "Toutes Ses décisions et Ses créations reposent sur une sagesse parfaite, même quand elle nous échappe.",
        vertu: "L'invoquer aide à discerner la sagesse cachée des épreuves et à agir avec discernement.",
        detail_tr: "Bütün hüküm ve yaratışları, biz kavrayamasak da kusursuz bir hikmete dayanır.",
        vertu_tr: "Zikri musibetlerdeki gizli hikmeti görmeye ve basiretle davranmaya yardım eder."
    },
    48: {
        detail: "Il aime Ses serviteurs vertueux et Se rend aimable à eux ; Il est l'objet d'un amour pur.",
        vertu: "Sa récitation nourrit l'amour de Dieu dans le cœur et l'affection sincère entre les croyants.",
        detail_tr: "Sâlih kullarını sever, kendisini onlara sevdirir ve hâlis sevgiye lâyık olandır.",
        vertu_tr: "Zikri kalpte Allah sevgisini ve müminler arasında samimi muhabbeti besler."
    },
    49: {
        detail: "Il joint la grandeur de la majesté à la noblesse de la générosité, dans une gloire infinie.",
        vertu: "L'invoquer attire la noblesse de l'âme et l'élévation par la générosité.",
        detail_tr: "Azametin yüceliğini cömertliğin asaletiyle birleştiren, sonsuz şan sahibidir.",
        vertu_tr: "Zikri ruhun asaletini ve cömertlikle yücelmeyi celbeder."
    },
    50: {
        detail: "Il ressuscitera les morts au Jour de la Résurrection et éveille les cœurs à la vie de la foi.",
        vertu: "Sa récitation ravive la conscience de l'au-delà et redonne vie à un cœur endormi.",
        detail_tr: "Kıyamet günü ölüleri diriltecek ve kalpleri iman hayatına uyandırandır.",
        vertu_tr: "Zikri âhiret şuurunu canlandırır ve uyuyan kalbe yeniden hayat verir."
    },
    51: {
        detail: "Il est témoin de toute chose, présent partout ; rien n'échappe à Son témoignage.",
        vertu: "L'invoquer renforce la sincérité, sachant que Dieu témoigne de toute parole et tout acte.",
        detail_tr: "Her şeye şahittir, her yerde hazırdır; hiçbir şey O'nun şahitliğinden kaçamaz.",
        vertu_tr: "Zikri, Allah'ın her söze ve işe şahit olduğu bilinciyle ihlâsı güçlendirir."
    },
    52: {
        detail: "Il est la Vérité absolue dont l'existence est nécessaire et immuable ; tout le reste n'existe que par Lui.",
        vertu: "Sa récitation ancre le cœur dans le réel et dissipe l'illusion et le doute.",
        detail_tr: "Varlığı zorunlu ve değişmez olan mutlak Hak'tır; her şey ancak O'nunla var olur.",
        vertu_tr: "Zikri kalbi hakikate bağlar, vehmi ve şüpheyi dağıtır."
    },
    53: {
        detail: "Il prend en charge les affaires de ceux qui s'en remettent à Lui et gère l'univers avec perfection.",
        vertu: "L'invoquer renforce le tawakkul et apaise l'anxiété face à l'avenir.",
        detail_tr: "Kendisine güvenip dayananların işlerini üstlenen ve kâinatı kusursuz yönetendir.",
        vertu_tr: "Zikri tevekkülü güçlendirir ve gelecek kaygısını dindirir."
    },
    54: {
        detail: "Sa force est absolue et inépuisable ; nulle puissance ne peut l'égaler ni la diminuer.",
        vertu: "Sa récitation est espérée pour la force dans la faiblesse et le secours face aux oppresseurs.",
        detail_tr: "Kuvveti mutlak ve tükenmezdir; hiçbir güç ona denk olamaz ve onu azaltamaz.",
        vertu_tr: "Zikri zayıflıkta kuvvete ve zalimlere karşı yardıma vesile umulur."
    },
    55: {
        detail: "Sa puissance est d'une fermeté inébranlable, sans la moindre faiblesse ni fatigue.",
        vertu: "L'invoquer affermit la volonté et la constance dans le bien.",
        detail_tr: "Kudreti, en ufak bir zaaf veya yorgunluk olmaksızın sarsılmaz bir sağlamlıktadır.",
        vertu_tr: "Zikri iradeyi ve hayırda sebatı pekiştirir."
    },
    56: {
        detail: "Il est l'allié, le protecteur et le soutien des croyants, qui prend soin de leurs affaires.",
        vertu: "Sa récitation procure le sentiment d'être épaulé et la confiance dans la protection divine.",
        detail_tr: "Müminlerin dostu, koruyucusu ve yardımcısıdır; onların işlerini görüp gözetir.",
        vertu_tr: "Zikri desteklenmişlik hissi ve ilâhî korumaya güven verir."
    },
    57: {
        detail: "Il est digne de toute louange par Son essence et Ses bienfaits, qu'on Le loue ou non.",
        vertu: "L'invoquer développe la gratitude et la louange en toute situation.",
        detail_tr: "Zâtı ve nimetleriyle, övülse de övülmese de her türlü hamde lâyıktır.",
        vertu_tr: "Zikri her hâlde şükrü ve hamdi geliştirir."
    },
    58: {
        detail: "Il dénombre et connaît toute chose dans le détail, sans qu'un atome Lui échappe.",
        vertu: "Sa récitation rappelle que chaque acte est compté et incite à la rigueur.",
        detail_tr: "Her şeyi tek tek sayıp bilir; zerre kadar bir şey bile O'ndan kaçmaz.",
        vertu_tr: "Zikri her amelin sayıldığını hatırlatır ve titizliğe teşvik eder."
    },
    59: {
        detail: "Il fait commencer toute chose et crée sans modèle antérieur, à partir de rien.",
        vertu: "L'invoquer est espéré pour bien commencer une œuvre et y trouver la bénédiction.",
        detail_tr: "Her şeyi başlatan ve önceki bir örnek olmadan yoktan yaratandır.",
        vertu_tr: "Zikri bir işe güzel başlamaya ve bereketine vesile umulur."
    },
    60: {
        detail: "Il fait revenir et recommence : Il ramènera les créatures à la vie après la mort.",
        vertu: "Sa récitation ravive l'espoir du retour à Dieu et de la résurrection.",
        detail_tr: "İade eden ve yeniden yapandır; yaratılmışları ölümden sonra tekrar diriltecektir.",
        vertu_tr: "Zikri Allah'a dönüş ve yeniden dirilme ümidini canlandırır."
    },
    61: {
        detail: "Il donne la vie : Il anime la matière inerte et fait revivre les cœurs par la foi.",
        vertu: "L'invoquer est espéré pour la santé, la vitalité et la vivification du cœur.",
        detail_tr: "Hayat verendir; cansız maddeye can verir ve kalpleri imanla diriltir.",
        vertu_tr: "Zikri sağlığa, canlılığa ve kalbin ihyâsına vesile umulur."
    },
    62: {
        detail: "Il fait mourir toute créature au terme fixé, car la mort comme la vie sont entre Ses mains.",
        vertu: "Sa récitation rappelle la mort et incite à se préparer et à éteindre les passions de l'ego.",
        detail_tr: "Her canlıyı takdir edilen vakitte öldürendir; ölüm de hayat da O'nun elindedir.",
        vertu_tr: "Zikri ölümü hatırlatır, hazırlığa ve nefsin arzularını söndürmeye teşvik eder."
    },
    63: {
        detail: "Il est le Vivant par excellence, d'une vie parfaite, sans commencement ni fin, source de toute vie.",
        vertu: "L'invoquer est espéré pour la vigueur du corps et du cœur et la solidité de la foi.",
        detail_tr: "Başlangıcı ve sonu olmayan kâmil bir hayatla daima diridir; bütün hayatın kaynağıdır.",
        vertu_tr: "Zikri beden ve kalp dinçliğine, imanın sağlamlığına vesile umulur."
    },
    64: {
        detail: "Il subsiste par Lui-même et maintient toute chose dans l'existence ; rien ne tient sans Lui.",
        vertu: "Sa récitation, souvent jointe à Al-Hayy, est espérée pour la stabilité et la présence du cœur.",
        detail_tr: "Kendi zâtıyla kâimdir ve her şeyi varlıkta tutar; O olmadan hiçbir şey ayakta duramaz.",
        vertu_tr: "Genelde Hayy ile birlikte zikri, istikrara ve kalp huzuruna vesile umulur."
    },
    65: {
        detail: "Il trouve tout ce qu'Il veut à l'instant où Il le veut ; rien ne Lui manque et Il ne dépend de rien.",
        vertu: "L'invoquer renforce le contentement (qanâ'a) et la richesse du cœur.",
        detail_tr: "Dilediğini dilediği anda bulandır; hiçbir şey O'na eksik değildir ve hiçbir şeye muhtaç değildir.",
        vertu_tr: "Zikri kanaati ve gönül zenginliğini güçlendirir."
    },
    66: {
        detail: "Il joint la gloire de Sa majesté à l'abondance de Sa générosité et de Sa bonté.",
        vertu: "Sa récitation attire la dignité, la bénédiction et la noblesse de comportement.",
        detail_tr: "Azametinin şanını cömertliğinin ve iyiliğinin bolluğuyla birleştirendir.",
        vertu_tr: "Zikri vakarı, bereketi ve davranış asaletini celbeder."
    },
    67: {
        detail: "Il est l'Unique, sans associé ni semblable, dans Son essence, Ses attributs et Ses actes.",
        vertu: "L'invoquer purifie la foi du polythéisme et unifie le cœur autour de Dieu seul.",
        detail_tr: "Zâtında, sıfatlarında ve fiillerinde ortağı ve benzeri olmayan tek olandır.",
        vertu_tr: "Zikri imanı şirkten arındırır ve kalbi yalnız Allah'ta birler."
    },
    68: {
        detail: "Il est le recours absolu vers qui toute créature se tourne dans le besoin, sans rien attendre de personne.",
        vertu: "Sa récitation enseigne à ne dépendre que de Dieu et libère de la mendicité du cœur.",
        detail_tr: "Her muhtacın yöneldiği mutlak mercidir; kendisi hiç kimseye muhtaç değildir.",
        vertu_tr: "Zikri yalnız Allah'a dayanmayı öğretir ve gönlü kuldan istemekten kurtarır."
    },
    69: {
        detail: "Il a pouvoir sur toute chose : Il fait exister ou disparaître selon Sa volonté, sans aucun obstacle.",
        vertu: "L'invoquer est espéré pour la force devant l'impuissance et la réalisation de ce qui semble impossible.",
        detail_tr: "Her şeye gücü yetendir; dilediğini hiçbir engel olmadan var eder veya yok eder.",
        vertu_tr: "Zikri acizlik karşısında kuvvete ve imkânsız görüneni başarmaya vesile umulur."
    },
    70: {
        detail: "Sa toute-puissance s'exerce avec une maîtrise parfaite ; Il réalise Ses décrets sans que rien ne s'y oppose.",
        vertu: "Sa récitation est espérée pour le secours décisif et la confiance dans la puissance de Dieu.",
        detail_tr: "Kudreti kusursuz bir hâkimiyetle tecellî eder; hükümlerini hiçbir şey engellemeden gerçekleştirir.",
        vertu_tr: "Zikri kesin yardıma ve Allah'ın kudretine güvene vesile umulur."
    },
    71: {
        detail: "Il avance et place en avant qui Il veut, selon Sa sagesse, dans les degrés et les destinées.",
        vertu: "L'invoquer aide à faire passer le bien en priorité et à progresser dans la dévotion.",
        detail_tr: "Hikmetince dilediğini derecelerde ve kaderlerde öne alıp ileri geçirendir.",
        vertu_tr: "Zikri hayrı önceleme ve ibadette ilerleme konusunda yardım eder."
    },
    72: {
        detail: "Il retarde et place en arrière qui Il veut, selon Sa sagesse, ajournant ce qu'Il décide.",
        vertu: "Sa récitation aide à accepter les délais et à se défaire de ce qui éloigne de Dieu.",
        detail_tr: "Hikmetince dilediğini geriye bırakan ve takdir ettiğini erteleyendir.",
        vertu_tr: "Zikri gecikmeleri kabule ve Allah'tan uzaklaştıran şeyleri geride bırakmaya yardım eder."
    },
    73: {
        detail: "Il est le Premier, sans commencement ; Il existait avant toute chose et rien ne Le précède.",
        vertu: "L'invoquer ramène le cœur à l'origine de toute chose et au détachement du transitoire.",
        detail_tr: "Başlangıcı olmayan İlk'tir; her şeyden önce vardı ve hiçbir şey O'ndan önce değildir.",
        vertu_tr: "Zikri kalbi her şeyin aslına ve gelip geçenden kopmaya yöneltir."
    },
    74: {
        detail: "Il est le Dernier, sans fin ; Il demeure après que tout a disparu, éternellement.",
        vertu: "Sa récitation rappelle que tout retourne à Dieu et oriente vers ce qui dure.",
        detail_tr: "Sonu olmayan Son'dur; her şey yok olduktan sonra ebediyen bâki kalandır.",
        vertu_tr: "Zikri her şeyin Allah'a döneceğini hatırlatır ve kalıcı olana yöneltir."
    },
    75: {
        detail: "Il est l'Apparent, dont l'existence est manifestée par d'innombrables signes dans la création.",
        vertu: "L'invoquer ouvre les yeux du cœur sur les signes de Dieu en toute chose.",
        detail_tr: "Zâhir'dir; varlığı, yaratılıştaki sayısız delille apaçık ortadadır.",
        vertu_tr: "Zikri kalp gözünü her şeydeki ilâhî delillere açar."
    },
    76: {
        detail: "Il est le Caché, que les sens ne peuvent atteindre ; Il est plus proche que tout, par-delà toute représentation.",
        vertu: "Sa récitation approfondit la conscience de la proximité de Dieu dans l'intime du cœur.",
        detail_tr: "Bâtın'dır; duyular O'na erişemez; her şeyden yakındır, fakat her tasavvurun ötesindedir.",
        vertu_tr: "Zikri Allah'ın kalbin derinliğindeki yakınlığının şuurunu derinleştirir."
    },
    77: {
        detail: "Il gouverne et administre l'univers entier ; tout obéit à Son ordre et se déroule selon Sa volonté.",
        vertu: "L'invoquer renforce la confiance que tout est sous le gouvernement sage de Dieu.",
        detail_tr: "Bütün kâinatı yöneten ve idare edendir; her şey O'nun emrine boyun eğer ve dilemesince cereyan eder.",
        vertu_tr: "Zikri her şeyin Allah'ın hikmetli idaresinde olduğu güvenini artırır."
    },
    78: {
        detail: "Il est infiniment exalté au-dessus de tout défaut, de toute ressemblance et de toute limite imaginée.",
        vertu: "L'invoquer purifie la conception de Dieu de toute comparaison et élève les pensées.",
        detail_tr: "Her kusurdan, her benzerlikten ve tasavvur edilen her sınırdan sonsuzca yücedir.",
        vertu_tr: "Zikri Allah tasavvurunu her türlü benzetmeden arındırır ve düşünceleri yüceltir."
    },
    79: {
        detail: "Il est plein de bonté et de bienfaisance envers Ses créatures, comblant de bien au-delà du nécessaire.",
        vertu: "Sa récitation attire la bonté divine et incite à la bienfaisance, notamment envers les parents.",
        detail_tr: "Kullarına karşı iyilik ve ihsanı boldur; gereğinin ötesinde hayırla donatır.",
        vertu_tr: "Zikri ilâhî iyiliği celbeder ve özellikle ana-babaya iyiliğe teşvik eder."
    },
    80: {
        detail: "Il accueille le repentir de Ses serviteurs encore et encore, et facilite Lui-même le retour vers Lui.",
        vertu: "L'invoquer ouvre la porte du repentir et renouvelle l'espoir d'être agréé.",
        detail_tr: "Kullarının tövbesini tekrar tekrar kabul eder ve kendisine dönüşü bizzat kolaylaştırır.",
        vertu_tr: "Zikri tövbe kapısını açar ve kabul edilme ümidini tazeler."
    },
    81: {
        detail: "Il châtie avec justice les criminels obstinés, après leur avoir laissé le temps de se repentir.",
        vertu: "Sa récitation est espérée pour être préservé de l'injustice et soutenu face à l'oppression.",
        detail_tr: "Tövbe için süre tanıdıktan sonra, ısrarlı suçluları adaletle cezalandırandır.",
        vertu_tr: "Zikri zulümden korunmaya ve baskı karşısında desteklenmeye vesile umulur."
    },
    82: {
        detail: "Il efface totalement les péchés, plus encore que de les pardonner, comme s'ils n'avaient jamais eu lieu.",
        vertu: "L'invoquer est espéré pour l'effacement complet des fautes et la paix de la conscience.",
        detail_tr: "Günahları bağışlamaktan da öte, hiç olmamış gibi tamamen silip yok edendir.",
        vertu_tr: "Zikri hataların büsbütün silinmesine ve vicdan huzuruna vesile umulur."
    },
    83: {
        detail: "Sa tendresse et Sa compassion envers Ses créatures dépassent toute mesure, en allégeant leurs charges.",
        vertu: "Sa récitation adoucit le cœur et attire la douceur de Dieu dans l'épreuve.",
        detail_tr: "Kullarına karşı şefkat ve merhameti her ölçüyü aşar; yüklerini hafifletir.",
        vertu_tr: "Zikri kalbi yumuşatır ve sıkıntıda Allah'ın şefkatini celbeder."
    },
    84: {
        detail: "Il est le possesseur de toute la royauté : Il donne et reprend le pouvoir à qui Il veut, en disposant de tout comme Il l'entend.",
        vertu: "L'invoquer rappelle que tout pouvoir est un dépôt confié et incite à l'équité quand on commande.",
        detail_tr: "Bütün mülkün sahibidir; saltanatı dilediğine verir, dilediğinden alır ve her şeyde dilediğince tasarruf eder.",
        vertu_tr: "Zikri her yetkinin bir emanet olduğunu hatırlatır ve idarede adalete teşvik eder."
    },
    85: {
        detail: "Il réunit la majesté qui inspire la crainte et la générosité qui inspire l'amour ; toute grâce vient de Lui.",
        vertu: "Sa récitation équilibre la crainte et l'espoir et attire l'honneur auprès de Dieu.",
        detail_tr: "Heybet veren celâli ile sevgi uyandıran ikramı kendinde toplar; her lütuf O'ndandır.",
        vertu_tr: "Zikri havf ile recâyı dengeler ve Allah katında şerefe vesile umulur."
    },
    86: {
        detail: "Il rend justice avec équité parfaite et rétablit le droit de l'opprimé face à l'oppresseur.",
        vertu: "L'invoquer incite à l'équité et est espéré pour le rétablissement du droit.",
        detail_tr: "Kusursuz bir denklikle adalet eder ve mazlumun hakkını zalimden geri verir.",
        vertu_tr: "Zikri adalete teşvik eder ve hakkın yerini bulmasına vesile umulur."
    },
    87: {
        detail: "Il rassemble ce qu'Il veut, quand Il veut : les contraires dans la création et les hommes au Jour de la Résurrection.",
        vertu: "Sa récitation est espérée pour réunir ce qui est dispersé, les cœurs comme les affaires.",
        detail_tr: "Dilediğini dilediği zaman toplar: yaratılışta zıtları, kıyamette insanları bir araya getirir.",
        vertu_tr: "Zikri dağılanı, kalpleri ve işleri bir araya getirmeye vesile umulur."
    },
    88: {
        detail: "Il est riche par Lui-même, n'ayant besoin de rien ni de personne, tandis que tout a besoin de Lui.",
        vertu: "L'invoquer nourrit le contentement et libère le cœur de l'avidité.",
        detail_tr: "Kendi zâtıyla zengindir; hiçbir şeye ve kimseye muhtaç değildir, oysa her şey O'na muhtaçtır.",
        vertu_tr: "Zikri kanaati besler ve gönlü hırstan kurtarır."
    },
    89: {
        detail: "Il enrichit qui Il veut et le rend indépendant des autres, par la richesse du cœur ou des biens.",
        vertu: "Sa récitation est espérée pour l'aisance matérielle et surtout la richesse du cœur.",
        detail_tr: "Dilediğini zengin kılar ve gönül ya da mal zenginliğiyle başkalarına muhtaç olmaktan kurtarır.",
        vertu_tr: "Zikri maddî genişliğe ve özellikle gönül zenginliğine vesile umulur."
    },
    90: {
        detail: "Il empêche et écarte ce qui nuit, retient ce qu'Il veut par sagesse et protège Ses serviteurs.",
        vertu: "L'invoquer est espéré comme protection contre les maux et préservation de ce que l'on possède.",
        detail_tr: "Zararlı şeyleri engelleyip uzaklaştıran, dilediğini hikmetle tutan ve kullarını koruyandır.",
        vertu_tr: "Zikri kötülüklerden korunmaya ve sahip olunanın muhafazasına vesile umulur."
    },
    91: {
        detail: "Par Sa sagesse et Sa justice, Il peut faire advenir le mal et l'affliction, qui ne surviennent que par Sa permission.",
        vertu: "L'invoquer enseigne que tout vient de Dieu et incite à recourir à Lui seul dans le malheur.",
        detail_tr: "Hikmet ve adaletiyle zarar ve sıkıntı verebilendir; bunlar ancak O'nun izniyle gerçekleşir.",
        vertu_tr: "Zikri her şeyin Allah'tan geldiğini öğretir ve sıkıntıda yalnız O'na sığınmaya teşvik eder."
    },
    92: {
        detail: "Il est la source de tout bienfait et de toute utilité ; nul profit n'advient sans Sa volonté.",
        vertu: "Sa récitation est espérée pour attirer le bien et écarter ce qui nuit.",
        detail_tr: "Her faydanın ve menfaatin kaynağıdır; hiçbir yarar O'nun dilemesi olmadan gerçekleşmez.",
        vertu_tr: "Zikri hayrı celbetmeye ve zararı uzaklaştırmaya vesile umulur."
    },
    93: {
        detail: "Il est la Lumière des cieux et de la terre, qui éclaire l'univers et guide les cœurs hors des ténèbres.",
        vertu: "L'invoquer est espéré pour la lumière du cœur, la clarté de la foi et la guidance.",
        detail_tr: "Göklerin ve yerin nûrudur; kâinatı aydınlatır ve kalpleri karanlıklardan çıkarıp yola iletir.",
        vertu_tr: "Zikri kalp nûruna, iman aydınlığına ve hidayete vesile umulur."
    },
    94: {
        detail: "Il guide qui Il veut vers la vérité et le droit chemin, et oriente chaque créature vers ce qui lui convient.",
        vertu: "Sa récitation est espérée pour la guidance, la fermeté dans la foi et la sortie de l'égarement.",
        detail_tr: "Dilediğini hakka ve doğru yola iletir ve her varlığı kendine uygun olana yöneltir.",
        vertu_tr: "Zikri hidayete, imanda sebata ve dalâletten kurtuluşa vesile umulur."
    },
    95: {
        detail: "Il crée des merveilles sans précédent ni modèle, d'une beauté et d'une originalité qui émerveillent.",
        vertu: "L'invoquer est espéré pour résoudre des situations sans issue de façon inattendue.",
        detail_tr: "Örneksiz ve benzersiz, hayranlık veren bir güzellik ve orijinallikle yaratandır.",
        vertu_tr: "Zikri çıkışsız görünen durumların ummadık şekilde çözülmesine vesile umulur."
    },
    96: {
        detail: "Il demeure éternellement ; Son existence n'a pas de fin, alors que tout le reste est voué à disparaître.",
        vertu: "Sa récitation détache des biens éphémères et oriente vers les œuvres qui durent.",
        detail_tr: "Ebediyen bâki kalandır; varlığının sonu yoktur, oysa her şey fânidir.",
        vertu_tr: "Zikri gelip geçici şeylerden koparır ve kalıcı amellere yöneltir."
    },
    97: {
        detail: "Il est l'héritier de toute chose : tout disparaît et Lui seul demeure, possesseur de tout après tous.",
        vertu: "L'invoquer rappelle le caractère provisoire de la possession et console de la perte.",
        detail_tr: "Her şeyin vârisidir; her şey yok olur, yalnız O kalır ve herkesten sonra her şeyin sahibidir.",
        vertu_tr: "Zikri mülkün geçiciliğini hatırlatır ve kayıplara karşı teselli verir."
    },
    98: {
        detail: "Il dirige toute chose vers sa juste fin avec une sagesse parfaite et guide vers la maturité spirituelle.",
        vertu: "Sa récitation est espérée pour la droiture, la bonne orientation et des décisions justes.",
        detail_tr: "Her şeyi kusursuz bir hikmetle hayırlı sonuca yönelten ve mânevî olgunluğa irşad edendir.",
        vertu_tr: "Zikri doğruluğa, isabetli yönelişe ve doğru kararlara vesile umulur."
    },
    99: {
        detail: "Il est infiniment patient : Il ne précipite pas le châtiment et donne aux fautifs le temps de revenir.",
        vertu: "L'invoquer aide à acquérir la patience, la constance et la maîtrise de soi dans l'épreuve.",
        detail_tr: "Sonsuz sabırlıdır; cezada acele etmez ve hata edenlere dönmeleri için süre tanır.",
        vertu_tr: "Zikri sabrı, sebatı ve sıkıntıda nefse hâkimiyeti kazanmaya yardım eder."
    }
};

// Renvoient l'explication / les vertus dans la langue courante (repli sur le français).
function detailLocalise(item) {
    const d = DETAILS[item.n];
    if (!d) return "";
    return (typeof getLangue === "function" && getLangue() === "tr" && d.detail_tr) ? d.detail_tr : (d.detail || "");
}

function vertuLocalise(item) {
    const d = DETAILS[item.n];
    if (!d) return "";
    return (typeof getLangue === "function" && getLangue() === "tr" && d.vertu_tr) ? d.vertu_tr : (d.vertu || "");
}
