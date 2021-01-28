import React from "react";
import PropTypes from "prop-types";
import { Item } from "semantic-ui-react";
import styled from "styled-components";

const ErrorMessage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: red;
  text-align: center;
`;

const Characters = ({ characters }) => {
  return characters?.results?.length > 0 ? (
    <Item.Group divided>
      {characters.results.map((char) => (
        <Item key={char["id"]}>
          <Item.Image src={char["image"]} alt="" height="35px" width="25px" />
          <Item.Content style={{ fontSize: "1.2em" }}>
            <Item.Header>Character Name: {char["name"]}</Item.Header>
            <Item.Meta className="content">
              Species: {char["species"]}
            </Item.Meta>
            <Item.Meta className="content">Gender: {char["gender"]}</Item.Meta>
            <Item.Meta className="content">Status: {char["status"]}</Item.Meta>
            <Item.Meta className="content">
              Origin: {char["origin"]["name"]}
            </Item.Meta>
            <Item.Meta className="content">
              Created: {char["created"]}
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  ) : (
    <ErrorMessage> No Characters found. </ErrorMessage>
  );
};

Characters.propTypes = {
  characters: PropTypes.object,
};

Characters.defaultProps = {
  characters: {},
};

export default Characters;
