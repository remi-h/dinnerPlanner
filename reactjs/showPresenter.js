function Show(props){
    const {children, hash} = props;
    const [hashState, setHashState] = React.useState(window.location.hash);

    function setHash() {
        setHashState(window.location.hash)
    }

    React.useEffect(() => {
        window.addEventListener("hashchange", setHash.bind());
        return window.removeEventListener("hashchange", setHash);
    }, [])

    return (
        <div className={hashState !== hash ? 'hidden' : ''}>
            { children }
        </div>
    )
}