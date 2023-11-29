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



var glucosa = [64, 122, 250, 130, 45, 150, 98];
var dia = ['7:00', '8:45', '12:30', '15:15', '17:00', '19:00', '23:20']; 

var miData = {
    labels: dia,
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

export default function GraficaDia(){
    return <Line data={miData} options={misOptions}/>
}