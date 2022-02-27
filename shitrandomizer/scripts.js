//fooking shared arrays here actually more than arrays lol
const participants=[];
const characters=[];
const arating=[];
const type=[];
var pCount=0;
var cCount=0;
var secretH=0;

//checking if im stupid or not with these
function test() {
console.clear();
console.log(participants);
console.log(characters);
console.log(pCount);
console.log(cCount);
}

//actually making add participants functioning or something
function pA() {
    var pA=document.getElementById('p').value;
    if (pA!='') {
        participants.push(pA);
    }
    console.log(participants);
}
//same but for removing unfortunately only last one :c
function pR() {
    participants.pop();
    console.log(participants);
}
//adding common participants
function pAc() {
    participants.push("Hubert", "Robert", "Adam", "Bartek", "Oktawian", "Kuba", "Sergiusz", "Konrad", "Szymon");
    console.log(participants);
}
//participants console log button
function pI() {
    console.clear();
    console.log(participants);
}
//clear participants array
function pC() {
    participants.splice(0,participants.length);
    console.log(participants);
}
//counting the ammount of participants
function pCountF() {
    pCount=participants.length;
    console.log(pCount);
    document.getElementById('pCount').innerHTML=pCount;
}

//adding characters working same as participants
function cA() {
    var cA=document.getElementById('c').value;
    if (cA!='') {
        characters.push(cA);
    }
    console.log(characters);
}
//removing characters working same as participants
function cR() {
    characters.pop();
    console.log(characters);
}
//fuck me on this one -- common characters
function cAc() {
    characters.push("Mirizé Vladilena", "Rosenfort Frederica", "Akame", "Leone", "Mine", "Chelsea", "Esdeath", "Tachibana Kanade", "Nakamura Yuri", "Kayano Kaede", "Angel Melida", "Hanekawa Tsubasa", "Neko Hanekawa", "Sengoku Nadeko", "Senjougahara Hitagi", "Araragi Karen", "Araragi Tsukihi", "Hachikuji Mayoi", "Kanbaru Suruga", "Kiss-Shot Acerola-Orion Heart-Under-Blade", "Oshino Shinobu", "Araragi Tsukihi", "Kagenui Yozuru", "Ononoki Yotsugi", "Oikura Sodachi", "Gaen Izuko", "Oshino Ougi", "Hinata Kaho", "Hoshikawa Mafuyu", "Sakuranomiya Maika", "Kanzaki Hideri", "Kousaka Akiho", "Ariyama Shizuku", "Kurobane Yusa", "Otosaka Ayumi", "Tomori Nao", "Kurobane Misa", "Yin (dtb)", "Pavlichenko Suou", "Ichigo ", "Kokoro (Darling in the FranXX)", "Miku (Darling in the FranXX)", "Zero Two", "Karino Shuka", "Tachibana Hina", "Tachibana Rui", "Kohaku (dr kamien)", "Hestia (danmachi)", "Freya (danmachi)", "Hephaistos (danmachi)", "Yamato Mikoto (danmachi)", "Wallenstein Aiz (danmachi)", "Lion Ryu (danmachi)", "Artemis (danmachi)", "Ganesha xd (danmachi)", "Sanjouno Haruhime (danmachi)", "Izumi Sagiri", "Co Lada Piña", "Mercury Rory", "Marceau Tuka Luna", "Evergarden Violet", "Baudelaire Cattleya", "Aoki Claire", "Shinkan Onna", "Yunde Yousei", "Kaga Kouko", "Hayashida Nana", "Nakano Ichika", "Nakano Itsuki", "Nakano Nino", "Nakano Miku", "Nakano Yotsuba", "Uesugi Raiha", "Kotegawa Chisa", "Hamaoka Azusa", "Yoshiwara Aina", "Kotegawa Nanaka", "Ogiwara Sayu", "Hori Kyouko", "Nagatoro Hayase", "Yoshi (nagataro)", "Gamou Maki (nagataro)", "Sakur (nagataro)", "Fujiwara Chika", "Shinomiya Kaguya", "Hayasaka Ai", "Shirogane Kei", "Jabami Yumeko", "Saotome Meari", "Yomozuki Runa", "Momobami Kirari", "Yumemite Yumemi", "Hina (Kamisama ni Natta Hi)", "Saki Saki (Kanojo mo Kanojo)", "Hoshizaki Rika (Kanojo mo Kanojo)", "Kiryuu Shino (Kanojo mo Kanojo)", "Minase Nagisa (Kanojo mo Kanojo)", "Mizuhara Chizuru", "Kamado Nezuko", "Kobayashi (Maid Dragon)", "Tooru (Maid Dragon)", "Kamui Kanna (Maid Dragon)", "Elma (Maid Dragon)", "Quetzalcoatl (Maid Dragon)", "Nishimiya Shouko", "Komi Shouko", "Osana Najimi", "Yamai Ren", "Darkness (Kono Suba)", "Aqua (Kono Suba)", "Megumin (Kono Suba)", "Eris (Kono Suba)", "Wiz (Kono Suba)", "Yunyun (Kono Suba)", "Flan (Majo no Tabitabi)", "Elaina (Majo no Tabitabi)", "Sheila (Majo no Tabitabi)", "Gasai Yuno", "Kurousagi (Mondaiji-tachi)", "Kudou Asuka (Mondaiji-tachi)", "Kasukabe You (Mondaiji-tachi)", "Sylphiette", "Migurdia Roxy", "Boreas Greyrat Eris", "Greyrat Lilia", "Greyrat Zenith", "Migurdia Roxy", "Onodera Kosaki", "Kirisaki Chitoge", "Tachibana Marika", "Tsugumi Seishirou", "Shiro (ngnl)", "Dola Stephanie (ngnl)", "Jibril (ngnl)", "Miko (ngnl)", "Hatsuse Izuna (ngnl)", "Tatsumaki", "Fubuki", "Holo(caust)", "Akino Sakura", "Hinata Aoi (OreWo)", "Sanshokuin Sumireko", "Albedo", "Bello Fiore Mare", "Bella Fiora Aura", "Alpha Yuri", "Beta Lupusregina", "Bloodfallen Shalltear", "Shizu Delta", "Isla (Plastic Memories)", "Rem", "Ram", "Emilia", "Beatrice", "Felt (Re:0)", "Argyle Felix -Ferris-", "Baumann Frederica", "Echidna", "Aoyama Nanami", "Kamiigusa Misaki", "Shiina Mashiro", "Sengoku Chihiro", "Sakurajima Mai", "Azusagawa Kaede", "Futaba Rio", "Kamisato Saki", "Makinohara Shouko", "Toyohama Nodoka", "Koga Tomoe", "Dia (Ansatsu Kizoku)", "Maha (Ansatsu Kizoku)", "Tarte (Ansatsu Kizoku)", "Esri (Ansatsu Kizoku)", "Kisaragi Alice (Sentouin Hakenshimasu!)", "Astaroth (Sentouin Hakenshimasu!)", "Belial (Sentouin Hakenshimasu!)", "Grimm (Sentouin Hakenshimasu!)", "Heine (Sentouin Hakenshimasu!)", "Rose (Sentouin Hakenshimasu!)", "Lilith (Sentouin Hakenshimasu!)", "Snow (Sentouin Hakenshimasu!)", "Grace Tillis (Sentouin Hakenshimasu!)", "Senko (Sewayaki Kitsune no Senko-san)", "Shiro (Sewayaki Kitsune no Senko-san)", "Sora (Sewayaki Kitsune no Senko-san)", "Miyazono Kaori", "Sawabe Tsubaki", "Ackermann Mikasa", "Blouse Sasha", "Reiss Historia", "Zoë Hange", "Leonhart Annie", "Dreyse Hitch", "Yuuki Asuna", "Alicia Rue", "Shinozaki Rika", "Ayano Keiko", "Konno Yuuki", "Asada Shino", "Shigemura Yuuna", "Kirigaya Suguha", "Unmei (takt op.Destiny)", "Titan (takt op.Destiny)", "Shneider Anna", "Filo (Tate no Yuusha no Nariagari)", "Raphtalia (Tate no Yuusha no Nariagari)", "Kirishima Touka", "Kamishiro Rize", "Yuzaki Tsukasa (Tonikaku Kawaii)", "Arisugawa Aya (Tonikaku Kawaii)", "Aurora (Tonikaku Kawaii)", "Charlotte (Tonikaku Kawaii)", "Arisugawa Kaname (Tonikaku Kawaii)", "Kaginoji Chitose (Tonikaku Kawaii)", "Aisaka Taiga", "Kawashima Ami", "Kushieda Minori", "Vivy", "Yuigahama Yui", "Yukinoshita Yukin", "Hiratsuka Shizuka", "Horikita Suzune", "Kushida Kikyou", "Chabashira Sae", "Ichinose Honami", "Sakura Airi", "Sakayanagi Arisu", "Yue (Arifureta)", "Haulia Shea", "Klarus Tio", "Shirasaki Kaori", "Yaegashi Shizuku", "Myu", "Ayukawa Ryuji", "Ichijou Aoi", "Kanzaki Keine", "Oohoshi Ringo", "Prince Akatsuki", "Sarutobi Shinobu", "Dekomori Sanae", "Nibutani Shinka", "Takanashi Rikka", "Shichimiya Satone", "Tsuyuri Kumin", "Honda Tooru", "Akito Souma", "Akiyama Yukari", "Isuzu Hana", "Nishizumi Miho", "Reizei Mako", "Katyusha", "Takebe Saori", "Argento Asia", "Gremory Rias", "Himejima Akeno", "Quarta Xenovia", "Toujou Koneko", "Vladi Gasper", "Akiyama Mio", "Hirasawa Yui", "Kotobuki Tsumugi", "Nakano Azusa", "Tainaka Ritsu", "Hirasawa Ui", "Yamanaka Sawako", "Yotsuya Miko", "Yurikawa Hana", "Bishamon", "Iki Hiyori", "Ebisu Kofuku", "Gardner Rachel", "Ward Catherine", "Kuga Asahi", "Usui Satsuki", "Ristarte (Shinchou Yuusha)", "Ariadoa (Shinchou Yuusha)", "Hestiaca (Shinchou Yuusha)", "Mitis (Shinchou Yuusha)", "Valkyrie (Shinchou Yuusha)", "Roseguard Rosalie (Shinchou Yuusha)", "Kitagawa Marin", "Bristol Lilith", "Hotaka Miyabi", "Sigtuna Julie", "Hoshino Lily", "Tachibana Tomoe", "Ochako Uraraka", "Yuu Takeyama (Mt. Lady)", "Hatsume Mei", "Himekawa Yoshino", "Itsuka Kotori", "Tobiichi Origami", "Yatogami Tooka", "Tokisaki Kurumi", "Ririko (Date a Live)", "Alexia van Riessfeld Julis", "Enfield Claudia", "Sasamiya Saya", "Toudou Kirin", "Irisu Makina", "Komine Sachi", "Matsushima Michiru", "Sakaki Yumiko", "Suou Amane", "Crossfode Emile", "Harvey Claire", "Kirishima Sakura", "Kisaragi Karen", "Alcott Cecilia", "Bodewig Laura", "Dunois Charlotte", "Huang Lingyin", "Shinonono Houki", "Freyja Iris", "Mononobe Mitsuki", "Crest Firill", "Lightning Tear", "Highwalker Lisa", "Neko (K)", "Brunestud Arcueid", "Pendragon Artoria (Fate)", "Toosaka Rin", "Ciel (Shingetsutan Tsukihime)", "Medea (Fate)", "Medusa (Fate)", "Aozaki Touko", "Augustus Germanicus Nero Claudius Caesar (Fate)", "Fraga McRemitz Bazett", "Fujimura Taiga", "Hortensia Caren", "Kokutou Azaka", "von Einzbern Illyasviel", "von Einzbern Irisviel", "Edelfelt Luviagelita", "Edelfelt Miyu", "Gray (Lord El-Melloi II)", "El-Melloi Archisorte Reines", "Lehrman Yvette L.", "d'Arc Jeanne (Fate)", "Pendragon Mordred (Fate)", "Ryougi Shiki", "Kyrielight Mash", "Fujimaru Ristuka (girl ver.)", "da Vinci Leonardo (Fate)", "Asmleit Animusphere Olga Marie", "Ereshkigal (Fate)", "von Einzbern Chloe", "Astolfo", "Frankenstein (Fate)", "Bladefield Nanami Knight", "Mahougasawa Akane", "Shoukanji Kikuno", "Takagi", "Kiryuu Mizuha", "Koga Yuika", "Nanjou Mao", "Tokihara Sayuki", "Kannagi Ayano", "Eisenbach Lecty", "Flamel Rico", "Whitale Misora", "Iwanaga Kotoko", "Shizuka Hanekura Akatsuki", "Shiba Miyuki", "Necron Sasha", "Necron Misha", "Akishino Himeka", "Fuyuumi Ai", "Harusaki Chiwa", "Natsukawa Masuzu", "Kachi Shirokusa", "Maria Momosaka", "Shida Kuroha", "Kurogane Shizuku", "Vermillion Stella", "Fibel Sistine", "Tingel Rumia", "Arfonia Celica", "Aingram Philphie", "Atismata Lisesharte", "Einfolk Krulcifer", "Kirihime Yoruka", "Ralgris Celistia", "Aishia (Seirei Gensouki)", "Latifa (Seirei Gensouki)", "Claire Celia (Seirei Gensouki)", "Fahrengart Ellis", "Est Terminus", "Ray Ordesia Fianna", "Laurenfrost Rinslet", "Rouge Claire", "Ashdoll Restia", "Naruse Maria", "Naruse Mio", "Nonaka Yuki", "Kanoe Kirie", "Kanoe Yuuko", "Asami Lilith", "Fudou Akio", "Kannazuki Arin", "Kazama Levi", "Kurata Yui", "Sherlock Lieselotte", "Yamana Mira", "Uzaki Hana", "Gakesaka Minori", "Misenai Kanan", "Toyofusa Urara", "Yasuraoka Hanabi", "Miyauchi Renge", "Koshigaya Natsumi", "Koshigaya Komari", "Ichijou Hotaru", "Halkara (Slime 300)", "Falfa (Slime 300)", "Laika (Slime 300)", "Shalsha (Slime 300)", "Aizawa Azusa (Slime 300)", "Victoria Seras", "Van Winkle Rip", "Busujima Saeko", "Maresato Alice", "Marikawa Shizuka", "Miyamoto Rei", "Takagi Saya", "von Claude Sicily", "Azazel Ameri", "Valac Clara", "Maou (Maoyuu Maou Yuusha)", "Hiiragi Nana", "Habu Kirara", "Dola Corone", "Dola Shuvi", "Claes Catarina", "Ascart Radia", "Ascart Sophia", "Campbell Maria", "Hunt Mary", "Hiiragi Shinoa", "Siesta", "Tomoe (Tsuki ga Michibiku Isekai Douchuu)", "Mio (Tsuki ga Michibiku Isekai Douchuu)", "Ralei Ninym (Tensai Ouji no Akaji Kokka Saisei Jutsu)", "Tachibana Hinata (Fantasy Bishoujo)", "Adachi Tenka", "Sayama Chie", "Semenobitchi Komako", "Nasse (Platinum End)", "Hanakago Saki (Platinum End)", "Valentine Faye", "Wong Hau Pepelu Tivrusky IV, Edward", "Luminesk Irina", "Simonyan Anya", "Shion (Slime isekai)", "Shuna (Slime isekai)", "Nava Milim", "Shizue Izawa", "Amber (Pedophile Impact)", "Barbara (Pedophile Impact)", "Beidou (Pedophile Impact)", "Diona (Pedophile Impact)", "Eula (Pedophile Impact)", "Fischl (Pedophile Impact)", "Venti (Gay Impact)", "Gorou (Furry Impact)", "Ganyu (Pedophile Impact)", "Hu Tao (Pedophile Impact)", "Jean (Pedophile Impact)", "Kamisato Ayaka (Pedophile Impact)", "Keqing (Pedophile Impact)", "Klee (Pedoghile Impact)", "Kojou Sara (Pedophile Impact)", "Lisa (Pedophile Impact)", "Mona (Pedophile Impact)", "Ningguang (Pedophile Impact)", "Noelle (Pedophile Impact)", "Qiqi (Pedophile Impact)", "Raiden Shogun (Pedophile Impact)", "Rosaria (Pedophile Impact)", "Sangonomiya Kokomi (Pedophile Impact)", "Sayu (Pedophile Impact)", "Shenhe (Pedophile Impact)", "Sucrose (Pedophile Impact)", "Lumine (Pedophile Impact)", "Xiangling (Pedophile Impact)", "Xinyan (Pedophile Impact)", "Yae Miko (Pedophile Impact)", "Yanfei (Pedophile Impact)", "Yoimiya (Pedophile Impact)", "Yun Jin (Pedophile Impact)", "Kaslana Kiana (Pedophile Impact 3rd)", "Mei Raiden (Pedophile Impact 3rd)", "Zaychik Bronya (Pedophile Impact 3rd)", "Himeko Murata (Pedophile Impact 3rd)", "Sakura Yae (Pedophile Impact 3rd)", "Apocalypse Theresa (Pedophile Impact 3rd)", "Hua Fu (Pedophile Impact 3rd)", "Kaslana Kallen (Pedophile Impact 3rd)", "Rossweisse Rita (Pedophile Impact 3rd)", "Olenyeva Lillya (Pedophile Impact 3rd)", "Olenyeva Rozalia (Pedophile Impact 3rd)", "Vollerei Seele (Pedophile Impact 3rd)", "Durandal (Pedophile Impact 3rd)", "Elysia (Pedophile Impact 3rd)", "Mobius (Pedophile Impact 3rd)", "Cioara Natasha (Pedophile Impact 3rd)", "Pepper Caole (Pedophile Impact 3rd)", "Bubbles Neco Arc", "Destiny Neco Arc");
    console.log(characters);
}
//characters log
function cI() {
    console.clear();
    console.log(characters);
}
//characters clear
function cC() {
    characters.splice(0,characters.length);
    console.log(characters);
}
//counting characters lol
function cCountF() {
    cCount=characters.length;
    console.log(cCount);
    document.getElementById('cCount').innerHTML=cCount;
}

