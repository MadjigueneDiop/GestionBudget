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

  const bouton = document.getElementById("btn");
  const sommes = document.getElementById('somme');
  const tot = document.getElementById('Totale');
  const dep = document.getElementById('Dépôt');
  const ret = document.getElementById('Retrait');
  const dates = document.getElementById('date');
  const trans = document.getElementById('Transaction');
  const table = document.getElementById("table-body");
  const prenom = document.getElementById('prénom');
  const nom = document.getElementById('nom');
  const action = document.getElementById('action');



  tot.innerText = "4000000FCFA";
  bouton.addEventListener('click', () => {

    if (trans.value== ret.value) {
          const dp = parseInt(tot.innerText) - parseInt(sommes.value);
          tot.innerText = dp;
          console.log(tot);
      }
  
      if (trans.value == dep.value) {
          const dpt = parseInt(tot.innerText) + parseInt(sommes.value);
          tot.innerText = dpt;
      }
  
      // ret.value = "";
      // dep.value = "";

    //   console.log("Valeur de trans : ", trans.value); // Ajout de cette ligne pour vérifier la valeur de trans dans la console

      table.innerHTML +=`<tr>
      <td>${prenom.value}</td>
      <td>${nom.value}</td>
      <td>${sommes.value}</td>
      <td>${dates.value}</td>
      <td>${trans.value}</td>
      <td>
      
      <div class ="div">

      <!-- Button trigger modal -->
<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-eye"></i>
</button>

<!-- Modal -->
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
  });






