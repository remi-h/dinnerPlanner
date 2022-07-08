function SummaryView(props) {
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div className="summaryView">
            Summary for <span title="nr. guests">{props.persons}</span> guests:
            <table className="sidebarTable">
                <tbody>
                    <tr>
                        <th>Ingredients</th>
                        <th>Aisle</th>
                        <th>Quantity</th>
                    </tr>
                    {props.ingredients.sort(compareIngredients).map(opt =>
                        <tr key={opt.name}>
                            <td> {opt.name} </td>
                            <td> {opt.aisle} </td>
                            <td> {(opt.amount * props.persons).toFixed(2) + " " + opt.unit} </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={e => window.location.hash = "#search"}>
                Back to search
            </button>
        </div>
    );
}

function compareIngredients(a, b) {
    if (a.aisle < b.aisle)
        return -1;
    if (a.aisle > b.aisle)
        return 1;
    if (a.name < b.name)
        return -1
    else if (a.name > b.name)
        return 1

    if (a.name === b.name)
        console.error('error')
}