import './App.css';
import Vehicle from './Vehicle/vehicle';

function App() {
    return ( < div className = "App" >
        <
        Vehicle vehicleType = "Car"
        name = "Altroz"
        manufacturer = "Tata"
        fuel = "Petrol" / >
        <
        Vehicle vehicleType = "Car"
        name = "Seltos"
        manufacturer = "Kia"
        fuel = "Diesel" >
        This is a brand new car by Kia Motors < /Vehicle>  <
        /div>
    );
}

export default App;