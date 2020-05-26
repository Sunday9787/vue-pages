import { Vue, Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

import Say from '@/components/say';

import './page.scss';

@Component
export default class App extends Vue {
  public form = {
    name: '',
  };

  public render() {
    return (
      <div>
        hello
        {this.form.name}
        <input
          v-model={this.form.name}
          onInput={(val: string) => {
            console.log(val);
          }}
          class='form-input'
        />
        <Say msg='123' />
        <HelloWorld msg={this.form.name} />
      </div>
    );
  }
}
