function SidebarView(props) {
    // sort
    const types = ["starter", "main course", "dessert"];
    function dishType(dish) {
        if (dish.dishTypes) {
            const tp = dish.dishTypes.filter(value => types.includes(value));
            if (tp.length)
                return tp[0];
        }
        return "";
    }
    function compareDishes(a, b) {
        let ai = types.indexOf(dishType(a));
        let bi = types.indexOf(dishType(b));
        if (ai < bi) { return -1 }
        else if (ai > bi) { return 1 }
        else if (ai == bi) { return 0 }
    }

    function calcTotal(dishes){
        return dishes.reduce((total, dish) => {
            return total + dish.pricePerServing * props.guests;
        }, 0)
    }
    return (
        <div className="sidebar-c">
            <h1>DINNER PLANNER</h1>
            <span>GUEST(S)</span>
            <button disabled={(props.guests < 2)} onClick={e => props.setGuests(props.guests - 1)}> - </button>
            {props.guests}
            <button onClick={e => props.setGuests(props.guests + 1)}> + </button>
            <table className="sidebarTable">
                <tbody>
                    <tr>
                        <th>remove</th>
                        <th>menu</th>
                        <th>category</th>
                        <th>price</th>
                    </tr>
                    {[...props.dishes].sort(compareDishes).map(opt =>
                        <tr key={opt.id} >
                            <td> <button onClick={() => props.removeDish(opt)} >
                                x
                            </button> </td>
                            <td> < a href="#details" onClick={e => { e.preventDefault(); props.dishChoice(opt.id); window.location.hash = "#details";}} > {opt.title} </a> </td>
                            <td> {dishType(opt) || opt.dishTypes[0]}</td>
                            <td> {(opt.pricePerServing * props.guests).toFixed(2)}</td>
                        </tr>
                    )}
                    <tr>
                        <td>  </td>
                        <td>  </td>
                        <td> TOTAL: </td>
                        <td> {(calcTotal(props.dishes)).toFixed(2)} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}