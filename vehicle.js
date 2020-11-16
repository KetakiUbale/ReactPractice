import './vehicle.css'
const vehicle = props => ( <
    div className = "car" >
    <
    h1 >
    Vehicle: { props.vehicleType } <
    /h1> <
    p > Name: { props.name } < /p> <
    p > Manufaturere: { props.manufacturer } < /p> <
    p > Fuel Type: { props.fuel } < /p> <
    p > Comment: { props.children } < /p> <
    /div>
);
export default vehicle;