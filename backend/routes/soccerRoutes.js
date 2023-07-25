import { addNewPlayer, getPlayer, getPlayerWithID,UpdatePlayers, deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')

    //GET endpoint
    .get(getPlayer)

    //POST endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
    .get(getPlayerWithID)

    .put(UpdatePlayers)

    .delete(deletePlayer);


}

export default routes;