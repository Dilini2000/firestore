

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//   import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import {getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyATSUmDUwaq9xsdJNpiV0HBjYsSYulFMMA",
    authDomain: "webdev-firestore-demo-5e74c.firebaseapp.com",
    projectId: "webdev-firestore-demo-5e74c",
    storageBucket: "webdev-firestore-demo-5e74c.appspot.com",
    messagingSenderId: "130272266247",
    appId: "1:130272266247:web:5c2354ce8e9225165bc2a2",
    measurementId: "G-6834CSG2B8"
  };


  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const db = getFirestore();
//   console.log(analytics);

let docList=[]

const ul = document.querySelector('ul');
  const callRef = collection(db,'movies');

  getDocs(callRef).then((snapShot)=>{
    snapShot.docs.forEach((doc)=>{
      docList.push({...doc.data(),id : doc.id})
    })
    return docList
    // console.log(docList);
  }).then(()=>{
    addData(docList);
  }).catch((err)=>{
    console.log(err)
  })

  const addData = (docList)=>{
    
    docList.forEach((doc)=>{
      const query = `<div>
      <li>${doc.movie_name}</li>
      <li>${doc.Director}</li>
      <li>${doc.runTime}</li>
      </div>`
      ul.innerHTML += query
    })

  }