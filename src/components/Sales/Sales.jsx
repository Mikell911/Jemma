import ProductCard from "../ProductCard/ProductCard";

const SalesGrid = ({ title, products, reverse = true , description, isSale }) => {
    const filteredProducts = products.filter(product => product.isSale === isSale);
    const mainProduct = filteredProducts.find(product => product.mainImg === true);
    const otherProducts = filteredProducts.filter(product => product.mainImg !== true);

    if (!Array.isArray(filteredProducts)) {
        console.error("Expected 'products' to be an array.");
        return null;
    }
    return (
        <>
            <h2 className={'title-h2 text-Dark'}>
                {title}
            </h2>

            <div className={`relative mt-[60px] flex flex-row gap-5 ${reverse ? '' : 'flex-row-reverse'}`}>
                {mainProduct && (
                    <ProductCard product={mainProduct} maxWidth="650px" maxHeight="790px" />
                )}

                <div className={'flex gap-5'}>
                    {otherProducts.slice(0, 2).map((product, index) => (
                        <ProductCard product={product} key={index} maxWidth="315px" maxHeight="400px" />
                    ))}
                </div>

                <div className={`absolute ${reverse ? 'right-0' : 'left-0'} text-[16px] leading-[21px] text-BrownDark bottom-[37px] max-w-[300px]`}>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SalesGrid;
