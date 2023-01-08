import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [orgList, setOrgList] = useState([])
  let [sortedList, setSortedList] = useState([])
  let [revSortedList, setRevSortedList] = useState([])
  let [n, setn] = useState(0)
  let [showPass, setShowPass] = useState('password')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        let arr = []
        data.forEach(item => {
          arr.push(item.name)
        });
        setOrgList(arr)
        console.log('org', orgList);
        let sorted = [...orgList].sort()
        setSortedList(sorted)
        console.log(sortedList);
        let revSorted = [...sorted].reverse()
        setRevSortedList(revSorted)
        console.log(revSortedList);

        // sorted by length>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        let sortedByLength = []
        let index = []
        for (let i = 0; i < orgList.length; i++) {

          index.push(orgList[i].length)
          index.sort()
          if (orgList[i].length == index[i])
            sortedByLength.push(orgList[i])
          console.log(sortedByLength);
        }
      })
  }, [n])
  // console.log(n);
  return (
    <div>
      <input type={showPass} /> <button onClick={() => {
        setShowPass("text")
      }}>show pass</button>
      <button onClick={() => {
        setn(1)
      }}>fetch</button>
      <button onClick={() => {
        // console.log(n);
        setn(n + 1)
        if (n == 3) setn(1);
      }}>change</button>
      {
        n === 1 && orgList.map(i => {
          return <li>{i}</li>
        })
      }
      {
        n === 2 && sortedList.map(i => {
          return <li>{i}</li>
        })
      }
      {
        n === 3 && revSortedList.map(i => {
          return <li>{i}</li>
        })
      }

    </div>
  );
}

export default App;