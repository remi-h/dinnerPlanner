function promiseNoData(promise, data, error) {
    if (!promise && !data && !error) {
        return (<span>no data</span>)
    }
    else if (promise && !data && !error) {
        return (<img src="http://www.csc.kth.se/~cristi/loading.gif" />)
    }
    else if (promise && !data && error) {
        return (<span> some error </span>)
    }
    else if (promise && data && !error){
        return false
    }
}

// memo
// "!promise && !data && !error"
// "promise === null && data === undefined && error === undefined"