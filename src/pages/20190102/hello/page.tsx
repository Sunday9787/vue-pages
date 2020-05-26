import { Vue, Component } from 'vue-property-decorator';
import './page.scss';

@Component
export default class Page extends Vue {
  public form = {
    name: '1',
  };

  public render() {
    return (
      // eslint-disable-next-line no-script-url
      <form action='javascript:;' class='form'>
        <input v-model={this.form.name} />
      </form>
    );
  }
}
