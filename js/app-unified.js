// Unified vocabulary data with both English and Somali translations
const vocabularyData = {
    original: {
        food: {
            name: { en: "Food & Drinks", so: "Cunto iyo Cabitaan" },
            words: [
                { german: 'Brot', english: 'Bread', somali: 'Rooti' },
                { german: 'Wasser', english: 'Water', somali: 'Biyo' },
                { german: 'Milch', english: 'Milk', somali: 'Caano' },
                { german: 'Käse', english: 'Cheese', somali: 'Kees' },
                { german: 'Fleisch', english: 'Meat', somali: 'Hilib' },
                { german: 'Gemüse', english: 'Vegetables', somali: 'Khudaar' },
                { german: 'Obst', english: 'Fruit', somali: 'Miro' },
                { german: 'Kaffee', english: 'Coffee', somali: 'Qaxwo' },
                { german: 'Tee', english: 'Tea', somali: 'Shaah' },
                { german: 'Zucker', english: 'Sugar', somali: 'Sonkor' },
                { german: 'Salz', english: 'Salt', somali: 'Cusbo' },
                { german: 'Öl', english: 'Oil', somali: 'Salid' }
            ]
        },
        household: {
            name: { en: "Household", so: "Guriga" },
            words: [
                { german: 'Toilette', english: 'Toilet', somali: 'Musqul' },
                { german: 'Sessel', english: 'Armchair', somali: 'Kursi gacan leh' },
                { german: 'Sofa', english: 'Sofa', somali: 'Fadhi' },
                { german: 'Treppe', english: 'Stairs', somali: 'Jaranjaro' },
                { german: 'Regal', english: 'Shelf', somali: 'Raf' },
                { german: 'Kissen', english: 'Pillow', somali: 'Barkin' },
                { german: 'Seife', english: 'Soap', somali: 'Saabuun' },
                { german: 'Handtuch', english: 'Towel', somali: 'Tuwaal' },
                { german: 'Dach', english: 'Roof', somali: 'Saqaf' },
                { german: 'Fenster', english: 'Window', somali: 'Daaqad' },
                { german: 'Schlafzimmer', english: 'Bedroom', somali: 'Qolka jiifka' },
                { german: 'Bett', english: 'Bed', somali: 'Sariir' },
                { german: 'Bettdecke', english: 'Blanket', somali: 'Gogosha sariirta' },
                { german: 'Kühlschrank', english: 'Refrigerator', somali: 'Talaagad' },
                { german: 'Mülleimer', english: 'Trash can', somali: 'Qashin-qub' },
                { german: 'Keller', english: 'Basement', somali: 'Maqaasiin' },
                { german: 'Herd', english: 'Stove', somali: 'Foorno' },
                { german: 'Fernseher', english: 'Television', somali: 'Telefishin' },
                { german: 'fernsehen', english: 'to watch TV', somali: 'daawashada TV-ga' },
                { german: 'Schrank', english: 'Wardrobe', somali: 'Armaajo' },
                { german: 'Badewanne', english: 'Bathtub', somali: 'Biyo-qubeys' },
                { german: 'Dusche', english: 'Shower', somali: 'Qubeys' },
                { german: 'Zähne putzen', english: 'to brush teeth', somali: 'Cadeysasho' },
                { german: 'Zahnbürste', english: 'Toothbrush', somali: 'Cadey' },
                { german: 'Zahnpasta', english: 'Toothpaste', somali: 'Dawaynta ilkaha' }
            ]
        },
        family: {
            name: { en: "Family", so: "Qoyska" },
            words: [
                { german: 'Mutter', english: 'Mother', somali: 'Hooyo' },
                { german: 'Vater', english: 'Father', somali: 'Aabbe' },
                { german: 'Sohn', english: 'Son', somali: 'Wiil' },
                { german: 'Tochter', english: 'Daughter', somali: 'Gabar' },
                { german: 'Bruder', english: 'Brother', somali: 'Walaal' },
                { german: 'Schwester', english: 'Sister', somali: 'Walaasha' },
                { german: 'Großmutter', english: 'Grandmother', somali: 'Ayeeyo' },
                { german: 'Großvater', english: 'Grandfather', somali: 'Awoowe' },
                { german: 'Onkel', english: 'Uncle', somali: 'Adeer' },
                { german: 'Tante', english: 'Aunt', somali: 'Eedo' }
            ]
        },
        colors: {
            name: { en: "Colors", so: "Midabada" },
            words: [
                { german: 'Rot', english: 'Red', somali: 'Guduud' },
                { german: 'Blau', english: 'Blue', somali: 'Buluug' },
                { german: 'Grün', english: 'Green', somali: 'Cagaar' },
                { german: 'Gelb', english: 'Yellow', somali: 'Jaalle' },
                { german: 'Schwarz', english: 'Black', somali: 'Madow' },
                { german: 'Weiß', english: 'White', somali: 'Cadaan' },
                { german: 'Braun', english: 'Brown', somali: 'Bunni' },
                { german: 'Grau', english: 'Gray', somali: 'Grey' },
                { german: 'Orange', english: 'Orange', somali: 'Orange' },
                { german: 'Lila', english: 'Purple', somali: 'Purple' }
            ]
        },
        clothing: {
            name: { en: "Clothing", so: "Dhar" },
            words: [
                { german: 'Hose', english: 'Pants', somali: 'Surwaal' },
                { german: 'Hemd', english: 'Shirt', somali: 'Shaad' },
                { german: 'Schuhe', english: 'Shoes', somali: 'Kabaha' },
                { german: 'Jacke', english: 'Jacket', somali: 'Jaakad' },
                { german: 'Mütze', english: 'Hat', somali: 'Koofiyad' },
                { german: 'Socken', english: 'Socks', somali: 'Shariid' },
                { german: 'Unterwäsche', english: 'Underwear', somali: 'Shaqsi' },
                { german: 'Rock', english: 'Skirt', somali: 'Guntiino' },
                { german: 'Kleid', english: 'Dress', somali: 'Guntiino' },
                { german: 'Gürtel', english: 'Belt', somali: 'Suun' }
            ]
        }
    },
    new: {
        food: {
            name: { en: "Food & Drinks", so: "Cunto iyo Cabitaan" },
            words: [
                { german: 'Apfel', english: 'Apple', somali: 'Tufaax' },
                { german: 'Banane', english: 'Banana', somali: 'Moz' },
                { german: 'Erdbeere', english: 'Strawberry', somali: 'Miro yaryar' },
                { german: 'Himbeere', english: 'Raspberry', somali: 'Miro guduud' },
                { german: 'Blaubeere', english: 'Blueberry', somali: 'Miro buluug' },
                { german: 'Ananas', english: 'Pineapple', somali: 'Ananas' },
                { german: 'Mango', english: 'Mango', somali: 'Mango' },
                { german: 'Kiwi', english: 'Kiwi', somali: 'Kiwi' },
                { german: 'Pfirsich', english: 'Peach', somali: 'Khufaax' },
                { german: 'Aprikose', english: 'Apricot', somali: 'Mishmish' },
                { german: 'Pflaume', english: 'Plum', somali: 'Barquq' },
                { german: 'Kirsche', english: 'Cherry', somali: 'Garas' },
                { german: 'Traube', english: 'Grape', somali: 'Canab' },
                { german: 'Melone', english: 'Melon', somali: 'Battikh' },
                { german: 'Wassermelone', english: 'Watermelon', somali: 'Battikh biyo' },
                { german: 'Kokosnuss', english: 'Coconut', somali: 'Qumbe' },
                { german: 'Dattel', english: 'Date', somali: 'Tamar' },
                { german: 'Feige', english: 'Fig', somali: 'Tiin' },
                { german: 'Granatapfel', english: 'Pomegranate', somali: 'Rumaan' },
                { german: 'Zimt', english: 'Cinnamon', somali: 'Qurfa' },
                { german: 'Ingwer', english: 'Ginger', somali: 'Sinjibir' },
                { german: 'Knoblauch', english: 'Garlic', somali: 'Toon' },
                { german: 'Zwiebel', english: 'Onion', somali: 'Basal' },
                { german: 'Kartoffel', english: 'Potato', somali: 'Dabacase' },
                { german: 'Karotte', english: 'Carrot', somali: 'Karooto' },
                { german: 'Brokkoli', english: 'Broccoli', somali: 'Brokkoli' },
                { german: 'Blumenkohl', english: 'Cauliflower', somali: 'Karnabool' },
                { german: 'Spinat', english: 'Spinach', somali: 'Isbaag' },
                { german: 'Salat', english: 'Lettuce', somali: 'Khaad' },
                { german: 'Tomate', english: 'Tomato', somali: 'Tumaati' },
                { german: 'Aubergine', english: 'Eggplant', somali: 'Baqla' },
                { german: 'Pilz', english: 'Mushroom', somali: 'Kumbi' },
                { german: 'Spargel', english: 'Asparagus', somali: 'Spargel' },
                { german: 'Artischocke', english: 'Artichoke', somali: 'Artishook' },
                { german: 'Olive', english: 'Olive', somali: 'Zaytuun' },
                { german: 'Avocado', english: 'Avocado', somali: 'Avocado' },
                { german: 'Limo', english: 'Lemonade', somali: 'Liim biyo' },
                { german: 'Cola', english: 'Cola', somali: 'Koola' },
                { german: 'Bier', english: 'Beer', somali: 'Biya' },
                { german: 'Wein', english: 'Wine', somali: 'Khamri' },
                { german: 'Sekt', english: 'Champagne', somali: 'Sekt' },
                { german: 'Whisky', english: 'Whisky', somali: 'Whisky' },
                { german: 'Vodka', english: 'Vodka', somali: 'Vodka' },
                { german: 'Rum', english: 'Rum', somali: 'Rum' },
                { german: 'Gin', english: 'Gin', somali: 'Gin' },
                { german: 'Tequila', english: 'Tequila', somali: 'Tequila' },
                { german: 'Brandy', english: 'Brandy', somali: 'Brandy' },
                { german: 'Cognac', english: 'Cognac', somali: 'Cognac' },
                { german: 'Sherry', english: 'Sherry', somali: 'Sherry' },
                { german: 'Portwein', english: 'Port wine', somali: 'Portwein' },
                { german: 'Likör', english: 'Liqueur', somali: 'Likoor' },
                { german: 'Schnaps', english: 'Schnapps', somali: 'Schnaps' },
                { german: 'Met', english: 'Mead', somali: 'Met' },
                { german: 'Glühwein', english: 'Mulled wine', somali: 'Glühwein' },
                { german: 'Punsch', english: 'Punch', somali: 'Punsch' },
                { german: 'Bowle', english: 'Punch bowl', somali: 'Bowle' },
                { german: 'Cocktail', english: 'Cocktail', somali: 'Cocktail' },
                { german: 'Smoothie', english: 'Smoothie', somali: 'Smoothie' },
                { german: 'Shake', english: 'Shake', somali: 'Shake' },
                { german: 'Milchshake', english: 'Milkshake', somali: 'Milkshake' },
                { german: 'Eiskaffee', english: 'Iced coffee', somali: 'Eiskaffee' },
                { german: 'Eistee', english: 'Iced tea', somali: 'Eistee' },
                { german: 'Heiße Schokolade', english: 'Hot chocolate', somali: 'Shokolaad kulul' },
                { german: 'Kakao', english: 'Cocoa', somali: 'Kakao' },
                { german: 'Kakao', english: 'Cocoa', somali: 'Kakao' }
            ]
        },
        household: {
            name: { en: "Household", so: "Guriga" },
            words: [
                { german: 'Lampe', english: 'Lamp', somali: 'Lambad' },
                { german: 'Tisch', english: 'Table', somali: 'Miis' },
                { german: 'Stuhl', english: 'Chair', somali: 'Kursi' },
                { german: 'Teppich', english: 'Carpet', somali: 'Kaar' },
                { german: 'Vorhang', english: 'Curtain', somali: 'Dariishad' },
                { german: 'Buch', english: 'Book', somali: 'Buug' },
                { german: 'Zeitung', english: 'Newspaper', somali: 'Wargeys' },
                { german: 'Telefon', english: 'Telephone', somali: 'Telefoon' },
                { german: 'Computer', english: 'Computer', somali: 'Kumbuyuutar' },
                { german: 'Steckdose', english: 'Power outlet', somali: 'Dib u celcelinta' },
                { german: 'Glühbirne', english: 'Light bulb', somali: 'Lambad' },
                { german: 'Batterie', english: 'Battery', somali: 'Batari' },
                { german: 'Schraubenzieher', english: 'Screwdriver', somali: 'Mishaha' },
                { german: 'Hammer', english: 'Hammer', somali: 'Madoobe' },
                { german: 'Nagel', english: 'Nail', somali: 'Musmaar' },
                { german: 'Kleber', english: 'Glue', somali: 'Libaax' }
            ]
        },
        transport: {
            name: { en: "Transport", so: "Ganacsiga" },
            words: [
                { german: 'LKW', english: 'Truck', somali: 'Lorrry' },
                { german: 'Straßenbahn', english: 'Tram', somali: 'Tram' },
                { german: 'Flugzeug', english: 'Airplane', somali: 'Diyaarad' },
                { german: 'Bushaltestelle', english: 'Bus stop', somali: 'Joojinta baska' },
                { german: 'weit', english: 'far', somali: 'fog' },
                { german: 'nah', english: 'near', somali: 'dhow' },
                { german: 'Kreuzung', english: 'Intersection', somali: 'Isgoys' },
                { german: 'abbiegen', english: 'to turn', somali: 'wareeg' },
                { german: 'fliegen', english: 'to fly', somali: 'duul' },
                { german: 'Zug', english: 'Train', somali: 'Tareen' },
                { german: 'Flughafen', english: 'Airport', somali: 'Garoonka diyaaradaha' },
                { german: 'Rathaus', english: 'City hall', somali: 'Dugsi magaalada' },
                { german: 'Feuerwehr', english: 'Fire department', somali: 'Dab-damiska' },
                { german: 'Bäckerei', english: 'Bakery', somali: 'Furno' },
                { german: 'Geldautomat', english: 'ATM', somali: 'Mashin lacag' },
                { german: 'Markt', english: 'Market', somali: 'Suuq' },
                { german: 'Fluss', english: 'River', somali: 'Webi' },
                { german: 'See', english: 'Lake', somali: 'Har' },
                { german: 'warten', english: 'to wait', somali: 'sug' },
                { german: 'Wartezimmer', english: 'Waiting room', somali: 'Qolka sugitaanka' },
                { german: 'Post', english: 'Post office', somali: 'Boostada' },
                { german: 'Bibliothek', english: 'Library', somali: 'Maktabadda' },
                { german: 'billig', english: 'cheap', somali: 'jaban' },
                { german: 'teuer', english: 'expensive', somali: 'qaali' }
            ]
        },
        school: {
            name: { en: "School & Office", so: "Iskuulka iyo Xafiiska" },
            words: [
                { german: 'Schere', english: 'Scissors', somali: 'Maqas' },
                { german: 'Bleistift', english: 'Pencil', somali: 'Qalin' },
                { german: 'Radiergummi', english: 'Eraser', somali: 'Masax' },
                { german: 'Kugelschreiber', english: 'Pen', somali: 'Qalin' },
                { german: 'Erzieherin', english: 'Kindergarten teacher', somali: 'Macallinka carruurta' },
                { german: 'Kindergarten', english: 'Kindergarten', somali: 'Isgoyska carruurta' },
                { german: 'Spielplatz', english: 'Playground', somali: 'Goobta ciyaarta' },
                { german: 'Lehrer', english: 'Teacher (male)', somali: 'Macallin' },
                { german: 'Lehrerin', english: 'Teacher (female)', somali: 'Macallinka' },
                { german: 'Maus', english: 'Mouse (computer)', somali: 'Jiir' },
                { german: 'Tastatur', english: 'Keyboard', somali: 'Mashin qori' },
                { german: 'Zirkel', english: 'Compass', somali: 'Kumpas' },
                { german: 'Sportplatz', english: 'Sports field', somali: 'Goobta cayaaraha' },
                { german: 'Turnhalle', english: 'Gym', somali: 'Qolka jimicsiga' },
                { german: 'Buntstift', english: 'Colored pencil', somali: 'Qalin midab' },
                { german: 'Filzstift', english: 'Marker', somali: 'Qalin xoog' },
                { german: 'Geodreieck', english: 'Set square', somali: 'Sikweer' },
                { german: 'Lineal', english: 'Ruler', somali: 'Xisaab' },
                { german: 'Taschenrechner', english: 'Calculator', somali: 'Xisaab' },
                { german: 'Klassenraum', english: 'Classroom', somali: 'Qolka fasalka' },
                { german: 'Schüler', english: 'Student', somali: 'Arday' },
                { german: 'Freund', english: 'Friend', somali: 'Saxiib' },
                { german: 'Tafel', english: 'Blackboard', somali: 'Saxan' },
                { german: 'Kreide', english: 'Chalk', somali: 'Jib' }
            ]
        },
        clothing: {
            name: { en: "Clothing", so: "Dhar" },
            words: [
                { german: 'Stiefel', english: 'Boots', somali: 'Buud' },
                { german: 'Sandale', english: 'Sandals', somali: 'Sandal' },
                { german: 'Kopftuch', english: 'Headscarf', somali: 'Shaash' },
                { german: 'Tasche', english: 'Bag', somali: 'Shandad' },
                { german: 'Schal', english: 'Scarf', somali: 'Shaash' },
                { german: 'Handschuh', english: 'Gloves', somali: 'Gacmo' },
                { german: 'Unterhemd', english: 'Undershirt', somali: 'Shaad hoose' },
                { german: 'Pullover', english: 'Sweater', somali: 'Shaad' },
                { german: 'Anzug', english: 'Suit', somali: 'Libis' },
                { german: 'Krawatte', english: 'Tie', somali: 'Karaawad' },
                { german: 'Hut', english: 'Hat', somali: 'Koofiyad' },
                { german: 'Sonnenbrille', english: 'Sunglasses', somali: 'Sharaab qorax' },
                { german: 'Armbanduhr', english: 'Watch', somali: 'Saacad' },
                { german: 'Ring', english: 'Ring', somali: 'Furaha' },
                { german: 'Kette', english: 'Necklace', somali: 'Qardhaas' },
                { german: 'Ohrring', english: 'Earring', somali: 'Dhego' },
                { german: 'Geldbörse', english: 'Wallet', somali: 'Shandad lacag' },
                { german: 'Rucksack', english: 'Backpack', somali: 'Shandad dhabar' },
                { german: 'Regenschirm', english: 'Umbrella', somali: 'Dabool' },
                { german: 'Handschuhe', english: 'Gloves', somali: 'Gacmo' },
                { german: 'Mütze', english: 'Cap', somali: 'Koofiyad' },
                { german: 'Socken', english: 'Socks', somali: 'Shariid' },
                { german: 'Unterwäsche', english: 'Underwear', somali: 'Shaqsi' },
                { german: 'Bademantel', english: 'Bathrobe', somali: 'Shaad qubeys' },
                { german: 'Hausschuhe', english: 'Slippers', somali: 'Kabaha guriga' },
                { german: 'Sportschuhe', english: 'Sneakers', somali: 'Kabaha cayaaraha' },
                { german: 'Stöckelschuhe', english: 'High heels', somali: 'Kabaha dheer' },
                { german: 'Flip-Flops', english: 'Flip-flops', somali: 'Kabaha furan' },
                { german: 'Gürtel', english: 'Belt', somali: 'Suun' },
                { german: 'Hosenträger', english: 'Suspenders', somali: 'Taag' },
                { german: 'Fliege', english: 'Bow tie', somali: 'Karaawad' },
                { german: 'Schmuck', english: 'Jewelry', somali: 'Dhar qurux' },
                { german: 'Armband', english: 'Bracelet', somali: 'Gacan' },
                { german: 'Halskette', english: 'Necklace', somali: 'Qardhaas' },
                { german: 'Ohrringe', english: 'Earrings', somali: 'Dhego' },
                { german: 'Uhr', english: 'Watch', somali: 'Saacad' },
                { german: 'Brille', english: 'Glasses', somali: 'Sharaab' },
                { german: 'Kontaktlinsen', english: 'Contact lenses', somali: 'Sharaab indho' }
            ]
        }
    }
};

