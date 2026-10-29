// Kaynak: https://omer-faruk-oktay.itch.io ve https://github.com/omerfarukoktay112-max
const GITHUB = 'https://github.com/omerfarukoktay112-max'
const ITCH = 'https://omer-faruk-oktay.itch.io'

// Öne çıkan projeler: kategoriye göre ağacın sol (oyunlar) ve sağ (uygulamalar) dalına yerleşir.
// Metinler (ad, açıklama, vaka çalışması) src/i18n/translations.js içinde id ile eşleşir.
export const projects = [
  {
    id: 'monster-market',
    category: 'game',
    tech: 'Godot',
    platform: 'Windows',
    image: 'covers/halloween-the-monster-market.webp',
    links: [{ type: 'itch', url: `${ITCH}/halloween-the-monster-market` }],
  },
  {
    id: 'win-garden',
    category: 'game',
    tech: 'Godot',
    platform: 'Windows',
    image: 'covers/win-garden.webp',
    links: [{ type: 'itch', url: `${ITCH}/win-garden` }],
  },
  {
    id: 'cafe-tycoon',
    category: 'game',
    tech: 'Godot',
    platform: 'Windows',
    image: 'covers/cafe-tycoon-clicker.webp',
    links: [{ type: 'itch', url: `${ITCH}/cafe-tycoon-clicker` }],
  },
  {
    id: 'waifu-blast',
    category: 'game',
    tech: 'Godot',
    platform: 'Windows',
    image: 'covers/waifu-blast.webp',
    links: [{ type: 'itch', url: `${ITCH}/waifu-blast` }],
  },
  {
    id: 'keykeeper',
    category: 'app',
    tech: 'C# · .NET MAUI',
    platform: 'Android',
    links: [{ type: 'github', url: `${GITHUB}/KeyKeeper` }],
  },
  {
    id: 'gearfit',
    category: 'app',
    tech: 'C# · .NET MAUI',
    platform: 'Windows · Android',
    links: [{ type: 'github', url: `${GITHUB}/GearFit` }],
  },
  {
    id: 'paint-for-mac',
    category: 'app',
    tech: 'Swift · SwiftUI',
    platform: 'macOS',
    links: [{ type: 'github', url: `${GITHUB}/paint-for-mac` }],
  },
]

// Erken dönem okul/öğrenme projeleri: küçük bir liste olarak gösterilir.
export const earlyWorks = [
  { name: 'FitStep Mobile', tech: 'App Inventor', url: `${GITHUB}/MIT-App-Inventor-FitStep` },
  { name: 'Console Arena Battle', tech: 'C++', url: `${GITHUB}/C-Console-Arena-Battle` },
  { name: 'Library Management System', tech: 'C++', url: `${GITHUB}/C-Library-Management-System` },
  { name: 'Stock Tracking System', tech: 'C#', url: `${GITHUB}/C-Stock-Tracking-System` },
  { name: 'Lotto Guessing Game', tech: 'C#', url: `${GITHUB}/C-Lotto-guessing-game` },
  { name: 'WinForms Calculator', tech: 'C# WinForms', url: `${GITHUB}/C-Calculator---FORM` },
]
