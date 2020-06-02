// Add this within the calendar list, you can change the period to be for the entire year, etc.
              markedDates2={{
                '2020-12-20': {
                  periods: [
                    {startingDay: false, endingDay: true, color: 'transparent'},
                    {startingDay: true, endingDay: false, color: '#d3d3d3'}
                  ]
                },
                '2020-12-21': {
                  periods: [
                    {startingDay: true, endingDay: false, color: 'transparent'},
                    {startingDay: false, endingDay: false, color: '#d3d3d3'}
                  ]
                },
              }}
              markingType={'multi-period'}
