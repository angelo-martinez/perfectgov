const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      opernSidebar: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().setSidebar();
      },
      setSidebar: () => {
        //get the store
        const store = getStore();
        const switcher = !store.opernSidebar;
        
        setStore({ opernSidebar: switcher });
      }
		}
	};
};

export default getState;
