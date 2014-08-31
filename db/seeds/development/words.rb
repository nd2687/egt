1.upto(10000) do |idx|
  word = Word.new(
    english: "example#{idx}",
    japanese: "テスト",
    user_id: 1,
    complete: idx%2 == 0
  )
  word.save!
end

1.upto(300) do |idx|
  word = Word.new(
    english: "alice#{idx}",
    japanese: "アリス",
    user_id: 2,
    complete: idx%2 == 0
  )
  word.save!
end
