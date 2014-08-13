%w(taro alice).each do |name|
  user = User.new(
    email: "#{name}@example.com",
    password: "#{name}pass",
    password_confirmation: "#{name}pass",
    uid: User.create_unique_string
  )
  user.save
end
