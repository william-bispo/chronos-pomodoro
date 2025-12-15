import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Hello World!!!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Teste123</p>
    </div>
  );
}
