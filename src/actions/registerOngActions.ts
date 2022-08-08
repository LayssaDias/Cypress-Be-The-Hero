import {registerOngTarget} from '../targets'

function CreateOng() {
    registerOngTarget.imgBeTheHero().should('be.visible')
}
export default {CreateOng}

