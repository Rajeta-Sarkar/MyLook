import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Upload from '../pages/Upload';
import MyPurchase from '../pages/MyPurchase';
import Shoe from '../pages/Shoe';
import Outfit from '../pages/Outfit'
import Gallery from '../pages/Gallery';

function Main() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/create/shoe" element={<Shoe />} />
                <Route path="/create/outfit" element={<Outfit />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/mypurchase" element={<MyPurchase />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
