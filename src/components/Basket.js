import React from 'react';

export default function Basket(props) {
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <aside className="block col-1">
      <h2>Корзина</h2>
      <div>
        {cartItems.length === 0 && <div>Корзина пуста</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)} руб.
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="row">
              <div className="col-2">
                <strong>Итого: </strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)} руб.</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Переход на страницу оплаты')}>
                К оплате
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}