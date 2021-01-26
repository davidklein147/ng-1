import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BussTataService {

busData = []; 
STATES = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
}


OPERATORS = ['', 
    'assets/Metro_Transit.png',
    'assets/Ride_SMART.png',
    'assets/Westcat.png',
    'assets/citilink.png'];

STATES_LETTERS = Object.keys(this.STATES);
STATES_NAMES = Object.values(this.STATES);

constructor() { 
    for (let i = 0; i < 10; i++) {
        const theDate = this.randomDate(new Date(2021, 0, 1), new Date(2021, 2, 15));
        this.busData.push({
            "date": theDate,
            "due": this.randomIntFromInterval(3, 5) + "h" + this.randomIntFromInterval(2, 59) + "m",
            "operator": this.OPERATORS[Math.floor(Math.random() * 3) + 1],
            "busId": "GLI" + this.randomIntFromInterval(12000, 99999),
            "price": this.randomIntFromInterval(10, 40),
            "seats": this.randomIntFromInterval(15, 40),
            "source": this.STATES_LETTERS[this.randomIntFromInterval(0, this.STATES_LETTERS.length)],
            "dest": this.STATES_LETTERS[this.randomIntFromInterval(0, this.STATES_LETTERS.length)]
        });
    }
    
}


 randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  




  
}
