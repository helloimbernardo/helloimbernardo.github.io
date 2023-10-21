import './wallpapers.css';
import Terminal from './components/Terminal';


function selectWallpaper() {
  let names = [
    "backpack",
    "louvre",
    "malaga",
    "parismetro1",
    "parismetro2",
    "vienna",
  ];
  return `bg-${names[Math.floor(Math.random() * names.length)]}`;
}

export default function Home() {
  return (
    <main className={`overflow-hidden min-h-screen min-w-full grid place-items-center bg ${selectWallpaper()}`}>
      <Terminal />
    </main>
  )
}
