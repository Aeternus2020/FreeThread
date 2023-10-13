import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App/App";
import Theme from "./Theme/Theme";

import GlobalStyle from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme>
				<GlobalStyle />
				<App />
			</Theme>
		</Provider>
	</React.StrictMode>,
);
