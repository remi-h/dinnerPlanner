function SidebarPresenter(props) {
    const model = props.model
    const guests = useModelProperty(model, 'numberOfGuests');
    const dishArray = useModelProperty(model, 'dishes');
    const {setNumberOfGuests, setCurrentDish, removeFromMenu} = model;

    return <SidebarView
        guests={guests}
        setGuests={setNumberOfGuests.bind(model)}
        dishes = {dishArray}
        dishChoice = {setCurrentDish.bind(model)}
        removeDish = {removeFromMenu.bind(model)}
    />
}