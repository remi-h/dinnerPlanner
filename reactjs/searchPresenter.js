function SearchPresenter(props) {
    const model = props.model;
    const [promise, setPromise] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchType, setSearchType] = React.useState('');

    React.useEffect(() => {
        setPromise(DishSource.searchDishes({}))
    }, [])

    React.useEffect(() => {
        setData(null);
        setError(null);
        let cancelled = false;
        promise && promise.then(dt => {
            if (!cancelled) {
                setData(dt);
            }
        }).catch(err => {
            if (!cancelled)
                setError(err);
        })
        return function () {
            cancelled = true;
        };
    }, [promise])

    function performSearch() {
        setPromise(DishSource.searchDishes({ query: searchQuery, type: searchType }))
    }

    return (
        <div>
            <SearchFormView options={["starter", "main course", "dessert"]}
                onText={setSearchQuery}
                onDishType={setSearchType}
                onSearch={performSearch}
            />
            {
                promiseNoData(promise, data, error) ||
                <SearchResultsView searchResults={data}
                    dishChosen={model.setCurrentDish.bind(model)}
                />
            }
        </div>
    )
}