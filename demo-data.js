// Названия и поля основаны на Figma 40:27302. Наполнение региональных папок — демонстрационное: по 1–3 сайта.
const sites = [
  {
    "name": "Эстетика",
    "muted": false,
    "address": "Адыгея, ул. Центральная, д. 1",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "7869940941",
    "date": "4 сен",
    "visitors": "6 678",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 0,
    "regionId": 1
  },
  {
    "name": "Кот в сапогах",
    "muted": false,
    "address": "Адыгея, ул. Центральная, д. 2",
    "company": "Бергер Пеинтс Оверсис Лимитед, ООО,",
    "inn": "7819643568",
    "date": "4 сен",
    "visitors": "12",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 1,
    "regionId": 1
  },
  {
    "name": "Биллинговые системы",
    "muted": false,
    "date": "4 сен",
    "visitors": "50",
    "responses": "2",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 2,
    "regionId": 1,
    "address": "Адыгея, ул. Центральная, д. 3",
    "analytics": {
      "newVisitors": 35,
      "repeatVisitors": 15,
      "pages": [
        {
          "name": "Главная",
          "visitors": 30,
          "responses": 1
        },
        {
          "name": "Цена",
          "visitors": 15,
          "responses": 1
        },
        {
          "name": "Контакты",
          "visitors": 5,
          "responses": 0
        }
      ],
      "dailyVisitors": [
        0,
        1,
        2,
        0,
        3,
        1,
        2,
        2,
        0,
        1,
        4,
        2,
        3,
        1,
        2,
        0,
        1,
        2,
        3,
        1,
        2,
        0,
        1,
        2,
        3,
        1,
        2,
        1,
        1,
        2,
        4
      ]
    }
  },
  {
    "name": "Биллинговые системы  2.0",
    "muted": false,
    "date": "4 сен",
    "visitors": "2",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 3,
    "regionId": 2,
    "address": "Башкортостан, ул. Центральная, д. 1"
  },
  {
    "name": "Озеры",
    "muted": false,
    "address": "Башкортостан, ул. Центральная, д. 2",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "9187654308",
    "date": "3 сен",
    "visitors": "125",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 4,
    "regionId": 2
  },
  {
    "name": "Виктория",
    "muted": false,
    "address": "Бурятия, ул. Центральная, д. 1",
    "company": "ФБУЗ \"Центр Гигиены И Эпидемиологии В Республике Адыгея\", ФГБУ,",
    "inn": "1902637489",
    "date": "3 сен",
    "visitors": "390",
    "responses": "2",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 5,
    "regionId": 3
  },
  {
    "name": "“Дом моды”",
    "muted": false,
    "address": "Алтай, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "6723907654",
    "date": "2 сен",
    "visitors": "5",
    "responses": "1",
    "template": "Отель",
    "verified": "",
    "id": 6,
    "regionId": 4
  },
  {
    "name": "Деревенька",
    "muted": false,
    "address": "Алтай, ул. Центральная, д. 2",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "6799005544",
    "date": "2 сен",
    "visitors": "9",
    "responses": "",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 7,
    "regionId": 4
  },
  {
    "name": "Доктор Мяу",
    "muted": true,
    "address": "Алтай, ул. Центральная, д. 3",
    "company": "Доктор Шорты, ООО,",
    "inn": "4563786541",
    "date": "2 сен",
    "visitors": "76",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 8,
    "regionId": 4
  },
  {
    "name": "Авангард",
    "muted": true,
    "address": "Дагестан, ул. Центральная, д. 1",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "5644322112",
    "date": "1 сен",
    "visitors": "456",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 9,
    "regionId": 5
  },
  {
    "name": "Дом у реки",
    "muted": false,
    "address": "Дагестан, ул. Центральная, д. 2",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "1112456732",
    "date": "1 сен",
    "visitors": "11",
    "responses": "2",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 10,
    "regionId": 5
  },
  {
    "name": "Авангард",
    "muted": true,
    "address": "Ингушетия, ул. Центральная, д. 1",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "5644322112",
    "date": "1 сен",
    "visitors": "456",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 11,
    "regionId": 6
  },
  {
    "name": "“Дом моды”",
    "muted": false,
    "address": "Кабардино-Балкария, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "6723907654",
    "date": "1 сен",
    "visitors": "5",
    "responses": "1",
    "template": "Отель",
    "verified": "",
    "id": 12,
    "regionId": 7
  },
  {
    "name": "Деревенька",
    "muted": false,
    "address": "Кабардино-Балкария, ул. Центральная, д. 2",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "6799005544",
    "date": "1 сен",
    "visitors": "9",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "\\uEB4D",
    "id": 13,
    "regionId": 7
  },
  {
    "name": "У Михалыча",
    "muted": false,
    "address": "Кабардино-Балкария, ул. Центральная, д. 3",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "5676443545",
    "date": "1 сен",
    "visitors": "45",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 14,
    "regionId": 7
  },
  {
    "name": "Доктор Мяу",
    "muted": true,
    "address": "Калмыкия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "4563786541",
    "date": "31 авг",
    "visitors": "76",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 15,
    "regionId": 8
  },
  {
    "name": "Рога и копыта",
    "muted": false,
    "address": "Калмыкия, ул. Центральная, д. 2",
    "company": "Доктор Шорты, ООО,",
    "inn": "9098778998",
    "date": "31 авг",
    "visitors": "90",
    "responses": "9",
    "template": "Услуги",
    "verified": "",
    "id": 16,
    "regionId": 8
  },
  {
    "name": "Рога и копыта",
    "muted": false,
    "address": "Карачаево-Черкессия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "9098778998",
    "date": "31 авг",
    "visitors": "90",
    "responses": "9",
    "template": "Услуги",
    "verified": "",
    "id": 17,
    "regionId": 9
  },
  {
    "name": "Доктор Мяу",
    "muted": true,
    "address": "Карелия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "4563786541",
    "date": "31 авг",
    "visitors": "76",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 18,
    "regionId": 10
  },
  {
    "name": "У Михалыча",
    "muted": false,
    "address": "Карелия, ул. Центральная, д. 2",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "5676443545",
    "date": "31 авг",
    "visitors": "45",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 19,
    "regionId": 10
  },
  {
    "name": "Рога и копыта",
    "muted": false,
    "address": "Карелия, ул. Центральная, д. 3",
    "company": "Доктор Шорты, ООО,",
    "inn": "9098778998",
    "date": "31 авг",
    "visitors": "90",
    "responses": "9",
    "template": "Красота",
    "verified": "",
    "id": 20,
    "regionId": 10
  },
  {
    "name": "Эстетика",
    "muted": false,
    "address": "Коми, ул. Центральная, д. 1",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "7869940941",
    "date": "4 сен",
    "visitors": "6 678",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 21,
    "regionId": 11
  },
  {
    "name": "Кот в сапогах",
    "muted": false,
    "address": "Коми, ул. Центральная, д. 2",
    "company": "Бергер Пеинтс Оверсис Лимитед, ООО,",
    "inn": "7819643568",
    "date": "4 сен",
    "visitors": "12",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 22,
    "regionId": 11
  },
  {
    "name": "Биллинговые системы",
    "muted": false,
    "date": "4 сен",
    "visitors": "12",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 23,
    "regionId": 12,
    "address": "Марий Эл, ул. Центральная, д. 1"
  },
  {
    "name": "Биллинговые системы  2.0",
    "muted": false,
    "date": "4 сен",
    "visitors": "2",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 24,
    "regionId": 13,
    "address": "Мордовия, ул. Центральная, д. 1"
  },
  {
    "name": "Озеры",
    "muted": false,
    "address": "Мордовия, ул. Центральная, д. 2",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "9187654308",
    "date": "3 сен",
    "visitors": "125",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 25,
    "regionId": 13
  },
  {
    "name": "Виктория",
    "muted": false,
    "address": "Мордовия, ул. Центральная, д. 3",
    "company": "ФБУЗ \"Центр Гигиены И Эпидемиологии В Республике Адыгея\", ФГБУ,",
    "inn": "1902637489",
    "date": "3 сен",
    "visitors": "390",
    "responses": "2",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 26,
    "regionId": 13
  },
  {
    "name": "“Дом моды”",
    "muted": false,
    "address": "Саха/Якутия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "6723907654",
    "date": "2 сен",
    "visitors": "5",
    "responses": "1",
    "template": "Отель",
    "verified": "",
    "id": 27,
    "regionId": 14
  },
  {
    "name": "Деревенька",
    "muted": false,
    "address": "Саха/Якутия, ул. Центральная, д. 2",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "6799005544",
    "date": "2 сен",
    "visitors": "9",
    "responses": "",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 28,
    "regionId": 14
  },
  {
    "name": "Доктор Мяу",
    "muted": true,
    "address": "Северная Осетия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "4563786541",
    "date": "2 сен",
    "visitors": "76",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 29,
    "regionId": 15
  },
  {
    "name": "Авангард",
    "muted": true,
    "address": "Татарстан, ул. Центральная, д. 1",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "5644322112",
    "date": "1 сен",
    "visitors": "456",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 30,
    "regionId": 16
  },
  {
    "name": "Дом у реки",
    "muted": false,
    "address": "Татарстан, ул. Центральная, д. 2",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "1112456732",
    "date": "1 сен",
    "visitors": "11",
    "responses": "2",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 31,
    "regionId": 16
  },
  {
    "name": "Авангард",
    "muted": true,
    "address": "Татарстан, ул. Центральная, д. 3",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "5644322112",
    "date": "1 сен",
    "visitors": "456",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 32,
    "regionId": 16
  },
  {
    "name": "“Дом моды”",
    "muted": false,
    "address": "Тыва, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "6723907654",
    "date": "1 сен",
    "visitors": "5",
    "responses": "1",
    "template": "Отель",
    "verified": "",
    "id": 33,
    "regionId": 17
  },
  {
    "name": "Деревенька",
    "muted": false,
    "address": "Тыва, ул. Центральная, д. 2",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "6799005544",
    "date": "1 сен",
    "visitors": "9",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "\\uEB4D",
    "id": 34,
    "regionId": 17
  },
  {
    "name": "У Михалыча",
    "muted": false,
    "address": "Удмуртия, ул. Центральная, д. 1",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "5676443545",
    "date": "1 сен",
    "visitors": "45",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 35,
    "regionId": 18
  },
  {
    "name": "Доктор Мяу",
    "muted": true,
    "address": "Хакасия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "4563786541",
    "date": "31 авг",
    "visitors": "76",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 36,
    "regionId": 19
  },
  {
    "name": "Рога и копыта",
    "muted": false,
    "address": "Хакасия, ул. Центральная, д. 2",
    "company": "Доктор Шорты, ООО,",
    "inn": "9098778998",
    "date": "31 авг",
    "visitors": "90",
    "responses": "9",
    "template": "Услуги",
    "verified": "",
    "id": 37,
    "regionId": 19
  },
  {
    "name": "Рога и копыта",
    "muted": false,
    "address": "Хакасия, ул. Центральная, д. 3",
    "company": "Доктор Шорты, ООО,",
    "inn": "9098778998",
    "date": "31 авг",
    "visitors": "90",
    "responses": "9",
    "template": "Услуги",
    "verified": "",
    "id": 38,
    "regionId": 19
  },
  {
    "name": "Доктор Мяу",
    "muted": true,
    "address": "Чечня, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "4563786541",
    "date": "31 авг",
    "visitors": "76",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 39,
    "regionId": 20
  },
  {
    "name": "У Михалыча",
    "muted": false,
    "address": "Чечня, ул. Центральная, д. 2",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "5676443545",
    "date": "31 авг",
    "visitors": "45",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 40,
    "regionId": 20
  },
  {
    "name": "Рога и копыта",
    "muted": false,
    "address": "Чувашия, ул. Центральная, д. 1",
    "company": "Доктор Шорты, ООО,",
    "inn": "9098778998",
    "date": "31 авг",
    "visitors": "90",
    "responses": "9",
    "template": "Красота",
    "verified": "",
    "id": 41,
    "regionId": 21
  },
  {
    "name": "Эстетика",
    "muted": false,
    "address": "Алтайский край, ул. Центральная, д. 1",
    "company": "Салон Красоты “Эстетика”, ООО,",
    "inn": "7869940941",
    "date": "4 сен",
    "visitors": "6 678",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 42,
    "regionId": 22
  },
  {
    "name": "Кот в сапогах",
    "muted": false,
    "address": "Алтайский край, ул. Центральная, д. 2",
    "company": "Бергер Пеинтс Оверсис Лимитед, ООО,",
    "inn": "7819643568",
    "date": "4 сен",
    "visitors": "12",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 43,
    "regionId": 22
  },
  {
    "name": "Биллинговые системы",
    "muted": false,
    "date": "4 сен",
    "visitors": "12",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 44,
    "regionId": 22,
    "address": "Алтайский край, ул. Центральная, д. 3"
  },
  {
    "name": "Биллинговые системы  2.0",
    "muted": false,
    "date": "4 сен",
    "visitors": "2",
    "responses": "",
    "template": "Доставка из ресторана",
    "verified": "",
    "id": 45,
    "regionId": 23,
    "address": "Краснодарский край, ул. Центральная, д. 1"
  },
  {
    "name": "Озеры",
    "muted": false,
    "address": "Краснодарский край, ул. Центральная, д. 2",
    "company": "Детский Сад № 20 \"Ромашка\", МБДОУ,",
    "inn": "9187654308",
    "date": "3 сен",
    "visitors": "125",
    "responses": "",
    "template": "Услуги",
    "verified": "",
    "id": 46,
    "regionId": 23
  },
  {
    "name": "Виктория",
    "muted": false,
    "address": "Красноярский край, ул. Центральная, д. 1",
    "company": "ФБУЗ \"Центр Гигиены И Эпидемиологии В Республике Адыгея\", ФГБУ,",
    "inn": "1902637489",
    "date": "3 сен",
    "visitors": "390",
    "responses": "2",
    "template": "Услуги",
    "verified": "\\uEB4D",
    "id": 47,
    "regionId": 24
  }
];
const regions = [
  {
    "name": "Все",
    "count": "48"
  },
  {
    "name": "01 Адыгея",
    "count": "3"
  },
  {
    "name": "02 Башкортостан",
    "count": "2"
  },
  {
    "name": "03 Бурятия",
    "count": "1"
  },
  {
    "name": "04 Алтай",
    "count": "3"
  },
  {
    "name": "05 Дагестан",
    "count": "2"
  },
  {
    "name": "06 Ингушетия",
    "count": "1"
  },
  {
    "name": "07 Кабардино-Балкария",
    "count": "3"
  },
  {
    "name": "08 Калмыкия",
    "count": "2"
  },
  {
    "name": "09 Карачаево-Черкессия",
    "count": "1"
  },
  {
    "name": "10 Карелия",
    "count": "3"
  },
  {
    "name": "11 Коми",
    "count": "2"
  },
  {
    "name": "12 Марий Эл",
    "count": "1"
  },
  {
    "name": "13 Мордовия",
    "count": "3"
  },
  {
    "name": "14 Саха/Якутия",
    "count": "2"
  },
  {
    "name": "15 Северная Осетия",
    "count": "1"
  },
  {
    "name": "16 Татарстан",
    "count": "3"
  },
  {
    "name": "17 Тыва",
    "count": "2"
  },
  {
    "name": "18 Удмуртия",
    "count": "1"
  },
  {
    "name": "19 Хакасия",
    "count": "3"
  },
  {
    "name": "20 Чечня",
    "count": "2"
  },
  {
    "name": "21 Чувашия",
    "count": "1"
  },
  {
    "name": "22 Алтайский край",
    "count": "3"
  },
  {
    "name": "23 Краснодарский край",
    "count": "2"
  },
  {
    "name": "24 Красноярский край",
    "count": "1"
  }
];
const navigation = [
{icon:'E901',name:'Приложения'},{icon:'E968',name:'Компоненты'},
{icon:'E971',name:'Конструктор'},{icon:'E94A',name:'Маршруты'},
{icon:'E978',name:'Социальная сеть'},{icon:'E946',name:'Деньги'},
{icon:'E984',name:'Машинное обучение'},{icon:'E949',name:'СМЭВ'},
{icon:'E924',name:'Торги'},{icon:'E931',name:'Маркет'},
{icon:'E91B',name:'Витрина'},{icon:'E93F',name:'Контрагенты'},
{icon:'E90F',name:'Контакт-центр'},{icon:'E95E',name:'Адресация'},
{icon:'E92A',name:'Отчетность'},{icon:'E9DE',name:'Кастомизация'},
{icon:'E92D',name:'Система'}
];
// Read-only showcase records transcribed from the supplied screenshot.
const showcaseSites = [
['Эстетика','г. Ярославль, ул. Наумова, д. 63','Салон Красоты “Эстетика”, ООО','7704557979','16 ноя','9 435','','Группа Электр…','shop',0],
['Архпро, ООО','г. Москва, вн.тер.г. муниципальный округ Арбат, Бо…','Архпро, ООО','7704302177','14 ноя','141','','Рестораны','shop',0],
['Синтез Таймыр, ООО','г. Кемерово, ул. Нахимова, д. 34А','Синтез Таймыр, ООО','5981421577','14 ноя','197','','Магазины','shop',0],
['Оилкард, ООО','г. Москва, вн.тер.г. муниципальный округ Аэроп…','Оилкард, ООО','6720936694','16 ноя','472','','Рестораны','shop',0],
['321 Домик распутинский','г. Ульяновск, ул. Кузоватовская, д. 41В','Дом Распутина, ООО (321 Домик распутинский)','7809017963','14 ноя','371','','Рестораны','shop',0],
['Кек Кекович','Респ. Хакасия, г. Абаза, 1 Арбатский пр-д','','','16 ноя','516','','Красота','shop',19],
['Озёры, АО','Московская обл., г.о. Коломна, п. центральной усадьбы…','Озёры, АО','5033002193','13 ноя','10','','Рестораны','shop',0],
['Глобал ФУД Уфа, ООО','г. Уфа, ул. Маршала Жукова, д. 22','Глобал Фуд Уфа, ООО','0278139894','16 ноя','69','','Магазины','shop',2],
['Данилова Снежана Леонидовна, ИП, п…','г. Москва','Данилова Снежана Леонидовна, ИП, подразделение, г…','532000116178','','','','Торговля','muted-shop',0],
['Добрыня1','г. Ярославль, ул. Наумова, д. 63','Добрыня, ООО (Добрыня1)','7606117407','16 ноя','49 666','44','Рестораны','page',0],
['321 Домик распутинский','г. Ульяновск, ул. Кузоватовская, д. 41В','Дом Распутина, ООО (321 Домик распутинский)','7809017963','16 ноя','115','','Рестораны','muted-page',0],
['000 Никитка14568844','г. Санкт-Петербург, ул. Карпатская, д. 8, …','000 Никитка1','4326106031','9 окт','1 200','250','Рестораны','page',0],
['Greenflow','г. Калининград, ул. Пугачева, д. 13','Молоко, ООО (Greenflow)','8054542679','24 авг','21','','Продукты','verified-page',0],
['Деревянный ключик','г. Ярославль, пр-кт Ленина, д. 36','Золотой Ключик, ООО','4211020645','4 сен','13','','Рестораны','muted-page',0],
['Головая','г. Москва','АН Александр Владимирович, ИП','400400149130','9 ноя','3','','Рестораны','muted-page',0]
].map(([name,address,company,inn,date,visitors,orders,category,kind,regionId],index)=>({name,address,company,inn,date,visitors,orders,category,kind,regionId,network:[0,1,2,12].includes(index),published:!kind.startsWith('muted')}));
