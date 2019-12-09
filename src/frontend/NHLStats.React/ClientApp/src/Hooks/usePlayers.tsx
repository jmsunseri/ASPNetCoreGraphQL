import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  gql,
  ApolloClient,
  DocumentNode,
  ApolloError,
  ExecutionResult
} from "apollo-boost";
import { Player } from "../Models/Player";

type UsePlayerHook = (props: UsePlayerHookProps) => UsePlayerHookResult;

interface Response {
  playersList: PlayerList;
}

interface PlayerList {
  players: Player[];
  totalPages: number;
}

interface UsePlayerHookProps {
  filter: string;
  pageSize: number;
  page: number;
  client: ApolloClient<any>;
}

interface UsePlayerHookResult {
  loading: boolean;
  error: ApolloError | undefined;
  players: Player[] | undefined;
  totalPages: number;
  deletePlayer: (id: number) => void;
  addPlayer: (player: Player) => Promise<ExecutionResult<Player>>;
}

const usePlayers: UsePlayerHook = (props: UsePlayerHookProps) => {
  let query: DocumentNode;

  let variables = {
    pageSize: +props.pageSize,
    page: +props.page,
    playerName: ""
  };
  const client = props.client;

  const DELETE_PLAYER = gql`
    mutation PlayerMutation($id: Int!) {
      deletePlayer(id: $id)
    }
  `;

  const ADD_PLAYER = gql`
    mutation PlayerMutation($player: PlayerInput!) {
      createPlayer(player: $player) {
        name
        id
        height
        weightLbs
        birthDate
        birthPlace
      }
    }
  `;

  const GET_PLAYERS_WITH_FILTER = gql`
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

  const GET_PLAYERS = gql`
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

  const [plusPlayer, addResult] = useMutation<Player>(ADD_PLAYER, {
    client: props.client,
    update: (cache, { data: newPlayer }) => {
      const data = cache.readQuery<Response>({ query, variables });
      if (data && newPlayer) {
        data.playersList.players = data.playersList.players.concat(
          (newPlayer as any).createPlayer
        );
        cache.writeQuery({
          query,
          variables,
          data
        });
      }
    }
  });

  if (!props.filter || props.filter.length === 0) {
    query = GET_PLAYERS;
  } else {
    query = GET_PLAYERS_WITH_FILTER;
    variables.playerName = props.filter;
  }

  const [delPlayer, deleteResult] = useMutation<{ deletePlayer: number }>(
    DELETE_PLAYER,
    {
      client: props.client,
      update: (cache, { data: delPlayer }) => {
        const data = cache.readQuery<Response>({ query, variables });
        if (data) {
          data.playersList.players = data.playersList.players.filter(
            (x: Player) => x.id !== (delPlayer ? delPlayer.deletePlayer : null)
          );
          data.playersList.totalPages =
            data.playersList.players.length === 0
              ? data.playersList.totalPages - 1
              : data.playersList.totalPages;
          cache.writeQuery({
            query,
            variables,
            data
          });
        }
      }
    }
  );

  const { loading, error, data } = useQuery<Response>(query, {
    variables,
    client
  });

  const deletePlayer = (id: number) => {
    delPlayer({ variables: { id } });
  };

  const addPlayer = (player: Player) => {
    return plusPlayer({ variables: { player } });
  };

  console.log("usePlayer hook complete");

  return {
    loading,
    error,
    players: data ? data.playersList.players : undefined,
    totalPages: data ? data.playersList.totalPages : 0,
    deletePlayer,
    addPlayer
  };
};

export default usePlayers;
