function SummaryPresenter(props) {  // assume a model prop
    return <SummaryView persons={props.model.numberOfGuests} ingredients={getIngredients(props.model.dishes)} />
}