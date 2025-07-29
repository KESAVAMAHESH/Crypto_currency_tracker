TO RUN THE PROJECT:
  In Cmd:
   1.npm install
     to install all the dependencies
   2.npm run dev
     to run the project
     the project will run in port localhost:3000
DEPLOYMENT:
  I have deployed my project in vercel 
  project link: https://crypto-currency-tracker-f1xg.vercel.app/

GIT:
 Git Link:https://github.com/KESAVAMAHESH/Crypto_currency_tracker
 project is in main branch     

PROJECT WORK FLOW:
 This project display the crypto currency here at first it display random crypto
 coin then if you click category it should display coins of the category.it
 has top dropdown to show the coins according to your filters and also it has 
 search bar to search specific coin and also it has a refresh button on the top 
 onclick it refetch the data from the server on click some some it navigate you 
 to another page that page display all the details of the coin as card on the left 
 side and the chart that shows the price range of the coin it has dropdown to 
 adjust the chart to view 1h 7days 20 days and 30 days data

PROJECT DESIGN:
  PACKAGES USED:
   1.redux toolkit and redux to store data and to fetch it globally in any 
    component
   2.tanstack/react_query to run api calls with advantage fetaures as error
     loading refetch instead of using useeffect
   3.axios to fetch api calls from coingeko api
   4.react icons for using icons in this application
   5.chartjs pacage for displaying chart data
   6.env for storing private data like keys etc in built next feature

APIS:
 1.For cryptocurrency data i have use free api from coingeko 
 2.For project maintanace i have create a seperate file called Api.ts
   in utils where i have write all the api call use in the components 
 3.Here i have created.env file and store the base url
 4.i use axios to fetch api calls

PROVIDERS:
 1.Here i have created a seperate component provider where i rap children 
  to use redux store and query client provider for using use query 

CSS:
 1.I Have download some fonts from google and declare it in the globalcss
  file to use it
 2.Created a seperate file styletheme.ts where i have store some colors and font
  to use in my application if you change colors and font in the styletheme
  page it changes in the application globally instead of changing in every component
 3.use media query to make the application mobile responsive also add some hover class 
  in globalcss
 4.For styling the component i have created an styles on seperate object in the below of the 
  component instead of craeting new file that messes the structure

PROPS:
 1.Here we are using type script so we need to declare the props that are used by the
 functional component so i have made a global file called all props in the props folder 
 where i created all the structure of the data props

REDUX:
 1.Created a seperate folder for redux where i have a store which has all the reducers
 2.Search slice which is used to store search bar values to use across components
 3.CoinSlice which is used to store all the coin data of the selected coin and all the 
  fetch all the coin data
 4.Selected slice is used to store the selected category value across components

HOOKS:
 1. use coin hooks it is used to fetch all the data of coins randomly if category is 
  not selected else it fetch coin data according to category 

ROUTER PAGE:
 1.here this page.tsx page get the coin id using use params and it has components 
  Coindetails compoenents to show the details of the coins and chart section to show the chart
  details according to the coin id 

HOME PAGE:
 1.The home page consists of 4 components coindata which is used to store all the fetch
  coin data
 2.Nav bar which consists of a logo name and search bar and refresh button
 3.side bar which shows all the categories
 top box which has the title and dropdown to filter the coins

COMPONENTS:
 DYNAMIC COMPONENTS:
   COIN CARD:
     here it gets the coin data as props and shows the details about the coin on click it get 
     rote to the page.tsx
   DROPDOWN:
     It is fully reusable it gets options to display and onselect function to do what when the 
     option is selected
   ERROR MESSAGE:
     It is also fully reusable component it gets message to display icon icon status classname
     for css and onretry function if no retry function is given the retry button is disable
   LOADER:
     It is also fully reusable component which gets size text color and class name as props
   NO DATA MESSAGE:
     It is also a reusable compoenent it gets class name for css and message to display s props
   SEARCHBAR:
     It is also a reusable component where we can give placeholder class and debouncetime 
     as prosps debounce time is nothing but the time is taken to call the handle search 
     function when user does not type or stop typing here on change i have update the search data
     in redux state usingreducer

  HOME COMPOENENTS:
   NAVBAR:
    It consists of icon search bar and refresh button on click refresh button it refetch the data 
    navbar should need a refresh props to make the refresh button on click function
   SIDEBAR:
    It displays all the category data fetch from the coin geko api
    It is also a reusable components it gets props as width height classname title and also 
    a boolean field show title
   TOPBOX:
    It also a reusable component which get title dropdown data and onselect function as props 
    it displays title reusable dropdown component and a selct function for the dropdown 
    here it displays popular topgainer toplosers etc
   COINDATA:
    It is the main component in the home page it display all the selected coin in card format using coin 
    card here the coins are fetch by category search and at first random coins are displayed
    it store all the fetch coin in redux coin slice coin data array it use use coin hook to 
    fetch data here the dat ais refreshes every 30 seconds by giving refetch function in use coin hook
  
  ROUTER COMPONENTS:
   CARDDETAILS:
    It is shows all the card details if no data is available it gives no data message and if error
    it display error component this page gets all the coin data from redux coin state 
   CHARTSECTION:
    It dispalys the chart details of the specific coin by fetching the chart data from the 
    coin id here it also have drop down to show data as 1hour 7 days 20 days 30 days 
    on dropdon value is changes it refetch chart data here the chart options are of different
    file and use it in this compoennet to make code readability

 LIMITATIONS:
  1.The coin geko api has the limit of api calls per minute so i made the error message as
  if api network error means i have made the error message please wait for 1 minute
  and i made limitation of 3 retry
  2.when you select category and refresh button is clicke the refresh button works correctly but 
  the data are fetch from the same page i desc order so there is no data change you see
  ut the refresh button fetch correctly
  

  

  


