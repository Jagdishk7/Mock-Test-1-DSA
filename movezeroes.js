function zeroMove(nums) {
    let zeroC = 0;
    const n = nums.length;
  
    for (let i = 0; i < n; i++) {
      nums[i] !== 0 ? nums[i - zeroC] = nums[i]: zeroC++;
    }
  
    for (let i = n - zeroC; i < n; i++) {
      nums[i] = 0;
    }
  
    console.log(nums)
  }

let nums = [0, 1, 0, 3, 12];
zeroMove(nums);
