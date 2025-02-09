import Bike from "../Bike/Bike";
import Car from "../Car/Car";
import honda from '../Carshop/img/typer_gallery_1.png'
import './CarShop.module.css'

export default function CarShop(): JSX.Element {
    return (
      <div>
        <h2>Car shop 😁</h2>
        <h3>Cars 😎</h3>
        <div className="car">
          <Car brand="mercedes" color="green" />
        </div>
        <div className="car">
          <Car brand="Tesla" color="blue" />
        </div>
        <div className="car">
          <Car brand="Opel" color="yellow" />
        </div>
        <div className="car">
          <Car brand="Lada" color="red" />
        </div>
        <div className="car">
          <Car brand="Audi" color="black" />
        </div>
        <div className="bike">
          <Bike gears={4} brand="Honda" price={18000} maxSpeed={250} />
        </div>
        <div className="bike">
          <Bike gears={5} brand="Yamaha" price={25000} maxSpeed={360} />
        </div>
        <div className="bike">
          <Bike gears={4} brand="BMW" price={10000} maxSpeed={470} />
        </div>
        <h4>Первый способ подгрузить изображение через импорт 😊</h4>
        <img src={honda} alt="" />
        <h4>Второй способ из папки public, без точки перед слеш 😂</h4>
        <img src="/typer_gallery_2.png" alt="" />
      </div>
    );
}