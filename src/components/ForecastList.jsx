import Forecast from './Forecast'
// import '../App.css'
function ForecastList({forecast}) {
    return (
    <>
        {forecast ? forecast.map((w,i) => <Forecast key={i} data={w}/>) : null}
    </>
    )
}


export default ForecastList
