function create_tr(table_id) {
    let table_body = document.getElementById(table_id)
   // console.log(table_body);
     let   first_tr   = table_body.firstElementChild
    // console.log(first_tr);
     let   tr_clone   = first_tr.cloneNode(true);
    // console.log(tr_clone);
    table_body.append(tr_clone);
    clean_first_tr(table_body.firstElementChild);
}

function createdown_tr(table_id) {
    let sp2 = document.getElementById("childElement"),
        parentDiv = sp2.parentNode
        table_body = document.getElementById(table_id)
        first_tr   = table_body.firstChild
        tr_clone   = first_tr.cloneNode(true);
        let sp1 = document.createElement("tr")
sp1.innerHTML = `
<td>
  <input type="integer" class="form_control" placeholder="--">
</td>
<td>
  <input type="text" class="form_control" placeholder="Sandeep">
</td>
<td>
  <input type="text" class="form_control" placeholder="Surepalli">
</td>
<td>
  <input type="text" class="form_control" placeholder="Mumbai">
</td>
<td>
  <input type="text" class="form_control" placeholder="India">
</td>
<td>
  <div class="action_container">
    <button class="danger" onclick="remove_tr(this)">
      <i class="fa fa-close"></i>
    </button>
  </div>
</td>`
        parentDiv.insertBefore(sp1, first_tr);

    clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}



function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}