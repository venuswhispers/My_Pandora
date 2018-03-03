import { all } from 'redux-saga/effects'
import rootWeb3Sagas from './web3.saga';
import kernelConstructorSagas from './kernelconstructor.saga';
import rootRouterSagas from './router.saga';

export default function* rootSaga() {
    yield all([
        ...rootRouterSagas,
        ...rootWeb3Sagas,
        ...kernelConstructorSagas
    ]);
}
