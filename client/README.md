



# AI-StudyBuddy

AI-StudyBuddy är en webbtjänst som använder modern AI-teknik för att stödja studenter i deras lärande. Genom att använda en stor språkmodell kan användare ställa frågor inom olika ämnen och få intelligenta svar, inklusive matematiska beräkningar och termer som renderas med hjälp av LaTeX. Tjänsten är designad för att vara lättanvänd och är optimerad för kursledarens MacBook, antingen som lokal programvara eller via webbläsaren.

## Funktioner

- **Frågeställning inom olika ämnen:** Användare kan välja ett ämne från en meny och ställa frågor relaterade till detta ämne. Exempel på ämnen inkluderar Matematik, Engelska, Historia, Biologi, och Fysik.
- **Matematisk formatering:** Stöd för LaTeX för att korrekt visa matematiska formler och termer i frågor och svar.
- **AI-drivna svar:** Användningen av en AI-modell för att ge svar på frågor baserade på användarens inmatning, inklusive komplexa ämnen och beräkningar.
- **Anpassningsbar meny:** En enkel hamburgermeny gör det lätt att välja ämne och navigera genom gränssnittet.

## Målgrupp

AI-StudyBuddy riktar sig till studenter och lärare som vill använda AI för att underlätta lärande inom olika ämnen. Verktyget är särskilt användbart för:

- Studenter som söker snabb och korrekt hjälp med matematiska problem och frågor.
- Lärare som vill ha ett stödverktyg för att svara på frågor eller förklara komplexa ämnen.
- Användare som är intresserade av att interagera med AI inom utbildningsområdet.

## Teknisk Implementation

- **Frontend:** Tjänsten är byggd med React och TypeScript för att skapa ett interaktivt användargränssnitt.
- **Backend:** Backend är byggt med Node.js och Express och använder en AI-modell för att bearbeta frågor och generera svar.
- **Math Rendering:** LaTeX-stöd är implementerat med hjälp av KaTeX för att korrekt rendera matematiska termer och formler.
- **HTTP-förfrågningar:** Axios används för att skicka frågor från frontend till backend och ta emot AI-genererade svar.
- **CSS och layout:** Responsiv design med användning av CSS Grid och externa typsnitt från Google Fonts.

## Etiska och Säkerhetsmässiga Avvägningar

- **Ansvarsfull användning av AI:** Tjänsten är designad med hänsyn till etiska riktlinjer för AI. Det innebär att modellen används för utbildningsändamål, och dess svar är begränsade till ämnen som främjar lärande.
- **Datasäkerhet:** Tjänsten hanterar inte känsliga användardata. Alla frågor och svar är opersonliga och lagras inte permanent. Kommunikation sker över säkra kanaler.

## Utveckling

Projektet utvecklades med AI-stöd genom användning av moderna AI-modeller och bibliotek för att skapa en smidig användarupplevelse. Dessutom användes AI för att optimera kod och design under utvecklingsprocessen.

## Installation och Användning

1. **Klona repositoriet:**

   ```bash
   git clone https://github.com/ditt-repo/AI-StudyBuddy.git
   ```

2. **Installera beroenden:**

   Gå in i projektets rotmapp och kör:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Starta backend:**

   ```bash
   npm run start
   ```

4. **Starta frontend:**

   Gå in i klientmappen och kör:

   ```bash
   npm run dev
   ```

5. **Användning:**

   Öppna webbläsaren och navigera till `http://localhost:3000`. Välj ett ämne och börja ställa frågor för att få AI-genererade svar.

## Dokumentation

- **Vad gör tjänsten?** AI-StudyBuddy ger AI-baserade svar på utbildningsrelaterade frågor inom flera ämnen.
- **Vilka är målgruppen?** Studenter, lärare och andra som vill använda AI för att stödja studier och undervisning.
- **Etik och säkerhet:** Ansvarsfull användning av AI för utbildning, med säker kommunikation och minimal hantering av data.



