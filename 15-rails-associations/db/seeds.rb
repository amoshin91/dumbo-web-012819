# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BloodOath.destroy_all
Cult.destroy_all
Follower.destroy_all


flatiron = Cult.create(name: "Flatiron School", holy_text: "the Ruby Docs")
we = Cult.create(name: "WeWork", holy_text: "Fruit Water")
pop = Cult.create(name: "That Pop Life", holy_text: "the lyrics to \"God is a Woman\"")


michelle = Follower.create(name: "Michelle Pathe", image_url: "https://i.imgur.com/QrI40Pf.jpg")
angelo = Follower.create(name: "Angelo Spampinato", image_url: "https://i.imgur.com/jJ4AQKH.jpg")
ariana = Follower.create(name: "Ariana Grande", image_url: "https://media.giphy.com/media/X74GnDjzE7bkwVqAUC/giphy.gif")
matt = Follower.create(name: "Matthew Ralston McAlister III", image_url: "https://i.imgur.com/oWaaHRr.jpg")
tom = Follower.create(name: "Tom", image_url: "https://media2.giphy.com/media/13Qumr2SLqrl5e/giphy.gif")

BloodOath.create(follower: angelo, cult: flatiron)
BloodOath.create(follower: ariana, cult: pop)
BloodOath.create(follower: matt, cult: flatiron)
BloodOath.create(follower: matt, cult: we)
BloodOath.create(follower: michelle, cult: flatiron)
BloodOath.create(follower: michelle, cult: we)
BloodOath.create(follower: tom, cult: we)

