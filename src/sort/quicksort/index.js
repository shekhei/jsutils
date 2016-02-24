function defaultPred(i, j) {
  return ( i < j ? 1 : -1 );
}
function quicksort(arr, start, end, pred) {

  if ( end === undefined ) { end = arr.length-1;}
  if ( start === undefined ) { start = 0; }
  if ( pred == undefined ) {
    pred = defaultPred;
  }
  function _partition(lo, hi) {
    var partition = arr[hi];
    var i = lo, j = lo, temp;
    for ( j = lo; j < hi; j++ ) {
      if ( pred(arr[j], partition) < 0 ) {
        swap(i, j);
        i++;
      }
    }
    swap(i, hi);
    return i;
  }
  function swap(i, j) {
    // arr[i] = arr[i] ^ arr[j];
    // arr[j] = arr[i] ^ arr[j];
    // arr[i] = arr[i] ^ arr[j];
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  function insertionsort(left, right) {
    if (right > left) {
      var j, temp, i = left+1;
      for (; i <= right; i++) {
        j = i;
        while(j > left && pred(arr[j], arr[j-1]) < 0 ) {
          swap(j-1, j);
          // arr.Swap(j-1, j)
          j--;
        }
      }
    }
  }
  function _quicksort(lo, hi) {
    while ( lo < hi ) {
      var p = _partition(lo, hi);
      if ( hi-lo < 10 ) {
          return insertionsort(lo, hi);
      } else {
          _quicksort(lo, p-1);
      }
      lo = p+1;
    }
  }
  return _quicksort(start, end);
}

export { quicksort };
