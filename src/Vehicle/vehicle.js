import './vehicle.css'
const vehicle = props => (
    <div className ="vehicle col-lg-3">
    <h1>Vehicle: { props.VehicleType } </h1>
    <p onClick={props.updateClick}>Name: { props.Name }</p>
    <p>Manufaturer: { props.Manufacturer }</p>
    <p>Fuel Type: { props.FuelType}</p>
    <input type="text" onChange={props.nameChanged} value={props.Name}></input>
    </div>
);
export default vehicle;