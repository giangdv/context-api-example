
import { NavigationActions } from 'react-navigation';

let navigator;

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}
export default {
  navigate
};
