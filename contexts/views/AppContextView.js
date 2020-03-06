import { AppContext } from '../providers/AppProvider';
import { PureComponent } from 'react';

export default class AppContextView extends PureComponent {
  static contextType = AppContext;
  render() {
    return null;
  }
}
