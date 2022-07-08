function DetailsPresenter(props) {
    const model = props.model;
    const dishes = useModelProperty(model, 'dishes')
    const currentDish = useModelProperty(model, 'currentDish')
    const currentDishDetails = useModelProperty(model, 'currentDishDetails')
    const currentDishError = useModelProperty(model, 'currentDishError')
    const numberOfGuests = useModelProperty(model, 'numberOfGuests')

    return (<>{
        promiseNoData(currentDish, currentDishDetails, currentDishError) ||
        <DetailsView
            isDishInMenu={dishes.find(d => d.id === currentDish)}
            people={numberOfGuests}
            dish={currentDishDetails}
            dishAdded={() => model.addToMenu(currentDishDetails)}
        />
    }</>)
}