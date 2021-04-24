// Recipes list

const recipes = [
  {
    id: 1,
    title: "Bastani Irani",
    description: "This fragrant ice cream is redolent with flavor. It’s traditionally served between two thin wafers to make ice cream sandwiches but it’s equally delicious on its own.",
    imageUrl: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "6 large egg yolks",
      "1 1/2 cups heavy cream",
      "1 1/2 cups whole milk",
      "3/4 cup sugar "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 2,
    title: "Vanilla-Almond",
    description: "F&W’s Justin Chapple doesn’t use an ice cream maker for this sweet and creamy custard-based ice cream",
    imageUrl: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3JlYW18ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "6 large egg yolks",
      "1 1/2 cups heavy cream",
      "1 1/2 cups whole milk",
      "3/4 cup sugar "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 3,
    title: "Vanilla Bean",
    description: "This exceptionally creamy ice cream relies on two unexpected ingredients: corn starch (to help thicken it) and cream cheese (to make it scoopable)",
    imageUrl: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlJTIwY3JlYW18ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "2 cups whole milk",
      "1 tablespoon plus 1 teaspoon cornstarch",
      "1 1/2 ounces cream cheese, softened (3 tablespoons)",
      "1 1/4 cups heavy cream "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 4,
    title: "Coffe",
    description: "Creamy, cold and caffeinated, this ice cream is everything your morning iced coffee should be. Decaffeinated coffee beans work well here too.",
    imageUrl: "https://images.unsplash.com/photo-1586590830950-2f308452eebc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "4 large egg yolks",
      "1/2 cup whole coffee beans",
      "2 cups heavy cream",
      "1 cup half-and-half "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 5,
    title: "Strawberry, Lemon",
    description: "Fresh strawberry sauce and refreshing lemon sorbet make these giant sundaes a delightful early summer treat",
    imageUrl: "https://images.unsplash.com/photo-1596962680524-5116314fb8ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "1 pound strawberries",
      "¼ cup granulated sugar",
      "1 tablespoon fresh orange juice",
      "½ teaspoon pure vanilla extract "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 6,
    title: "Bonbon Pops",
    description: "You will need a small, half-ounce ice cream scoop to make these pops, which were inspired by movie-theater snacks.",
    imageUrl: "https://images.unsplash.com/photo-1507750549272-e58742b1df80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "Crushed popcorn",
      "1 pint vanilla ice cream, or your favorite flavor",
      "About eighteen 4-inch lollipop sticks",
      "Crushed candy, such as Sno-Caps, Whoppers, Skittles and M&M’s "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 7,
    title: "Roasted Peaches",
    description: "Every house has an herb garden, says Daniel Humm of Ticino, the southern region of Switzerland. Accordingly, he infuses roasted peaches with honey-rosemary syrup",
    imageUrl: "https://images.unsplash.com/photo-1583130879758-db8ac95a9b68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "4 large egg yolks",
      "3/4 cup plus 2 tablespoons sugar",
      "2 cups whole milk",
      "1 cup mascarpone (7 ounces) "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 8,
    title: "Easy Banana",
    description: "In a blender, puree the bananas with the milk, sugar, vanilla, and salt until smooth",
    imageUrl: "https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "3 ripe bananas",
      "1 1/4 cups whole milk",
      "1/3 cup sugar",
      "1 teaspoon pure vanilla extract "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 9,
    title: "Peach-Maple",
    description: "In a blender, puree the bananas with the milk, sugar, vanilla, and salt until smooth",
    imageUrl: "https://images.unsplash.com/photo-1541996275318-4890e83660a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "3/4 pound ripe peaches",
      "1 tablespoon fresh lemon juice",
      "1 cup heavy cream",
      "1/2 cup milk "
    ],
    type: 'store',
    isFav: false
  },
  {
    id: 10,
    title: "Ricotta",
    description: "For an unusual but exceptionally easy dessert, soften a pint of vanilla ice cream, mix it with ricotta and honey, and then refreeze it.",
    imageUrl: "https://images.unsplash.com/photo-1593250186288-f06f69859f8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ingredients: [
      "¾ cup sliced almonds",
      "1 pint vanilla ice cream",
      "1 ½ cups ricotta cheese",
      "½ cup honey "
    ],
    type: 'store',
    isFav: false
  }
];

const privateRecipe = {
  description: "Brown butter, made by warming butter in a skillet until deeply golden, adds a wonderful nutty flavor to this chunky, streusel-like topping.",
  title: 'Brown Butter',
  imageUrl: "https://images.unsplash.com/photo-1588315028883-03fb2cd1462c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ingredients: [
    " 1 stick plus 6 tablespoons unsalted butter",
    " 1/2 cup granulated sugar",
    " 1 1/2 cups all-purpose flour",
    " 3/4 cup dark brown sugar "
  ]
}
