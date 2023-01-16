import {Card,CardActions,CardContent,Button,Typography} from '@mui/material';


function Forecast({data}) {

    const ICON_URL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return (<>
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {new Date(data.dt_txt).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'})}
        </Typography>
        <Typography variant="h5" component="div">
        Temp: { Math.round((parseInt(data.main.temp) -273.15))}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        humidity:{data.main.humidity}
        </Typography>
        <Typography variant="body2">
        wind:{data.wind.speed}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <img src={ICON_URL} />
        </Button>
      </CardActions>
    </Card>
    </>
    )
}


export default Forecast
