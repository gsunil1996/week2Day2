import logo from './logo.svg';
import './App.css';
import Items from './Components/Components';

function App() {

  const data1 = {
    image: "https://articulate-heroes-authoring.s3.amazonaws.com/rapid-elearning-blog/0415/free-people-icons-3.png",
    
    text : <p>There are approximately <h1>3.04 Billion</h1> active social media <p>users worldwide</p></p>
  }

  const data2 = {
    image: "https://cdn-icons-png.flaticon.com/512/186/186239.png",
    text: <p className="secP">The total number of active mobile <p>social media users is almost</p> <h1 className="sectxt">3.04 Billion</h1></p>
  }

  const data3 = {
    image: "https://cdn-icons-png.flaticon.com/512/1314/1314404.png",
    text: <p> <h1>90%</h1>of social media users try to reach <p>out to brands or retailers</p></p>
  }

  const data4 = {
    image: "https://www.kindpng.com/picc/m/190-1908128_transparent-us-flag-clipart-png-american-flag-icon.png",
    text: <p>In the United States, <h1>77%</h1> <p>of people own at least one</p> <p>Social media profile</p></p>
  }

  const data5 = {
    image: "https://static.vecteezy.com/system/resources/previews/002/458/765/non_2x/alarm-clock-icon-vector.jpg",
    text: <p><h1>135 minutes</h1> <p>are spent on social media everyday</p> <p>by global internet users</p></p>
  }

  const data6 = {
    image: "https://previews.123rf.com/images/pandavector/pandavector1610/pandavector161000156/63732993-blonde-icon-in-flat-style-isolated-on-white-background-woman-symbol-vector-illustration-.jpg",
    text: <p>Youtube, Instagram, and Snapchat <p>are the most popular social media</p> <p>platforms along</p> <h1>Teens</h1> </p>
  }

  return (
    <div className="App">
    <div className="container">
        <Items props={data1} />
        <Items props={data2} />
        <Items props={data3} />
        <Items props={data4} />
        <Items props={data5} />
        <Items props={data6} />
        </div>
    </div>
  );
}

export default App;
