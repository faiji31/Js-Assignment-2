function  onlyCharacter( str ) {
  if (typeof str!=="string"){
    return "invalid";
  }
  return str.replace(/\s+/g,"").toUpperCase()
}