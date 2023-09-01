import { createRoot } from 'react-dom/client';

import './index.css';

import Header from './modules/Header';
import Main from './modules/Main';

function App() {

    //const [status, setStatus] = useState('');

    return (
        <div className="dark:bg-gray-700 h-fit min-h-screen  w-screen min-w-fit font-serif">

            <Header/>
            
            <Main/>
            
        </div>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);