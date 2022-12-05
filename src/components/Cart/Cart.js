import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = (props) => {
	const cartItem = (
		<ul className={classes.cartItem}>
			{[{ id: 'c1', name: 'Margarita', amount: 2, price: 17 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal>
			{cartItem}
			<div className={classes.cartAmount}>
				<span className={classes.title}>Total Amount: </span>
				<span className={classes.price}> 19 PLN</span>
			</div>
			<div className={classes.cartBtns}>
				<button className={classes.closeBtn} onClick={props.onHide}>
					Close
				</button>
				<button className={classes.orderBtn}>Order</button>
			</div>
		</Modal>
	);
};
export default Cart;
