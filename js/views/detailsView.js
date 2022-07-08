function DetailsView(props) {
    return (
        <div className="detailsView">
            <h1>{props.dish.title}</h1>
            <img className="detailsimg" src={props.dish.image} />
            <p>PEOPLE: {props.people} | PRICE: ￥{props.dish.pricePerServing}/person</p>
            <p> &nbsp; → &nbsp; TOTAL PRICE: ￥{(props.dish.pricePerServing * props.people).toFixed(2)}</p>
            <div className="buttons">
                <button disabled={props.isDishInMenu} onClick={() => { props.dishAdded(); window.location.hash = "#search"; }}> ADD to MENU! </button>
                <button onClick={() => window.location.hash = "#search"} >CANCEL</button>
            </div>
            <ul>
                {props.dish.extendedIngredients.map(opt =>
                    <li key={opt.name}> {opt.name} : {(opt.amount).toFixed(2)} {opt.unit} </li>
                )}
            </ul>
            <ol>
                {props.dish.analyzedInstructions[0].steps.map(opt =>
                    <li key={opt.step}> {opt.step} </li>
                )}
            </ol>
            <a href={props.dish.sourceUrl}>MORE INFORMATION↗︎</a>
        </div>
    )
}