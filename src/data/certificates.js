// Kaynak: LinkedIn > Lisanslar ve Sertifikalar (en yeniden eskiye).
// Ad ve tarih metinleri translations.js > about.certificates içinde id ile eşleşir.
const udemy = (id) => `https://www.udemy.com/certificate/${id}/`

export const certificates = [
  { id: 'kotlin', issuer: 'Udemy', hours: 80, url: udemy('UC-f14edb77-a89d-4de7-bc1a-e79272895760') },
  { id: 'chatgpt', issuer: 'BTK Akademi' },
  { id: 'claude', issuer: 'BTK Akademi' },
  { id: 'unreal', issuer: 'Udemy', hours: 19.5, url: udemy('UC-7dab814f-7c70-4ae8-a540-83a160196259') },
  { id: 'frontend', issuer: 'Udemy', hours: 50, url: udemy('UC-1c0125e7-86d0-43b1-b761-0b6a5c7d6adc') },
]
