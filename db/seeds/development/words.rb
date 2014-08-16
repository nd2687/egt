1.upto(300) do |idx|
  word = Word.new(
    english: "e-taro#{idx}",
    japanese: "j-太郎#{idx}",
    user_id: 1
  )
  word.save
end

1.upto(300) do |idx|
  word = Word.new(
    english: "e-alice#{idx}",
    japanese: "j-アリス#{idx}",
    user_id: 2
  )
  word.save
end
