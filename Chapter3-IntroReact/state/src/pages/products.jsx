import { useState } from "react"

export default function Products(props) {

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

    const [prods, SetProds] = useState(props.productlist);

    return (
        <>

            {/* <h2>test</h2>
            {
                ['one', 'two', 'three', 'two'].map((v, i) => {
                    return (
                        <p key={i}>{v}</p>
                    )
                })}

            <hr />
            {
                [{ id: 1, id: "one value" },{ id: 2, val: "two value" }].map(v => {
                    return (
                        <p key={v.id}>{v.id}</p>
                    )
                })
            } */}


            <h1>Products</h1>
            {
                prods &&
                <div style={mainBox}>
                    {prods.map(p => {
                        return (
                            <div style={subBox} key={p.id}>
                                Name: {p.name}<br />
                                Quantity left: {p.quantity}<br />
                                Price: {p.price}
                                <hr />
                                {
                                    p.quantity > 0 &&
                                    <button onClick={() => props.addMeToCart(p.id)}>Add to cart</button>
                                }
                            </div>

                        )
                    })}
                </div>

            }


        </>


    )
};