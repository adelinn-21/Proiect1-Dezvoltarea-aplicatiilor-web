# Exaroton – Site de prezentare

## Prezentare generală

Acest proiect reprezintă un **site web de prezentare** pentru **Exaroton**, serviciu de hosting Minecraft care funcționează ca extensie a platformei **Aternos**. Site-ul are rol informativ și demonstrativ și este realizat folosind tehnologii web de bază: **HTML5, CSS și JavaScript**.

Scopul site-ului este de a prezenta serviciile oferite de Exaroton, structura de prețuri și modalitățile de contact, într-un mod clar și ușor de utilizat.

---

## Structura site-ului

Proiectul este alcătuit din mai multe fișiere, fiecare având un rol bine definit:

```
/exaroton-site
 ├── index.html      – pagina principală (Home)
 ├── servicii.html   – pagina de servicii
 ├── preturi.html    – pagina de prețuri + calculator
 ├── contact.html    – pagina de contact
 ├── style.css       – stilizarea site-ului
 ├── script.js       – logica JavaScript
 └── images/         – imagini și logo
```

---

## Pagini ale site-ului

### 1. Home (`index.html`)

* Prezintă firma Exaroton și legătura cu Aternos
* Conține **logo-ul firmei**
* Include o imagine de prezentare
* Oferă acces la celelalte pagini prin meniul de navigație

### 2. Servicii (`servicii.html`)

* Enumeră principalele servicii oferite
* Folosește o imagine reprezentativă (panou de control)
* Informațiile sunt structurate sub formă de listă

### 3. Prețuri (`preturi.html`)

* Conține un **tabel HTML** cu costurile pentru diferite configurații
* Include un **calculator de preț** realizat cu JavaScript
* Utilizatorul poate selecta cantitatea de RAM și numărul de ore pentru a calcula costul final

### 4. Contact (`contact.html`)

* Afișează datele de contact
* Include o imagine decorativă
* Oferă informații despre compania mamă (Aternos)

---

## Stilizare (CSS)

Fișierul `style.css` este responsabil pentru:

* aspectul general al site-ului (culori, fonturi)
* poziționarea elementelor
* stilizarea meniului de navigație
* afișarea imaginilor și a tabelului

CSS-ul este separat de HTML pentru o structură clară și profesională.

---

## Funcționalitate JavaScript

Fișierul `script.js` conține funcția `calculeazaPret()` care:

* preia valorile selectate de utilizator
* calculează prețul final pe baza formulei:

```
preț = RAM (GB) × număr de ore
```

* afișează rezultatul direct pe pagină, fără reîncărcare

---

## Tehnologii utilizate

* **HTML5** – structură și conținut
* **CSS** – design și stilizare
* **JavaScript** – interactivitate și calcul dinamic

---

## Concluzie

Acest site este un exemplu complet de proiect web de bază, care respectă separarea corectă a tehnologiilor (HTML, CSS, JS) și îndeplinește cerințele unui proiect școlar sau demonstrativ. Site-ul este ușor de extins și adaptat pentru funcționalități viitoare.
