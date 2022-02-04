import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Meme } from './components/meme';




const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

function App() {

  const [templates, setTemplates] = useState([])
  const [template, setTemplate] = useState(null)

  const [toptext, setToptext] = useState('')
  const [bottomtext, setBottomtext] = useState('')
  const [meme, setMeme] = useState(null)


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);


  if(meme){
    return (
      <div style={{ textAlign: "center" }}>
        <img src ={meme} />
      </div>
    );
  }


  return <div style={{ textAlign: "center" }}>

    {template && (
      <form onSubmit={ async e => {
        e.preventDefault();
        const params= {
          template_id : template.id,
          text0: toptext,
          text1: bottomtext,
          username: "Shazzyfazzzy",
          password :"Shazzyfazzy"
        }
        const response = await fetch(`https://api.imgflip.com/caption_image${objectToQueryParam(params)} `);
        const json = await response.json();
        setMeme(json.data.url)

      }}>
        <Meme template={template} />
        <input placeholder='Type upper text'
          value={toptext}
          onChange={e => setToptext(e.target.value)} >
        </input>
        <input placeholder='Type botom text'
          value={bottomtext}
          onChange={e => setBottomtext(e.target.value)}>
        </input>
        <button type='submit' >Create Meme</button>
      </form>
    )}
    {!template &&
      (
        <>
          <h1> Pick a template</h1>
          {
            templates.map(template => {
              return (
                < Meme
                  template={template}
                  onClick={() => {
                    setTemplate(template)
                  }}
                />
              )
            })}</>)
    }</div>
}

export default App;
