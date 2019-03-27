const db = firebase.firestore();
const mainDiv = document.querySelector('#main'); 
const docRef = db.collection("images").doc("sunna");





db.collection("images").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const data = doc.data();
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        mainDiv.innerHTML += `
        <h1>${data.name}</h1>
        <img src="${data.url}">
        `
    });
});