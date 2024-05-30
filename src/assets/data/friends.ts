
const dummyData = [
  {
    friendName: "Alice",
    id:1,
    photo:"https://ibb.co/741RPZJ",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Hello world!",
        likes: 10,
        comments: [
          { id: 1, text: "Nice post!", user: "Bob" },
          { id: 2, text: "Keep it up!", user: "Charlie" }
        ],
        postedAt: new Date("2023-05-01T08:00:00Z")
      },
      {
        id: 2,
        photos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        message: "Enjoying my day off!",
        likes: 5,
        comments: [
          { id: 1, text: "Looks fun!", user: "Eve" }
        ],
        postedAt: new Date("2023-05-02T10:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Alice!", user: "You", timestamp: new Date("2023-05-01T08:05:00Z") },
      { id: 2, text: "Hi! How are you?", user: "Alice", timestamp: new Date("2023-05-01T08:06:00Z") },
      { id: 3, text: "I'm good, thanks! What about you?", user: "You", timestamp: new Date("2023-05-01T08:07:00Z") },
      { id: 4, text: "Doing well!", user: "Alice", timestamp: new Date("2023-05-01T08:08:00Z") },
      { id: 5, text: "What's new?", user: "You", timestamp: new Date("2023-05-01T08:09:00Z") },
      { id: 6, text: "Not much, just working on a new project.", user: "Alice", timestamp: new Date("2023-05-01T08:10:00Z") },
      { id: 7, text: "That sounds interesting!", user: "You", timestamp: new Date("2023-05-01T08:11:00Z") },
      { id: 8, text: "Yes, it is!", user: "Alice", timestamp: new Date("2023-05-01T08:12:00Z") },
      { id: 9, text: "Let's catch up soon.", user: "You", timestamp: new Date("2023-05-01T08:13:00Z") },
      { id: 10, text: "Sure, looking forward to it!", user: "Alice", timestamp: new Date("2023-05-01T08:14:00Z") }
    ]
  },
  {
    id:2,
    friendName: "Bob",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Coding all night!",
        likes: 15,
        comments: [
          { id: 1, text: "Impressive!", user: "Alice" },
          { id: 2, text: "Keep it going!", user: "Charlie" }
        ],
        postedAt: new Date("2023-05-03T12:45:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Bob!", user: "You", timestamp: new Date("2023-05-03T12:50:00Z") },
      { id: 2, text: "Hello! What's up?", user: "Bob", timestamp: new Date("2023-05-03T12:51:00Z") }
    ]
  },
  {
    friendName: "Charlie",
    id:25,
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        message: "Weekend getaway!",
        likes: 20,
        comments: [
          { id: 1, text: "Beautiful place!", user: "Alice" },
          { id: 2, text: "Enjoy your time!", user: "Bob" }
        ],
        postedAt: new Date("2023-05-04T15:20:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hi Charlie!", user: "You", timestamp: new Date("2023-05-04T15:25:00Z") },
      { id: 2, text: "Hey! How's it going?", user: "Charlie", timestamp: new Date("2023-05-04T15:26:00Z") }
    ]
  },
  {
    id:3,
    friendName: "David",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Trying out a new recipe!",
        likes: 12,
        comments: [
          { id: 1, text: "Looks delicious!", user: "Alice" },
          { id: 2, text: "What's the recipe?", user: "Charlie" }
        ],
        postedAt: new Date("2023-05-05T17:15:00Z")
      },
      {
        id: 2,
        photos: ["https://via.placeholder.com/150"],
        message: "Movie night with friends!",
        likes: 18,
        comments: [
          { id: 1, text: "Which movie did you watch?", user: "Alice" },
          { id: 2, text: "Sounds fun!", user: "Eve" }
        ],
        postedAt: new Date("2023-05-07T20:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey David!", user: "You", timestamp: new Date("2023-05-05T17:16:00Z") },
      { id: 2, text: "Hi! What are you cooking?", user: "David", timestamp: new Date("2023-05-05T17:17:00Z") },
      { id: 3, text: "Yes, it's a new pasta dish.", user: "David", timestamp: new Date("2023-05-05T17:18:00Z") },
      { id: 4, text: "Sounds tasty!", user: "You", timestamp: new Date("2023-05-05T17:19:00Z") },
      { id: 5, text: "It turned out pretty good.", user: "David", timestamp: new Date("2023-05-05T17:20:00Z") },
      { id: 6, text: "Would love to try it sometime.", user: "You", timestamp: new Date("2023-05-05T17:21:00Z") },
      { id: 7, text: "Sure, I'll share the recipe.", user: "David", timestamp: new Date("2023-05-05T17:22:00Z") },
      { id: 8, text: "Thanks!", user: "You", timestamp: new Date("2023-05-05T17:23:00Z") },
      { id: 9, text: "You're welcome!", user: "David", timestamp: new Date("2023-05-05T17:24:00Z") },
      { id: 10, text: "How's your day going?", user: "You", timestamp: new Date("2023-05-05T17:25:00Z") }
    ]
  },
  {
    id:4,
    friendName: "Eve",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Movie night with friends!",
        likes: 18,
        comments: [
          { id: 1, text: "Which movie did you watch?", user: "Alice" },
          { id: 2, text: "Sounds fun!", user: "David" }
        ],
        postedAt: new Date("2023-05-07T20:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Eve!", user: "You", timestamp: new Date("2023-05-07T20:35:00Z") },
      { id: 2, text: "Hi! We watched Inception.", user: "Eve", timestamp: new Date("2023-05-07T20:36:00Z") },
      { id: 3, text: "Great choice!", user: "You", timestamp: new Date("2023-05-07T20:37:00Z") },
      { id: 4, text: "Yes, it's one of my favorites.", user: "Eve", timestamp: new Date("2023-05-07T20:38:00Z") },
      { id: 5, text: "Mine too!", user: "You", timestamp: new Date("2023-05-07T20:39:00Z") },
      { id: 6, text: "Did you enjoy it?", user: "You", timestamp: new Date("2023-05-07T20:40:00Z") },
      { id: 7, text: "Yes, it was a great movie!", user: "Eve", timestamp: new Date("2023-05-07T20:41:00Z") },
      { id: 8, text: "Glad to hear that!", user: "You", timestamp: new Date("2023-05-07T20:42:00Z") },
      { id: 9, text: "We should watch it together sometime.", user: "Eve", timestamp: new Date("2023-05-07T20:43:00Z") },
      { id: 10, text: "Definitely!", user: "You", timestamp: new Date("2023-05-07T20:44:00Z") }
    ]
  },
  {
    id:5,
    friendName: "Frank",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "New hiking adventure!",
        likes: 25,
        comments: [
          { id: 1, text: "Amazing view!", user: "Alice" },
          { id: 2, text: "Where is this?", user: "Charlie" }
        ],
        postedAt: new Date("2023-05-10T14:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Frank!", user: "You", timestamp: new Date("2023-05-10T14:05:00Z") },
      { id: 2, text: "Hi! It's in the Rockies.", user: "Frank", timestamp: new Date("2023-05-10T14:06:00Z") },
      { id: 3, text: "Looks breathtaking!", user: "You", timestamp: new Date("2023-05-10T14:07:00Z") },
      { id: 4, text: "Yes, it's one of my favorite spots.", user: "Frank", timestamp: new Date("2023-05-10T14:08:00Z") },
      { id: 5, text: "Would love to visit there.", user: "You", timestamp: new Date("2023-05-10T14:09:00Z") },
      { id: 6, text: "You should plan a trip!", user: "Frank", timestamp: new Date("2023-05-10T14:10:00Z") },
      { id: 7, text: "I'll definitely consider it.", user: "You", timestamp: new Date("2023-05-10T14:11:00Z") },
      { id: 8, text: "Let me know if you do!", user: "Frank", timestamp: new Date("2023-05-10T14:12:00Z") },
      { id: 9, text: "Sure, I will!", user: "You", timestamp: new Date("2023-05-10T14:13:00Z") },
      { id: 10, text: "How's your week going?", user: "Frank", timestamp: new Date("2023-05-10T14:14:00Z") }
    ]
  },
  {
    id:6,
    friendName: "Grace",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Celebrating graduation!",
        likes: 30,
        comments: [
          { id: 1, text: "Congratulations!", user: "David" },
          { id: 2, text: "You did it!", user: "Eve" }
        ],
        postedAt: new Date("2023-05-15T18:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Grace!", user: "You", timestamp: new Date("2023-05-15T18:35:00Z") },
      { id: 2, text: "Hi! Thank you!", user: "Grace", timestamp: new Date("2023-05-15T18:36:00Z") },
      { id: 3, text: "How does it feel to graduate?", user: "You", timestamp: new Date("2023-05-15T18:37:00Z") },
      { id: 4, text: "It feels amazing!", user: "Grace", timestamp: new Date("2023-05-15T18:38:00Z") },
      { id: 5, text: "I'm so happy for you!", user: "You", timestamp: new Date("2023-05-15T18:39:00Z") },
      { id: 6, text: "Thank you for your support.", user: "Grace", timestamp: new Date("2023-05-15T18:40:00Z") },
      { id: 7, text: "What are your plans now?", user: "You", timestamp: new Date("2023-05-15T18:41:00Z") },
      { id: 8, text: "I'm looking for job opportunities.", user: "Grace", timestamp: new Date("2023-05-15T18:42:00Z") },
      { id: 9, text: "Wishing you the best of luck!", user: "You", timestamp: new Date("2023-05-15T18:43:00Z") },
      { id: 10, text: "Thank you so much!", user: "Grace", timestamp: new Date("2023-05-15T18:44:00Z") }
    ]
  },
  {
    id:7,
    friendName: "Harry",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Exciting travel adventure!",
        likes: 22,
        comments: [
          { id: 1, text: "Where are you off to?", user: "Alice" },
          { id: 2, text: "Have a great time!", user: "David" }
        ],
        postedAt: new Date("2023-05-20T11:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Harry!", user: "You", timestamp: new Date("2023-05-20T11:05:00Z") },
      { id: 2, text: "Hi! Heading to Italy.", user: "Harry", timestamp: new Date("2023-05-20T11:06:00Z") },
      { id: 3, text: "Sounds amazing!", user: "You", timestamp: new Date("2023-05-20T11:07:00Z") },
      { id: 4, text: "Yes, I'm looking forward to it.", user: "Harry", timestamp: new Date("2023-05-20T11:08:00Z") },
      { id: 5, text: "Enjoy the food!", user: "You", timestamp: new Date("2023-05-20T11:09:00Z") },
      { id: 6, text: "Definitely will!", user: "Harry", timestamp: new Date("2023-05-20T11:10:00Z") },
      { id: 7, text: "Do you have any recommendations?", user: "You", timestamp: new Date("2023-05-20T11:11:00Z") },
      { id: 8, text: "Yes, I'll share some.", user: "Harry", timestamp: new Date("2023-05-20T11:12:00Z") },
      { id: 9, text: "Thanks!", user: "You", timestamp: new Date("2023-05-20T11:13:00Z") },
      { id: 10, text: "You're welcome!", user: "Harry", timestamp: new Date("2023-05-20T11:14:00Z") }
    ]
  },
  {
    id:8,
    friendName: "Ivy",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Attending a music festival!",
        likes: 28,
        comments: [
          { id: 1, text: "Which band is playing?", user: "David" },
          { id: 2, text: "Enjoy the music!", user: "Frank" }
        ],
        postedAt: new Date("2023-05-25T19:45:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Ivy!", user: "You", timestamp: new Date("2023-05-25T19:50:00Z") },
      { id: 2, text: "Hi! It's a local band.", user: "Ivy", timestamp: new Date("2023-05-25T19:51:00Z") },
      { id: 3, text: "Sounds fun!", user: "You", timestamp: new Date("2023-05-25T19:52:00Z") },
      { id: 4, text: "Yes, I'm excited!", user: "Ivy", timestamp: new Date("2023-05-25T19:53:00Z") },
      { id: 5, text: "Are you going with friends?", user: "You", timestamp: new Date("2023-05-25T19:54:00Z") },
      { id: 6, text: "Yes, a few of us are going together.", user: "Ivy", timestamp: new Date("2023-05-25T19:55:00Z") },
      { id: 7, text: "Have a great time!", user: "You", timestamp: new Date("2023-05-25T19:56:00Z") },
      { id: 8, text: "Thank you!", user: "Ivy", timestamp: new Date("2023-05-25T19:57:00Z") },
      { id: 9, text: "Let me know how it goes.", user: "You", timestamp: new Date("2023-05-25T19:58:00Z") },
      { id: 10, text: "I will!", user: "Ivy", timestamp: new Date("2023-05-25T19:59:00Z") }
    ]
  },
  {
    id:9,
    friendName: "Jack",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Exploring new cafes!",
        likes: 16,
        comments: [
          { id: 1, text: "Which cafe is this?", user: "Alice" },
          { id: 2, text: "Looks cozy!", user: "Grace" }
        ],
        postedAt: new Date("2023-05-30T10:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Jack!", user: "You", timestamp: new Date("2023-05-30T10:05:00Z") },
      { id: 2, text: "Hi! It's a new cafe in town.", user: "Jack", timestamp: new Date("2023-05-30T10:06:00Z") },
      { id: 3, text: "Looks nice!", user: "You", timestamp: new Date("2023-05-30T10:07:00Z") },
      { id: 4, text: "Yes, I like the ambiance.", user: "Jack", timestamp: new Date("2023-05-30T10:08:00Z") },
      { id: 5, text: "What did you order?", user: "You", timestamp: new Date("2023-05-30T10:09:00Z") },
      { id: 6, text: "I tried their specialty coffee.", user: "Jack", timestamp: new Date("2023-05-30T10:10:00Z") },
      { id: 7, text: "Was it good?", user: "You", timestamp: new Date("2023-05-30T10:11:00Z") },
      { id: 8, text: "Yes, it was delicious.", user: "Jack", timestamp: new Date("2023-05-30T10:12:00Z") },
      { id: 9, text: "I'll have to visit sometime.", user: "You", timestamp: new Date("2023-05-30T10:13:00Z") },
      { id: 10, text: "Sure, I can take you there.", user: "Jack", timestamp: new Date("2023-05-30T10:14:00Z") }
    ]
  },
  {
    id:10,
    friendName: "Kate",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Visiting a historical site!",
        likes: 19,
        comments: [
          { id: 1, text: "What's the history behind it?", user: "David" },
          { id: 2, text: "Interesting place!", user: "Frank" }
        ],
        postedAt: new Date("2023-06-05T13:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Kate!", user: "You", timestamp: new Date("2023-06-05T13:35:00Z") },
      { id: 2, text: "Hi! It's an ancient castle.", user: "Kate", timestamp: new Date("2023-06-05T13:36:00Z") },
      { id: 3, text: "That sounds fascinating!", user: "You", timestamp: new Date("2023-06-05T13:37:00Z") },
      { id: 4, text: "Yes, it has a lot of history.", user: "Kate", timestamp: new Date("2023-06-05T13:38:00Z") },
      { id: 5, text: "Have you been inside?", user: "You", timestamp: new Date("2023-06-05T13:39:00Z") },
      { id: 6, text: "Not yet, but I'm planning to explore it.", user: "Kate", timestamp: new Date("2023-06-05T13:40:00Z") },
      { id: 7, text: "Let me know how it goes.", user: "You", timestamp: new Date("2023-06-05T13:41:00Z") },
      { id: 8, text: "I will!", user: "Kate", timestamp: new Date("2023-06-05T13:42:00Z") },
      { id: 9, text: "Do you like visiting historical places?", user: "You", timestamp: new Date("2023-06-05T13:43:00Z") },
      { id: 10, text: "Yes, I find them very intriguing.", user: "Kate", timestamp: new Date("2023-06-05T13:44:00Z") }
    ]
  },
  {id:11,
    friendName: "Leo",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Trying out skydiving!",
        likes: 32,
        comments: [
          { id: 1, text: "That's so adventurous!", user: "Alice" },
          { id: 2, text: "How was the experience?", user: "Grace" }
        ],
        postedAt: new Date("2023-06-10T16:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Leo!", user: "You", timestamp: new Date("2023-06-10T16:05:00Z") },
      { id: 2, text: "Hi! It was exhilarating.", user: "Leo", timestamp: new Date("2023-06-10T16:06:00Z") },
      { id: 3, text: "I can imagine!", user: "You", timestamp: new Date("2023-06-10T16:07:00Z") },
      { id: 4, text: "Would you do it again?", user: "You", timestamp: new Date("2023-06-10T16:08:00Z") },
      { id: 5, text: "Definitely, it was unforgettable.", user: "Leo", timestamp: new Date("2023-06-10T16:09:00Z") },
      { id: 6, text: "Sounds like an amazing experience.", user: "You", timestamp: new Date("2023-06-10T16:10:00Z") },
      { id: 7, text: "Yes, it was thrilling.", user: "Leo", timestamp: new Date("2023-06-10T16:11:00Z") },
      { id: 8, text: "Have you ever tried skydiving?", user: "You", timestamp: new Date("2023-06-10T16:12:00Z") },
      { id: 9, text: "Not yet, but I'd love to.", user: "Leo", timestamp: new Date("2023-06-10T16:13:00Z") },
      { id: 10, text: "You should give it a try!", user: "Leo", timestamp: new Date("2023-06-10T16:14:00Z") }
    ]
  },
  {
    id:12,
    friendName: "Mia",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Volunteering at the animal shelter!",
        likes: 24,
        comments: [
          { id: 1, text: "That's so kind of you!", user: "David" },
          { id: 2, text: "Which animals are there?", user: "Frank" }
        ],
        postedAt: new Date("2023-06-15T17:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Mia!", user: "You", timestamp: new Date("2023-06-15T17:35:00Z") },
      { id: 2, text: "Hi! It's mostly dogs and cats.", user: "Mia", timestamp: new Date("2023-06-15T17:36:00Z") },
      { id: 3, text: "They must be adorable!", user: "You", timestamp: new Date("2023-06-15T17:37:00Z") },
      { id: 4, text: "Yes, they're all so loving.", user: "Mia", timestamp: new Date("2023-06-15T17:38:00Z") },
      { id: 5, text: "Do you volunteer often?", user: "You", timestamp: new Date("2023-06-15T17:39:00Z") },
      { id: 6, text: "I try to go whenever I can.", user: "Mia", timestamp: new Date("2023-06-15T17:40:00Z") },
      { id: 7, text: "That's really commendable.", user: "You", timestamp: new Date("2023-06-15T17:41:00Z") },
      { id: 8, text: "Thank you!", user: "Mia", timestamp: new Date("2023-06-15T17:42:00Z") },
      { id: 9, text: "How long have you been volunteering?", user: "You", timestamp: new Date("2023-06-15T17:43:00Z") },
      { id: 10, text: "For about two years now.", user: "Mia", timestamp: new Date("2023-06-15T17:44:00Z") }
    ]
  },
  {
    id:13,
    friendName: "Nora",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Trying out pottery!",
        likes: 18,
        comments: [
          { id: 1, text: "That looks creative!", user: "Charlie" },
          { id: 2, text: "Do you enjoy it?", user: "Eve" }
        ],
        postedAt: new Date("2023-06-20T15:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Nora!", user: "You", timestamp: new Date("2023-06-20T15:05:00Z") },
      { id: 2, text: "Hi! It's a fun activity.", user: "Nora", timestamp: new Date("2023-06-20T15:06:00Z") },
      { id: 3, text: "What inspired you to try pottery?", user: "You", timestamp: new Date("2023-06-20T15:07:00Z") },
      { id: 4, text: "I wanted to explore something new.", user: "Nora", timestamp: new Date("2023-06-20T15:08:00Z") },
      { id: 5, text: "Are you enjoying it so far?", user: "You", timestamp: new Date("2023-06-20T15:09:00Z") },
      { id: 6, text: "Yes, it's quite therapeutic.", user: "Nora", timestamp: new Date("2023-06-20T15:10:00Z") },
      { id: 7, text: "That sounds relaxing.", user: "You", timestamp: new Date("2023-06-20T15:11:00Z") },
      { id: 8, text: "It really is.", user: "Nora", timestamp: new Date("2023-06-20T15:12:00Z") },
      { id: 9, text: "Have you made anything interesting?", user: "You", timestamp: new Date("2023-06-20T15:13:00Z") },
      { id: 10, text: "A few small pots!", user: "Nora", timestamp: new Date("2023-06-20T15:14:00Z") }
    ]
  },
  {
    id:14,
    friendName: "Oliver",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Trying out a new recipe!",
        likes: 20,
        comments: [
          { id: 1, text: "What did you cook?", user: "Alice" },
          { id: 2, text: "Was it delicious?", user: "David" }
        ],
        postedAt: new Date("2023-06-25T12:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Oliver!", user: "You", timestamp: new Date("2023-06-25T12:35:00Z") },
      { id: 2, text: "Hi! I made lasagna.", user: "Oliver", timestamp: new Date("2023-06-25T12:36:00Z") },
      { id: 3, text: "That sounds delicious!", user: "You", timestamp: new Date("2023-06-25T12:37:00Z") },
      { id: 4, text: "It turned out really well.", user: "Oliver", timestamp: new Date("2023-06-25T12:38:00Z") },
      { id: 5, text: "Did you enjoy making it?", user: "You", timestamp: new Date("2023-06-25T12:39:00Z") },
      { id: 6, text: "Yes, it was a fun process.", user: "Oliver", timestamp: new Date("2023-06-25T12:40:00Z") },
      { id: 7, text: "Do you cook often?", user: "You", timestamp: new Date("2023-06-25T12:41:00Z") },
      { id: 8, text: "I try different recipes occasionally.", user: "Oliver", timestamp: new Date("2023-06-25T12:42:00Z") },
      { id: 9, text: "That's great!", user: "You", timestamp: new Date("2023-06-25T12:43:00Z") },
      { id: 10, text: "Thanks!", user: "Oliver", timestamp: new Date("2023-06-25T12:44:00Z") }
    ]
  },
  {
    id:15,
    friendName: "Paul",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Attending a tech conference!",
        likes: 26,
        comments: [
          { id: 1, text: "Which speakers did you listen to?", user: "Charlie" },
          { id: 2, text: "Any interesting talks?", user: "Eve" }
        ],
        postedAt: new Date("2023-07-01T09:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Paul!", user: "You", timestamp: new Date("2023-07-01T09:05:00Z") },
      { id: 2, text: "Hi! I attended sessions on AI and IoT.", user: "Paul", timestamp: new Date("2023-07-01T09:06:00Z") },
      { id: 3, text: "That sounds fascinating!", user: "You", timestamp: new Date("2023-07-01T09:07:00Z") },
      { id: 4, text: "Yes, it was very informative.", user: "Paul", timestamp: new Date("2023-07-01T09:08:00Z") },
      { id: 5, text: "Did you learn anything new?", user: "You", timestamp: new Date("2023-07-01T09:09:00Z") },
      { id: 6, text: "I picked up some interesting insights.", user: "Paul", timestamp: new Date("2023-07-01T09:10:00Z") },
      { id: 7, text: "That's great!", user: "You", timestamp: new Date("2023-07-01T09:11:00Z") },
      { id: 8, text: "Are you interested in AI?", user: "You", timestamp: new Date("2023-07-01T09:12:00Z") },
      { id: 9, text: "Yes, it's a fascinating field.", user: "Paul", timestamp: new Date("2023-07-01T09:13:00Z") },
      { id: 10, text: "We should discuss more about it.", user: "Paul", timestamp: new Date("2023-07-01T09:14:00Z") },
      { id: 11, text: "Sure, I'd love to!", user: "You", timestamp: new Date("2023-07-01T09:15:00Z") },
      { id: 12, text: "Let's plan a time for it.", user: "Paul", timestamp: new Date("2023-07-01T09:16:00Z") },
      { id: 13, text: "Sounds good!", user: "You", timestamp: new Date("2023-07-01T09:17:00Z") },
      { id: 14, text: "Looking forward to it.", user: "Paul", timestamp: new Date("2023-07-01T09:18:00Z") },
      { id: 15, text: "Me too!", user: "You", timestamp: new Date("2023-07-01T09:19:00Z") }
    ]
  },
  {
    id:16,
    friendName: "Quinn",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Hiking in the mountains!",
        likes: 22,
        comments: [
          { id: 1, text: "Which trail are you on?", user: "Charlie" },
          { id: 2, text: "Enjoy the fresh air!", user: "Eve" }
        ],
        postedAt: new Date("2023-07-05T11:30:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Quinn!", user: "You", timestamp: new Date("2023-07-05T11:35:00Z") },
      { id: 2, text: "Hi! It's a beautiful day for hiking.", user: "Quinn", timestamp: new Date("2023-07-05T11:36:00Z") },
      { id: 3, text: "Which mountain range are you exploring?", user: "You", timestamp: new Date("2023-07-05T11:37:00Z") },
      { id: 4, text: "I'm hiking in the Rockies.", user: "Quinn", timestamp: new Date("2023-07-05T11:38:00Z") },
      { id: 5, text: "That sounds amazing!", user: "You", timestamp: new Date("2023-07-05T11:39:00Z") },
      { id: 6, text: "It's breathtakingly beautiful.", user: "Quinn", timestamp: new Date("2023-07-05T11:40:00Z") },
      { id: 7, text: "Take some photos to share!", user: "You", timestamp: new Date("2023-07-05T11:41:00Z") },
      { id: 8, text: "I will!", user: "Quinn", timestamp: new Date("2023-07-05T11:42:00Z") },
      { id: 9, text: "How often do you go hiking?", user: "You", timestamp: new Date("2023-07-05T11:43:00Z") },
      { id: 10, text: "As often as I can, I love the outdoors.", user: "Quinn", timestamp: new Date("2023-07-05T11:44:00Z") }
    ]
  },
  {
    id:17,
    friendName: "Rachel",
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/150"],
        message: "Cooking Italian cuisine!",
        likes: 21,
        comments: [
          { id: 1, text: "What did you make?", user: "Alice" },
          { id: 2, text: "Looks delicious!", user: "David" }
        ],
        postedAt: new Date("2023-07-10T14:00:00Z")
      }
    ],
    chat: [
      { id: 1, text: "Hey Rachel!", user: "You", timestamp: new Date("2023-07-10T14:05:00Z") },
      { id: 2, text: "Hi! I made homemade pasta.", user: "Rachel", timestamp: new Date("2023-07-10T14:06:00Z") },
      { id: 3, text: "That sounds delicious!", user: "You", timestamp: new Date("2023-07-10T14:07:00Z") },
      { id: 4, text: "It turned out really well.", user: "Rachel", timestamp: new Date("2023-07-10T14:08:00Z") },
      { id: 5, text: "Did you enjoy making it?", user: "You", timestamp: new Date("2023-07-10T14:09:00Z") },
      { id: 6, text: "Yes, it was a fun process.", user: "Rachel", timestamp: new Date("2023-07-10T14:10:00Z") },
      { id: 7, text: "Do you cook Italian food often?", user: "You", timestamp: new Date("2023-07-10T14:11:00Z") },
      { id: 8, text: "Sometimes, I like experimenting with recipes.", user: "Rachel", timestamp: new Date("2023-07-10T14:12:00Z") },
      { id: 9, text: "That's great!", user: "You", timestamp: new Date("2023-07-10T14:13:00Z") },
      { id: 10, text: "Thanks!", user: "Rachel", timestamp: new Date("2023-07-10T14:14:00Z") }
    ]
  }
];

export default dummyData;













