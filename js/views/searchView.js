function SearchFormView(props) {
    const { options, onSearch, onDishType, onText } = props;

    return (
        <div className="searchbar" >
            <input placeholder="search..." onChange={e => onText(e.target.value)} />
            <select onChange={e => onDishType(e.target.value)} >
                {options && options.map(label =>
                    <option key={label}>
                        {label}
                    </option>
                )}
            </select>
            <button onClick={e => onSearch()}>
                search!
            </button>
            <button onClick={e => window.location.hash="#summary"}>
                summary
            </button>
        </div>
    )
}

function SearchResultsView(props) {
    const {searchResults, dishChosen, selectedDishes} = props;
    const dishAlreadySelected = (dish) => {
        return selectedDishes?.some(d => d.id === dish.id)
    }
    return (
        <div className="searchresult">
            {searchResults && searchResults.map((result) => {
                return <span className={`searchResult ${dishAlreadySelected(result) ? 'selected' : ''}`} onClick={() => {
                    console.log("dish selected: " + result.id)
                    dishChosen(result.id);
                    window.location.hash="#details";
                }} key={result.id}>
                    <div>
                    <img src={"https://spoonacular.com/recipeImages/" + result.image}/>
                    <p>{result.title}</p>
                    </div>
                </span>
            })}
        </div>
    )
}