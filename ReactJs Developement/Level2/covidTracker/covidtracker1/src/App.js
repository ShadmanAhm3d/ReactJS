
import './App.css';
import MainPage from './components/MainPage.jsx';






function App() {

//   fetch("https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
// 		"x-rapidapi-key": "7f89bf16ebmsh9dff0f23f963d34p190691jsn264543e18108"
// 	}
// })
// .then(response => {
// 	console.log(response.json());
// }).then((data)=>{
//   console.log(data)
// })
// .catch(err => {
// 	console.error(err);
// });




  return (
    <div className="App">
      <MainPage /> 
    </div>
  );
}

export default App;
