import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
	const price =` ${props.price.toFixed(2)}  PLN`
	return (
		<li className={classes.itemBody}>
			<div className={classes.nameBox}>
				<i className='fa-solid fa-pizza-slice'></i>

				<div>
					<h3 className={classes.name}>{props.name}</h3>
					<p className={classes.composition}>{props.composition}</p>
				<p> {price}</p>
				</div>
			</div>
			<div >
				<MealItemForm/>
			</div>
		</li>
	);
};

export default MealItem;
