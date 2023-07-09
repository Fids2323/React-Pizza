import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
	return (
		<h1 className={styles.root}>
			<span>404</span>
			<br />
			Not found
			<p className={styles.descriptions}>К сожалению, данная страница не существует.</p>
		</h1>
	);
};

export default NotFoundBlock;
