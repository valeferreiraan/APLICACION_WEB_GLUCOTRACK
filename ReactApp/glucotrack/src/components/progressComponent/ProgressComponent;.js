import { CircularProgress, Container, Grid } from '@mui/material';
import './ProgressComponent.css'
import {Link} from "react-router-dom";


const CircularProgressBar = ({ value }) => {
  return (
    <CircularProgress
      variant="determinate"
      value={value}
      style={{ width: '80px', 
      height: '80px', 
      marginRight: '10px',
      transform: 'rotate(180deg)',
      color : '#2F58CD'}}
      thickness={7}
    />
  );
};

const ProgressComponent = ({cal,sug,carb}) => {
  const cal_total = ((cal/2000)/2)*100
  const sug_total = ((sug/60) / 2)*100
  const carb_total = ((carb/135) / 2)*100
  return (

    <div className='cardResumen'>
      <div className='titleResumen'>
        <h1>Resumen Diario</h1>
      </div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgressBar value={cal_total} /> 
              <h2 className='unidades'>{cal} kcal</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgressBar value={sug_total} /> 
              <h2 className='unidades'>{sug}g azúcar</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgressBar value={carb_total} /> 
              <h2 className='unidades'>{carb}g carb.</h2>
            </div>
          </Grid>
        </Grid>
      </Container>

      
      <div className='containerBoton'>
      <a>
        <Link to='./registro'>
        <div className='botonResumen'>
          <h3>Ver registro completo</h3>
        </div>
        </Link>
      </a>
      </div>
       

    </div>
  );
};
export default ProgressComponent;