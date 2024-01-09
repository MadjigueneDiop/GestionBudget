const personnes = [
    {
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},    
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
  },
      {
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
  },
    {
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
 },
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},
{
prenom: "",
nom: "",
somme:"",
dateheure: "",
typeTransaction:"",
action:[]
},
                                
]
function filtrerTableau() {
    var input = document.getElementById('filterInput');
    var filtre = input.value.toUpperCase();

    var tableau = document.getElementById('table-body');
    var lignes = tableau.getElementsByTagName('tr');

    for (var i = 0; i < lignes.length; i++) {
        var cellule = lignes[i].getElementsByTagName('td')[0];
        if (cellule) {
            var texte =  cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre) > -1) {
                lignes[i].style.display = '';
            } else {
                lignes[i].style.display = 'none';
            }
        }
    }
}
document.getElementById('filterInput').addEventListener('input', filtrerTableau);

function AfficherPersonnes(pageNumber) {
    const item = 5;
    const startIndex = (pageNumber - 1) * item;
    const endIndex = startIndex + item;
    // copie les éléments d’un tableau.
    const personne = personnes.slice(startIndex, endIndex);

    const table = document.getElementById('table-body');
    table.innerHTML = '';
    personne.forEach(person => {
      const row = `<tr>
                    <td id="add1">${person.prenom}</td>
                    <td id="add2">${person.nom}</td>
                    <td id="add3">${person.somme}</td>
                    <td id="add4">${person.dateheure}</td>
                    <td id="add5">${person.typeTransaction}</td>
                    <td id="add6">${person.action}
                    <div class ="div">

                    <!-- Button trigger modal -->
<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-eye"></i>
</button>

// <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Retrait</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p class="p">Montant retiré <span> 10.000F </span></p>
      <p class="p">Frais <span> 0F </span></p>
      <p class="p">Statut  <span> Effectuer </span></p>
      <p class="p">Nom de l'agent <span> Multiservices Pape</span></p>
      <p class="p">Date et Heure <span> 20 Déc 2024 12:23PM </span></p>
      <p class="p">Nouveau solde <span> 1990000 </span></p>
      <p class="p">ID de la transsaction <span> PTYDHDYEL5LAAG </span></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

                    <i class="fa-solid fa-pen-nib"></i>
                    <i class="fa-solid fa-box-archive"></i> 
                    </div>
                      </td>
                  </tr>`;                         
      table.innerHTML += row;
    });
  }
  const bouton = document.getElementById("btn");
  const sommes = document.getElementById('somme');
  const tot = document.getElementById('Total');
  const dep = document.getElementById('Dépôt');
  const ret = document.getElementById('Retrait');
  const trans = document.getElementById('Transaction');
  const prenom = document.getElementById('prénom');
  const ajout1 = document.getElementById('add1');
  const ajout2 = document.getElementById('add2');
  const ajout3 = document.getElementById('add3');
  const ajout4 = document.getElementById('add4');
  const ajout5 = document.getElementById('add5');
  const ajout6 = document.getElementById('add6');

  
  tot.innerText = "2000000";
  
  bouton.addEventListener('click', () => {

    if (trans.value == ret.value) {
          const dp = parseInt(tot.innerText) - parseInt(sommes.value);
          tot.innerText = dp;
      }
  
      if (trans.value == dep.value) {
          const dpt = parseInt(tot.innerText) + parseInt(sommes.value);
          tot.innerText = dpt;
      }
  
      ret.value = "";
      dep.value = "";

  });
 function Pagination() {
    const totalItems = personnes.length;
    // La Math.ceil()méthode arrondit :un nombre arrondi à l’entier le plus proche.
    const totalPages = Math.ceil(totalItems / 5);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.classList.add('page-item');
      const link = document.createElement('a');
      link.classList.add('page-link');
      link.href = '#';
      link.textContent = i;
      link.addEventListener('click', () => {
        AfficherPersonnes(i);
      });
      li.appendChild(link);
      pagination.appendChild(li);
    }
  }
  AfficherPersonnes(1); 
  Pagination();

