1.upto(300) do |idx|
  word = Word.new(
    japanese: "j-taro#{idx}",
    english: "e-taro#{idx}",
    user_id: 1
  )
  word.save
end

1.upto(300) do |idx|
  word = Word.new(
    japanese: "j-alice#{idx}",
    english: "e-alice#{idx}",
    user_id: 2
  )
  word.save
end
