Awesome Project is an app which first of all brings BuzzFeed articles to life. What we pride in (MAIN FUNCTIONALITY) is once you click on the BuzzFeed article, it will render markers on the map so that the user can have a sense if they can/cannot eat at one of those establishments. (SUB FUNCTIONALITES) We also have an option to browse for food places based on moood. (Feast Mode, Healthy, Sweet Tooth, 4THEGRAM, Diabeties, Food Challenges,etc.)

Though Process of Backend - On HomeTab.js, each CardComponent/Article will have a List/Array of resturants appropriate for the article. When clicked upon, it will pass the list/array through Yelp API to generate the longtitude/latitude of multiple establishments beloning to the list/array. Furthermore, the location information will be tossed into MapView.Marker and will generate multiple markers on the map. Most of the project will follow this type of information transfer. 


TODO LIST/PROBLEMS
***** <- HIGH PRIORITY

General
  - Backend structure; how information is being transferred/delivered.*****

*****MainScreen.js *****
  - 61: Icon onPress() to display a MapTab. *****

*****HomeTab.js*****
  - When you click on the ArticleTitle pull up the MapTab with rendered markers.*****
  - Swipe left and display article. Similar to Reminders on iOS. (Tab View Slide)*****
  - load up images based on url instead*****

*****SearchTab.js*****
  - Initial Display: Have a grid of icons based on mood.*****
  - When you click on one of the icons, render a list of resturants on the map (I choose which resturants get listed) associated with that mood. (I make a list of resturants that get displayed). Have a custom pull up/down call out view that shows a list of the places. *****
 
VideoTab.js
  - Show BuzzFeed Worth it Videos, just videos like $8 Pasta vs $100.

SocialTab.js
  - show Instagram feed of people who use #appname

ProfileTab.js
  -have functionality of bookmarked places

