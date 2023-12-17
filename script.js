var pytania = 
[
    [
        "Wiosną kadra hufca oraz szczepów przygotowuje obozy jednostek. W tym celu przeprowadzają:", 
        "Hufcowy Festiwal Piosenki Harcerskiej i Zuchowej nosi nazwę:", 
        "Która specjalność powoduje, że obecność naszych harcerzy na wodzie lub przy wodzie jest oczywista"
    ],
    [
        "Lato to dla harcerzy czas:", 
        "Bardzo często w czasie obozu nowe zuchy składają:", 
        "Moment, w którym starsze zuchy przechodzą do harcerzy, a harcerze dostają się do starszych metodyk to:"
    ],
    [
        "Jeśień to:", 
        "Grupę harcerską przeznaczoną dla dzieci między 6, a 10 rokiem życia nazywamy:", 
        "Aby zapisać dziecko do drużyny harcerskiej lub gromady zuchowej należy:"
    ],
    [
        "Obozy podczas ferii nazywamy:", 
        "W okolicach świąt Bożego Narodzenia harcerze roznoszą:", 
        "Ile projektów edukacyjnych i inwestycyjnych przeprowadził Hufiec ZHP Mosina w latach 2017-2023:"
    ],
    [
        "Harcerstwo na ziemi mosińskiej oficjalnie powstało w:", 
        '"Azymut" to:', 
        "Hufiec Mosina został reaktywowany w roku:"
    ],
]; /* tablica z pytaniami */

var odpowiedziDoPytan = 
[
    [
        ["Rekonesans bazy obozowej", "Rewizję bazy obozowej", "Rekonstrukcję bazy obozowej", "Reorganizację bazy obozowej"], 
        ["Złota Nutka", "Mali Śpiewacy", "Śpiewograjki", "Gala Nutka"], 
        ["wędrownicza", "morska", "terenowa", "żeglarska"]
    ],
    [
        ["Największej przygody", "Wytchnienia i odpoczynku", "Próby", "Radości"], 
        ["Przyrzeczenie Harcerskie", "Obietnicę Zuchową", "Przyrzeczenie Zuchowe", "Zobowiązanie Instruktorskie"], 
        ["Postrzyżyny", "Obrzęd przekazania", "Przerzut starszyzny", "Ceremonia przejścia"]
    ],
    [
        ["Harcerski start nowego roku", "Koniec roku harcerskiego", "Kulminacja roku harcerskiego", "Moment Harcerskiej Akcji Jesiennej"], 
        ["Skrzatami", "Zuchami", "Harcerzami", "Gzubkami"], 
        ["Zadzwonić do drużynowego odpowiedniej jednostki", "Złożyć formalny wniosek do Głównej Kwatery", "Przejść Koronę Szczytów Polskich", "Mieć znajomości"]
    ],
    [
        ["Zimowiskiem", "Feriada", "Wypoczynkiem zimowym", "Akcja Zima"], 
        ["Światło Maratońskie", "Betlejemskie Światło Pokoju", "Betlejemskie Światełko Pokoju", "Betlejemski Ogień Pokoju"], 
        ["36", "52", "131", "81"]
    ],
    [
        ["1919r.", "1920r.", "1921r.", "1922r."], 
        ["Nazwa jednej z drużyn w Hufcu Mosina", "Harcerskie czasopismo Hufca Mosina", "Harcerska forma aktywności", 'Harcerskie czasopismo Szczepu "Watra"'], 
        ["2007", "2017", "2021", "1999"]
    ],
]; /* tablica z odpowiedziami */

var odpowiedziPoprawne = [
    "1921r.", 
    "Harcerskie czasopismo Hufca Mosina", 
    "2017", 
    "Zimowiskiem", 
    "Betlejemskie Światło Pokoju", 
    "131", 
    "Rekonesans bazy obozowej", 
    "Złota Nutka", 
    "żeglarska", 
    "Największej przygody", 
    "Obietnicę Zuchową", 
    "Obrzęd przekazania", 
    "Harcerski start nowego roku", 
    "Zuchami", 
    "Zadzwonić do drużynowego odpowiedniej jednostki"
];

var photoIndex = 1;

var odpowiedziUzytkownika = [];

var start = document.getElementById("startButton"); //guzik na początku gry

start.addEventListener("click", () =>
{ /* po kliknięciu guzika pokazuje pytania */
    document.getElementById("pytania").style.display = "flex";
    document.getElementById("start").style.display = "none";
    changeQuestion();
});

function changeQuestion() /* zmienia pytania dopóki są*/
{
    if(0 != pytania.length)
    {
        let pytanie = pytania.shift();
        let index = losujPytanie(pytanie);
        document.getElementById("pytanie").innerHTML = pytanie[index];
        let odpowiedzi = odpowiedziDoPytan.shift()[index];
        document.getElementById("pa").innerHTML = odpowiedzi[0];
        document.getElementById("pb").innerHTML = odpowiedzi[1];
        document.getElementById("pc").innerHTML = odpowiedzi[2];
        document.getElementById("pd").innerHTML = odpowiedzi[3];
        document.getElementById("obrazek").src = `${photoIndex++}.png`; //zmienia obrazek na kolejny, oraz index obrazka o 1
    }
    else
    {
        document.getElementById("pytania").style.display = "none";
        if(odpowiedziSaPoprawne())
        {
            document.getElementById("wygrana").style.display = "flex";
        }
        else
        {
            document.getElementById("przegrana").style.display = "flex";
        };
    };
};

document.getElementById("pa").addEventListener("click", () => 
{
    odpowiedziUzytkownika.push(document.getElementById("pa").textContent);
    changeQuestion();
});
document.getElementById("pb").addEventListener("click", () => 
{
    odpowiedziUzytkownika.push(document.getElementById("pb").textContent);
    changeQuestion();
});
document.getElementById("pc").addEventListener("click", () => 
{
    odpowiedziUzytkownika.push(document.getElementById("pc").textContent);
    changeQuestion();
});
document.getElementById("pd").addEventListener("click", () => 
{
    odpowiedziUzytkownika.push(document.getElementById("pd").textContent);
    changeQuestion();
});

function odpowiedziSaPoprawne()
{
    let ilePoprawnych = 0;
    for(let i = 0; i < odpowiedziUzytkownika.length; i++)
    {
        if(odpowiedziPoprawne.includes(odpowiedziUzytkownika[i]))
        {
            ilePoprawnych++;
        };
    };

    return ilePoprawnych == 5;
};

function losujPytanie(zbior)
{
    const losowyIndex = Math.floor(Math.random() * zbior.length);
    return losowyIndex;
};