// --- STATE ---
let currentTestIndex = 0;
let score = 0;
let shuffledVocab = [];
let currentMode = 'learn';
let currentSection = 'original';
let currentCategory = 'food';
let learnedWords = new Set();
let testHistory = [];
let currentVocabulary = [];
let wordTestCount = {};
let currentLanguage = 'en'; // Default language

// --- LANGUAGE MANAGEMENT ---
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguageUI();
    updateAllText();
}

function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    document.getElementById('language-modal').style.display = 'none';
    updateLanguageUI();
    updateAllText();
}

function updateLanguageUI() {
    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    const activeBtn = document.getElementById(`lang-${currentLanguage}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
        activeBtn.classList.add('bg-blue-600', 'text-white');
    }
}

function updateAllText() {
    // Update all elements with data-en and data-so attributes
    document.querySelectorAll('[data-en][data-so]').forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update dynamic content
    if (currentVocabulary.length > 0) {
        if (currentMode === 'learn') {
            createLearnCards();
        } else {
            loadQuestion();
        }
    }
}

// --- TEXT-TO-SPEECH ---
let currentSpeechRate = 0.8;

function speak(text, speed = 'normal') {
    if (!window.speechSynthesis) {
        const message = currentLanguage === 'en' ? 
            "Speech synthesis is not available in this browser. Please try Chrome or Firefox." :
            "Nidaamka codku kama shaqeynayo biraawsarkan. Fadlan isku day biraawsar kale sida Chrome ama Firefox.";
        alert(message);
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    
    if (speed === 'slow') {
        utterance.rate = 0.4;
        currentSpeechRate = 0.4;
    } else {
        utterance.rate = 0.9;
        currentSpeechRate = 0.9;
    }
    
    utterance.pitch = 0.7;
    utterance.volume = 1.0;
    
    const voices = window.speechSynthesis.getVoices();
    let bestVoice = null;
    
    bestVoice = voices.find(voice => 
        voice.lang.startsWith('de') && 
        (voice.name.includes('Premium') || voice.name.includes('HD') || voice.name.includes('High'))
    );
    
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.startsWith('de') && 
            (voice.name.includes('Male') || voice.name.includes('männlich') || voice.name.includes('male'))
        );
    }
    
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.startsWith('de') && 
            (voice.name.includes('Anna') || voice.name.includes('Markus') || voice.name.includes('Yannick'))
        );
    }
    
    if (!bestVoice) {
        bestVoice = voices.find(voice => voice.lang.startsWith('de'));
    }
    
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.startsWith('en') && 
            (voice.name.includes('Premium') || voice.name.includes('HD') || voice.name.includes('High'))
        );
    }
    
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.startsWith('en') && 
            (voice.name.includes('Male') || voice.name.includes('male'))
        );
    }
    
    if (bestVoice) {
        utterance.voice = bestVoice;
        console.log('Selected voice:', bestVoice.name, 'for language:', bestVoice.lang);
    }
    
    utterance.rate = Math.max(0.3, utterance.rate);
    utterance.pitch = Math.max(0.5, utterance.pitch);
    
    window.speechSynthesis.speak(utterance);
}

function speakSlow(text) {
    speak(text, 'slow');
}

function speakNormal(text) {
    speak(text, 'normal');
}

// --- SECTION MANAGEMENT ---
function selectSection(section) {
    currentSection = section;
    
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50');
        btn.classList.add('border-transparent');
    });
    
    const selectedBtn = document.querySelector(`[data-section="${section}"]`);
    selectedBtn.classList.remove('border-transparent');
    selectedBtn.classList.add('border-blue-500', 'bg-blue-50');
    
    document.getElementById('section-selection').classList.add('hidden');
    document.getElementById('category-selection').classList.remove('hidden');
}

// --- CATEGORY MANAGEMENT ---
function selectCategory(category) {
    console.log('selectCategory called with:', category);
    console.log('currentSection:', currentSection);
    console.log('vocabularyData:', vocabularyData);
    
    currentCategory = category;
    
    // Sicherheitsüberprüfung mit optionaler Verkettung
    if (!vocabularyData[currentSection] || !vocabularyData[currentSection][category]) {
        console.error(`Category '${category}' not found in section '${currentSection}'`);
        console.error('Available sections:', Object.keys(vocabularyData));
        console.error('Available categories in current section:', vocabularyData[currentSection] ? Object.keys(vocabularyData[currentSection]) : 'undefined');
        return;
    }
    
    currentVocabulary = vocabularyData[currentSection][category].words;
    console.log('Selected vocabulary:', currentVocabulary);
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-blue-100', 'border-blue-500');
        btn.classList.add('bg-white');
    });
    
    const selectedBtn = document.querySelector(`[data-category="${category}"]`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-white');
        selectedBtn.classList.add('bg-blue-100', 'border-blue-500');
    }
    
    document.getElementById('progress-container').classList.remove('hidden');
    document.getElementById('mode-switcher').classList.remove('hidden');
    
    if (currentMode === 'learn') {
        createLearnCards();
    } else {
        startTest();
    }
    
    updateProgress();
}

function showSectionSelection() {
    document.getElementById('section-selection').classList.remove('hidden');
    document.getElementById('category-selection').classList.add('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('mode-switcher').classList.add('hidden');
    document.getElementById('learn-mode').classList.add('hidden');
    document.getElementById('test-mode').classList.add('hidden');
}

// --- PROGRESS TRACKING ---
function updateProgress() {
    const totalWords = currentVocabulary.length;
    const learnedCount = Array.from(learnedWords).filter(word => 
        currentVocabulary.some(v => v.german === word)
    ).length;
    
    const percentage = Math.round((learnedCount / totalWords) * 100);
    
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent = `${percentage}%`;
    
    document.getElementById('learned-words').textContent = learnedWords.size;
    document.getElementById('passed-tests').textContent = testHistory.length;
    
    const bestScore = testHistory.length > 0 ? Math.max(...testHistory.map(t => t.score)) : 0;
    document.getElementById('best-score').textContent = `${bestScore}%`;
}

// --- LEARN MODE ---
function createLearnCards() {
    const wordCardsContainer = document.getElementById('word-cards');
    wordCardsContainer.innerHTML = '';
    
    // Sicherheitsüberprüfung für currentVocabulary
    if (!currentVocabulary || currentVocabulary.length === 0) {
        console.error('No vocabulary available for current section/category');
        wordCardsContainer.innerHTML = '<div class="col-span-full text-center text-gray-500">Keine Wörter verfügbar</div>';
        return;
    }
    
    currentVocabulary.forEach((word, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'perspective-1000 fade-in';
        cardContainer.style.animationDelay = `${index * 0.05}s`;

        const card = document.createElement('div');
        card.className = 'card relative w-full h-32 md:h-36 cursor-pointer';
        
        const isLearned = learnedWords.has(word.german);
        const learnedClass = isLearned ? 'ring-2 ring-green-500' : '';
        
        const frontFace = document.createElement('div');
        frontFace.className = `card-face absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2 text-center ${learnedClass}`;
        
        const learnedText = currentLanguage === 'en' ? '✓ Learned (5x correct)' : '✓ La barto (5x sax)';
        const progressText = currentLanguage === 'en' ? 'correct' : 'sax';
        
        frontFace.innerHTML = `
            <p class="text-lg md:text-xl font-semibold">${word.german}</p>
            <div class="flex gap-1 mt-1">
                <button class="speak-slow-btn text-xl text-green-500 hover:text-green-700 transition" aria-label="Speak slowly ${word.german}" title="Very slow">🐌</button>
                <button class="speak-normal-btn text-xl text-blue-500 hover:text-blue-700 transition" aria-label="Speak normally ${word.german}" title="Normal">🔊</button>
            </div>
            ${isLearned ? `<div class="text-green-500 text-sm mt-1">${learnedText}</div>` : 
              wordTestCount[word.german] ? `<div class="text-blue-500 text-sm mt-1">${wordTestCount[word.german]}/5 ${progressText}</div>` : ''}
        `;
        
        const backFace = document.createElement('div');
        backFace.className = 'card-face card-face-back absolute w-full h-full bg-blue-600 text-white rounded-xl shadow-md flex items-center justify-center p-2 text-center';
        const translation = currentLanguage === 'en' ? word.english : word.somali;
        backFace.innerHTML = `<p class="text-lg md:text-xl font-semibold">${translation}</p>`;

        card.appendChild(frontFace);
        card.appendChild(backFace);
        cardContainer.appendChild(card);
        wordCardsContainer.appendChild(cardContainer);

        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('speak-slow-btn')) {
                e.stopPropagation();
                speakSlow(word.german);
            } else if (e.target.classList.contains('speak-normal-btn')) {
                e.stopPropagation();
                speakNormal(word.german);
            } else {
                card.classList.toggle('is-flipped');
            }
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('is-flipped');
            }
        });
    });
}

// --- TEST MODE ---
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startTest() {
    currentTestIndex = 0;
    score = 0;
    shuffledVocab = shuffleArray([...currentVocabulary]);
    document.getElementById('test-results').classList.add('hidden');
    document.querySelector('#test-mode .bg-white').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentTestIndex >= shuffledVocab.length) {
        showResults();
        return;
    }

    const questionText = currentLanguage === 'en' ? 'Question' : 'Su\'aal';
    document.getElementById('test-progress').textContent = `${questionText} ${currentTestIndex + 1} / ${shuffledVocab.length}`;
    const currentWord = shuffledVocab[currentTestIndex];
    document.getElementById('test-word').textContent = currentWord.german;
    document.getElementById('test-feedback').textContent = '';

    const correctAnswer = currentLanguage === 'en' ? currentWord.english : currentWord.somali;
    let options = [correctAnswer];
    
    // Sicherheitsüberprüfung für vocabularyData
    if (!vocabularyData[currentSection]) {
        console.error(`Section '${currentSection}' not found in vocabularyData`);
        return;
    }
    
    const allWords = Object.values(vocabularyData[currentSection]).flatMap(cat => cat.words);
    const wrongAnswers = allWords
        .filter(v => {
            const translation = currentLanguage === 'en' ? v.english : v.somali;
            return translation !== correctAnswer;
        })
        .map(v => currentLanguage === 'en' ? v.english : v.somali);
    
    shuffleArray(wrongAnswers);
    options.push(...wrongAnswers.slice(0, 3));
    options = shuffleArray(options);

    const testOptionsContainer = document.getElementById('test-options');
    testOptionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'w-full text-left bg-slate-100 p-4 rounded-lg hover:bg-slate-200 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500';
        button.textContent = option;
        const optionText = currentLanguage === 'en' ? 'Option' : 'Doorasho';
        button.setAttribute('aria-label', `${optionText} ${index + 1}: ${option}`);
        button.onclick = () => checkAnswer(option, correctAnswer, button);
        testOptionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer, button) {
    const buttons = document.querySelectorAll('#test-options button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-200');
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        
        const currentWord = shuffledVocab[currentTestIndex];
        if (currentWord) {
            wordTestCount[currentWord.german] = (wordTestCount[currentWord.german] || 0) + 1;
            
            if (wordTestCount[currentWord.german] >= 5) {
                learnedWords.add(currentWord.german);
                console.log(`Word "${currentWord.german}" marked as learned (${wordTestCount[currentWord.german]}x correct)`);
            }
        }
        
        const correctText = currentLanguage === 'en' ? 'Correct! 👍' : 'Sax! 👍';
        document.getElementById('test-feedback').textContent = correctText;
        document.getElementById('test-feedback').className = 'mt-6 text-center font-bold h-6 text-green-600';
        button.classList.remove('bg-slate-100');
        button.classList.add('bg-green-500', 'text-white');
    } else {
        const wrongText = currentLanguage === 'en' ? 'Wrong! 👎' : 'Khalad! 👎';
        document.getElementById('test-feedback').textContent = wrongText;
        document.getElementById('test-feedback').className = 'mt-6 text-center font-bold h-6 text-red-600';
        button.classList.remove('bg-slate-100');
        button.classList.add('bg-red-500', 'text-white');
        
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.remove('bg-slate-100');
                btn.classList.add('bg-green-500', 'text-white');
            }
        });
    }

    currentTestIndex++;
    setTimeout(loadQuestion, 1500);
}

function showResults() {
    document.querySelector('#test-mode .bg-white').style.display = 'none';
    document.getElementById('test-results').classList.remove('hidden');
    
    const percentage = Math.round((score / shuffledVocab.length) * 100);
    
    testHistory.push({
        section: currentSection,
        category: currentCategory,
        score: percentage,
        date: new Date().toISOString(),
        totalQuestions: shuffledVocab.length,
        correctAnswers: score
    });
    
    let resultMessage = '';
    
    if (currentLanguage === 'en') {
        if (percentage >= 90) {
            resultMessage = `You answered ${score} out of ${shuffledVocab.length} questions correctly. Excellent! 🎉`;
        } else if (percentage >= 70) {
            resultMessage = `You answered ${score} out of ${shuffledVocab.length} questions correctly. Good job! 👍`;
        } else if (percentage >= 50) {
            resultMessage = `You answered ${score} out of ${shuffledVocab.length} questions correctly. Keep learning! 📚`;
        } else {
            resultMessage = `You answered ${score} out of ${shuffledVocab.length} questions correctly. Keep trying! 💪`;
        }
    } else {
        if (percentage >= 90) {
            resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Waad mahadsantahay! 🎉`;
        } else if (percentage >= 70) {
            resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Waa wanaagsan! 👍`;
        } else if (percentage >= 50) {
            resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Siyaad baro! 📚`;
        } else {
            resultMessage = `Waxa aad si sax ah uga jawaabtay ${score} ka mid ah ${shuffledVocab.length} su'aalood. Siyaad isku day! 💪`;
        }
    }
    
    document.getElementById('results-text').textContent = resultMessage;
    
    updateProgress();
    saveProgress();
}

