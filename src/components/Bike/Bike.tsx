interface Props {
    gears: number;
    brand: string;
    price: number;
    maxSpeed: number;
}

export default function Bike(props: Props): JSX.Element {
    const { gears, brand, price, maxSpeed } = props;
    return (
      <div className="bike bike-info">
        Brand: {brand} Gears: {gears} Price: {price} Max speed: {maxSpeed}
      </div>
    );
}