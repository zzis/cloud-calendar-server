import { suite, test } from '@testdeck/mocha';
import path from 'path';
import assert from 'assert';
import 'module-alias/register';

import { parser, IEvent } from '@utils/parser';

@suite
class ParserTest {
  public before() {
    console.log('parser test');
  }

  @test
  public async testParser() {
    const proceedData: any = await parser(path.join(__dirname, './resources/test.txt'));
    assert.ok(proceedData.events);
  }
}
