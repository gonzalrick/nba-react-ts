import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface IProps {
  techs: string[];
}

export default class Header extends React.Component<IProps> {
  render() {
    const techs = this.props.techs.map((tech) => {
      return <ListGroupItem color="info">{tech}</ListGroupItem>
    });

    return (
      <div>
        <ListGroup>{techs}</ListGroup>
      </div>
    );
  }
}