import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/Common.scss';
import List from './diary/List';
import Write from './diary/Write';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/write" element={<Write />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;