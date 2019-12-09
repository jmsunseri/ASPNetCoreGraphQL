import React, { FC } from "react";
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@fv-components/top-app-bar";
import MaterialIcon from "@fv-components/material-icon";
import Grid, { Cell, Row } from "@fv-components/layout-grid";

interface LayoutProps {
  title: string;
  secondaryTitle: string;
  children?: any;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon="menu" />
            </TopAppBarIcon>
            <TopAppBarTitle>{props.title}</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust>
        <Grid>
          <Row>
            <Cell columns={1}></Cell>
            <Cell columns={10}>{props.children}</Cell>
            <Cell columns={1}></Cell>
          </Row>
        </Grid>
      </TopAppBarFixedAdjust>
    </>
  );
};

export default Layout;
