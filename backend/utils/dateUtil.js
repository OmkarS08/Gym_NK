const { addMonths, parseISO, format } = require('date-fns');

function calculateEndDate(startDate, numberOfMonths) {
    // Parse the start date if it's in string format
    const parsedStartDate = parseISO(startDate);
    
    // Add the number of months to the start date
    const endDate = addMonths(parsedStartDate, numberOfMonths);
    
    // Format the end date as a string (optional, adjust format as needed)
    return format(endDate, 'yyyy-MM-dd');
  }

  module.exports = calculateEndDate