class DinnerModel {
    constructor(guests = 2, dishes = [], currentDish = null) {
        this.observers = [];
        this.setNumberOfGuests(guests);
        this.setCurrentDish(currentDish);
        this.setDishes(dishes);
        if (Array.isArray(dishes))
            this.dishes = dishes;
    }
    setNumberOfGuests(x) {
        if (x <= 0 || isNaN(x) || x % 1 !== 0) {
            throw new Error("Invalid number");
        }
        else if (x !== this.numberOfGuests) {
            this.numberOfGuests = x;
            this.notifyObservers()
        }
    }
    setCurrentDish(id) {
        if (id === this.currentDish) return;
        this.currentDish = id;
        this.currentDishDetails = null;
        this.currentDishError = null;
        this.notifyObservers();
        if (this.currentDish) {
            DishSource.getDishDetails(this.currentDish).then(data => {
                if (this.currentDish === id) {
                    this.currentDishDetails = data;
                    this.notifyObservers()
                }
            }).catch(err => {
                if (this.currentDish === id) {
                    this.currentDishError = err;
                    this.notifyObservers()
                }
            })
        }
    }

    setDishes(dishes) {
        this.dishes = [...dishes];
        this.notifyObservers()
    }
    addToMenu(dish) {
        if (!this.dishes.includes(dish)) {
            this.dishes = [...this.dishes, dish]
            this.notifyObservers()
        }
    }
    removeFromMenu(dish) {
        console.log("Dish removed: " + dish.id)
        if (this.dishes.some(d => d.id === dish.id)) {
            this.dishes = this.dishes.filter(x => x.id !== dish.id)
            this.notifyObservers()
        }
    }

    addObserver(cb) {
        this.observers = [...this.observers, cb];
    }

    removeObserver(cb) {
        this.observers = this.observers.filter(x => x !== cb);
    }

    notifyObservers() {
        this.observers.forEach(cb => {
            setTimeout(() => {
                try {
                    cb();
                } catch (error) {
                    console.log(error);
                }
            }, 0)
        })
    }
}

function getIngredients(dishArr) {
    const result = {};
    dishArr.forEach(d => d.extendedIngredients.forEach(i => {
        if (!result[i.id])
            result[i.id] = { ...i };
        else {
            result[i.id].amount += i.amount;
        }
    }))
    return Object.values(result);
}



// memo - slide p44