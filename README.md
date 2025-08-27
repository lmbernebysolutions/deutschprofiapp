# Baro Jarmalka - Deutsch Lernen

Eine interaktive Lernplattform für deutsche Sprache mit somalischen Übersetzungen. Diese Webanwendung hilft somalischsprachigen Menschen dabei, deutsche Vokabeln zu lernen und zu üben.

## 🌟 Features

- **Lernmodus**: Interaktive Karten mit deutschen Wörtern und somalischen Übersetzungen
- **Testmodus**: Quiz-System mit Multiple-Choice-Fragen
- **Text-to-Speech**: Deutsche Aussprache für alle Vokabeln
- **Responsive Design**: Funktioniert auf Desktop, Tablet und Smartphone
- **Barrierefreiheit**: WCAG 2.1 konform mit Keyboard-Navigation
- **Fortschrittsspeicherung**: Automatisches Speichern des Lernfortschritts
- **Mehrsprachige Benutzeroberfläche**: Somali und Deutsch

## 🚀 Schnellstart

### Option 1: Direkt im Browser öffnen
1. Laden Sie alle Dateien herunter
2. Öffnen Sie `index.html` in Ihrem Browser
3. Die Anwendung startet automatisch

### Option 2: Mit lokaler Entwicklungsumgebung
```bash
# Repository klonen
git clone https://github.com/your-username/baro-jarmalka.git
cd baro-jarmalka

# Abhängigkeiten installieren (optional)
npm install

# Entwicklungsserver starten
npm start
```

Die Anwendung ist dann unter `http://localhost:3000` verfügbar.

## 📁 Projektstruktur

```
baro-jarmalka/
├── index.html          # Haupt-HTML-Datei
├── css/
│   └── styles.css      # Custom CSS-Styles
├── js/
│   └── app.js          # Haupt-JavaScript-Logik
├── assets/             # Bilder und andere Assets
├── package.json        # Projekt-Konfiguration
└── README.md          # Diese Datei
```

## 🎯 Verwendung

### Lernmodus
1. Klicken Sie auf "Lernmodus"
2. Klicken Sie auf eine Karte, um die somalische Übersetzung zu sehen
3. Klicken Sie auf das Lautsprecher-Symbol 🔊, um die deutsche Aussprache zu hören
4. Klicken Sie erneut auf die Karte, um sie zurückzudrehen

### Testmodus
1. Klicken Sie auf "Testmodus"
2. Ein deutsches Wort wird angezeigt
3. Wählen Sie die richtige somalische Übersetzung aus vier Optionen
4. Sie erhalten sofortiges Feedback
5. Am Ende sehen Sie Ihr Ergebnis

## 🛠️ Technische Details

### Technologien
- **HTML5**: Semantische Struktur
- **CSS3**: Moderne Styling mit Tailwind CSS
- **JavaScript (ES6+)**: Interaktive Funktionalität
- **Web Speech API**: Text-to-Speech für deutsche Aussprache
- **LocalStorage**: Fortschrittsspeicherung

### Browser-Kompatibilität
- Chrome 66+
- Firefox 60+
- Safari 12+
- Edge 79+

### Barrierefreiheit
- WCAG 2.1 AA konform
- Keyboard-Navigation
- Screen Reader unterstützt
- Hoher Kontrast-Modus
- Reduzierte Bewegung für Benutzer mit Vestibular-Störungen

## 📚 Vokabeln

Die Anwendung enthält derzeit 25 grundlegende deutsche Vokabeln aus dem Bereich Haushalt:

- Toilette, Sessel, Sofa, Treppe, Regal
- Kissen, Seife, Handtuch, Dach, Fenster
- Schlafzimmer, Bett, Bettdecke, Kühlschrank
- Mülleimer, Keller, Herd, Fernseher, fernsehen
- Schrank, Badewanne, Dusche, Zähne putzen
- Zahnbürste, Zahnpasta

## 🔧 Anpassung und Erweiterung

### Neue Vokabeln hinzufügen
Bearbeiten Sie die `vocabulary`-Array in `js/app.js`:

```javascript
const vocabulary = [
    { german: 'Neues Wort', somali: 'Eray cusub' },
    // ... weitere Vokabeln
];
```

### Styling anpassen
- Bearbeiten Sie `css/styles.css` für Custom-Styles
- Tailwind CSS-Klassen können direkt in HTML verwendet werden

### Mehrsprachigkeit erweitern
Die Anwendung kann einfach um weitere Sprachen erweitert werden, indem die Datenstruktur angepasst wird.

## 🚀 Deployment

### GitHub Pages
1. Repository auf GitHub hochladen
2. Settings → Pages → Source: Deploy from a branch
3. Branch: main, Folder: / (root)

### Netlify
1. Repository mit Netlify verbinden
2. Build command: leer lassen
3. Publish directory: ./

### Vercel
1. Repository mit Vercel verbinden
2. Framework Preset: Other
3. Build command: leer lassen

## 🤝 Beitragen

Beiträge sind willkommen! Bitte:

1. Fork das Repository
2. Erstellen Sie einen Feature-Branch
3. Committen Sie Ihre Änderungen
4. Pushen Sie zum Branch
5. Öffnen Sie einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.

## 🙏 Danksagungen

- Tailwind CSS für das großartige CSS-Framework
- Google Fonts für die Inter-Schriftart
- Web Speech API für die Text-to-Speech-Funktionalität
- Alle somalischen Muttersprachler, die bei den Übersetzungen geholfen haben

## 📞 Support

Bei Fragen oder Problemen:
- Öffnen Sie ein Issue auf GitHub
- Kontaktieren Sie das Entwicklungsteam

---

**Baro Jarmalka** - Deutsch lernen leicht gemacht! 🇩🇪🇸🇴
