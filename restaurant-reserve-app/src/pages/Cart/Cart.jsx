import './Cart.css'


const Cart = () => {
    return (
        <div className="cart">
            <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>Sushi Makimono</td>
                            <td>3</td>
                            <td>$3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="total-price col-md-6">
                    <p >TOTAL PRICE</p>
                </div>
                <div className="total-price col-md-6 ps-5">
                    <p>$30</p>
                </div>
            </div>

        </div>

    )
}
export default Cart
