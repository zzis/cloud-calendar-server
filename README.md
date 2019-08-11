# Project

[Git] https://github.com/zzis/cloud-calendar-web  https://github.com/zzis/cloud-calendar-server   
[Project] https://dev.azure.com/z-org/Cloud%20Calendar
MS team service: 16081@officeent.top


## Introduction
CloudCalendar server project.

## Development
>$ yarn   
>$ npm run start

## Test
Run test
>$ npm test

Test a single file, you should modify the npm script to change the file to test
>$ npm run test-single

Test a single case
>$ mocha tests/**/*test.ts --require ts-node/register --grep createEventTest