import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}) {
    const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL ="https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=1024x1024&w=is&k=20&c=UpKHFfqd8DWY4FmXc--0XXqS01cHTuZluDhbaqRWUg8=";

    
    return (
        <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ?RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}, {info.country}{
          info.humidity>80
          ?<ThunderstormIcon className='marginsIcon'/>
          :info.temp>15
          ? <SunnyIcon className='marginsIcon'/>
          : <AcUnitIcon className='marginsIcon'/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={'span'}>
        <p>Temprature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.temp_min}&deg;C</p>
        <p>Max Temp = {info.temp_max}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feels_like}&deg;C</p>
        </Typography>
        </CardContent>
    </Card>
        </div>
    </div>
    );

}