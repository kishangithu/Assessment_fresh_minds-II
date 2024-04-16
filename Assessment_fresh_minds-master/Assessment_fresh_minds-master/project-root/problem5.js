
 export function countCarsOlderThan2000(inventory, year = 2000) {
    const olderCars = inventory.filter(car => car.car_year < 2000);
    return olderCars.length;
}

