const Bottle = ({bottle}) => {
    const {name, img, price}=bottle;
    return (
        <div>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;