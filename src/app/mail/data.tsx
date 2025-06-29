const getRandomLabels = () => ["PDF", "DOC", "EXCEL"].sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 3) + 1);

export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "Client A",
    email: "client.a@company.com",
    subject: "RFP for Procurement of Advanced Laptops for Workforce Upgrade",
    text: "Our organization is in the process of upgrading our computing hardware to support new software implementations and improve our operational efficiencies. We are seeking proposals from trusted suppliers for the provision of high-quality laptops tailored to our requirements.",
    date: "2024-05-22T09:00:00",
    read: 1,
    labels: getRandomLabels(),
    similarity: 0.92,
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Alice Smith",
    email: "alicesmith@example.com",
    subject: "Request for Proposal (RFP) for Supply of Laptops",
    text: "Client Summary: Olivia Martin\n\nOlivia Martin is launching a startup and is seeking efficient, cost-effective laptops for her team. Her requirements emphasize robust multitasking capabilities and reliable performance to support a mobile workforce. Budget considerations are key, with a focus on obtaining the best value within a mid-range price segment.\n\nProduct Features Required:\n\nProcessor Type: Intel Core i5 or AMD Ryzen 5\n\nRAM: 16GB\n\nStorage Capacity: 512GB SSD\n\nScreen Size: 14 inches\n\nBattery Life: 8+ hours\n\nPrice Range: $800-$1000\n\nOperating System: Windows 10 Pro\n\nGraphics: Integrated\n\nNumber of Products: - 13",
    date: "2024-10-22T10:30:00",
    read: 2,
    labels: getRandomLabels(),
    similarity: 0.94,
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    subject: "Request for Proposal for Next-Generation Laptop Supply",
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    date: "2024-01-10T11:45:00",
    read: 2,
    labels: getRandomLabels(),
    similarity: 0.79,
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    subject: "Request for Proposal: Enterprise-Wide Mobile Computing Solution",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2023-12-25T13:15:00",
    read: 3,
    labels: getRandomLabels(),
    similarity: 0.65,
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "Michael Wilson",
    email: "michaelwilson@example.com",
    subject: "RFP: High-End Laptops for Design and Multimedia Production",
    text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    date: "2024-07-10T15:00:00",
    read: 1,
    labels: getRandomLabels(),
    similarity: 0.99,
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b72",
    name: "David Lee",
    email: "emilydavis@example.com",
    subject: "Request for Proposal: Enterprise-Wide Mobile Computing Solution",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2023-12-25T13:15:00",
    read: 3,
    labels: getRandomLabels(),
    similarity: 0.44,
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0s3dfb97",
    name: "Lucas Werner",
    email: "michaelwilson@example.com",
    subject: "RFP for Supply of Ultra-Portable Laptops for Sales Force Modernization",
    text: "Creative Solutions Inc. is seeking to update our laptop fleet to better serve our growing needs in graphic design, video editing, and multimedia production. We are looking for powerful, reliable laptops that can support high-end design software and multitasking requirements.",
    date: "2024-06-10T15:00:00",
    read: 1,
    labels: getRandomLabels(),
    similarity: 0.89,
  },
  // {
  //   id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
  //   name: "Client B",
  //   email: "client.b@company.com",
  //   subject: "Re: Feedback on Proposal",
  //   text: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Client",
  //   date: "2023-02-15T16:30:00",
  //   read: true,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
  //   name: "Client C",
  //   email: "davidlee@example.com",
  //   subject: "New Project Idea",
  //   text: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
  //   date: "2023-01-28T17:45:00",
  //   read: false,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
  //   name: "Olivia Wilson",
  //   email: "oliviawilson@example.com",
  //   subject: "Vacation Plans",
  //   text: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
  //   date: "2022-12-20T18:30:00",
  //   read: true,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "de305d54-75b4-431b-adb2-eb6b9e546014",
  //   name: "James Martin",
  //   email: "jamesmartin@example.com",
  //   subject: "Re: Conference Registration",
  //   text: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
  //   date: "2022-11-30T19:15:00",
  //   read: true,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "7dd90c63-00f6-40f3-bd87-5060a24e8ee7",
  //   name: "Sophia White",
  //   email: "sophiawhite@example.com",
  //   subject: "Team Dinner",
  //   text: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!\n\nBest, Sophia",
  //   date: "2022-11-05T20:30:00",
  //   read: false,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "99a88f78-3eb4-4d87-87b7-7b15a49a0a05",
  //   name: "Daniel Johnson",
  //   email: "danieljohnson@example.com",
  //   subject: "Feedback Request",
  //   text: "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.\n\nYour feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.\n\nRegards, Daniel",
  //   date: "2022-10-22T09:30:00",
  //   read: false,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  //   name: "Ava Taylor",
  //   email: "avataylor@example.com",
  //   subject: "Re: Meeting Agenda",
  //   text: "Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.\n\nIf you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.\n\nIt's essential that our meeting is productive and addresses all relevant matters.\n\nLooking forward to our meeting! Ava",
  //   date: "2022-10-10T10:45:00",
  //   read: true,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
  //   name: "William Anderson",
  //   email: "williamanderson@example.com",
  //   subject: "Product Launch Update",
  //   text: "The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.\n\nI'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.\n\nLet's make this product launch a resounding success!\n\nBest regards, William",
  //   date: "2022-09-20T12:00:00",
  //   read: false,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
  //   name: "Mia Harris",
  //   email: "miaharris@example.com",
  //   subject: "Re: Travel Itinerary",
  //   text: "I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.\n\nIf there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.\n\nExcited for the trip! Mia",
  //   date: "2022-09-10T13:15:00",
  //   read: true,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
  //   name: "Ethan Clark",
  //   email: "ethanclark@example.com",
  //   subject: "Team Building Event",
  //   text: "Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.\n\nPlease let me know your thoughts and availability. We want this event to be both enjoyable and productive.\n\nTogether, we'll strengthen our team and boost our performance.\n\nRegards, Ethan",
  //   date: "2022-08-25T15:30:00",
  //   read: false,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
  //   name: "Chloe Hall",
  //   email: "chloehall@example.com",
  //   subject: "Re: Budget Approval",
  //   text: "The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.\n\nI've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.\n\nIt's an exciting time for us! Chloe",
  //   date: "2022-08-10T16:45:00",
  //   read: true,
  //   labels: getRandomLabels(),
  // },
  // {
  //   id: "6c9a7f94-8329-4d70-95d3-51f68c186ae1",
  //   name: "Samuel Turner",
  //   email: "samuelturner@example.com",
  //   subject: "Weekend Hike",
  //   text: "Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.\n\nI've done some research and have a few routes in mind.\n\nLet me know if you're interested, and we can plan the details.\n\nIt's sure to be a memorable experience! Samuel",
  //   date: "2022-07-28T17:30:00",
  //   read: false,
  //   labels: getRandomLabels(),
  // },
]

