import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import theme from "../theme";
import rootReducer from "../store/reducers/rootReducer";

import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Header />
          <Container
            component="main"
            maxWidth="lg"
            sx={{ flexGrow: 1, py: { xs: 2, md: 4 } }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Container>
          <Footer />
        </Box>
      </Provider>
    </ThemeProvider>
  );
};

export default Layout;
