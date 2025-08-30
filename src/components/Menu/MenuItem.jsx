const MenuItem = ({ item, onClick, className }) => {
	return (
		<div className={`menu-item ${className}`} onClick={onClick}>
			{item.toUpperCase()}
		</div>
	)
}

export default MenuItem