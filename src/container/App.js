import {useState} from 'react';
import './App.css';
import Vehicles from '../component/Vehicles/Vehicles';

const App = props => {
  const [vehicleState,setVehicleState] = useState(
  {
  vehicles: [
       { VehicleType: "Car", Name:"Altroz", Manufacturer: "Tata", FuelType: "Petrol" },
       { VehicleType: "Car", Name: "Nexon", Manufacturer: "Tata", FuelType: "Electric" },
       { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType: "Diesel" },
       { VehicleType: "Car", Name: "Baleno", Manufacturer: "Maruti Suzuki", FuelType: "Petrol" },
       { VehicleType: "Car", Name: "Thar", Manufacturer: "Mahindra", FuelType: "Petrol" },
       { VehicleType: "Car", Name: "City", Manufacturer: "Honda", FuelType: "Petrol" },
       ],
        Count :6,
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

const AddVehicleHandler= (VehicleType) => {
    
  const vehicleList=[...vehicleState.vehicles];
  const newVehicle={VehicleType:"Car",Name:"Nexonnn",Manufacturer:"Tata",FuelType:"Electric"}
  vehicleList.push(newVehicle);



    setVehicleState ( {
        vehicles:vehicleList,
        Count:vehicleState.Count+1,
        showVehicles :vehicleState.showVehicles,
        showVehicleLable:vehicleState.showVehicleLable
    });
}

const deleteVehicleHandler=(vehicleIndex)=>{
const vehicleList=[...vehicleState.vehicles];
vehicleList.splice(vehicleIndex,1);
setVehicleState({
    vehicles:vehicleList,
    Count:vehicleState.Count-1,
    showVehicles:vehicleState.showVehicles,
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
    vehicleList=(<div className="row"> 
 {
      <Vehicles
      vehicles={vehicleState.vehicles}
      onDelete={deleteVehicleHandler}
      />
 })
    
    </div>
    );
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
                    <button className="btn btn-secondary btn-lg buttonUpdate" onClick={AddVehicleHandler}>Add Vehicles</button>
                 </div>
              </div>
              {vehicleList}
              </div>
   );
}

export default App;