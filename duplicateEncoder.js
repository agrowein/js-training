function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map((c, i, a) => (a.indexOf(c) == a.lastIndexOf(c) ? '(':')'))
      .join('');
}