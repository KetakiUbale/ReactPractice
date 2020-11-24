import {useState} from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

const App = props => {
  const [vehicleState,setVehicleState] = useState(
  {
  vehicles: [
       { VehicleType: "Car", Name:"Altroz", Manufacturer: "Tata", FuelType: "Petrol" },
       { VehicleType: "Car", Name: "Nexon", Manufacturer: "Tata", FuelType: "Electric" },
       { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType: "Diesel" },
       { VehicleType: "Car", Name: "Baleno", Manufacturer: "Maruti Suzuki", FuelType: "Petrol" },
       ],
        Count :4,
        showVehicle: true,
        showVehicleLable:"Show Vehicle"
 });


const updateHandler= (VehicleType) => {
        setVehicleState ( {
            vehicles: [
                { VehicleType: "Car", Name: "Jaguar XF", Manufacturer: "Jaguar", FuelType: "Petrol" },
                { VehicleType: "Car", Name: "CONTINENTAL GT MULLINER", Manufacturer: "Bentley", FuelType: "Electric" },
                { VehicleType: "Car", Name: "911 Carrera S", Manufacturer: "Porche", FuelType: "Petrol" },
                { VehicleType: "Car", Name: "DBS Superleggera", Manufacturer: "Aston Martin", FuelType: "Petrol" },
            ],
            Count:vehicleState.Count,
            showVehicles :vehicleState.showVehicles,
            showVehicleLable:vehicleState.showVehicleLable
        });
}

const nameChangeHandler=(event)=>{
    setVehicleState({
        vehicles: [
            { VehicleType: "Car", Name: event.target.value, Manufacturer: "Tata", FuelType: "Petrol" },
               { VehicleType: "Car", Name: "Nexon", Manufacturer: "Tata", FuelType: "Electric" },
               { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType: "Diesel" },
               { VehicleType: "Car", Name: "Baleno", Manufacturer: "Maruti Suzuki", FuelType: "Petrol" },
        ],
        Count :vehicleState.Count,
        showVehicles:vehicleState.showVehicles,
        showVehicleLable:vehicleState.showVehicleLable
    }
  )};
  

   const toggleVehicleListHandler= () =>{
     let toggleVehicle=!vehicleState.showVehicles;
      let label= "";
     
     if(toggleVehicle){
       label="Hide Vehicles";
      }
     else{
         label="Show Vehicles ";
       }
      
     setVehicleState({
     vehicles: vehicleState.vehicles,
     Count: vehicleState.Count,
     showVehicles: toggleVehicle,
     showVehicleLable: label
    });
  }
  let vehicleList=null;
  if(vehicleState.showVehicles){
    vehicleList=<div className="row"> 
    <Vehicle 
    VehicleType={vehicleState.vehicles[0].VehicleType} 
    Name={vehicleState.vehicles[0].Name} 
    Manufacturer={vehicleState.vehicles[0].Manufacturer} 
    FuelType={vehicleState.vehicles[0].FuelType} 
    updateClick={updateHandler}
    nameChanged={nameChangeHandler}>

    </Vehicle>
    

     <Vehicle 
     VehicleType={vehicleState.vehicles[1].VehicleType} 
     Name={vehicleState.vehicles[1].Name} 
     Manufacturer={vehicleState.vehicles[1].Manufacturer} 
     FuelType={vehicleState.vehicles[1].FuelType}>

     </Vehicle>

     <Vehicle VehicleType={vehicleState.vehicles[2].VehicleType}
     Name={vehicleState.vehicles[2].Name} 
     Manufacturer={vehicleState.vehicles[2].Manufacturer} 
     FuelType={vehicleState.vehicles[2].FuelType}>

     </Vehicle>

     <Vehicle VehicleType={vehicleState.vehicles[3].VehicleType} 
     Name={vehicleState.vehicles[3].Name} 
     Manufacturer={vehicleState.vehicles[3].Manufacturer} 
     FuelType={vehicleState.vehicles[3].FuelType}>
         
     </Vehicle>
     </div>

  }


   return (
        <div className="App container-fluid">
          <div className="row">
              <div className="col-lg-6 ">
                 <h1>List Of Vehicles | Total Vehicles:{vehicleState.Count} </h1>
               </div>  
                  <div className="col-lg-6 buttonDiv">
                    <button className="btn btn-primary btn-lg buttonUpdate" onClick={updateHandler}>Update List</button>
                    <button className="btn btn-secondary btn-lg buttonUpdate" onClick={toggleVehicleListHandler}>{vehicleState.showVehicleLable}</button>
                 </div>
              </div>
              {vehicleList}
              </div>
   );
}

export default App;