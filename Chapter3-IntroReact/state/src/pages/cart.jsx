export default function Cart({ cartitemlist,removeMeToCart }) {

    const mainBox = {
        display: "flex",
        flexWrap: "wrap"
    }

    const subBox = {
        width: "200px",
        border: "1px solid black",
        padding: "20px",
        margin: "20px"
    }

    return (
        <>
            <h1>Cart</h1>
            {
                cartitemlist &&
                <div style={mainBox}>
                    {cartitemlist.map(p => {
                        return (
                            <div style={subBox} key={p.id}>
                                Name: {p.name}<br />
                                Quantity Added: {p.quantity}<br />
                                Price: {p.price}
                                <hr />
                                {
                                    p.quantity > 0 &&
                                    <button onClick={() => removeMeToCart(p.id)}>Remove from cart</button>
                                }
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
};