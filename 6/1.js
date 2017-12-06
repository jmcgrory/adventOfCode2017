  // Input
  var array = [ 4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5 ];

  // Array length var
  var aLength = array.length;

  // Bool for until repeated...
  var go = true;

  // How many revolutions
  var revs = 0;

  // History
  var hist = [];

  // While is not repeated...
  while(go){
    
    // Setup Loop Vars
    var max = Math.max.apply(null, array);
    var pos = array.indexOf(max);
    var currentPos = pos;
    var looping = true;
    var beans = max;
    array[pos] = 0;

    // Debug
    // console.log('max: '+max+', index: '+pos+', arr: '+array);

    // Loop it
    while( looping ){

      // On to
      currentPos++;

      // If we go past the edge
      if(currentPos==aLength){
        currentPos = 0;
      }

      // Debug
      // console.log('c position: '+currentPos+', c integer: '+array[currentPos]+', beans: '+beans);

      // If beans!
      if( beans ){
        beans--;
        array[currentPos]++;
      } else {
        looping = false;
      }
    }

    
    // Finally compare!
    if( hist.indexOf( array.toString() ) !== -1 ){
      go = false;
    } else {
      hist.push(array.toString());
    }
    revs++;
  }

  console.log(hist);
  console.log(array);
  console.log(revs);