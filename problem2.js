function  onlyCharacter( str ) {
  if (typeof str!=="string"){
    return "invalid";
  }
  return str.replace(/\s+/g,"").toUpperCase()
}

console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter("  h e llo wor   ld")); 
console.log(onlyCharacter(["hack", "me"]));    
console.log(onlyCharacter("Serv er : : Do wn"))