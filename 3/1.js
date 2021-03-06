//  const input = 265149;
  const input = 265150;
  var step = 8;
  var current = 8;

/*
  145 144 143 142 141 140 139 138 137 136 135 134 133

  146 101 100  99  98  97  96  95  94  93  92  91 132

  147 102  65  64  63  62  61  60  59  58  57  90 131

  148 103  66  37  36  35  34  33  32  31  56  89 130

  149 104  67  38  17  16  15  14  13  30  55  88 129

  150 105  68  39  18   5   4   3  12  29  54  87 128

  151 106  69  40  19   6   1   2  11  28  53  86 127

  152 107  70  41  20   7   8   9  10  27  52  85 126

  153 108  71  42  21  22  23  24  25  26  51  84 125

  154 109  72  43  44  45  46  47  48  49  50  83 124

  155 110  73  74  75  76  77  78  79  80  81  82 123

  156 111 112 113 114 115 116 117 118 119 120 121 122

  157 158 159 160 161 162 163 164 165 166 167 168 169 170
*/

  var last = 1;     // The previous int to this ring
  var moves = 0;    // How many moves an int takes
  var max = 0;      // Max a ring can get to
  var realmax = 0;
  var count = 0;    // How many up/downs
  var updown = false;

  for( var i = 0; i<input; i++ ){


    // Lets start
    if(moves){
      
      if(updown){ // If going up increase
        moves = moves+1;
      } else { // If going down decrease
        moves = moves-1;
      }

      // If max or half switch updown
      if(moves==realmax){
        updown = false;
      } else if( moves == (realmax/2) ){
        updown = true;
      }

    }
    
    if( i == ( current + last ) ){
      last = i;
      current = current+step;
      max = max+2;
      updown = false;
      realmax = max+2;
      
      console.log('NEXT');

      console.log('REAL i: '+i+' moves: '+moves);

      moves = realmax;

    } else {
      console.log('i: '+i+' moves: '+moves);
    }

  }