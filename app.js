document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#pack-list ul');
  const forms = document.forms;

  // delete packs
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add packs
  const addForm = forms['add-pack'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    const packName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    packName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    checkBox.classList.add('unpacked');
    packName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    //add type for checkbox
    checkBox.type = "checkbox";

    // append to DOM
    li.appendChild(checkBox);
    li.appendChild(packName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide packs
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter packs
  const searchBar = forms['search-packs'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const packs = list.getElementsByTagName('li');
    Array.from(packs).forEach((pack) => {
      const title = pack.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        pack.style.display = 'block';
      } else {
        pack.style.display = 'none';
      }
    });
  });
  
  //  checked items become packed
  const checkBox1 = document.querySelector('.unpacked', '.packed');
  checkBox1.addEventListener('click', (e) => {
    if(e.target.className == 'unpacked'){
      e.target.className = 'packed';
      console.log(e.NextSibling.innerText);
    }
    else if(e.target.className == 'packed'){
      e.target.className = 'unpacked';
    }
  });

  // tabbed content
  // const tabs = document.querySelector('.tabs');
  // const panels = document.querySelectorAll('.panel');
  // tabs.addEventListener('click', (e) => {
  //   if(e.target.tagName == 'LI'){
  //     const targetPanel = document.querySelector(e.target.dataset.target);
  //     Array.from(panels).forEach((panel) => {
  //       if(panel == targetPanel){
  //         panel.classList.add('active');
  //       }else{
  //         panel.classList.remove('active');
  //       }
  //     });
  //   }
  // });

})