function defaultRoute() {
    const routes = ["#search", "#details"];
    if (!routes.find(x => x === window.location.hash)) window.location.hash = "#search";
}
defaultRoute();
window.addEventListener("hashchange", defaultRoute);

function App(props){
    return (
        <div className="flexParent">
            <div className="sidebar">
                <SidebarPresenter model={props.model} />
                <SummaryPresenter model={props.model} />
            </div>
            <div className="mainContent">
                <Show hash="#search">
                    <SearchPresenter model={props.model} />
                </Show>
                <Show hash="#details">
                    <DetailsPresenter model={props.model} />
                </Show>
            </div>
        </div>
    );
}