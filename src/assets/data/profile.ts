const profile = {
    id: 1,
    friendName: "John Doe",
    photo: "https://via.placeholder.com/150",
    friends: ["Alice", "Bob", "Charlie"],
    posts: [
      {
        id: 1,
        photos: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"],
        message: "First post!",
        likes: 15,
        comments: [
          { id: 1, text: "Awesome!", user: "Alice" },
          { id: 2, text: "Great photo!", user: "Bob" },
        ],
        postedAt: new Date("2023-06-01T08:00:00Z"),
      },
      {
        id: 2,
        photos: ["https://via.placeholder.com/300"],
        message: "Enjoying the weekend!",
        likes: 10,
        comments: [
          { id: 1, text: "Looks fun!", user: "Charlie" },
        ],
        postedAt: new Date("2023-06-02T10:30:00Z"),
      },
      {
        id: 3,
        photos: ["https://via.placeholder.com/300"],
        message: "Enjoying the weekend!",
        likes: 10,
        comments: [
          { id: 1, text: "Looks fun!", user: "Charlie" },
        ],
        postedAt: new Date("2023-06-02T10:30:00Z"),
      }
      // Add more posts as needed
    ]
  };
  
  export default profile;
  