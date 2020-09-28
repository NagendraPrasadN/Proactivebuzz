import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  multi: any[] =  [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ];

 single:any =[ {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
    {
    "name": "UK",
    "value": 6200000
  }
];

bubbleData: any[] = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 80.3,
        r: 80.4
      },
      {
        name: '2000',
        x: '2000',
        y: 80.3,
        r: 78
      },
      {
        name: '1990',
        x: '1990',
        y: 75.4,
        r: 79
      }
    ]
  },
  {
    name: 'United States',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 78.8,
        r: 310
      },
      {
        name: '2000',
        x: '2000',
        y: 76.9,
        r: 283
      },
      {
        name: '1990',
        x: '1990',
        y: 75.4,
        r: 253
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 81.4,
        r: 63
      },
      {
        name: '2000',
        x: '2000',
        y: 79.1,
        r: 59.4
      },
      {
        name: '1990',
        x: '1990',
        y: 77.2,
        r: 56.9
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 80.2,
        r: 62.7
      },
      {
        name: '2000',
        x: '2000',
        y: 77.8,
        r: 58.9
      },
      {
        name: '1990',
        x: '1990',
        y: 75.7,
        r: 57.1
      }
    ]
  }
];

  view: any[] = [700, 300];

  ngOnInit(){

  }
  
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
  xScaleMax: number = 85;
  xScaleMin: number = 85;
  showLegend: boolean = true;
  gradient: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  labelFormatting: string = 'la';
  legendPosition:number =80;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onSelect(data): void {
    console.log('onSelect', JSON.parse(JSON.stringify(data)));
  }
}
