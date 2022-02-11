const compound = (year,percent, base, add)=>{
  let  sum = base*(1+percent)
    for (let i = 0; i < year; i++) {
      sum +=add +(sum+add)*percent
    }
    return sum
}

