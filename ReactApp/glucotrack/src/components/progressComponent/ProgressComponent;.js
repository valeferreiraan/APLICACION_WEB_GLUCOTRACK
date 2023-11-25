import { CircularProgress, Container, Grid } from '@mui/material';
import './ProgressComponent.css'


const CircularProgressBar = ({ value }) => {
  return (
    <CircularProgress
      variant="determinate"
      value={value}
      style={{ width: '60px', height: '60px', marginRight: '10px',transform: 'rotate(180deg)'}}
      
    />
  );
};

const ProgressComponent = ({cal,sug,carb}) => {
  const cal_total = ((cal/2000)/2)*100
  const sug_total = ((sug/60) / 2)*100
  const carb_total = ((carb/135) / 2)*100
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgressBar value={cal_total} /> 
            <h2>{cal} kcal</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgressBar value={sug_total} /> 
            <h2>{sug}g azúcar</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgressBar value={carb_total} /> 
            <h2>{carb}g carb.</h2>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgressComponent;