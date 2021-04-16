import React, { useState } from "react";
// import PropTypes from "prop-types";

const Semaforo = () => {
	const [color, setColor] = useState(null);

	const userColor = color => {
		setColor(color);
	};

	return (
		<div>
			<div id="semaforo" />
			<div id="container">
				<div
					className={
						color == "rojo" ? "luz roja seleccionado" : "luz roja"
					}
					onClick={() => userColor("rojo")}
				/>
				<div
					className={
						color == "amarilla"
							? "luz amarilla seleccionado"
							: "luz amarilla"
					}
					onClick={() => userColor("amarilla")}
				/>
				<div
					className={
						color == "verde"
							? "luz verde seleccionado"
							: "luz verde"
					}
					onClick={() => userColor("verde")}
				/>
			</div>
		</div>
	);
};

export default Semaforo;
