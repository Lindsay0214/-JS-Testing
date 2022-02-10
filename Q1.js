// Function called fibonacci
// Parameter called position
// Position means number value in fibonacci sequence 
// Expected output
// fibonacci(0) // 0
// fibonacci(1) // 1
// fibonacci(2) // 1
// fibonacci(3) // 2
// fibonacci(4) // 3 


function fibonacci(position) {
  // --- 因為位置與值相同
  if (position < 2) {
    return position;
  }
  const arr = [0, 1]
  // ---

  // 迴圈跑值，同上所以初始值設 2
  for (let i = 2; i <= position; i++) {
      // 費氏數列值の公式
      arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[position]
}
