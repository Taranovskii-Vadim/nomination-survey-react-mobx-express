import React from "react";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { setUrlFor } from "../../routes";

import { LockIcon } from "../icons";
import { Button } from "../ui";
import FullPageContainer from "../FullPageContainer";

const AccessDenied = (): JSX.Element => (
  <FullPageContainer>
    <LockIcon size="large" />
    <Text mt="4" mb="4">
      К сожалению на данный момент вы не можете принять участие в опросе
    </Text>
    <NavLink to={setUrlFor("surveys")}>
      <Button label="На главную" />
    </NavLink>
  </FullPageContainer>
);

export default AccessDenied;
