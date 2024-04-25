export const SampleChats = [
  {
    _id: "1",
    name: "John Doe",
    avatar: ["https://www.w3schools.com/w3images/avatar3.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "2",
    name: "John Doe 2",
    avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "3",
    name: "John Doe 3",
    avatar: [
      "https://www.w3schools.com/w3images/avatar1.png",
      "https://www.w3schools.com/w3images/avatar3.png",
      "https://www.w3schools.com/w3images/avatar4.png",
      "https://www.w3schools.com/w3images/avatar5.png",
    ],
    groupChat: true,
    members: [1, 2],
  },
  {
    _id: "4",
    name: "John Doe",
    avatar: ["https://www.w3schools.com/w3images/avatar3.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "5",
    name: "John Doe 2",
    avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "6",
    name: "John Doe 3",
    avatar: [
      "https://www.w3schools.com/w3images/avatar1.png",
      "https://www.w3schools.com/w3images/avatar3.png",
      "https://www.w3schools.com/w3images/avatar4.png",
      "https://www.w3schools.com/w3images/avatar5.png",
    ],
    groupChat: true,
    members: [1, 2],
  },
  {
    _id: "7",
    name: "John Doe",
    avatar: ["https://www.w3schools.com/w3images/avatar3.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "8",
    name: "John Doe 2",
    avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "9",
    name: "John Doe 3",
    avatar: [
      "https://www.w3schools.com/w3images/avatar1.png",
      "https://www.w3schools.com/w3images/avatar3.png",
      "https://www.w3schools.com/w3images/avatar4.png",
      "https://www.w3schools.com/w3images/avatar5.png",
    ],
    groupChat: true,
    members: [1, 2],
  },
  {
    _id: "10",
    name: "John Doe",
    avatar: ["https://www.w3schools.com/w3images/avatar3.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "11",
    name: "John Doe 2",
    avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
    groupChat: false,
    members: [1, 2],
  },
  {
    _id: "12",
    name: "John Doe 3",
    avatar: [
      "https://www.w3schools.com/w3images/avatar1.png",
      "https://www.w3schools.com/w3images/avatar3.png",
      "https://www.w3schools.com/w3images/avatar4.png",
      "https://www.w3schools.com/w3images/avatar5.png",
    ],
    groupChat: true,
    members: [1, 2],
  },
];
export const SampleUsers = [
  {
    _id: "1",
    name: "John Doe",
    avatar: ["https://www.w3schools.com/w3images/avatar3.png"],
  },
  {
    _id: "2",
    name: "John Doe 2",
    avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
  },
  {
    _id: "3",
    name: "John Doe 3",
    avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
  },
];
export const SampleNotifications = [
  {
    _id: "1",
    sender: {
      name: "John Doe",
      avatar: ["https://www.w3schools.com/w3images/avatar3.png"],
    },
  },
  {
    _id: "2",
    sender: {
      name: "John Doe 2",
      avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
    },
  },
  {
    _id: "3",
    sender: {
      name: "John Doe 3",
      avatar: ["https://www.w3schools.com/w3images/avatar5.png"],
    },
  },
];
export const SampleMessage = [
  {
    attachments: [
      {
        public_id: "1",
        url: "https://www.w3schools.com/w3images/avatar3.png",
      },
    ],
    content: "",
    _id: "12",
    sender: {
      _id: "user_id",
      name: "Chaman",
    },
    chat: "12",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [],
    content: "Bhavde ka 2 Message",
    _id: "122",
    sender: {
      _id: "1",
      name: "Chaman2",
    },
    chat: "122",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];
export const SampleTabelRows = {
  users: [
    {
      _id: "1",
      name: "Harshil",
      avatar: "https://www.w3schools.com/w3images/avatar3.png",
      userName: "harshil_kavar",
      friends: 20,
      groups: 5,
    },
    {
      _id: "2",
      name: "shivarj",
      avatar: "https://www.w3schools.com/w3images/avatar1.png",
      userName: "shivraj_jadeja",
      friends: 25,
      groups: 7,
    },
  ],
  chats: [
    {
      _id: "1",
      name: "Labad Group",
      avatar: [
        "https://www.w3schools.com/w3images/avatar1.png",
        "https://www.w3schools.com/w3images/avatar3.png",
        "https://www.w3schools.com/w3images/avatar5.png",
      ],
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/w3images/avatar3.png" },
        { _id: "2", avatar: "https://www.w3schools.com/w3images/avatar5.png" },
      ],
      totalMembers: 7,
      totalMessage: 25,
      creator: {
        name: "Labad ",
        avatar: "https://www.w3schools.com/w3images/avatar1.png",
      },
    },
    {
      _id: "2",
      name: "Labad 2 Group",
      avatar: [
        "https://www.w3schools.com/w3images/avatar1.png",
        "https://www.w3schools.com/w3images/avatar3.png",
        "https://www.w3schools.com/w3images/avatar5.png",
      ],
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/w3images/avatar3.png" },
        { _id: "2", avatar: "https://www.w3schools.com/w3images/avatar5.png" },
      ],
      totalMembers: 22,
      totalMessage: 50,
      creator: {
        name: "Labad 2 ",
        avatar: "https://www.w3schools.com/w3images/avatar3.png",
      },
    },
  ],
  messages: [
    {
      _id: "1",
      attachments: [],
      content: "Bavde ka message",
      sender: {
        avatar: "https://www.w3schools.com/w3images/avatar1.png",
        name: "Labad Group",
      },
      chat: "chatID",
      groupChat: false,
      createdAt: "",
    },
    {
      _id: "2",
      attachments: [
        {
          public_id: "12",
          url: "https://www.w3schools.com/w3images/avatar5.png",
        },
        {
          public_id: "123",
          url: "https://www.w3schools.com/w3images/avatar3.png",
        },
        {
          public_id: "12",
          url: "https://www.w3schools.com/w3images/avatar5.png",
        },
      ],
      content: "Bavde 2 ka message",
      sender: {
        avatar: "https://www.w3schools.com/w3images/avatar1.png",
        name: "Labad 2 Group",
      },
      chat: "chatID",
      groupChat: false,
      createdAt: "",
    },
  ],
};
