function longestDynasty(dynastyReign) {
    if (dynastyReign.length < 1) return 'No Data';
  
    const filtered = dynastyReign.filter(entry => isValidDynasty(entry));
    if (filtered.length === 0) return 'No Valid Dynasties';
  
    const fValues = filtered.map(entry => convertYear(entry[Object.keys(entry)[0]]));
    const maxDifference = Math.max(...fValues.map((value, index, array) => index > 0 ? Math.abs(value - array[index - 1]) : 0));
    const longestDynastyIndex = fValues.findIndex((value, index, array) => index > 0 && Math.abs(value - array[index - 1]) === maxDifference);
    return Object.keys(filtered[longestDynastyIndex])[0];
  }
  
  function convertYear(year) {
    let y = 0;
    if (typeof year === 'undefined' || year === null) return y;
  
    const romanNumeral = new Map();
    romanNumeral.set('I', 1);
    romanNumeral.set('V', 5);
    romanNumeral.set('X', 10);
    romanNumeral.set('L', 50);
    romanNumeral.set('C', 100);
    romanNumeral.set('D', 500);
    romanNumeral.set('M', 1000);
  
    const l = year.length;
    for (let i = 0; i < l; i++) {
      if (romanNumeral.get(year.charAt(i)) < romanNumeral.get(year.charAt(i + 1))) {
        y -= romanNumeral.get(year.charAt(i));
      } else {
        y += romanNumeral.get(year.charAt(i));
      }
    }
  
    return y;
  }
  
  function isValidDynasty(entry) {
    const dynastyName = Object.keys(entry)[0];
    const dynastyYear = entry[dynastyName];
    return isValidRomanNumeral(dynastyYear);
  }
  
  function isValidRomanNumeral(year) {
    const regex = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
    return regex.test(year);
  }
  
  const dynastyReign = [
    { 'San Dynasty': 'MXLI' },
    { 'Viloria Dynasty': 'MCCCIIII' },
    { 'Tan Dynasty': 'MCCCXCVIII' },
    { 'Bon Dynasty': 'MCDXLV' },
    { 'Maiko Dynasty': 'MDCLXIV' },
    { 'Paul Dynasty': 'MCMXLIX' },
    { 'Andre Dynasty': 'MMMXICX' },
  ];
  
  const longestDynastyName = longestDynasty(dynastyReign);
  console.log(longestDynastyName); // Tan Dynasty
  