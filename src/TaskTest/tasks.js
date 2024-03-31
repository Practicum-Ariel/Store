const tasksMain = [
  {
    description: "Buy a gift for mom's birthday",
    deadline: new Date('2024-05-10'),
    category: "Mother's birthday"
  },
  {
    description: "Book flight tickets for Italy trip",
    deadline: new Date('2024-09-01'),
    category: "Trip to Italy"
  },
  {
    description: "Pack luggage for Italy trip",
    deadline: new Date('2024-09-15'),
    category: "Trip to Italy"
  },
  {
    description: "Arrange accommodation for Italy trip",
    deadline: new Date('2024-08-25'),
    category: "Trip to Italy"
  },
  {
    description: "Plan itinerary for Italy trip",
    deadline: new Date('2024-08-15'),
    category: "Trip to Italy"
  },
  {
    description: "Call childhood friends to plan vacation",
    deadline: new Date('2024-07-01'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Book Airbnb for vacation with childhood friends",
    deadline: new Date('2024-07-15'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Buy snacks for vacation with childhood friends",
    deadline: new Date('2024-07-20'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Clean the bathroom",
    deadline: new Date('2024-03-20'),
    category: "Cleaning the house"
  },
  {
    description: "Vacuum the living room",
    deadline: new Date('2024-03-15'),
    category: "Cleaning the house"
  },
  {
    description: "Do laundry",
    deadline: new Date('2024-03-17'),
    category: "Cleaning the house"
  },
  {
    description: "Buy groceries for the week",
    deadline: new Date('2024-03-13'),
    category: "Shopping at the supermarket"
  },
  {
    description: "Plan surprise party for mom's birthday",
    deadline: new Date('2024-05-05'),
    category: "Mother's birthday"
  },
  {
    description: "Research tourist attractions in Italy",
    deadline: new Date('2024-08-01'),
    category: "Trip to Italy"
  },
  {
    description: "Apply for vacation time off from work",
    deadline: new Date('2024-06-01'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Deep clean the kitchen",
    deadline: new Date('2024-04-01'),
    category: "Cleaning the house"
  },
  {
    description: "Organize pantry shelves",
    deadline: new Date('2024-03-25'),
    category: "Cleaning the house"
  },
  {
    description: "Research healthy recipes for grocery shopping",
    deadline: new Date('2024-03-10'),
    category: "Shopping at the supermarket"
  },
  {
    description: "Buy sunscreen for Italy trip",
    deadline: new Date('2024-08-20'),
    category: "Trip to Italy"
  },
  {
    description: "Call mom to discuss birthday gift ideas",
    deadline: new Date('2024-04-25'),
    category: "Mother's birthday"
  },
  {
    description: "Check weather forecast for Italy trip",
    deadline: new Date('2024-08-30'),
    category: "Trip to Italy"
  },
  {
    description: "Confirm meetup details with childhood friends",
    deadline: new Date('2024-06-15'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Schedule carpet cleaning for the house",
    deadline: new Date('2024-03-30'),
    category: "Cleaning the house"
  },
  {
    description: "Buy new kitchen sponges",
    deadline: new Date('2024-03-18'),
    category: "Shopping at the supermarket"
  },
  {
    description: "Buy a gift for mom's birthday",
    deadline: new Date('2024-05-10'),
    category: "Mother's birthday"
  },
  {
    description: "Book flight tickets for Italy trip",
    deadline: new Date('2024-09-01'),
    category: "Trip to Italy"
  },
  {
    description: "Pack luggage for Italy trip",
    deadline: new Date('2024-09-15'),
    category: "Trip to Italy"
  },
  {
    description: "Arrange accommodation for Italy trip",
    deadline: new Date('2024-08-25'),
    category: "Trip to Italy"
  },
  {
    description: "Plan itinerary for Italy trip",
    deadline: new Date('2024-08-15'),
    category: "Trip to Italy"
  },
  {
    description: "Call childhood friends to plan vacation",
    deadline: new Date('2024-07-01'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Book Airbnb for vacation with childhood friends",
    deadline: new Date('2024-07-15'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Buy snacks for vacation with childhood friends",
    deadline: new Date('2024-07-20'),
    category: "Vacation with childhood friends"
  },
  {
    description: "Clean the bathroom",
    deadline: new Date('2024-03-20'),
    category: "Cleaning the house"
  },
  {
    description: "Vacuum the living room",
    deadline: new Date('2024-03-15'),
    category: "Cleaning the house"
  },
  {
    description: "Do laundry",
    deadline: new Date('2024-03-17'),
    category: "Cleaning the house"
  },
  {
    description: "Buy groceries for the week",
    deadline: new Date('2024-03-13'),
    category: "Shopping at the supermarket"
  },
];

let example = {
  "Cleaning the house": [{
    description: "Do laundry",
    deadline: new Date('2024-03-17'),
    category: "Cleaning the house"
  },
  {
    description: "Buy groceries for the week",
    deadline: new Date('2024-03-13'),
    category: "Cleaning the house"
  },],
  "Travel" : [{}],
  "Birthday" : [{},{},{}]

}

let tasks = {}
for(let t of tasksMain){
  if(tasks[t.category]){
    tasks[t.category].push(t)
  }
  else{
    tasks[t.category]=[t]
  }
}


let taskArr = []
for(let t of tasksMain){
  // t = {
  //   description: "Buy groceries for the week",
  //   deadline: new Date('2024-03-13'),
  //   category: "Shopping at the supermarket"
  // },

  if(!taskArr.includes(t.category)){
    taskArr.push(t.category)
  }
}
export  {tasks, tasksMain,taskArr}
 