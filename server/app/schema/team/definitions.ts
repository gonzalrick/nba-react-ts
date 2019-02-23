import { gql } from 'apollo-server';

const definitions = gql`

  type Team {
    teamId: ID
    triCode: String
    linescore: [Linescore]!
    loss: Int
    score: Int
    win: Int
  }

  type Linescore {
    score: String
  }
`;

export default () => [definitions];