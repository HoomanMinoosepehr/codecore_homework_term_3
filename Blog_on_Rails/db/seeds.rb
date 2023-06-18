# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# require 'factory_bot_rails'
# require '../spec/factories/users.rb'

User.destroy_all
Post.destroy_all

User.create(name:"Hooman Minoosepehr", email:"hooman@minoo.com", password:'12345', password_confirmation:'12345', admin: true)

10.times do
    user = User.create(name: Faker::Name.name, email: Faker::Internet.unique.email, password: '12345', password_confirmation: '12345')
    7.times do
        Post.create(
            title: Faker::Lorem.unique.sentence,
            body: Faker::Lorem.characters(number: 55),
            user: user
        )
    end
end


# 60.times do
#     Post.create(
#         title: Faker::Lorem.unique.sentence,
#         body: Faker::Lorem.paragraph_by_chars(min_chars: 55)
#     )
# end