
import './App.css'

function App() {
  const rondom=Math.floor(Math.random()*100+1);
  const ism=prompt("ism kiriting:");
  const kun=new Date().getDay()+2;
  const oy=new Date().getMonth()+1;
  const yil=new Date().getFullYear();
 

  return (
    <>
    <div className="box container">
    <h2>ismingiz: {ism }</h2>
    <h2>{kun}.{oy}.{yil}</h2>
    <h2>A random number from 0 to 100: </h2>

    <h1 style={{color:"green"}}> {rondom}</h1>
    </div>
    </>
  )
}

export default App
