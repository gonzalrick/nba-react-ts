import { gql } from 'apollo-server';

const definitions = gql`

  type Team {
    teamId: ID
    triCode: String
    linescore: [Int]!
    loss: Int
    score: Int
    win: Int
  }
`;

export default () => [definitions];