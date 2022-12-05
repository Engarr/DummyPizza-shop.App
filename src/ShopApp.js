import React,{useState} from 'react';
import Header from './components/layout/Header';
import MealsMenu from './components/Meals/MealsMenu';
import Cart from './components/Cart/Cart';


function ShopApp() {
	const [cartShow, setCartShow]=useState(false)
	const showCartHandler = ()=>{
		setCartShow(true)
	}
	const hideCartHandler = ()=>{
		setCartShow(false)
	}


	return (
		<React.Fragment>
			{cartShow && <Cart onHide={hideCartHandler}/>}
			<Header onShow={showCartHandler}/>
			<MealsMenu />
		</React.Fragment>
	);
}

export default ShopApp;
