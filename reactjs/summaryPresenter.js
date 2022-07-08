function SummaryPresenter(props) {
    const model = props.model;
    const guests = useModelProperty(model, 'numberOfGuests');
    const dishArray = useModelProperty(model, 'dishes');
    return <SummaryView
        persons={guests}
        ingredients={getIngredients(dishArray)}
    />
}