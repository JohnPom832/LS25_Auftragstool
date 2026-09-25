# LS25 Auftragstool

Ein einfaches, gemeinsames Auftragstool für einen Landwirtschafts-Simulator-25-Hofbetrieb.
Mehrere Spieler greifen über **einen** Link auf dieselben Aufträge zu, Änderungen werden
in Echtzeit für alle sichtbar.

## Tech-Stack

- **Next.js 14** (React, App Router) – Frontend
- **Supabase** (PostgreSQL) – gemeinsame Datenbank + Echtzeit-Updates
- Kein Login nötig: jeder mit dem Link kann Aufträge verwalten

## Wichtigste Regel

Ein Auftrag kann erst gelöscht werden, wenn **"Auftrag erledigt"** UND
**"Rechnung gestellt"** aktiviert sind. Diese Regel ist nicht nur im Frontend eingebaut,
sondern zusätzlich als Row-Level-Security-Policy direkt in der Datenbank
(`supabase/schema.sql`) hinterlegt und kann daher nicht durch Manipulation der
Webseite oder direkte API-Aufrufe umgangen werden.

## Hosting-Optionen

Die App braucht keinen eigenen Server (alle Datenbankzugriffe laufen direkt aus dem
Browser zu Supabase) und lässt sich daher wahlweise auf **Vercel** oder als rein
statischer Export auf **GitHub Pages** hosten. Der GitHub-Actions-Workflow unter
`.github/workflows/deploy.yml` ist dafür bereits vorbereitet – Details liefert Claude
in der Chat-Antwort.

## Setup

Eine ausführliche Schritt-für-Schritt-Anleitung liefert Claude in der Chat-Antwort.
Kurzfassung:

1. `npm install`
2. Supabase-Projekt anlegen, `supabase/schema.sql` im SQL-Editor ausführen
3. `.env.local` aus `.env.local.example` erstellen und mit den Supabase-Zugangsdaten füllen
4. `npm run dev` zum lokalen Testen, `npm run build` für den Produktions-Build
5. Deployment z. B. über Vercel

## Spätere Erweiterungen (bewusst noch nicht eingebaut)

Auftragsnummer, Datum/Uhrzeit, Telefonnummer, Preis, Mitarbeiter, Maschinen, Notizen,
Bilder, mehrere Höfe, Benutzerkonten, Admin-Bereich, Excel-Export, Druckfunktion,
Rechnungsnummer.