//rest of the random shit, math and output
function random() {
    var e=document.getElementById('e').checked;
    var q=document.getElementById('q').checked;
    var m=document.getElementById('m').checked;
    var pfp=document.getElementById('pfp').checked;
    var wp=document.getElementById('wp').checked;
    var wpH=document.getElementById('wpH').checked;
    var wpL=document.getElementById('wpL').checked;
    //var r=document.getElementById('r').valueAsNumber;
    var output1="";
    var output2="";

    //Age rating section functioning
    if (e==true) {
        arating.push('Everyone');
    };
    if (q==true) {
        arating.push('Questionable');
    };
    if (m==true) {
        arating.push('Mature');
    };

    //Type
    if (pfp==true) {
        type.push('Profile Picture');
    };
    if (wpH==true) {
        type.push('Home Wp');
    };
    if (wpL==true) {
        type.push('Lock Wp');
    };
    if (wp==true) {
        type.push('Both Wps');
    };

    for (let r=document.getElementById('r').valueAsNumber; r>=1;) {

    //arating math
        console.log(arating);
        shuffle(arating);
        console.log(arating);
        let aratingO=arating[arating.length-1];
        console.log(aratingO);
    //const aratingR = Math.floor(Math.random() * arating.length);
    //console.log(aratingR, arating[aratingR]);
    //var aratingO = (aratingR, arating[aratingR]); //use for output

    //type math
        console.log(type);
        shuffle(type);
        console.log(type);
        let typeO=type[type.length-1];
        console.log(typeO);
    //const typeR = Math.floor(Math.random() * type.length);
    //console.log(typeR, type[typeR]);
    //var typeO = (typeR, type[typeR]); //use for output

    //almost forgot the participants math fuck
        console.log(participants);
        shuffle(participants);
        console.log(participants);
        let participantsO=participants.slice(-1);
        console.log(participantsO);
    //const participantsR = Math.floor(Math.random() * participants.length);
    //console.log(participantsR, participants[participantsR]);
    //var participantsO = (participantsR, participants[participantsR]); //use for output

    //yaaaay math for characters, this gonna work lagless im sure wait it actually works lagless wtf how its legit exactly 450 variables and it works fine
        console.log(characters);
        shuffle(characters);
        console.log(characters);
        let charactersO=characters[characters.length-1];
        console.log(charactersO);
    //const charactersR = Math.floor(Math.random() * characters.length);
    //console.log(charactersR, characters[charactersR]);
    //var charactersO = (charactersR, characters[charactersR]); //use for output

    //output
    //for (let r=document.getElementById('r').valueAsNumber; r>=1;) {
        r=r-1;
        console.log(r);
        //output1=output1+"<b><u>"+participantsO+"</b></u>"+" rolled a "+"<b><u>"+typeO+"</b></u>"+" with "+"<b><u>"+charactersO+"</b></u>"+" of the age rating "+"<b><u>"+aratingO+"</b></u><br>";
        if (participantsO!=""&&typeO!='Both Wps') {
            output1=output1+"<b><u>"+participantsO+"</b></u>"+" rolled a "+"<b><u>"+typeO+"</b></u>"+" with "+"<b><u>"+charactersO+"</b></u>"+" of the age rating "+"<b><u>"+aratingO+"</b></u><br>";
        } else if (participantsO!=""&&typeO=='Both Wps') {
            output1=output1+"<b><u>"+participantsO+"</b></u>"+" rolled "+"<b><u>"+typeO+"</b></u>"+" with "+"<b><u>"+charactersO+"</b></u>"+" of the age rating "+"<b><u>"+aratingO+"</b></u><br>";
        } else if (typeO=='Both Wps') {
            output1=output1+"<b><u>No one</b></u>"+" rolled "+"<b><u>"+typeO+"</b></u>"+" with "+"<b><u>"+charactersO+"</b></u>"+" of the age rating "+"<b><u>"+aratingO+"</b></u><br>";
        } else {
            output1=output1+"<b><u>No one</b></u>"+" rolled a "+"<b><u>"+typeO+"</b></u>"+" with "+"<b><u>"+charactersO+"</b></u>"+" of the age rating "+"<b><u>"+aratingO+"</b></u><br>";
        };
        console.log(output1);
        document.getElementById('output').innerHTML=output1;
        participants.pop();
        pCount=participants.length;
        console.log(pCount);
        document.getElementById('pCount').innerHTML=pCount;
        cCount=characters.length;
        console.log(cCount);
        document.getElementById('cCount').innerHTML=cCount;
    };
    arating.splice(0,arating.length);
    type.splice(0,type.length);
}

//'Check all checkboxes' Checkbox
function toggle(source) {
    checkboxes = document.getElementsByName('checkall');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

//randomizer 2.0 surely not stolen from the internet, its not like the last one was stolen or anything
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function secret() {
    if (secretH==0) {
        secretH=1
        document.getElementById('secret').src="secret.gif";
    } else {
        secretH=0
        document.getElementById('secret').src="";
    }
}