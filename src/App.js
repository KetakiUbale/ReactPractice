import React from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

class App extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           vehicles: [
               { VehicleType: "Car", Name: "Altroz", Manufacturer: "Tata", FuelType: "Petrol" },
               { VehicleType: "Car", Name: "Nexon", Manufacturer: "Tata", FuelType: "Electric" },
               { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType: "Diesel" },
               { VehicleType: "Car", Name: "Baleno", Manufacturer: "Maruti Suzuki", FuelType: "Petrol" },
           ]
       };
   }

   render() {

    return (
        <div className="App container-fluid">
            <h1>
                List Of Vehicles
            </h1>
           
            <Vehicle VehicleType={this.state.vehicles[0].VehicleType} Name={this.state.vehicles[0].Name} Manufacturer={this.state.vehicles[0].Manufacturer} FuelType={this.state.vehicles[0].FuelType}></Vehicle>

            <Vehicle VehicleType={this.state.vehicles[1].VehicleType} Name={this.state.vehicles[1].Name} Manufacturer={this.state.vehicles[1].Manufacturer} FuelType={this.state.vehicles[1].FuelType}></Vehicle>

            <Vehicle VehicleType={this.state.vehicles[2].VehicleType} Name={this.state.vehicles[2].Name} Manufacturer={this.state.vehicles[2].Manufacturer} FuelType={this.state.vehicles[2].FuelType}></Vehicle>

            <Vehicle VehicleType={this.state.vehicles[3].VehicleType} Name={this.state.vehicles[3].Name} Manufacturer={this.state.vehicles[3].Manufacturer} FuelType={this.state.vehicles[3].FuelType}></Vehicle>
        </div>
 
        
    );
   };
}

export default App;