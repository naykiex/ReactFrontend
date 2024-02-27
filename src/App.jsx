import Contact from './assets/Contact'
import Counter from './assets/Counter'
import Hello from './assets/Hello'

function App() {
  const helloData = [
    {name: 'Tunwa', message: 'Hi there'},
    {name: 'Tom', message: 'Hello....'}
  ]
  return (
    <div className='App'>
      <Counter />
      {helloData.map((data,index) => (
        <Hello key = {index} name={data.name} message={data.message} />
      ))}
      <Contact email="meme9866@gmail.com" phone="0567893356" />
    </div>
  )
}

export default App
