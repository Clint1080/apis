const { default: axios } = require("axios");

const getResidentsButton = document.querySelector('#getResidents');
const planetName = document.querySelector('#planetName')
const getMoviesButton = document.querySelector("#getMovies");
const actorName = document.querySelector("#actorName");

const getResidents = () => {
    // console.log('button clicked');
    let currentDisplay = document.querySelectorAll('.rezzys');
    for(let i = 0; i < currentDisplay.length; i++) {
        document.querySelector('.rezzys').remove();
    }
    axios.get(`https://swapi.dev/api/planets?search=${planetName.value}`)
    .then(res => {
        let residents = res.data.results[0].residents;
        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then(res => {
                const newResident = document.createElement('h2')
                newResident.classList.add('rezzys')
                newResident.textContent = res.data.name
                document.querySelector(`.residents`).appendChild(newResident);
            })
        }
    })
}


// getResidentsButton.addEventListener('click', getResidents);

// const getActors = () => {
//     axios.get(`https://swapi.dev/api/people?search=${}`);
// }




////// FROM CARSTON //////////
// const getResidentsButton = document.querySelector("button");
// const planetName = document.querySelector("#planet");

// const getResidents = () => {
//   console.log("button clicked");
//   let currentDisplay = document.querySelectorAll("h2");
//   // removes the current list
//   for (let i = 0; i < currentDisplay.length; i++) {
//     document.querySelector("body").lastChild.remove();
//   }
//   axios
//     .get(`https://swapi.dev/api/planets?search=${planetName.value}`)
//     .then((res) => {
//       console.log(res);
//       let residents = res.data.results[0].residents;
//       for (let i = 0; i < residents.length; i++) {
//         console.log(i);
//         axios.get(residents[i]).then((res) => {
//           const newResident = document.createElement("h2");
//           newResident.textContent = res.data.name;
//           document.querySelector("body").appendChild(newResident);
//         });
//       }
//     });
// };

// getResidentsButton.addEventListener("click", getResidents);