export type Mail = (typeof mails)[number]

export const accounts = [
  {
    label: "User Account",
    email: "user@company.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Primary</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "User Account",
    email: "user@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "User Account",
    email: "user@icloud.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: "Contact A",
    email: "contact.a@company.com",
  },
  {
    name: "Contact B",
    email: "contact.b@company.com",
  },
  {
    name: "Contact C",
    email: "contact.c@company.com",
  },
  {
    name: "Contact D",
    email: "contact.d@company.com",
  },
  {
    name: "Contact E",
    email: "contact.e@company.com",
  },
  {
    name: "Contact F",
    email: "contact.f@company.com",
  },
  {
    name: "Contact G",
    email: "contact.g@company.com",
  },
  {
    name: "Contact H",
    email: "contact.h@company.com",
  },
  {
    name: "Contact I",
    email: "contact.i@company.com",
  },
  {
    name: "Contact J",
    email: "contact.j@company.com",
  },
  {
    name: "Contact K",
    email: "contact.k@company.com",
  },
  {
    name: "Contact L",
    email: "contact.l@company.com",
  },
  {
    name: "Contact M",
    email: "contact.m@company.com",
  },
  {
    name: "Contact N",
    email: "contact.n@company.com",
  },
  {
    name: "Contact O",
    email: "contact.o@company.com",
  },
  {
    name: "Contact P",
    email: "contact.p@company.com",
  },
  {
    name: "Contact Q",
    email: "contact.q@company.com",
  },
  {
    name: "Contact R",
    email: "contact.r@company.com",
  },
  {
    name: "Contact S",
    email: "contact.s@company.com",
  },
  {
    name: "Contact T",
    email: "contact.t@company.com",
  },
]

export type Contact = (typeof contacts)[number]
