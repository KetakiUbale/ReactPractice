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

    updateHandler= () => {
        this.setState ( {
            vehicles: [
                { VehicleType: "Car", Name: "Jaguar XF", Manufacturer: "Jaguar", FuelType: "Petrol" },
                { VehicleType: "Car", Name: "CONTINENTAL GT MULLINER", Manufacturer: "Bentley", FuelType: "Electric" },
                { VehicleType: "Car", Name: "911 Carrera S", Manufacturer: "Porche", FuelType: "Petrol" },
                { VehicleType: "Car", Name: "DBS Superleggera", Manufacturer: "Aston Martin", FuelType: "Petrol" },
            ]
        });

    }

   render() {

    return (
        <div className="App container-fluid">
        <div className="row">
            <h1>
                List Of Vehicles 
            </h1>
            <div className="buttonDiv">
            <button className="btn btn-primary btn-lg buttonUpdate" onClick={this.updateHandler}>Update List</button>
            </div>
            </div>
            <div className="row"> 
           <Vehicle VehicleType={this.state.vehicles[0].VehicleType} Name={this.state.vehicles[0].Name} Manufacturer={this.state.vehicles[0].Manufacturer} FuelType={this.state.vehicles[0].FuelType}></Vehicle>

            <Vehicle VehicleType={this.state.vehicles[1].VehicleType} Name={this.state.vehicles[1].Name} Manufacturer={this.state.vehicles[1].Manufacturer} FuelType={this.state.vehicles[1].FuelType}></Vehicle>

            <Vehicle VehicleType={this.state.vehicles[2].VehicleType} Name={this.state.vehicles[2].Name} Manufacturer={this.state.vehicles[2].Manufacturer} FuelType={this.state.vehicles[2].FuelType}></Vehicle>

            <Vehicle VehicleType={this.state.vehicles[3].VehicleType} Name={this.state.vehicles[3].Name} Manufacturer={this.state.vehicles[3].Manufacturer} FuelType={this.state.vehicles[3].FuelType}></Vehicle>
        </div>
        </div>
 
        
    );
   };
}

export default App;