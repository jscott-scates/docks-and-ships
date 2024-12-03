import { dockList } from "./docks.js"
import { haulingShipList } from "./haulers.js"
import { shippingShipsList } from "./shippingShips.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${dockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${haulingShipList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`

mainContainer.innerHTML = applicationHTML