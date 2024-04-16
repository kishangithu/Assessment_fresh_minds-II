export function getAllCarYears(inventory) {
    const carYears = inventory.map(car => car.car_year);
    return carYears;
}