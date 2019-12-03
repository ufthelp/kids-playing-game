import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | color-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('kawal it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{color-picker}}`);

    // assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    // await render(hbs`
    //   {{#color-picker}}
    //     template block text
    //   {{/color-picker}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
    
    assert.equal(this.$('.shadow-md .bg-red').length, 10, 'Color picker should have 10 colors');

  });
});
