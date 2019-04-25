function Results({list, onList}){
    return <ul>
        {list.map(({ id, title, image, price }) =>
            <li key={id} onClick={() => onList(id)}>
                <h2>{title}</h2>
                <img src={image} />
                <span>{price}</span>
            </li>)}
    </ul>
}