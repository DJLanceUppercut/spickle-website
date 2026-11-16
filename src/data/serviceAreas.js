// Suburbs we work in, grouped by region. Started from the 115 on the old
// Strikingly /contact page (15 Nov 2026) and extended 16 Nov 2026 once Lukey
// confirmed we cover all of Melbourne and the Mornington Peninsula. Suburbs
// with their own page in localAreas.js are linked automatically on /service-areas.
// Add a suburb here by name; it does not need its own page.

export const regions = [
  {
    name: 'Inner Melbourne',
    suburbs: [
      'Abbotsford', 'Albert Park', 'Alphington', 'Armadale', 'Brunswick', 'Burnley',
      'Carlton', 'Clifton Hill', 'Collingwood', 'Collingwood North', 'East Melbourne',
      'Fairfield', 'Fitzroy', 'Flemington', 'Hawthorn', 'Kew', 'Kooyong', 'Melbourne',
      'Middle Park', 'Northcote', 'Port Melbourne', 'Prahran', 'Richmond', 'Ripponlea',
      'South Melbourne', 'South Yarra', 'St Kilda', 'Thornbury', 'Toorak', 'Windsor',
    ],
  },
  {
    name: 'Eastern and northern suburbs',
    suburbs: [
      'Ashburton', 'Ashwood', 'Balwyn', 'Bayswater', 'Blackburn', 'Blackburn South',
      'Boronia', 'Box Hill', 'Box Hill South', 'Bulleen', 'Burwood', 'Burwood East',
      'Camberwell', 'Canterbury', 'Chadstone', 'Croydon', 'Doncaster', 'Doncaster East',
      'Donvale', 'Doreen', 'Eaglemont', 'Eltham', 'Epping', 'Ferntree Gully',
      'Forest Hill', 'Glen Iris', 'Hawthorn East', 'Heidelberg', 'Ivanhoe', 'Kilsyth',
      'Knox', 'Malvern', 'Mitcham', 'Mont Albert', 'Mount Waverley', 'Nunawading',
      'Park Orchards', 'Research', 'Ringwood', 'Rowville', 'Scoresby', 'Surrey Hills',
      'Templestowe', 'Vermont', 'Wantirna', 'Warrandyte', 'Wheelers Hill', 'Wonga Park',
    ],
  },
  {
    name: 'Western suburbs',
    suburbs: [
      'Altona', 'Ascot Vale', 'Essendon', 'Footscray', 'Moonee Ponds', 'Newport',
      'Williamstown', 'Yarraville',
    ],
  },
  {
    name: 'Bayside and south-east',
    suburbs: [
      'Aspendale', 'Beaumaris', 'Bentleigh', 'Bentleigh East', 'Berwick', 'Black Rock',
      'Bonbeach', 'Botanic Ridge', 'Braeside', 'Brandon Park', 'Brighton', 'Brighton East',
      'Carrum', 'Caulfield', 'Caulfield South', 'Chelsea', 'Cheltenham', 'Clayton',
      'Clyde', 'Cranbourne', 'Dandenong', 'Dingley', 'Edithvale', 'Elsternwick', 'Elwood',
      'Endeavour Hills', 'Frankston', 'Frankston South', 'Gardenvale', 'Glen Huntly',
      'Hallam', 'Hampton', 'Highett', 'Hughesdale', 'Huntingdale', 'Keysborough',
      'Langwarrin', 'McKinnon', 'Mentone', 'Moorabbin', 'Mordialloc', 'Mulgrave',
      'Murrumbeena', 'Narre Warren', 'Noble Park', 'Oakleigh', 'Ormond', 'Patterson Lakes',
      'Sandhurst', 'Sandringham', 'Seaford', 'Springvale',
    ],
  },
  {
    name: 'Mornington Peninsula',
    suburbs: [
      'Arthurs Seat', 'Balnarring', 'Blairgowrie', 'Dromana', 'Flinders', 'Hastings',
      'McCrae', 'Mornington', 'Mount Eliza', 'Mount Martha', 'Portsea', 'Red Hill',
      'Rosebud', 'Rye', 'Safety Beach', 'Somers', 'Sorrento', 'St Andrews Beach',
      'Tootgarook',
    ],
  },
];
