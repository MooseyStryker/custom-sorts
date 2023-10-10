const ageSort = (users) => users.sort((a,b) => a.age - b.age)


function oddEvenSort(arr) {
  arr.sort((a,b) => {
    if(a % 2 !== 0 && b % 2 === 0) {
      return -1
    } else if (a % 2 === 0 && b % 2 !==0) {
      return 1
    } else {
      return a - b
    }
  })
  return arr
}

function validAnagrams(s, t) {
  if (s.length !== t.length) return false

  let sortedS = s.split('').sort().join('')
  let sortedT = t.split('').sort().join('')

  if (sortedS === sortedT) {
    return true
  }
}


function reverseBaseSort(arr) {
  arr.sort((a, b) => {
    const base1 = Math.floor(Math.log10(a))
    const base2 = Math.floor(Math.log10(b))
    if(base1 > base2) {
      return -1
    } else if (base2 > base1) {
      return 1
    } else {
        return a - b
    }
  })
  return arr;
}

function frequencySort(arr) {
  let frequencyArr = []
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (frequencyArr[value]) {
      frequencyArr[value]++
    } else {
      frequencyArr[value] = 1
    }
  }

  arr.sort((a, b) => {
    if(frequencyArr[a] !== frequencyArr[b]) {
      return frequencyArr[a] - frequencyArr[b]
    }
    return b - a
  })
  return arr
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
