import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import { getUrlFor } from "../routes";

const General = lazy(() => import("./General"));

const ProtectedPages = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      {/* TODO move to level below */}
      <Container as="main" maxWidth="container.md">
        <Switch>
          <Route path={getUrlFor("surveys")} component={General} />
          <Route path={getUrlFor("surveys", "surveyId")} />
        </Switch>
      </Container>
      {/* <footer></footer> */}
    </Suspense>
  );
};

export default ProtectedPages;