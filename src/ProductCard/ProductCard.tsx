import './ProductCard.css';

interface ProductCardProps {
    title: string;
    origin: string;
    price: number;
    currency: string;
    imageUrl: string;
}

export const ProductCard = ({
    title,
    origin,
    price,
    currency,
    imageUrl,
}: ProductCardProps) => {
    const formatter = new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: currency,
    });

    return (
        <div className="product-card">
            <img
                src={imageUrl}
                alt={title}
                className="product-card__image"
            />
            <div>
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__price">
                    {formatter.format(price / 100)}
                </p>
                <p className="product-card__origin">{origin}</p>
            </div>
        </div>
    );
};
