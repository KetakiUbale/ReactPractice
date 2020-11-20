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
           ],
           Count:4
       };
   }

     render() {
    const updateHandler= (VehicleType) => {
        this.setState ( {
            vehicles: [
                { VehicleType: VehicleType, Name: "Jaguar XF", Manufacturer: "Jaguar", FuelType: "Petrol" },
                { VehicleType: VehicleType, Name: "CONTINENTAL GT MULLINER", Manufacturer: "Bentley", FuelType: "Electric" },
                { VehicleType: VehicleType, Name: "911 Carrera S", Manufacturer: "Porche", FuelType: "Petrol" },
                { VehicleType: VehicleType, Name: "DBS Superleggera", Manufacturer: "Aston Martin", FuelType: "Petrol" },
            ],
            Count:4
        });

    }

const nameChangeHandler=(event)=>{
    this.setState({
        vehicles: [
            { VehicleType: "Car", Name: event.target.value, Manufacturer: "Tata", FuelType: "Petrol" },
               { VehicleType: "Car", Name: "Nexon", Manufacturer: "Tata", FuelType: "Electric" },
               { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType: "Diesel" },
               { VehicleType: "Car", Name: "Baleno", Manufacturer: "Maruti Suzuki", FuelType: "Petrol" },
        ],

    });
}


   return (
        <div className="App container-fluid">
        <div className="row">
        <div className="col-lg-6 ">
            <h1>List Of Vehicles | Total Vehicles:{this.state.Count} </h1>
            </div>  
            <div className="col-lg-6 buttonDiv">
            <button className="btn btn-primary btn-lg buttonUpdate" onClick={updateHandler.bind(this,"Sports Car")}>Update List</button>
            </div>
            </div>
            <div className="row"> 
           <Vehicle 
           VehicleType={this.state.vehicles[0].VehicleType} 
           Name={this.state.vehicles[0].Name} 
           Manufacturer={this.state.vehicles[0].Manufacturer} 
           FuelType={this.state.vehicles[0].FuelType} 
           updateClick={updateHandler.bind(this,"Sports Car")}
           nameChanged={nameChangeHandler}></Vehicle>
           

            <Vehicle 
            VehicleType={this.state.vehicles[1].VehicleType} 
            Name={this.state.vehicles[1].Name} 
            Manufacturer={this.state.vehicles[1].Manufacturer} 
            FuelType={this.state.vehicles[1].FuelType}>

            </Vehicle>

            <Vehicle VehicleType={this.state.vehicles[2].VehicleType}
            Name={this.state.vehicles[2].Name} 
            Manufacturer={this.state.vehicles[2].Manufacturer} 
            FuelType={this.state.vehicles[2].FuelType}>

            </Vehicle>

            <Vehicle VehicleType={this.state.vehicles[3].VehicleType} 
            Name={this.state.vehicles[3].Name} 
            Manufacturer={this.state.vehicles[3].Manufacturer} 
            FuelType={this.state.vehicles[3].FuelType}>
                
            </Vehicle>
        </div>
        </div>
 
        
    );
   };
}

export default App;