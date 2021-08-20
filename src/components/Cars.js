import React from 'react';

const Cars = (props) => {
    //we can destructure the attributes
    const{title, carData} = props;
    let superCars = carData.superCars.map((car) =>{
return(
    <div>
        <img src={car.url} width="200px"/>
        <p>{car.name}</p>
    </div>
);
    });
    let luxuryCars = carData.luxuryCars.map((car) =>{
return(
    <div>
        <img src={car.url} width="200px"/>
        <p>{car.name}</p>
    </div>
);
    });
return(
// line 6 is a way of styling i.e inline css another method of styling can be seen below in on line 21 which is now been used in line 8, you can also see how external css is been used in line 7
//<div style={{backgroundColor: 'red'}}>
<div className='cars'>
    <h1>{title}</h1>
    <div>
        <h1>Super Cars</h1>
<div style={carsStyles}>{superCars}</div>
</div>
    <div>
        <h1>Luxury Cars</h1>
<div style={carsStyles}>{luxuryCars}</div>
</div>
</div>
);
};

// Embedded or External Css
let carsStyles={
display: 'flex',
justifyContent: 'center',
backgroundColor: 'red',
};

export default Cars;