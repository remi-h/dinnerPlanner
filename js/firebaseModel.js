const REF = "dinnerModel" + 64;
function persistModel(model) {
    let loadingFromFirebase = false;
    model.addObserver(function () {
        if (loadingFromFirebase)
            return;
        firebase.database().ref(REF).set({
            guests: model.numberOfGuests,
            dishes: model.dishes,
            currentDish: model.currentDish
        })
    });
    firebase.database().ref(REF).on("value", function (data) {
        loadingFromFirebase = true;
        if (data.val()) {
            model.setNumberOfGuests(data.val().guests || 2);
            model.setDishes(data.val().dishes || []);
            model.setCurrentDish(data.val().currentDish || null);
        }
        loadingFromFirebase = false;
    });
}
