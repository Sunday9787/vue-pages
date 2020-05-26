import { Vue, Component } from 'vue-property-decorator';
import './page.scss';

@Component
export default class Page extends Vue {
  public render() {
    return (
      // eslint-disable-next-line no-script-url
      <h1>Hi</h1>
    );
  }
}
