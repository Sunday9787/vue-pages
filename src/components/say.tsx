import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Say extends Vue {
  @Prop() private readonly msg!: string;

  public render() {
    return <div>{this.msg}</div>;
  }
}
