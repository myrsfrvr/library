# Library Management System

Library Management System je webová aplikace pro správu knihovny vytvořená pomocí Node.js, Express, MongoDB a Reactu.

Projekt vznikl původně jako semestrální práce pro univerzitu v období listopad–prosinec 2025. Původní frontend byl vytvořen pomocí Vanilla JavaScriptu. Následně byl celý frontend přepracován do Reactu a projekt je dále rozšiřován o funkce plnohodnotného knihovního systému.

## Funkce

Aktuální verze umožňuje:

- zobrazování seznamu knih
- zobrazování detailu knihy
- přidávání nových knih
- úpravu knih
- mazání knih
- správu autorů
- automatické vytvoření autora při přidání knihy s novým autorem
- zobrazování žánrů
- zobrazování dostupnosti knih
- načítání dat z REST API
- zobrazování loading a error stavů
- navigaci pomocí React Routeru

## Technologie

### Frontend

- React
- React Router
- JavaScript
- HTML
- CSS
- Vite

Frontend je rozdělen do znovupoužitelných komponent a využívá vlastní React hooks pro práci s daty a API.

### Backend

- Node.js
- Express
- REST API
- MongoDB
- Mongoose
- Morgan
- Nodemon

Backend poskytuje API pro práci s knihami a autory a zajišťuje komunikaci s databází MongoDB.

## React frontend

Původní frontend aplikace byl vytvořen pomocí Vanilla JavaScriptu. V současné verzi byl frontend kompletně přepracován do Reactu.

Reactová verze využívá například:

- komponentovou architekturu
- React Router pro navigaci
- vlastní hooks pro práci s API
- znovupoužitelné komponenty
- řízení formulářů pomocí React state
- loading a error states
- oddělení API logiky od UI komponent
- dynamické vykreslování dat z databáze

Například operace s knihami jsou odděleny do API vrstvy, zatímco vlastní UI je rozděleno do samostatných komponent a stránek.

## API

Backend poskytuje REST API pro práci s knihami.

Hlavní endpointy:

GET /api/v1/books
GET /api/v1/books/:id
POST /api/v1/books
PATCH /api/v1/books/:id
DELETE /api/v1/books/:id

API také obsahuje endpoint pro vyhledávání knih:

GET /api/v1/books/search?q=

Do budoucna plánuji projekt rozšířit na plnohodnotnou knihovní aplikaci s:

- autentizací uživatelů
- možností půjčování knih
- React frontendem
- veřejně dostupnou live verzí

## Plánované rozšíření

Projekt je dále aktivně rozšiřován. Mezi plánované funkce patří:

- vyhledávání knih
- registrace uživatelů
- přihlášení uživatelů
- autentizace a autorizace
- uživatelské role a oprávnění
- půjčování a vracení knih
- historie výpůjček
- správa uživatelských účtů
- rozšíření administrace knihovny
- nasazení aplikace na veřejný server
- veřejně dostupné live demo

## Screenshoty

![Hero sekce](screenshots/heroSection.png)

![Sekce knih](screenshots/books.png)

![Sekce autorů](screenshots/authors.png)

![Detail knihy](screenshots/bookDetails.png)

## Instalace a spuštění projektu

1. Naklonování repozitáře

```bash
git clone URL_REPOZITARE
cd library
```

2. Instalace dependencies

Backend a frontend mají vlastní package.json, proto je potřeba nainstalovat dependencies pro obě části projektu.

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd ../frontend
npm install
```

3. Konfigurace backendu

V adresáři backend vytvořte soubor config.env
Do něj zkopírujte obsah souboru .env.example a doplňte potřebné hodnoty.

### Použití vzdálené MongoDB databáze

Pro použití vzdálené MongoDB databáze vyplňte:

```env
DATABASE=your_database_connection_string
DATABASE_PASSWORD=your_database_password
```

### Použití lokální MongoDB databáze

Pokud chcete použít lokální MongoDB databázi, nastavte:

```env
DATABASE_LOCAL=local_db_connection_string
```

a v server.js použijte lokální databázové připojení.

### Import testovacích dat

Projekt obsahuje připravená testovací data knih a autorů ve formátu JSON.

Import dat

Z kořenové složky projektu spusťte:

```bash
cd dev-data
node import-dev-data.js --import
```

Smazání testovacích dat

```bash
node import-dev-data.js --delete
```

### Spuštění aplikace

Backend

```bash
cd backend
npm start
```

Backend poběží na http://localhost:8000

Frontend

```bash
cd frontend
npm run dev
```

Vite následně zobrazí adresu, na které frontend běží, typicky http://localhost:5173

## Celkový vzhled aplikace

![Celá aplikace](screenshots/fullPage.png)
