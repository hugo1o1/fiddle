
const heapSort = (arr) => {

  let N = arr.length

  const sink = (k) => {
    while (2 * k <= N) {
      let j = 2 * k
      if (j < N && less(j, j + 1)) j++
      if (!less(k, j)) break
      exch(k, j)
      k = j
    }
  }

  const exch = (a, b) => {
    [arr[a - 1], arr[b - 1]] = [arr[b - 1], arr[a - 1]]
  }

  const less = (a, b) => {
    return arr[a - 1] && arr[b - 1] && arr[a - 1] < arr[b - 1]
  }

  //通过下沉构造堆 构建大根堆
  for (let k = Math.floor(N / 2); k >= 1; k--) {
    sink(k)
  }

  // 将根结点和最后一个节点交换
  while (N > 1) {
    exch(1, N--)
    sink(1)
  }

}

const arr = [5, 2, 1, 3, 12]

heapSort(arr)
console.log(arr);
