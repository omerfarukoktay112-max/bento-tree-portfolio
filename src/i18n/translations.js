export const languages = ['tr', 'en', 'de']

export const translations = {
  tr: {
    profile: {
      name: 'Ömer Faruk Oktay',
      title: 'Oyun ve Mobil Uygulama Geliştirici',
      bio: "Bilgisayar Programcılığı mezunuyum. Godot ile oyunlar geliştirip itch.io'da yayınlıyor, C# / .NET MAUI ve Kotlin ile mobil ve masaüstü uygulamalar yazıyorum.",
    },
    sections: {
      games: 'Oyunlar',
      apps: 'Uygulamalar',
      skills: 'Yetenekler',
      links: 'Hızlı Bağlantılar',
      earlyWorks: 'Erken Çalışmalar',
    },
    ui: {
      viewDetails: 'Detayları Gör',
      viewOnGithub: "GitHub'da Görüntüle",
      viewOnItch: "itch.io'da Görüntüle",
      downloadCv: 'CV İndir',
      close: 'Kapat',
      problem: 'Problem',
      approach: 'Yaklaşım',
      result: 'Sonuç',
    },
    projects: {
      'monster-market': {
        name: 'Halloween: The Monster Market',
        description: "Cadılar Bayramı'ndan önceki on gece boyunca canavarlara hizmet veren küçük bir dükkân işlettiğin hikâye odaklı simülasyon.",
        caseStudy: {
          problem: 'Basit bir dükkân döngüsünü, her müşterinin kendi derdi olan karakterlerle hikâye anlatan bir oyuna dönüştürmek.',
          approach: 'Godot ile, Claude Code desteğiyle geliştirildi: iksir demleme ve vudu bebeği dikme gibi el işi mini oyunlar, fareyle yıldız çizerek tarif tekrarı, gece kasabası ve pişti mini oyunu.',
          result: "itch.io'da Windows için yayınlanan ücretli bir oyun; seçimlerin finaldeki festival fotoğraflarını belirlediği dallanan karakter hikâyeleri.",
        },
      },
      'win-garden': {
        name: 'Win Garden',
        description: 'Windows görev çubuğunda yaşayan, sen çalışırken kendi kendine büyüyüp hasat edilen sakin bir pixel-art çiftlik oyunu.',
        caseStudy: {
          problem: 'Ekranı kaplamadan, kullanıcı başka işler yaparken arka planda ilerleyen bir idle oyun tasarlamak.',
          approach: 'Godot ile, Claude Code desteğiyle geliştirildi: görev çubuğuna yerleşen bir pencere, otomatik büyüme/hasat döngüsü ve pixel-art görseller.',
          result: "itch.io'da Windows için yayınlandı; 9 dil desteği (TR, EN, ES, PT-BR, RU, ZH, JA, DE, FR).",
        },
      },
      'cafe-tycoon': {
        name: 'Cafe Tycoon Clicker',
        description: '36 geliştirme, prestij sistemi, kostümler ve ödül sandıkları içeren rahat bir kafe işletme clicker oyunu.',
        caseStudy: {
          problem: 'Tıklama oyunlarının hızla tükenen ilerleme hissini uzun soluklu ve görünür hâle getirmek.',
          approach: "Godot ile, Claude Code desteğiyle geliştirildi: kafeyi görsel olarak büyüten 36 geliştirme, 14 kalıcı bonuslu prestij, 6 nadirlik seviyesinde 26 kostüm ve saniyede 10'dan fazla tıklamayı cezalandıran ısı sistemi.",
          result: "itch.io'da Windows için yayınlandı; 9 dil desteği ve kilit açma bildirimleri.",
        },
      },
      'waifu-blast': {
        name: 'Waifu Blast',
        description: 'Klasik 8×8 blok bulmaca mekaniklerini açılabilir anime karakterleri ve hikâyeleriyle birleştiren bir puzzle oyunu.',
        caseStudy: {
          problem: 'Tanıdık bir blok bulmaca formülüne oyuncuyu geri getirecek bir ilerleme ve koleksiyon katmanı eklemek.',
          approach: 'Godot ile, Claude Code desteğiyle geliştirildi: combo ve Fever modu, geri al/ipucu güçlendiricileri, sonsuz mod, seviye ilerlemesi ve günlük görevler.',
          result: "itch.io'da Windows için yayınlandı; karakter galerisi ve istatistik ekranı.",
        },
      },
      keykeeper: {
        name: 'KeyKeeper',
        description: 'Android için çevrimdışı, sıfır bilgi (zero-knowledge) mimarili şifre ve veri kasası.',
        caseStudy: {
          problem: 'Hiçbir veriyi buluta göndermeden şifreleri, kartları ve notları güvenli şekilde saklayan bir mobil kasa yapmak.',
          approach: '.NET MAUI ile geliştirildi: Argon2id ile ana şifre türetme, SQLCipher ile şifreli veritabanı, AES-256-GCM, Android Keystore destekli biyometrik kilit, TOTP üretici ve pano otomatik temizleme.',
          result: 'İmzalı APK olarak yayınlanan, ağ erişimi ve telemetrisi olmayan, Türkçe/İngilizce bir uygulama.',
        },
      },
      gearfit: {
        name: 'GearFit',
        description: 'Rutinler, dinlenme sayacı, otomatik PR tespiti ve ilerleme grafikleri sunan çevrimdışı antrenman takipçisi.',
        caseStudy: {
          problem: 'Hesap ve bulut gerektirmeyen, hızlı set kaydı yapılabilen bir kuvvet antrenmanı takipçisi yapmak.',
          approach: '.NET MAUI (net10.0) ve MVVM (CommunityToolkit) ile geliştirildi: SQLite yerel depolama, Epley formülüyle 1RM tahmini, takvim geçmişi, haftalık hedefler ve CSV dışa aktarma.',
          result: 'Windows ve Android için tek kod tabanı; Windows sürümü kurulum gerektirmeyen paket olarak yayınlandı.',
        },
      },
      'paint-for-mac': {
        name: 'Paint for Mac',
        description: '2D plan çizip 3D\'ye dönüştüren ve Unity / Godot için yapay zekâ ajanlarının anlayacağı harita paketleri dışa aktaran macOS uygulaması.',
        caseStudy: {
          problem: 'Bir oyun seviyesini yapay zekâ kodlama ajanına sözle tarif etmek her seferinde farklı sonuç veriyor.',
          approach: 'Swift, SwiftUI, AppKit ve SceneKit ile geliştirildi: katmanlı 2D editör, şekilleri 3D prizmalara dönüştürme, PBR materyaller ve motorun birim/eksenlerine göre koordinat dışa aktarma.',
          result: 'Çizilen seviyenin Unity veya Godot\'da birebir yeniden kurulabildiği, Türkçe/İngilizce yerel bir macOS uygulaması.',
        },
      },
    },
  },
  en: {
    profile: {
      name: 'Ömer Faruk Oktay',
      title: 'Game & Mobile App Developer',
      bio: 'Computer Programming graduate. I build games with Godot and publish them on itch.io, and write mobile and desktop apps with C# / .NET MAUI and Kotlin.',
    },
    sections: {
      games: 'Games',
      apps: 'Apps',
      skills: 'Skills',
      links: 'Quick Links',
      earlyWorks: 'Early Work',
    },
    ui: {
      viewDetails: 'View Details',
      viewOnGithub: 'View on GitHub',
      viewOnItch: 'View on itch.io',
      downloadCv: 'Download CV',
      close: 'Close',
      problem: 'Problem',
      approach: 'Approach',
      result: 'Result',
    },
    projects: {
      'monster-market': {
        name: 'Halloween: The Monster Market',
        description: 'A story-driven sim where you run a tiny shop for monsters during the ten nights before Halloween.',
        caseStudy: {
          problem: 'Turn a simple shopkeeping loop into a story game where every customer has a problem of their own.',
          approach: 'Built in Godot with Claude Code: hands-on crafting minigames for brewing potions and sewing voodoo dolls, recipe replay by drawing a star with the mouse, a night-time town and a game of pişti.',
          result: 'A paid Windows release on itch.io, with branching character stories where your choices decide the final festival photos.',
        },
      },
      'win-garden': {
        name: 'Win Garden',
        description: 'A cozy pixel-art farm that lives on your Windows taskbar and grows and harvests itself while you work.',
        caseStudy: {
          problem: 'Design an idle game that progresses in the background without taking over the screen.',
          approach: 'Built in Godot with Claude Code: a window docked to the taskbar, an automatic grow/harvest loop and pixel-art visuals.',
          result: 'Released for Windows on itch.io, playable in 9 languages (EN, TR, ES, PT-BR, RU, ZH, JA, DE, FR).',
        },
      },
      'cafe-tycoon': {
        name: 'Cafe Tycoon Clicker',
        description: 'A cozy café management clicker with 36 upgrades, a prestige system, skins and loot chests.',
        caseStudy: {
          problem: 'Make the quickly fading sense of progress in clicker games last longer and stay visible.',
          approach: 'Built in Godot with Claude Code: 36 upgrades that visibly grow the café, prestige with 14 permanent bonuses, 26 skins across 6 rarities and a heat system that penalises clicking more than 10 times per second.',
          result: 'Released for Windows on itch.io, with 9 languages and unlock notifications.',
        },
      },
      'waifu-blast': {
        name: 'Waifu Blast',
        description: 'Classic 8×8 block puzzle mechanics combined with unlockable anime companions and their stories.',
        caseStudy: {
          problem: 'Add a progression and collection layer that keeps players coming back to a familiar block-puzzle formula.',
          approach: 'Built in Godot with Claude Code: combos and Fever mode, undo/hint boosters, endless mode, level progression and daily challenges.',
          result: 'Released for Windows on itch.io, with a character gallery and statistics screen.',
        },
      },
      keykeeper: {
        name: 'KeyKeeper',
        description: 'An offline-first, zero-knowledge password and data vault for Android.',
        caseStudy: {
          problem: 'Build a mobile vault that stores passwords, cards and notes securely without ever sending data to the cloud.',
          approach: 'Built with .NET MAUI: Argon2id key derivation, a SQLCipher-encrypted database, AES-256-GCM, biometric unlock backed by the Android Keystore, a TOTP generator and clipboard auto-clear.',
          result: 'A signed APK release with no network access and no telemetry, available in English and Turkish.',
        },
      },
      gearfit: {
        name: 'GearFit',
        description: 'An offline workout tracker with routines, a rest timer, automatic PR detection and progress charts.',
        caseStudy: {
          problem: 'Build a strength-training tracker with fast set logging that needs no account or cloud.',
          approach: 'Built with .NET MAUI (net10.0) and MVVM (CommunityToolkit): local SQLite storage, 1RM estimation with the Epley formula, calendar history, weekly goals and CSV export.',
          result: 'One codebase for Windows and Android; the Windows build ships as a self-contained package with no install needed.',
        },
      },
      'paint-for-mac': {
        name: 'Paint for Mac',
        description: 'A macOS app that turns 2D plans into 3D and exports AI-agent-ready map packages for Unity and Godot.',
        caseStudy: {
          problem: 'Describing a game level to an AI coding agent in words gives a different level every time.',
          approach: 'Built with Swift, SwiftUI, AppKit and SceneKit: a layered 2D editor, extrusion of shapes into 3D prisms, PBR materials and coordinate export in each engine\'s units and axes.',
          result: 'A native macOS app in English and Turkish, whose exported levels can be rebuilt exactly in Unity or Godot.',
        },
      },
    },
  },
  de: {
    profile: {
      name: 'Ömer Faruk Oktay',
      title: 'Spiele- und Mobile-App-Entwickler',
      bio: 'Absolvent der Computerprogrammierung. Ich entwickle Spiele mit Godot, veröffentliche sie auf itch.io und schreibe Mobile- und Desktop-Apps mit C# / .NET MAUI und Kotlin.',
    },
    sections: {
      games: 'Spiele',
      apps: 'Apps',
      skills: 'Fähigkeiten',
      links: 'Schnelllinks',
      earlyWorks: 'Frühe Arbeiten',
    },
    ui: {
      viewDetails: 'Details ansehen',
      viewOnGithub: 'Auf GitHub ansehen',
      viewOnItch: 'Auf itch.io ansehen',
      downloadCv: 'Lebenslauf',
      close: 'Schließen',
      problem: 'Problem',
      approach: 'Ansatz',
      result: 'Ergebnis',
    },
    projects: {
      'monster-market': {
        name: 'Halloween: The Monster Market',
        description: 'Eine storybasierte Simulation, in der du in den zehn Nächten vor Halloween einen kleinen Laden für Monster führst.',
        caseStudy: {
          problem: 'Einen einfachen Ladenkreislauf in ein Story-Spiel verwandeln, in dem jeder Kunde sein eigenes Anliegen hat.',
          approach: 'Mit Godot und Claude Code entwickelt: Handwerks-Minispiele zum Brauen von Tränken und Nähen von Voodoo-Puppen, Rezeptwiederholung durch Zeichnen eines Sterns mit der Maus, eine nächtliche Stadt und eine Partie Pişti.',
          result: 'Ein kostenpflichtiger Windows-Release auf itch.io mit verzweigten Charaktergeschichten, in denen deine Entscheidungen die Festivalfotos am Ende bestimmen.',
        },
      },
      'win-garden': {
        name: 'Win Garden',
        description: 'Eine gemütliche Pixel-Art-Farm in der Windows-Taskleiste, die wächst und erntet, während du arbeitest.',
        caseStudy: {
          problem: 'Ein Idle-Spiel entwerfen, das im Hintergrund fortschreitet, ohne den Bildschirm zu belegen.',
          approach: 'Mit Godot und Claude Code entwickelt: ein an der Taskleiste angedocktes Fenster, ein automatischer Wachstums-/Erntekreislauf und Pixel-Art-Grafik.',
          result: 'Für Windows auf itch.io veröffentlicht, spielbar in 9 Sprachen (EN, TR, ES, PT-BR, RU, ZH, JA, DE, FR).',
        },
      },
      'cafe-tycoon': {
        name: 'Cafe Tycoon Clicker',
        description: 'Ein gemütliches Café-Management-Clickerspiel mit 36 Upgrades, Prestige-System, Skins und Belohnungstruhen.',
        caseStudy: {
          problem: 'Das schnell nachlassende Fortschrittsgefühl von Clickerspielen länger und sichtbar halten.',
          approach: 'Mit Godot und Claude Code entwickelt: 36 Upgrades, die das Café sichtbar wachsen lassen, Prestige mit 14 dauerhaften Boni, 26 Skins in 6 Seltenheitsstufen und ein Hitzesystem, das mehr als 10 Klicks pro Sekunde bestraft.',
          result: 'Für Windows auf itch.io veröffentlicht, mit 9 Sprachen und Freischalt-Benachrichtigungen.',
        },
      },
      'waifu-blast': {
        name: 'Waifu Blast',
        description: 'Klassische 8×8-Blockpuzzle-Mechanik kombiniert mit freischaltbaren Anime-Begleiterinnen und ihren Geschichten.',
        caseStudy: {
          problem: 'Einer bekannten Blockpuzzle-Formel eine Fortschritts- und Sammelebene geben, die Spieler zurückholt.',
          approach: 'Mit Godot und Claude Code entwickelt: Kombos und Fever-Modus, Rückgängig-/Hinweis-Booster, Endlosmodus, Levelfortschritt und tägliche Herausforderungen.',
          result: 'Für Windows auf itch.io veröffentlicht, mit Charaktergalerie und Statistikbildschirm.',
        },
      },
      keykeeper: {
        name: 'KeyKeeper',
        description: 'Ein Offline-first-Passwort- und Datentresor mit Zero-Knowledge-Architektur für Android.',
        caseStudy: {
          problem: 'Einen mobilen Tresor bauen, der Passwörter, Karten und Notizen sicher speichert, ohne jemals Daten in die Cloud zu senden.',
          approach: 'Mit .NET MAUI entwickelt: Schlüsselableitung mit Argon2id, SQLCipher-verschlüsselte Datenbank, AES-256-GCM, biometrische Entsperrung über den Android Keystore, TOTP-Generator und automatisches Leeren der Zwischenablage.',
          result: 'Ein signiertes APK ohne Netzwerkzugriff und ohne Telemetrie, auf Englisch und Türkisch.',
        },
      },
      gearfit: {
        name: 'GearFit',
        description: 'Ein Offline-Trainingstracker mit Routinen, Pausentimer, automatischer PR-Erkennung und Fortschrittsdiagrammen.',
        caseStudy: {
          problem: 'Einen Krafttraining-Tracker mit schneller Satzerfassung bauen, der weder Konto noch Cloud braucht.',
          approach: 'Mit .NET MAUI (net10.0) und MVVM (CommunityToolkit) entwickelt: lokale SQLite-Speicherung, 1RM-Schätzung nach Epley, Kalenderverlauf, Wochenziele und CSV-Export.',
          result: 'Eine Codebasis für Windows und Android; der Windows-Build wird als eigenständiges Paket ohne Installation ausgeliefert.',
        },
      },
      'paint-for-mac': {
        name: 'Paint for Mac',
        description: 'Eine macOS-App, die 2D-Pläne in 3D umwandelt und für KI-Agenten lesbare Kartenpakete für Unity und Godot exportiert.',
        caseStudy: {
          problem: 'Ein Spiellevel einem KI-Coding-Agenten nur mit Worten zu beschreiben, ergibt jedes Mal ein anderes Level.',
          approach: 'Mit Swift, SwiftUI, AppKit und SceneKit entwickelt: ein 2D-Editor mit Ebenen, Extrusion von Formen zu 3D-Prismen, PBR-Materialien und Koordinatenexport in den Einheiten und Achsen der jeweiligen Engine.',
          result: 'Eine native macOS-App auf Englisch und Türkisch, deren exportierte Level sich in Unity oder Godot exakt nachbauen lassen.',
        },
      },
    },
  },
}
