import Card from '../UI/Card';
import MealItem from './Meal/MealItem';
const DUMMY_MENU = [
	{
		id: 'p1',
		name: 'Margherita',
		composition: 'Ser, sos pomidorowy',
		price: 17,
	},
	{
		id: 'p2',
		name: 'Tropicana',
		composition: 'Szynka, Brzoskwinia, Ananas, Ser',
		price: 18.99,
	},
	{
		id: 'p3',
		name: 'Roma',
		composition: 'Ser, Szynka, Boczek, Pieczarki, Cebula',
		price: 20.99,
	},
];
const MealsMenu = () => {
	const mealList = DUMMY_MENU.map((meal) => (
		<MealItem
			key={meal.id}
			name={meal.name}
			composition={meal.composition}
			price={meal.price}
		/>
	));
	return (
		<section>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	);
};
export default MealsMenu;
