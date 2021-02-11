import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import spinner from "../../assets/5.gif";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #b3895f;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function PokemonCard({ name, url }) {
  const [imageLoad, setImageLoad] = React.useState(true);
  const [toManyRequests, setToManyRequests] = React.useState(false);
  const pokIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokIndex}.png?raw=true`;
  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <StyledLink to={`pokemon/${pokIndex}`}>
        <Card className="card">
          <h5 className="card-header" style={{ backgroundColor: "#78522b" }}>
            {pokIndex}
          </h5>
          {imageLoad ? (
            <img
              src={spinner}
              style={{ width: "5em", height: "5em" }}
              className="card-img-top rounded mx-auto d-block mt-2"
              alt="loading spinner"
            />
          ) : null}
          <Sprite
            className="card-img-top rounder mx-auto mt-2"
            src={imageUrl}
            onLoad={() => setImageLoad(false)}
            onError={() => setToManyRequests(true)}
            style={
              toManyRequests
                ? { display: "none" }
                : imageLoad
                ? null
                : { display: "block" }
            }
          />

          {toManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">To many Requests</span>
            </h6>
          ) : null}
          <div className="card-body mx-auto">
            <h6 className="card-title mx-auto">
              {name
                .toLowerCase()
                .split(" ")
                .map(
                  (letter) =>
                    letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(" ")}
            </h6>
          </div>
        </Card>
      </StyledLink>
    </div>
  );
}
