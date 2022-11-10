import React from "react";

function Card(props) {
	return (
		<div className="col-sm-4">
			<div className="thumb-wrapper">
				<h6>suv</h6>
				<h4>
					<strong>{props.car.modelName}</strong> {props.car.modelType}
				</h4>
				<div className="img-box">
					<img
						src={props.car.imageUrl}
						className="img-fluid"
						alt=""
					/>
				</div>
				<button className="btn text-primary">Learn &#62;</button>
				<button className="btn text-primary">shop &#62;</button>
			</div>
		</div>
	);
}

export default Card;
