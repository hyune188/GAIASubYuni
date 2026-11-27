function ProductCard({
    id,
    name = "Unknown Product",
    price = 0,
    image = "",
    inOnSale = false,
}) {
    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{price}</p>
            <p>{image}</p>
            <p>{inOnSale}</p>
        </div>
    )
}
export default ProductCard