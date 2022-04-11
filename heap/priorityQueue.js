class MaxPQ {

  pq = []

  insert(k) {
    this.pq.push(k)
    this.size++
    this.swim(this.pq.length)
  }

  delMax() {
    const root = this.pq[0]
    this.exch(1, this.pq.length)
    this.pq.length = this.pq.length - 1
    this.sink(1)
    return root
  }

  less(a, b) {
    return this.pq[a - 1] && this.pq[b - 1] && this.pq[a - 1] < this.pq[b - 1]
  }
  exch(a, b) {
    [this.pq[a - 1], this.pq[b - 1]] = [this.pq[b - 1], this.pq[a - 1]]
  }

  sink(k) {
    while (2 * k < this.pq.length) {
      let j = 2 * k
      if (this.less(j, j + 1)) j++
      if (!this.less(k, j)) break
      this.exch(k, j)
      k = j
    }
  }
  swim(i) {
    while (Math.floor(i / 2) >= 1) {
      let j = Math.floor(i / 2)
      if (this.less(i, j)) break
      this.exch(i, j)
      i = j
    }
  }
}


class MinPQ {

  pq = []

  insert(k) {
    this.pq.push(k)
    this.size++
    this.swim(this.pq.length)
  }

  delMin() {
    const root = this.pq[0]
    this.exch(1, this.pq.length)
    this.pq.length = this.pq.length - 1
    this.sink(1)
    return root
  }

  less(a, b) {
    return this.pq[a - 1] && this.pq[b - 1] && this.pq[a - 1] < this.pq[b - 1]
  }
  exch(a, b) {
    [this.pq[a - 1], this.pq[b - 1]] = [this.pq[b - 1], this.pq[a - 1]]
  }

  sink(k) {
    while (2 * k < this.pq.length) {
      let j = 2 * k
      if (this.less(j + 1, j)) j++
      if (!this.less(j, k)) break
      this.exch(k, j)
      k = j
    }
  }
  swim(i) {
    while (Math.floor(i / 2) >= 1) {
      let j = Math.floor(i / 2)
      if (this.less(j, i)) break
      this.exch(i, j)
      i = j
    }
  }
}



// const mpq = new MaxPQ()
// mpq.insert(8)
// mpq.insert(3)
// mpq.insert(5)

// console.log(mpq.delMax());
// mpq.insert(6)
// mpq.insert(7)
// console.log(mpq.pq);
// console.log(mpq.delMax());


// console.log(mpq.pq)



const mpq = new MinPQ()
mpq.insert(8)
mpq.insert(3)
mpq.insert(5)

console.log(mpq.delMin());
mpq.insert(6)
mpq.insert(7)
console.log(mpq.pq);
console.log(mpq.delMin());


console.log(mpq.pq)