// Define schedule
new Vue({
  el: '#schedule',
  data() {
    return {
      schedule: [
        {
          day: 'Monday',
          subjects: [
            {
              time: '8:00 - 8:45',
              subject: 'Час на класа',
            },
            {
              time: '9:05 - 9:50',
              subject: 'УП-КМ / УП-ЗПУ',
            },
            {
              time: '10:00 - 10:45',
              subject: 'УП-КМ / УП-ЗПУ',
            },
            {
              time: '10:55 - 11:40',
              subject: 'УП-ЗПУ / УП-КМ',
            },
            {
              time: '11:50 - 12:35',
              subject: 'УП-ЗПУ / УП-КМ',
            },
            {
              time: '12:45 - 13:30',
              subject: 'КА',
            },
            {
              time: '13:35 - 14:20',
              subject: 'КМ',
            },
          ],
        },
        {
          day: 'Tuesday',
          subjects: [
            {
              time: '8:00 - 8:45',
              subject: 'Руски език',
            },
            {
              time: '9:05 - 9:50',
              subject: 'Гр. Образование',
            },
            {
              time: '10:00 - 10:45',
              subject: 'Български език',
            },
            {
              time: '10:55 - 11:40',
              subject: 'Български език',
            },
            {
              time: '11:50 - 12:35',
              subject: 'ЗПУ',
            },
            {
              time: '12:50 - 13:30',
              subject: 'КМ',
            },
            {
              time: '13:35 - 14:20',
              subject: '30 мин почивка / СВОБОДЕН',
            },
            {
              time: '2 часа',
              subject: 'УП-КА / СВОБОДЕН',
            },
          ],
        },
        {
          day: 'Wednesday',
          subjects: [
            {
              time: '8:00 - 8:45',
              subject: 'Физическо',
            },
            {
              time: '9:05 - 9:50',
              subject: 'Руски език',
            },
            {
              time: '10:00 - 10:45',
              subject: 'Математика',
            },
            {
              time: '10:55 - 11:40',
              subject: 'КА',
            },
            {
              time: '11:50 - 12:35',
              subject: 'Английски',
            },
            {
              time: '12:50 - 13:30',
              subject: 'СВОБОДЕН / УП-КА',
            },
            {
              time: '13:35 - 14:20',
              subject: 'СВОБОДЕН / УП-КА',
            },
          ],
        },
        {
          day: 'Thursday',
          subjects: [
            {
              time: '8:00 - 8:45',
              subject: 'Английски',
            },
            {
              time: '9:05 - 9:50',
              subject: 'ЗПУ',
            },
            {
              time: '10:00 - 10:45',
              subject: 'Математика',
            },
            {
              time: '10:55 - 11:40',
              subject: 'УП-ОС / УП-Ка',
            },
            {
              time: '11:50 - 12:35',
              subject: 'УП-ОС / УП-Ка',
            },
            {
              time: '12:50 - 13:30',
              subject: 'УП-КА / УП-ОС',
            },
            {
              time: '13:35 - 14:20',
              subject: 'УП-КА / УП-ОС',
            },
          ],
        },
        {
          day: 'Friday',
          subjects: [
            {
              time: '8:00 - 8:45',
              subject: 'ППП / УП-Схем.',
            },
            {
              time: '9:05 - 9:50',
              subject: 'ППП / УП-Схем.',
            },
            {
              time: '10:00 - 10:45',
              subject: 'УП-Схем. / ППП',
            },
            {
              time: '10:55 - 11:40',
              subject: 'УП-Схем. / ППП',
            },
            {
              time: '11:50 - 12:35',
              subject: 'Български език',
            },
            {
              time: '12:50 - 13:30',
              subject: 'Физическо',
            },
          ],
        },
      ],
    };
  },
  created: function () {
    fetch('./schedule.json')
      .then((response) => response.json())
      .then((data) => {
        this.schedule = data.schedule;
      });
  },
});
