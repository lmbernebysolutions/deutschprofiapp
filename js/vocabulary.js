// Erweiterte Vokabeldaten mit Kategorien
const vocabularyCategories = {
    haushalt: {
        name: "Haushalt",
        somali: "Guriga",
        words: [
            { german: 'Toilette', somali: 'Musqul' },
            { german: 'Sessel', somali: 'Kursi gacan leh' },
            { german: 'Sofa', somali: 'Fadhi' },
            { german: 'Treppe', somali: 'Jaranjaro' },
            { german: 'Regal', somali: 'Raf' },
            { german: 'Kissen', somali: 'Barkin' },
            { german: 'Seife', somali: 'Saabuun' },
            { german: 'Handtuch', somali: 'Tuwaal' },
            { german: 'Dach', somali: 'Saqaf' },
            { german: 'Fenster', somali: 'Daaqad' },
            { german: 'Schlafzimmer', somali: 'Qolka jiifka' },
            { german: 'Bett', somali: 'Sariir' },
            { german: 'Bettdecke', somali: 'Gogosha sariirta' },
            { german: 'Kühlschrank', somali: 'Talaagad' },
            { german: 'Mülleimer', somali: 'Qashin-qub' },
            { german: 'Keller', somali: 'Maqaasiin' },
            { german: 'Herd', somali: 'Foorno' },
            { german: 'Fernseher', somali: 'Telefishin' },
            { german: 'fernsehen', somali: 'daawashada TV-ga' },
            { german: 'Schrank', somali: 'Armaajo' },
            { german: 'Badewanne', somali: 'Biyo-qubeys' },
            { german: 'Dusche', somali: 'Qubeys' },
            { german: 'Zähne putzen', somali: 'Cadeysasho' },
            { german: 'Zahnbürste', somali: 'Cadey' },
            { german: 'Zahnpasta', somali: 'Dawaynta ilkaha' }
        ]
    },
    essen: {
        name: "Essen & Trinken",
        somali: "Cunto iyo Cabitaan",
        words: [
            { german: 'Brot', somali: 'Rooti' },
            { german: 'Wasser', somali: 'Biyo' },
            { german: 'Milch', somali: 'Caano' },
            { german: 'Käse', somali: 'Kees' },
            { german: 'Fleisch', somali: 'Hilib' },
            { german: 'Gemüse', somali: 'Khudaar' },
            { german: 'Obst', somali: 'Miro' },
            { german: 'Kaffee', somali: 'Qaxwo' },
            { german: 'Tee', somali: 'Shaah' },
            { german: 'Zucker', somali: 'Sonkor' },
            { german: 'Salz', somali: 'Cusbo' },
            { german: 'Öl', somali: 'Salid' }
        ]
    },
    kleidung: {
        name: "Kleidung",
        somali: "Dhar",
        words: [
            { german: 'Hose', somali: 'Surwaal' },
            { german: 'Hemd', somali: 'Shaad' },
            { german: 'Schuhe', somali: 'Kabaha' },
            { german: 'Jacke', somali: 'Jaakad' },
            { german: 'Mütze', somali: 'Koofiyad' },
            { german: 'Socken', somali: 'Shariid' },
            { german: 'Unterwäsche', somali: 'Shaqsi' },
            { german: 'Rock', somali: 'Guntiino' },
            { german: 'Kleid', somali: 'Guntiino' },
            { german: 'Gürtel', somali: 'Suun' }
        ]
    },
    familie: {
        name: "Familie",
        somali: "Qoyska",
        words: [
            { german: 'Mutter', somali: 'Hooyo' },
            { german: 'Vater', somali: 'Aabbe' },
            { german: 'Sohn', somali: 'Wiil' },
            { german: 'Tochter', somali: 'Gabar' },
            { german: 'Bruder', somali: 'Walaal' },
            { german: 'Schwester', somali: 'Walaasha' },
            { german: 'Großmutter', somali: 'Ayeeyo' },
            { german: 'Großvater', somali: 'Awoowe' },
            { german: 'Onkel', somali: 'Adeer' },
            { german: 'Tante', somali: 'Eedo' }
        ]
    },
    farben: {
        name: "Farben",
        somali: "Midabada",
        words: [
            { german: 'Rot', somali: 'Guduud' },
            { german: 'Blau', somali: 'Buluug' },
            { german: 'Grün', somali: 'Cagaar' },
            { german: 'Gelb', somali: 'Jaalle' },
            { german: 'Schwarz', somali: 'Madow' },
            { german: 'Weiß', somali: 'Cadaan' },
            { german: 'Braun', somali: 'Bunni' },
            { german: 'Grau', somali: 'Grey' },
            { german: 'Orange', somali: 'Orange' },
            { german: 'Lila', somali: 'Purple' }
        ]
    }
};

// Alle Vokabeln in einem Array für Kompatibilität
const allVocabulary = Object.values(vocabularyCategories).flatMap(category => category.words);

// Export für andere Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vocabularyCategories, allVocabulary };
}
