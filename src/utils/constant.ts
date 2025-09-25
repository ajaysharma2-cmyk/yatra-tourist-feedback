import one from '../assets/emoji/one.png'
import two from '../assets/emoji/two.png'
import three from '../assets/emoji/three.png'
import four from '../assets/emoji/four.png'
import five from '../assets/emoji/five.png'
import Swal from 'sweetalert2'
import { time } from 'console'

export const faces = [
  { value: 1, label: "Very Bad", emoji: one, color: "#e53935" },
  { value: 2, label: "Bad", emoji: two, color: "#fb8c00" },
  { value: 3, label: "Okay", emoji: three, color: "#fbc02d" },
  { value: 4, label: "Good", emoji: four, color: "#43a047" },
  { value: 5, label: "Excellent", emoji: five, color: "#1e88e5" },
];

export const options: string[] = [
  "Lack of Hygiene & cleanliness",
  "Lack of Safety and Security measures",
  "Overcrowding",
  "Attractions & activities did not meet expectations (Leisure activities, Museum, Shopping, Food etc.)",
  "Lack of Accessibility & wayfinding (local travel, signages, traffic, universal accessibility)",
  "Low service standards (at Eateries, Drivers, Guides etc.)",
  // "Other (100 words)"
];

// Format name with title (Mr., Mrs., Miss) and proper capitalization
export function formatNameWithTitle(name: string): string {
  if (!name) return '';
  const match = name.match(/^(mr|mrs|miss)\s*([a-z]+)/i);
  if (match) {
    const title = match[1].toLowerCase();
    const rest = name.slice(match[0].length).trim();
    let formattedTitle = '';
    if (title === 'mr') formattedTitle = 'Mr.';
    else if (title === 'mrs') formattedTitle = 'Mrs.';
    else if (title === 'miss') formattedTitle = 'Miss';
    // Capitalize first letter of rest of name
    const formattedRest = rest.replace(/\b\w/g, c => c.toUpperCase());
    return `${formattedTitle} ${match[2]}`;
  }
  // If no title, just capitalize each word
  return name.replace(/\b\w/g, c => c.toUpperCase());
}

export function Toast(title?: string, type?: 'success' | 'error' | 'warning' | 'info' | 'question', duration:number = 3000) {
  Swal.fire({
    // title: 'Thank you for your feedback!',
    text: title,
    icon: type,
    timer: duration,
    confirmButtonText: 'Close',
  });
}
