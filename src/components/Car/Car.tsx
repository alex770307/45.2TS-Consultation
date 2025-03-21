interface Props {
    brand: string;
    color: string;
}

export default function Car(props: Props): JSX.Element {
    const{brand, color} = props;
    return(
        <div style={{backgroundColor: color, color: 'white'}}>
            Brend: {brand} Color: {color}
        </div>
    )
}