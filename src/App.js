import {useState, useEffect} from 'react'
import './App.css';
import Gallery from './gallery.js'
import Buttons from './buttons.js'

function App() {
  let [data,setData] = useState({})
  let [objectId,setObjectId] = useState(1000)

  useEffect(() => {
    document.title=`Welcome to the Art Gallery. Current ID - ${objectId}`
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(response => response.json())
    .then(resdata => setData(resdata))
  }, [objectId])

  const handleIterate = (e) => {
    setObjectId(objectId + Number(e.target.value))
  }

  const displayImage = () => {
    if(!data.primaryImage){
      return(
        <h2>No Image Available!</h2>
      )
    }
    return(
      <Gallery objectImg={data.primaryImage} title={data.title} artist={data.artistDisplayName}/>
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{'width': '100%'}}>
        {displayImage()}
      </div>
      <Buttons handleIterate={handleIterate} />
    </div>
  );
}

export default App;
