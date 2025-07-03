import './App.css';
import { ProductCard } from './ProductCard/ProductCard';

function App() {
    return (
        <div className="container">
            <ProductCard
                title="Компьютерная мышь"
                origin="Россия"
                price={256000}
                currency="RUB"
                imageUrl="https://img2.clipart-library.com/28/computer-mouse-clipart-png/computer-mouse-clipart-png-20.png"
            />
            <ProductCard
                title="Компьютерная мышь"
                origin="Германия"
                price={2762}
                currency="EUR"
                imageUrl="https://img2.clipart-library.com/28/computer-mouse-clipart-png/computer-mouse-clipart-png-20.png"
            />
            <ProductCard
                title="Компьютерная мышь"
                origin="США"
                price={3255}
                currency="USD"
                imageUrl="https://img2.clipart-library.com/28/computer-mouse-clipart-png/computer-mouse-clipart-png-20.png"
            />
        </div>
    );
}

export default App;
