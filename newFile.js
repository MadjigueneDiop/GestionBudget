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

  //  
});
