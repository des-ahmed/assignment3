# assignment3
Narrow Down Your Chinese Menu Choice
This project provides a simple tool to help users narrow down their Chinese menu choices. By entering keywords, users can filter out the dishes they don't want, simplifying the decision-making process.

Features:
Search Bar: Users can type any keyword related to dishes they want.
Instant Filtering: As users type, the menu list filters in real-time to show only dishes related to the keywords entered.
Removal Option: Post search, users can manually remove dishes they are not interested in, further refining the list.
Implementation:
AngularJS: This web app is built using AngularJS. The main components include:
NarrowItDownApp: Main application module.
NarrowItDownController: Controller handling search functionality.
MenuSearchService: Service that communicates with the REST API to fetch menu items.
foundItems directive: A directive to display the list of filtered items.
How to Run:
Clone the repository to your local machine.
Open the index.html file in a web browser.
Start typing in the search bar to narrow down your menu choices!
Dependencies:
AngularJS
Bootstrap for styling.
Future Enhancements:
Add more details for each dish, like ingredients and preparation time.
Implement user accounts for saving favorite dishes.
