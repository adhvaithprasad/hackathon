function displayresult(){
    let input = document.querySelector('.search').value;
    input=input.toLowerCase();
    let x = document.getElementById("results");
    if(input.length==0){
        x.innerHTML="";
        return;
    }
    else{
        x.innerHTML="";
        var k = searchByName(data, input);
        for (let i = 0; i < k.length; i++) {
            var elem = `<div class="searchresult"><h4>${k[i].Name}</h4><p>${k[i].Batch} ${k[i].Job}</p></div>`;
            x.innerHTML += elem;
        }
    }
}
function searchByName(data, searchName) {
  const results = data.filter(item => 
    item.Name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (results.length > 0) {
    console.log("Matches found:");
    console.log(results);
  } else {
    console.log("No match found for:", searchName);
  }

  return results; // in case you want to use the array
}
