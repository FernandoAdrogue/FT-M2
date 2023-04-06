var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl))resultSet.push(startEl)
  for(const child of startEl.children){
    const result = traverseDomAndCollectElements(matchFunc,child)
    resultSet = [...resultSet,...result]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==='#')return 'id'
  if(selector[0]==='.')return 'class'
  if(selector.split('').slice(1).includes('.'))return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (element) => {
      if(element.id === selector.slice(1)){
        return true}
      else return false
    }
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      for(let elem of element.classList) {
        if (elem === selector.slice(1))return true
      }
      return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      [tag,classname] = selector.split('.')
     return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${classname}`)(element)
    }
  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      if(element.tagName === selector.toUpperCase()){
        return true}
      else return false
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

// $('.clasecualquiera')
// $('#idcialquiera')
// $('p')