// --- MODE SWITCHING ---
function switchMode(mode) {
    currentMode = mode;
    
    if (mode === 'learn') {
        document.getElementById('learn-mode').classList.remove('hidden');
        document.getElementById('test-mode').classList.add('hidden');
        document.getElementById('learn-mode-btn').classList.add('btn-active');
        document.getElementById('test-mode-btn').classList.remove('btn-active');
        
        if (currentVocabulary.length > 0) {
            createLearnCards();
        }
    } else {
        document.getElementById('learn-mode').classList.add('hidden');
        document.getElementById('test-mode').classList.remove('hidden');
        document.getElementById('learn-mode-btn').classList.remove('btn-active');
        document.getElementById('test-mode-btn').classList.add('btn-active');
        
        if (currentVocabulary.length > 0) {
            startTest();
        }
    }
}

// --- UTILITY FUNCTIONS ---
function saveProgress() {
    const progress = {
        mode: currentMode,
        section: currentSection,
        category: currentCategory,
        learnedWords: Array.from(learnedWords),
        testHistory: testHistory,
        wordTestCount: wordTestCount,
        language: currentLanguage,
        lastPlayed: new Date().toISOString()
    };
    localStorage.setItem('learnGermanProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('learnGermanProgress');
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            currentMode = progress.mode || 'learn';
            currentSection = progress.section || 'original';
            currentCategory = progress.category || 'food';
            learnedWords = new Set(progress.learnedWords || []);
            testHistory = progress.testHistory || [];
            wordTestCount = progress.wordTestCount || {};
            currentLanguage = progress.language || 'en';
            currentVocabulary = vocabularyData[currentSection][currentCategory].words;
            return progress;
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
    return null;
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    
    // Debug: Zeige verfügbare Daten
    console.log('Available vocabularyData:', vocabularyData);
    console.log('Available sections:', Object.keys(vocabularyData));
    Object.keys(vocabularyData).forEach(section => {
        console.log(`Section '${section}' categories:`, Object.keys(vocabularyData[section]));
    });
    
    // Check if user has selected a language before
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
        // Show language selection modal for first-time users
        document.getElementById('language-modal').style.display = 'flex';
    } else {
        currentLanguage = savedLanguage;
        updateLanguageUI();
        updateAllText();
    }
    
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            console.log('Speech synthesis voices available');
        };
    }
    
    const startBtn = document.getElementById('start-button');
    if (startBtn) {
        console.log('Start button found, adding event listener...');
        startBtn.addEventListener('click', () => {
            console.log('Start button clicked!');
            document.getElementById('tutorial-modal').style.display = 'none';
            document.getElementById('section-selection').classList.remove('hidden');
        });
    } else {
        console.error('Start button not found!');
    }
    
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            selectSection(section);
        });
    });
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            selectCategory(category);
        });
    });
    
    document.getElementById('learn-mode-btn').addEventListener('click', () => switchMode('learn'));
    document.getElementById('test-mode-btn').addEventListener('click', () => switchMode('test'));
    
    document.getElementById('test-audio-btn').addEventListener('click', () => {
        if (shuffledVocab[currentTestIndex]) {
            speak(shuffledVocab[currentTestIndex].german, 'normal');
        }
    });
    
    document.getElementById('restart-test-btn').addEventListener('click', startTest);
    
    // Back to sections button (both in category selection and test results)
    const backToSectionsBtns = document.querySelectorAll('#back-to-sections-btn');
    backToSectionsBtns.forEach(btn => {
        btn.addEventListener('click', showSectionSelection);
    });
    
    document.getElementById('stats-panel').classList.remove('hidden');
    
    const progress = loadProgress();
    if (progress && progress.section && progress.category) {
        selectSection(progress.section);
        selectCategory(progress.category);
    }
    
    console.log('Application initialized successfully!');
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
