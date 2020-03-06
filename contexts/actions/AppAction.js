import AppProvider from "../providers/AppProvider";

const AppAction = {
  getUsers: async () => {
    let data = await fetch("xxxx");
    // Todo....
    AppProvider.instance.setState({ userList: data });
  },

  getPosts: async () => {
    let data = await fetch("xxxx");
    // Todo....
    AppProvider.instance.setState({ postList: data });
  }
};

export default AppAction;
