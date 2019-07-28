import { suite, test } from '@testdeck/mocha';
import assert from 'assert';

@suite
class TestSuite {
  public before() {
    console.log('before test');
  }

  @test
  public someTest() {
    assert.ok(true);
  }
}
