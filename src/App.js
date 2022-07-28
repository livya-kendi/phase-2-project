const width = 8
const candyColours = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]


const App = () => {

  const createBoard = () => {
    //set the random numbers to pass from 0 to 5 into the candy colours
    const randomColourArrangement = []
    for (let i = 0; i < width*width; i++){
      const randomColour = candyColours[Math.floor(Math.random() * candyColours.length)]
      randomColourArrangement.push(randomColour)
    }
    console.log(randomColourArrangement)
  }
  createBoard()

  return (
    <div> </div>
  );
}

export default App;
