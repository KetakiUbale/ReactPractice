import vehicle from './Vehicle/vehicle';
import Vehicle from './Vehicle/vehicle';
const vehicles =(props)=>{
    return (props.vehicles.map((vehicleItem, index)=> {
        return <Vehicle 
       VehicleType={vehicleItem.VehicleType} 
       Name={vehicleItem.Name} 
       Manufacturer={vehicleItem.Manufacturer} 
       FuelType={vehicleItem.FuelType} 
       onDelete={props.onDelete}
       updateClick={props.updateClick}
       nameChanged={props.nameChanged}
    />
       })
    );
    };
    export default vehicles;