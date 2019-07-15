import { suite, test } from '@testdeck/mocha';
import assert from 'assert';

@suite
class TestSuite {
  @test
  public someTest() {
    assert.ok(true);
  }
}
