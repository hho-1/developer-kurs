'use-strict'

class Vehicle {
    brand = 'marka'
    model = 'model'
    year = 1990
    used = false
    engineIsRunning = false
    runEngine(){
        this.engineIsRunning = false
        return this.engineIsRunning
    }
}
class Vehicle2 {
    
    constructor(brand, model, year = 1990){
        this.brand = brand
        this.model = model
        this.year = year
    }
    runEngine(){
        this.engineIsRunning = true
        return this.engineIsRunning
    }
}

const vehicle1 = new Vehicle()
vehicle1.brand = 'Tesla'
console.log(vehicle1);

const vehicle2 = new Vehicle2()

console.log(vehicle2);

const vehicle3 = new Vehicle2('Toyota', 'Corolla')
console.log(vehicle3);