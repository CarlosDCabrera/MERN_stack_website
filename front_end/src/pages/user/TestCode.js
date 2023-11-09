

var isAnagram = function(s, t) {
  const sCharArray = s.split('').sort();
  const tCharArray = t.split('').sort();
  if (sCharArray == tCharArray) {
      console.log(sCharArray);
      console.log(tCharArray);
      return true;
  }
  return false;
};

isAnagram('anagram', 'nagaram');
