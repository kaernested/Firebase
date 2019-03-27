// Add a new document in collection "cities"
const db = firebase.firestore();

// db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(()=> {
//     console.log("Document successfully written!");
// })
// .catch((error)=> {
//     console.error("Error writing document: ", error);
// });

const button = document.querySelector('button');
button.onclick = ()=> {
    let nameValue = document.getElementById('name').value;
    let urlValue = document.getElementById('url').value;
    console.log(nameValue);
    console.log(urlValue);

    db.collection("images").doc(nameValue).set({
        name: nameValue,
        url: urlValue,
    })
} 
console.log(db.collection("images").doc("sunna"))
