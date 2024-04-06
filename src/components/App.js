import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/Common.scss';
import List from './diary/List';
import Write from './diary/Write';
import Content from './diary/Content'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/write" element={<Write />} />
                    <Route path='/Content/:id' element={<Content />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;