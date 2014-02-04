File.open("t00.csv","w") { |f|
  (1..35).each { |i|
    f.write "," unless i%5==1
    f.write i
    f.write "\n" if i%5==0
  }
}
