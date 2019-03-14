# fetch CRUD

## Learning Goals
* Explain what a SPA is
* Build out full CRUD in our app using fetch
* Manipulate the DOM in conjunction with our CRUD fetch calls
* Explain Optimistic vs Pessimistic Rendering

*BONUS*
* Refactor our code
* Walk through breakpoints / debugger

## Our App So Far
As a user I now have...
* nicer styling on my app
* my list of nice compliments added
* the ability to add a "hug" to a compliment and see my hug count go up accordingly
* the ability to add my own compliments
* the ability to delete a compliment (I want a trashcan)
* the ability to favorite the best compliments (clicking favorite adds an `angelo-parrot` next to the favorite button)
* random nicolas cage gifs instead of cute cats

*REVEIW*

* the ability to save all of my data about my compliments
* the ability to use my saved data to create all of my compliments from


# Deliverables
As a user I want to...
* create new compliments and have them save to my database
* update my hug count and have it save to my database
* delete a compliment and have it save to my database
* favorite a compliment and have it save to the database


## Setup
To use this backend run these commands:
* `cd complimentor-api`
* `bundle`
* `rails db:migrate`
* `rails db:seed`
* `rails s`

Once you have the rails server running checkout `localhost:3000/compliments` (you can also look at `localhost:3000/rails/info/routes` on any rails app to see your available routes)
