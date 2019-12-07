import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const usePlayers = props => {
  let query = "";
  let variables = { pageSize: +props.pageSize, page: +props.page };
  const client = props.client;

  if (!props.filter || props.filter.length === 0) {
    query = gql`
      query($pageSize: Int, $page: Int) {
        playersList(pageSize: $pageSize, page: $page) {
          players {
            id
            name
            birthDate
            birthPlace
            height
            weightLbs
          }
          totalPages
        }
      }
    `;
  } else {
    query = gql`
      query($playerName: String, $pageSize: Int, $page: Int) {
        playersList: playersListByName(
          playerName: $playerName
          pageSize: $pageSize
          page: $page
        ) {
          players {
            name
            id
            height
            weightLbs
            birthDate
            birthPlace
          }
          totalPages
        }
      }
    `;
    variables["playerName"] = props.filter;
  }

  return useQuery(query, { variables, client });
};

export default usePlayers;
