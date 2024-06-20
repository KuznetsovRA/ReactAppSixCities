import {Offers} from '../types/offers';

export const offers: Offers = [
  {
    id: 1,
    src: "/img/apartment-01.jpg",
    coordinates: {
      latitude:52.3909553943508,
      longitude:4.85309666406198,
    },
    price: 80,
    premium: true,
    favorite: false,
    rating: 2,
    placeName: "Wood and stone place",
    type: "Room",
    numberOfRooms: 3,
    numberOfAdults: 3,
    city: `Amsterdam`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: "/img/avatar-angelina.jpg",
      statusPRO: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    },
    reviews: [
      {
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 4,
        date: new Date(2019, 3, 19),
        description:`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      },
      {
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 4,
        date: new Date(2019, 3, 19),
        description:`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ]
  },
  {
    id: 2,
    src: "/img/apartment-02.jpg",
    coordinates: {
      latitude:52.369553943508,
      longitude:4.85309666406198,
    },
    price: 803,
    premium: true,
    favorite: false,
    rating: 1,
    placeName: "Wood place",
    type: "Apartment",
    numberOfRooms: 3,
    numberOfAdults: 3,
    city: `Amsterdam`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: "/img/avatar-angelina.jpg",
      statusPRO: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    },
    reviews: [
      {
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 5,
        date: new Date(2019, 3, 19),
        description:`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ]
  },
  {
    id: 3,
    src: "/img/apartment-03.jpg",
    coordinates: {
      latitude:52.3909553943508,
      longitude:4.929309666406198,
    },
    price: 840,
    premium: true,
    favorite: false,
    rating: 4,
    placeName: "Stone place",
    type: "Apartment",
    numberOfRooms: 3,
    numberOfAdults: 3,
    city: `Amsterdam`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: "/img/avatar-angelina.jpg",
      statusPRO: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    },
    reviews: [
      {
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 5,
        date: new Date(2019, 3, 19),
        description:`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ]
  },
  {
    id: 4,
    src: "/img/apartment-02.jpg",
    coordinates: {
      latitude:52.3809553943508,
      longitude:4.939309666406198,
    },
    price: 10,
    premium: false,
    favorite: false,
    rating: 4,
    placeName: "Wood and stone place",
    type: "House",
    numberOfRooms: 3,
    numberOfAdults: 3,
    city: `Amsterdam`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: "/img/avatar-angelina.jpg",
      statusPRO: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    },
    reviews: [
      {
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 5,
        date: new Date(2019, 3, 19),
        description:`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ]
  },


]
