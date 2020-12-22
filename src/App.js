import React,{ useState }  from 'react'
const api={
  key: "ab559a1146b5e6f2d57bd546c20c090842d5fcc6",
  
  base:"https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/"
}

function App() {
  const [query, setQuery] = useState('');
  const [arz, setArz] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}${query}
      ${api.key}`)
      .then(res => res.json())
      .then(result => {
        setArz(result);
        setQuery('');
        console.log(result);
      });
    }
  }
  const dateBuilder = (d) => {
    let months = ["Jan" , "Feb" , "March" , "April" , "May", "June" , "july" , "August" , "Sep" , "Oct" , "Nov" , "Dec"];
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`
  }

    
  return (
    <div className="app">
      <main>
        <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}

            />
           </div>
           {(typeof arz.sana != "undefined") ? (
            <div>
           <div className="arz-box">
             <div className="arz">{arz.sana.data.title}</div>
             <div className="date">{dateBuilder(new Date())}</div>
           </div>
           <div className="sana-box">
         <div className="sell">
           39800{arz.sana.data.p}
           </div>
           <div className="buy">{arz.sana.data.p}39500</div>
           </div>
           </div>
           ) : ('')}
      </main>
    </div>
  );
}

export default App;
