export const languages = ['tr', 'en', 'de']

export const translations = {
  tr: {
    profile: {
      name: 'Ömer Faruk Oktay',
      title: 'Unity & C# Oyun Geliştirici · Mobil (Kotlin / .NET MAUI) Geliştirici',
      bio: 'Unity ve C# ile oyun geliştirme, Kotlin ve .NET MAUI ile mobil uygulama geliştirme üzerine yoğunlaşıyorum. Web teknolojileriyle de ilgileniyorum.',
    },
    sections: {
      skills: 'Yetenekler',
      links: 'Hızlı Bağlantılar',
    },
    ui: {
      viewDetails: 'Detayları Gör',
      viewOnGithub: "GitHub'da Görüntüle",
      close: 'Kapat',
      problem: 'Problem',
      approach: 'Yaklaşım',
      result: 'Sonuç',
    },
    projects: {
      'lotto-game': {
        name: 'Lotto Guessing Game',
        description: 'C# .NET konsolunda geliştirilmiş, oyun mantığı ve durum yönetimi üzerine kurulu bir şans oyunu.',
        caseStudy: {
          problem: 'Temel bir sayı tahmin oyununu, tekrarlanabilir kurallara ve net bir oyun döngüsüne sahip olacak şekilde tasarlamak.',
          approach: 'Girdi doğrulama, deneme hakkı yönetimi ve sonuç ekranı ayrı fonksiyonlara bölünerek konsol tabanlı bir durum makinesi kuruldu.',
          result: 'Kurallara bağlı, kolay genişletilebilir bir oyun mantığı iskeleti; ileride Unity tarafına taşınabilecek temiz bir akış.',
        },
      },
      'arena-battle': {
        name: 'Console Arena Battle',
        description: 'C++ ile konsol ortamında geliştirilmiş, karakter ve dövüş mekanikleri içeren bir arena oyunu.',
        caseStudy: {
          problem: 'Karakter istatistikleri (can, saldırı, savunma) ve tur bazlı dövüş akışını yönetilebilir şekilde kurgulamak.',
          approach: 'Karakterler ve dövüş mantığı ayrı yapılar/fonksiyonlar halinde tasarlandı; her tur girdiye göre durum güncellemesi yapıldı.',
          result: 'Genişletilebilir bir tur-bazlı dövüş sistemi; oyun sistemleri tasarımına ilk elden deneyim.',
        },
      },
      fitstep: {
        name: 'FitStep Mobile',
        description: 'Gerçek zamanlı kalori takibi ve ödül sistemine sahip, oyunlaştırılmış bir Android fitness uygulaması.',
        caseStudy: {
          problem: 'Kullanıcıyı düzenli hareket etmeye teşvik edecek, oyunlaştırılmış bir mobil deneyim kurmak.',
          approach: 'MIT App Inventor ile hızlı prototipleme yapıldı; adım/kalori takibi ile ödül mekaniği birbirine bağlandı.',
          result: 'Uçtan uca çalışan bir mobil prototip; mobil UX ve kullanıcı motivasyon döngüleri üzerine pratik deneyim.',
        },
      },
    },
    stats: { stars: 'yıldız', commits: 'commit' },
  },
  en: {
    profile: {
      name: 'Ömer Faruk Oktay',
      title: 'Unity & C# Game Developer · Mobile (Kotlin / .NET MAUI) Developer',
      bio: 'Focused on game development with Unity & C#, and mobile app development with Kotlin & .NET MAUI. Also comfortable with web technologies.',
    },
    sections: {
      skills: 'Skills',
      links: 'Quick Links',
    },
    ui: {
      viewDetails: 'View Details',
      viewOnGithub: 'View on GitHub',
      close: 'Close',
      problem: 'Problem',
      approach: 'Approach',
      result: 'Result',
    },
    projects: {
      'lotto-game': {
        name: 'Lotto Guessing Game',
        description: 'A lottery-style game built with C# .NET console, focused on game logic and state management.',
        caseStudy: {
          problem: 'Design a basic number-guessing game with repeatable rules and a clear game loop.',
          approach: 'Built a console-based state machine, splitting input validation, attempt tracking, and results into separate functions.',
          result: 'A rule-driven, easily extensible game-logic skeleton — a clean flow that could later be ported to Unity.',
        },
      },
      'arena-battle': {
        name: 'Console Arena Battle',
        description: 'An arena battle game with character and combat mechanics, built with C++ for the console.',
        caseStudy: {
          problem: 'Manage character stats (health, attack, defense) and a turn-based combat flow in a maintainable way.',
          approach: 'Characters and combat logic were modeled as separate structs/functions, updating state each turn based on input.',
          result: 'An extensible turn-based combat system — hands-on experience with game systems design.',
        },
      },
      fitstep: {
        name: 'FitStep Mobile',
        description: 'A gamified Android fitness tracker with real-time calorie tracking and a reward system.',
        caseStudy: {
          problem: 'Build a gamified mobile experience that nudges users toward consistent activity.',
          approach: 'Rapid-prototyped with MIT App Inventor, wiring step/calorie tracking to a reward mechanic.',
          result: 'A working end-to-end mobile prototype — practical experience with mobile UX and motivation loops.',
        },
      },
    },
    stats: { stars: 'stars', commits: 'commits' },
  },
  de: {
    profile: {
      name: 'Ömer Faruk Oktay',
      title: 'Unity & C# Spieleentwickler · Mobile (Kotlin / .NET MAUI) Entwickler',
      bio: 'Schwerpunkt auf Spieleentwicklung mit Unity & C# sowie mobiler App-Entwicklung mit Kotlin & .NET MAUI. Auch vertraut mit Webtechnologien.',
    },
    sections: {
      skills: 'Fähigkeiten',
      links: 'Schnelllinks',
    },
    ui: {
      viewDetails: 'Details ansehen',
      viewOnGithub: 'Auf GitHub ansehen',
      close: 'Schließen',
      problem: 'Problem',
      approach: 'Ansatz',
      result: 'Ergebnis',
    },
    projects: {
      'lotto-game': {
        name: 'Lotto Guessing Game',
        description: 'Ein Lotteriespiel für die C# .NET Konsole mit Fokus auf Spiellogik und Zustandsverwaltung.',
        caseStudy: {
          problem: 'Ein einfaches Zahlenratespiel mit wiederholbaren Regeln und klarem Spielablauf entwerfen.',
          approach: 'Eine konsolenbasierte Zustandsmaschine gebaut, mit getrennten Funktionen für Eingabevalidierung, Versuchszählung und Ergebnis.',
          result: 'Ein regelbasiertes, leicht erweiterbares Spiellogik-Grundgerüst — ein sauberer Ablauf, der später auf Unity übertragbar wäre.',
        },
      },
      'arena-battle': {
        name: 'Console Arena Battle',
        description: 'Ein Arena-Kampfspiel mit Charakter- und Kampfmechaniken, entwickelt mit C++ für die Konsole.',
        caseStudy: {
          problem: 'Charakterwerte (Leben, Angriff, Verteidigung) und einen rundenbasierten Kampfablauf wartbar verwalten.',
          approach: 'Charaktere und Kampflogik wurden als eigene Structs/Funktionen modelliert, mit Statusaktualisierung pro Runde.',
          result: 'Ein erweiterbares rundenbasiertes Kampfsystem — praktische Erfahrung im Game-Systems-Design.',
        },
      },
      fitstep: {
        name: 'FitStep Mobile',
        description: 'Ein gamifizierter Android-Fitness-Tracker mit Echtzeit-Kalorienverfolgung und Belohnungssystem.',
        caseStudy: {
          problem: 'Eine gamifizierte mobile Erfahrung schaffen, die Nutzer zu regelmäßiger Aktivität motiviert.',
          approach: 'Schnelles Prototyping mit MIT App Inventor, Verknüpfung von Schritt-/Kalorienverfolgung mit einem Belohnungsmechanismus.',
          result: 'Ein funktionierender mobiler End-to-End-Prototyp — praktische Erfahrung mit mobiler UX und Motivationsschleifen.',
        },
      },
    },
    stats: { stars: 'Sterne', commits: 'Commits' },
  },
}
