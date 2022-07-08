function SidebarPresenter(props) {   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests}
        dishes = {props.model.dishes}
        dishChoice = {e => props.model.setCurrentDish(e)}
        removeDish = {e => props.model.removeFromMenu(e)}
        setGuests={(guests)=>props.model.setNumberOfGuests(guests)}
    />
}