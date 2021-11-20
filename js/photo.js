import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyA4CgolxvVbXd2pAwh2wyDMIxaONB9lGVQ",
    authDomain: "portfoliopage-6756e.firebaseapp.com",
    projectId: "portfoliopage-6756e",
    storageBucket: "portfoliopage-6756e.appspot.com",
    messagingSenderId: "175945747255",
    appId: "1:175945747255:web:88b061c0d531a040ae68b2",
    measurementId: "G-2Z7YMCYSV8"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();
const starsRef = ref(storage, 'photo1.jpg');
const listRef = ref(storage);
let grid = document.getElementById('grid');
listAll(listRef).then((res) => { 
    res.items.forEach((itemRef) => { 
        getDownloadURL(itemRef).then((url) => { 
            let img = document.createElement('img');
            img.setAttribute('src', url);
            grid.appendChild(img); 
        }); 
    }); 
})
.catch((error) => {});

// let items = [];
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => { items.push(doc.data().first); });
// console.log(items.length)

console.log(analytics.page_view);
  