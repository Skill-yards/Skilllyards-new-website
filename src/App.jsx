import { Button } from '@/components/ui/button';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen justify-center">
      <h1 className="text-2xl font-bold">Shadcn UI Button Demo</h1>
      <Button>Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Footer />
    </div>
  );
}

export default App;
