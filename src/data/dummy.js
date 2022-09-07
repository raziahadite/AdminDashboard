import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';


const gridUsersCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

export const LessonsData = () => (
  <div>
    <h3>
      C is a general-purpose, high-level language that was originally developed by
      Dennis M. Ritchie to develop the UNIX operating system at Bell Labs. C was
      originally first implemented on the DEC PDP-11 computer in 1972.

      In 1978, Brian Kernighan and Dennis Ritchie produced the first publicly available
      description of C, now known as the K&R standard.

      The UNIX operating system, the C compiler, and essentially all UNIX application
      programs have been written in C. C has now become a widely used professional
      language for various reasons: Easy to learn, Structured language, It produces efficient programs, It can handle low-level activities, It can be compiled on a variety of computer platforms
    </h3>
  </div>
);

export const userGrid = [
  { field: 'Name',
    headerText: 'Name',
    width: '120',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'User Name',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridUsersCountry 
  },
  { field: 'UserID',
    headerText: 'User ID',
    width: '125',
    textAlign: 'Center' 
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'learnc',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'uploadLessonData',
        icon: <FiEdit />,
      },
      {
        name: 'uploadVideo',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'uploadTests',
        icon: <IoMdContacts />,
      },
      {
        name: 'lessons',
        icon: <FiEdit />,
      },
      {
        name: 'users',
        icon: <IoMdContacts />,
      },
      {
        name: 'tests',
        icon: <AiOutlineShoppingCart />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
    ],
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const userData = [
  {
    UserID: 1,
    Name: 'Nancy Davolio',
    Title: 'nd',
    Date: '01/02/2021',
    Country: 'USA',
  },
  {
    UserID: 2,
    Name: 'Kirabo',
    Title: 'nas_d',
    Date: '01/02/2021',
    Country: 'Uganda',
  },
  {
    UserID: 3,
    Name: 'Lil Nas',
    Title: 'i_a23',
    Date: '01/02/2021',
    Country: 'UK',
  },
  {
    UserID: 4,
    Name: 'Poat Malone',
    Title: 'malone',
    Date: '01/02/2021',
    Country: 'Russia',
  },
  {
    UserID: 5,
    Name: 'Xxxtentacion',
    Title: 'ocion',
    Date: '01/02/2021',
    Country: 'Rwanda',
  },
  {
    UserID: 4,
    Name: 'Penjani Inyene',
    Title: 'inyene',
    Date: '01/02/2021',
    Country: 'South Africa',
  },
  {
    UserID: 5,
    Name: 'Miron Vitold',
    Title: 'mv',
    Date: '01/02/2021',
    Country: 'USA',
  },
  {
    UserID: 1,
    Name: 'Jamie Peters',
    Title: 'jamie',
    Date: '01/02/2021',
    Country: 'Spain',
  },
  {
    UserID: 2,
    Name: 'Jeane Claude',
    Title: 'claude',
    Date: '01/02/2021',
    Country: 'DRC',
  },
  {
    UserID: 3,
    Name: 'Mohammed Ali',
    Title: 'm_0ali',
    Date: '01/02/2021',
    Country: 'Kenya',
  },
  {
    UserID: 4,
    Name: 'Jake Simpson',
    Title: 'sjake_s',
    Date: '01/02/2021',
    Country: 'USA',
  },
  {
    UserID: 5,
    Name: 'Omar Mubarak',
    Title: 'omar',
    Date: '01/02/2021',
    Country: 'Uganda',
  },
  {
    UserID: 4,
    Name: 'Khalid',
    Title: '2335rt',
    Date: '01/02/2021',
    Country: 'Tanzania',
  },
  {
    UserID: 5,
    Name: 'High Ground',
    Title: 'heLG',
    Date: '01/02/2021',
    Country: 'Tanzania',
  },
  {
    UserID: 1,
    Name: 'Adite',
    Title: 'hdjshd',
    Date: '01/02/2021',
    Country: 'USA',
  },
  {
    UserID: 2,
    Name: 'Nasimiyu Danai',
    Title: '8347yd',
    Date: '01/02/2021',
    Country: 'DRC',
  },
  {
    UserID: 3,
    Name: 'Iulia Albu',
    Title: '345',
    Date: '01/02/2021',
    Country: 'South Sudan',
  },
  {
    UserID: 4,
    Name: 'Siegbert Gottfried',
    Title: '363ue',
    Date: '01/02/2021',
    Country: 'Kenya',
  },
  {
    UserID: 5,
    Name: 'Martin',
    Title: 'ueye6',
    Date: '01/02/2021',
    Country: 'USA',
  },
  {
    UserID: 4,
    Name: 'Joshua McCarthy',
    Title: 'JM',
    HireDate: '01/02/2021',
    Country: 'France',
  },
  {
    UserID: 5,
    Name: 'Mary-anne',
    Title: 'mar',
    Date: '01/02/2021',
    Country: 'South Korea',
  },
  
];
export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const testGrid = [
  {
    field: 'Name',
    headerText: 'Name',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Title',
    width: '170',
    textAlign: 'Center',
  },
  {
    field: 'TestID',
    headerText: 'TestID',
    width: '125',
    textAlign: 'Center'
  },
];

export const testData = [
  {
    TestID: 1,
    Name: 'Nancy Davolio',
    Title: 'nd',
  },
  {
    TestID: 2,
    Name: 'Kirabo',
    Title: 'nas_d',
  },
  {
    TestID: 3,
    Name: 'Lil Nas',
    Title: 'i_a23',
  },
  {
    TestID: 4,
    Name: 'Poat Malone',
    Title: 'malone',
  },
  {
    TestID: 5,
    Name: 'Xxxtentacion',
    Title: 'ocion',
  },
  {
    TestID: 4,
    Name: 'Penjani Inyene',
    Title: 'inyene',
  },
  {
    TestID: 5,
    Name: 'Miron Vitold',
    Title: 'mv',
  },
  {
    TestID: 1,
    Name: 'Jamie Peters',
    Title: 'jamie',
  },
  {
    TestID: 2,
    Name: 'Jeane Claude',
    Title: 'claude',
  },
  {
    TestID: 3,
    Name: 'Mohammed Ali',
    Title: 'm_0ali',
  },
  {
    TestID: 4,
    Name: 'Jake Simpson',
    Title: 'sjake_s',
  },
];

export const lessonGrid = [
  {
    field: 'Name',
    headerText: 'Name',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Title',
    width: '170',
    textAlign: 'Center',
  },
  {
    field: 'LessonID',
    headerText: 'LessonID',
    width: '125',
    textAlign: 'Center'
  },
];

export const lessonData = [
  {
    LessonID: 1,
    Name: 'Nancy Davolio',
    Title: 'nd',
  },
  {
    LessonID: 2,
    Name: 'Kirabo',
    Title: 'nas_d',
  },
  {
    LessonID: 3,
    Name: 'Lil Nas',
    Title: 'i_a23',
  },
  {
    LessonID: 4,
    Name: 'Poat Malone',
    Title: 'malone',
  },
  {
    LessonID: 5,
    Name: 'Xxxtentacion',
    Title: 'ocion',
  },
  {
    LessonID: 6,
    Name: 'Penjani Inyene',
    Title: 'inyene',
  },
  {
    LessonID: 7,
    Name: 'Miron Vitold',
    Title: 'mv',
  },
  {
    LessonID: 8,
    Name: 'Jamie Peters',
    Title: 'jamie',
  },
  {
    LessonID: 9,
    Name: 'Jeane Claude',
    Title: 'claude',
  },
  {
    LessonID: 10,
    Name: 'Mohammed Ali',
    Title: 'm_0ali',
  },
  {
    LessonID: 11,
    Name: 'Jake Simpson',
    Title: 'sjake_s',
  },
];
