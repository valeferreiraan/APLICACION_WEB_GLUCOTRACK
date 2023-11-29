import {Line} from 'react-chartjs-2';
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    
    
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    
);



var glucosa = [
    120, 110, 130, 140, 160, 150, 125, 135, 145, 155,
    180, 170, 140, 130, 120, 110, 100, 90, 95, 105,
    130, 140, 150, 160, 170, 180, 190, 200, 210, 220
  ];
var mes = Array.from({ length: 30 }, (_, index) => index + 1);; 

var miData = {
    labels: mes,
    datasets:[
        {
            
            label: 'niveles de glucosa',
            data: glucosa,
            tension: 0.4,
            fill: false,
            borderColor: 'rgb(47, 88, 205)',
            pointRadius: 5,
            pointBorderColor: 'rgb(47, 88, 205)',
            pointBackgroundColor: 'rgb(47, 88, 205)',
        },
    ]
};

var misOptions ={
   
    

};

export default function GraficaMes(){
    return <Line data={miData} options={misOptions}/>
}