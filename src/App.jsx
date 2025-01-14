import './App.css'
import Term from './components/Term'
import emojipedia from './emojipedia'

function App() {

  return (
    <>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">

          {emojipedia.map((emojiObj) => {
            return <Term key={emojiObj.id} emoji={emojiObj.emoji} title={emojiObj.name} content={emojiObj.meaning} />
          }
          )}
        </dl >

      </div >

    </>

  )
}

export default App
