let pairs = [
  'SO',
  'OP',
  'NF',
  'BO',
  'BH',
  'VB',
  'SV',
  'BK',
  'KC',
  'SP',
  'CP',
  'VN',
  'HO',
  'PC',
  'CS',
  'PO',
  'KF',
  'BP',
  'VO',
  'HB',
  'PH',
  'FF',
  'FB',
  'CC',
  'FK',
  'HV',
  'CO',
  'OC',
  'KV',
  'SS',
  'FC',
  'NP',
  'OH',
  'OF',
  'KB',
  'BN',
  'OK',
  'NC',
  'NO',
  'FS',
  'VP',
  'KP',
  'VS',
  'VV',
  'NN',
  'KH',
  'OB',
  'HP',
  'KK',
  'FH',
  'KS',
  'BS',
  'SN',
  'CB',
  'HN',
  'SB',
  'OS',
  'BC',
  'OV',
  'PN',
  'VH',
  'SK',
  'PV',
  'VC',
  'PF',
  'NB',
  'PP',
  'NS',
  'PB',
  'CV',
  'HK',
  'PK',
  'NH',
  'SH',
  'KO',
  'NV',
  'HH',
  'FO',
  'CK',
  'VK',
  'HF',
  'BF',
  'BV',
  'KN',
  'VF',
  'FN',
  'ON',
  'SF',
  'SC',
  'OO',
  'FP',
  'PS',
  'NK',
  'BB',
  'HC',
  'FV',
  'CH',
  'HS',
  'CF',
  'CN'
]

let insertions = [
  'F',
  'V',
  'F',
  'V',
  'S',
  'B',
  'B',
  'S',
  'N',
  'O',
  'O',
  'O',
  'S',
  'B',
  'O',
  'K',
  'B',
  'K',
  'O',
  'N',
  'O',
  'O',
  'K',
  'H',
  'F',
  'P',
  'S',
  'N',
  'V',
  'O',
  'O',
  'B',
  'B',
  'K',
  'K',
  'C',
  'C',
  'O',
  'O',
  'C',
  'K',
  'S',
  'B',
  'N',
  'P',
  'P',
  'H',
  'H',
  'H',
  'F',
  'V',
  'V',
  'H',
  'B',
  'K',
  'O',
  'K',
  'H',
  'N',
  'B',
  'N',
  'C',
  'K',
  'N',
  'S',
  'B',
  'S',
  'F',
  'B',
  'C',
  'P',
  'S',
  'B',
  'V',
  'H',
  'B',
  'V',
  'O',
  'O',
  'F',
  'O',
  'C',
  'P',
  'K',
  'C',
  'V',
  'C',
  'F',
  'C',
  'S',
  'K',
  'C',
  'O',
  'V',
  'H',
  'V',
  'N',
  'V',
  'F',
  'S'
]

// let array = ["N", "N", "C", "B"];
let polymerTemplate = "VHCKBFOVCHHKOHBPNCKO";
let array = polymerTemplate.split("");
// console.log(testCase);

function numberOfCycles(n) {
  let temp = [array[0]];
  while (n > 0) {
    for (let i = 0; i < array.length-1; i++) {
      let originalPair = array[i] + array[i+1];
      console.log(originalPair);
      for (let j = 0; j < pairs.length; j++) {
        if (originalPair === pairs[j]) {
          temp.push(insertions[j]);
          temp.push(array[i+1]);
        }
      }
    }
    n--;
  }
  return temp;
}

// console.log(numberOfCycles(10));

let outcome = numberOfCycles(10);

// outcome.sort((a, b) => {
//   return ('' + a).localeCompare(b);
// });
console.log(outcome);

function getCount(array) {
  // let count = 1;
  // let tempCount = 0;
  // let item;
  // for (let i=0; i<array.length; i++)
  // {
  //   for (let j=i; j<array.length; j++)
  //   {
  //     if (array[i] === array[j])
  //       tempCount++;
  //     if (count<tempCount)
  //     {
  //       count=tempCount;
  //       item = array[i];
  //     }
  //   }
  //   tempCount=0;
  // }
  // return (`Item: ${item} count: ${count}`);
  let count_b = 0;
  let count_c = 0;
  let count_f = 0;
  let count_h = 0;
  let count_k = 0;
  let count_n = 0;
  let count_p = 0;
  let count_o = 0;
  let count_s = 0;
  let count_v = 0;

  array.map((char) => {
    switch (char) {
      case "B":
        count_b++;
        break;
      case "C":
        count_c++;
        break;
      case "F":
        count_f++;
        break;
      case "H":
        count_h++;
        break;
      case "K":
        count_k++;
        break;
      case "N":
        count_n++;
        break;
      case "P":
        count_p++;
        break;
      case "O":
        count_o++;
        break;
      case "S":
        count_s++;
        break;
      case "V":
        count_v++;
        break;
    }
  })
  return [count_b, count_c, count_f, count_h,  count_k, count_n, count_p, count_o, count_s, count_v];
}


// BCFHKNPOV

console.log(getCount(outcome));

