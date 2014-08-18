1.upto(10000) do |idx|
  word = Word.new(
    english: "taro#{idx}",
    japanese: "太郎",
    user_id: 1
  )
  word.save!
end

1.upto(300) do |idx|
  word = Word.new(
    english: "alice#{idx}",
    japanese: "アリス",
    user_id: 2
  )
  word.save!
end
