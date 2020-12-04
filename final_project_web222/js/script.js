/* Add any JavaScript you need to this file. */
/* 
    Student name: Jianchang (Robin) YU
    student number: 160210191
    student email: jyu205@myseneca.ca
    date: 29th Nov. 2020
*/

window.onload = function() {
  //returns a CAD dollar from a cent number
  function formatNumber(number) {
    return (
      'CA$ ' +
      new Intl.NumberFormat('en-CA', { style: 'decimal', currency: 'USD' }).format(number / 100)
    );
  }

  //removes all the divs from the section
  function clearSection() {
    var sec = document.querySelector('#container');
    var secList = sec.querySelectorAll('.column');
    for (var i = 0; i < secList.length; i++) sec.removeChild(secList[i]);
  }

  function addNewItem(object) {
    var newItem = document.createElement('div');
    newItem.setAttribute('class', 'column');

    var newImg = document.createElement('img');
    newImg.setAttribute('class', 'pic');
    newImg.src = object.imgUrl;
    newImg.alt = '';
    newItem.appendChild(newImg);

    var newCate = document.createElement('p');
    newCate.setAttribute('class', 'category');
    newCate.innerHTML = object.category;
    newItem.append(newCate);

    var newWords = document.createElement('div');
    newWords.setAttribute('class', 'words');
    var newTitle = document.createElement('p');
    newTitle.setAttribute('class', 'img-title');
    newTitle.innerHTML = object.name;
    newWords.appendChild(newTitle);
    var newDes = document.createElement('p');
    newDes.setAttribute('class', 'img-des');
    newDes.innerHTML = object.description;
    newWords.appendChild(newDes);

    newItem.appendChild(newWords);

    var newPrice = document.createElement('p');
    newPrice.setAttribute('class', 'price');
    newPrice.innerHTML = formatNumber(object.price);
    newItem.appendChild(newPrice);

    // var container=document.querySelector('#container');
    // container.appendChild(newItem);

    return newItem;
  }

  function addCategories(objects) {
    clearSection();

    var container = document.getElementById('container');

    for (var i = 0; i < objects.length; i++) {
      container.appendChild(addNewItem(objects[i]));
    }
  }

  function selectItemsByCategory(category) {
    var newOb = [];
    for (var i = 0; i < window.kitchenwareData.length; i++) {
      if (window.kitchenwareData[i].category == category) newOb.push(window.kitchenwareData[i]);
    }

    return newOb;
  }

  var buttonBowl = document.getElementById('bowl');
  buttonBowl.addEventListener('click', clickBowl);

  function clickBowl() {
    addCategories(selectItemsByCategory('bowl'));
  }

  var buttonPlate = document.getElementById('plate');
  buttonPlate.addEventListener('click', clickPlate);

  function clickPlate() {
    addCategories(selectItemsByCategory('plate'));
  }

  var buttonMug = document.getElementById('mug');
  buttonMug.addEventListener('click', clickMug);

  function clickMug() {
    addCategories(selectItemsByCategory('mug'));
  }

  var buttonAll = document.getElementById('all');
  buttonAll.addEventListener('click', clickAll);

  function clickAll() {
    addCategories(window.kitchenwareData);
  }

  clickAll();
};
