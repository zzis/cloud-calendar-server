import lineReader from 'line-reader';

export function parser(filePath) {
  return new Promise((resolve, reject) => {
    let currentDate;
    let lineItem;
    const events = [];
    let lineNumber = 0;
    lineReader.eachLine(filePath, (line, isLast) => {
      try {
        lineNumber++;
        const errorMsg = `Log format error in line ${lineNumber}, please check! Line content: '${line}'`;
        // trim line
        const trimedLine = line.replace(/\s/g, '');
        // test if the line is a date
        lineItem = trimedLine.match(/\d{4}-\d{2}-\d{2}/);
        if (lineItem && lineItem.length === 1) {
          currentDate = trimedLine.match(/\d{4}-\d{2}-\d{2}/)[0];
        }
        // if line is a event line
        if (trimedLine.includes('|')) {
          const [timePeriod, category, description] = trimedLine.split('|');
          if (!(timePeriod && category && description)) {
            throw(new Error(errorMsg));
          }
          const [start, end] = timePeriod.match(/\d{2}:\d{2}/g);
          if (!(start && end)) {
            throw(new Error(errorMsg));
          }
          events.push({
            date: currentDate,
            start,
            end,
            category,
            description,
          });
        }
        // handle finish
        if (isLast) {
          resolve({events});
        }
      } catch (error) {
        resolve({error: error.message});
      }
    });
  });
}
