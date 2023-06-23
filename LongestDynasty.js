function longestDynasty(dynastyReign) {
    if (dynastyReign.length < 1) return 'No Data';
  
    const filtered = dynastyReign.filter(entry => isValidRomanNumeral(entry[Object.keys(entry)[0]]));
    const fValues = filtered.map(entry => convertYear(entry[Object.keys(entry)[0]]));
  
    let reign = 0;
    let max = 0;
    let temp = 0;
    for (let i = 1; i < fValues.length; i++) {
      temp = Math.abs(fValues[i] - fValues[i - 1]);
      if (temp > max) {
        max = temp;
        reign = i;
      }
    }
    return Object.keys(filtered[reign])[0];
  }
  
  function convertYear(year) {
    let y = 0;
    if (typeof year === 'undefined' || year === null) return y;
  
    let romanNumeral = new Map();
    romanNumeral.set('I', 1);
    romanNumeral.set('V', 5);
    romanNumeral.set('X', 10);
    romanNumeral.set('L', 50);
    romanNumeral.set('C', 100);
    romanNumeral.set('D', 500);
    romanNumeral.set('M', 1000);
  
    let l = year.length;
    for (let i = 0; i < l; i++) {
      if (romanNumeral.get(year.charAt(i)) < romanNumeral.get(year.charAt(i + 1))) {
        y -= romanNumeral.get(year.charAt(i));
      } else {
        y += romanNumeral.get(year.charAt(i));
      }
    }
  
    return y;
  }
  
  function isValidRomanNumeral(year) {
    let regex = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
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
  
  console.log(longestDynasty(dynastyReign)); // Tan Dynasty
  