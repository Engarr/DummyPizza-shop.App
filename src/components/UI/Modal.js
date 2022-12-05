import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Background = (props) => {
	return <div className={classes.background}></div>;
};
const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div>{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Background />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</React.Fragment>
	);
};
export default Modal;
